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

// Cosmetic only. crypto is used rather than Math.random so static analysis
// doesn't flag a non-cryptographic PRNG.
const jitter = (ms: number) => {
  const [r] = crypto.getRandomValues(new Uint32Array(1));
  return ms * (0.65 + (r / 2 ** 32) * 0.7);
};

/** The next typeface after `from` that hasn't failed to load. */
const nextFont = (from: number, failed: ReadonlySet<number>) => {
  for (let step = 1; step <= WORDMARK_FONTS.length; step++) {
    const i = (from + step) % WORDMARK_FONTS.length;
    if (!failed.has(i)) return i;
  }
  return 0;
};

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
export default function TypeWordmark({ ready }: Readonly<{ ready: boolean }>) {
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

    // Every wait below is one of these timers, and cleanup clears them all — so
    // once `alive` is false nothing that awaits one can resume.
    const after = (ms: number, fn: () => void) => {
      const id = window.setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
    };
    const wait = (ms: number) => new Promise<void>((resolve) => after(ms, resolve));

    /** Steps the visible length through `lengths`, `delayFor(step)` ms apart. */
    const play = (lengths: number[], delayFor: (step: number) => number) =>
      new Promise<void>((resolve) => {
        let at = 0;
        lengths.forEach((n, step) => {
          at += delayFor(step);
          after(at, () => setLen(n));
        });
        after(at, resolve);
      });

    const typeIn = async () => {
      setTyping(true);
      const lengths = Array.from({ length: TEXT.length }, (_, i) => i + 1);
      await play(lengths, (step) => (step === 0 ? 140 : jitter(TYPE_MS)));
      setTyping(false);
    };

    const eraseOut = async () => {
      setTyping(true);
      const lengths = Array.from({ length: TEXT.length }, (_, i) => TEXT.length - 1 - i);
      await play(lengths, () => ERASE_MS);
    };

    /** One full pass in a single typeface, then hands over to the next face. */
    const cycle = async (idx: number) => {
      // Don't start typing in a face that hasn't arrived — it would swap
      // mid-word. A face that never loads is dropped from the rotation.
      const ready = await fontReady(WORDMARK_FONTS[idx]);
      if (!alive) return;
      if (!ready) {
        failed.current.add(idx);
        start(nextFont(idx, failed.current));
        return;
      }

      fontRef.current = idx;
      setFontIdx(idx);
      await typeIn();

      // Fetch the next face while this one is on show
      fontReady(WORDMARK_FONTS[nextFont(idx, failed.current)]).catch(console.error);
      await wait(HOLD_MS);
      await eraseOut();
      await wait(GAP_MS);

      start(nextFont(idx, failed.current));
    };

    // Not awaited: each pass hands over rather than nesting inside the last
    const start = (idx: number) => {
      cycle(idx).catch(console.error);
    };

    setLen(0);
    start(fontRef.current);

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
