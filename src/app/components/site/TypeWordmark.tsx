'use client';

import { m } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { WORDMARK_FONTS, type WordmarkFont } from './wordmarkFonts';

const TEXT = 'Sudhanand Group';

// Per-keystroke delay is jittered ±35% so it reads as typing, not a ticker
const TYPE_MS = 95;
const ERASE_MS = 36;
const HOLD_MS = 2300;
const GAP_MS = 380;

const jitter = (ms: number) => ms * (0.65 + Math.random() * 0.7);

/** Resolves true once the face is ready; false if it can't be had in time. */
const fontReady = (f: WordmarkFont) => {
  if (!f.external) return Promise.resolve(true);
  const load = document.fonts
    .load(`${f.weight} 1em ${f.family}`, TEXT)
    .then((faces) => faces.length > 0)
    .catch(() => false);
  const timeout = new Promise<boolean>((r) => window.setTimeout(() => r(false), 3000));
  return Promise.race([load, timeout]);
};

/**
 * The hero wordmark: types "Sudhanand Group", holds, backspaces, then types it
 * again in the next typeface — a calligraphy hand, a typewriter face, a serif…
 *
 * Server HTML (and reduced-motion users) get the full name, static, in the
 * brand face. The animation only runs while the wordmark is on screen and the
 * tab is visible.
 */
export default function TypeWordmark({ ready }: { ready: boolean }) {
  const [fontIdx, setFontIdx] = useState(0);
  const [len, setLen] = useState(TEXT.length);
  const [typing, setTyping] = useState(false);
  const [motion, setMotion] = useState(true);
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);

  const boxRef = useRef<HTMLSpanElement>(null);
  const fontRef = useRef(0);
  const failed = useRef(new Set<number>());

  // Reduced motion keeps the static name. Otherwise empty it before the fade-in.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMotion(!mq.matches);
    if (!mq.matches) setLen(0);
  }, []);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting));
    io.observe(el);
    const onVis = () => setTabVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  const active = ready && motion && inView && tabVisible;

  useEffect(() => {
    if (!active) return;
    let alive = true;
    const timers = new Set<number>();
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = window.setTimeout(() => {
          timers.delete(id);
          resolve();
        }, ms);
        timers.add(id);
      });

    const next = (from: number) => {
      for (let step = 1; step <= WORDMARK_FONTS.length; step++) {
        const i = (from + step) % WORDMARK_FONTS.length;
        if (!failed.current.has(i)) return i;
      }
      return 0;
    };

    (async () => {
      setLen(0);
      let idx = fontRef.current;

      while (alive) {
        // Don't start typing in a face that hasn't arrived — it would swap
        // mid-word. A face that never loads is dropped from the rotation.
        if (!(await fontReady(WORDMARK_FONTS[idx]))) {
          failed.current.add(idx);
          idx = next(idx);
          continue;
        }
        if (!alive) return;

        fontRef.current = idx;
        setFontIdx(idx);
        setTyping(true);
        for (let i = 1; i <= TEXT.length; i++) {
          await wait(i === 1 ? 140 : jitter(TYPE_MS));
          if (!alive) return;
          setLen(i);
        }
        setTyping(false);

        // Fetch the next face while this one is on show
        void fontReady(WORDMARK_FONTS[next(idx)]);
        await wait(HOLD_MS);
        if (!alive) return;

        setTyping(true);
        for (let i = TEXT.length - 1; i >= 0; i--) {
          await wait(ERASE_MS);
          if (!alive) return;
          setLen(i);
        }
        await wait(GAP_MS);
        idx = next(idx);
      }
    })();

    return () => {
      alive = false;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [active]);

  const f = WORDMARK_FONTS[fontIdx];

  return (
    <m.span
      ref={boxRef}
      className="block text-paper"
      initial={{ opacity: 0 }}
      animate={{ opacity: ready ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <span className="visually-hidden">{TEXT}</span>
      <span
        aria-hidden
        className="wm"
        style={
          {
            fontFamily: f.family,
            fontWeight: f.weight,
            letterSpacing: `${f.tracking}em`,
            wordSpacing: `${f.space}em`,
            '--wm-fs-md': `${f.md}cqi`,
            '--wm-fs-sm': `${f.sm}cqi`,
          } as React.CSSProperties
        }
      >
        {TEXT.slice(0, len)}
        {motion && <span className={`wm-caret${typing ? ' is-typing' : ''}`} />}
      </span>
    </m.span>
  );
}
