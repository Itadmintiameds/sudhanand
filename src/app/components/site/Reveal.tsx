'use client';

import {
  m,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Whether the visitor asked for reduced motion — false on the first render,
 * then the real answer once mounted.
 *
 * Framer's own useReducedMotion reads the media query immediately on the
 * client, so a reduced-motion visitor's first render disagrees with the
 * server's HTML. That broke hydration, and ScrollHighlight's useScroll then
 * threw "Target ref is defined but not hydrated" — the whole page died with
 * "Application error" for anyone with the OS setting on.
 */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);
  return reduced;
}
// Fire as soon as a block touches the viewport. A negative margin here left
// blank panels on screen during a fast scroll, which read as the page stalling.
const VIEWPORT = { once: true, margin: '0px 0px -6% 0px' } as const;

/* ------------------------------------------------------------------ Reveal */

/** Masked slide-up for any block. The clip edge is what sells it. */
export function Reveal({
  children,
  delay = 0,
  className = '',
  distance = 24,
}: Readonly<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
}>) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <div className={`reveal-mask ${className}`}>
      <m.div
        // h-full so cards inside a grid cell can stretch to the row's height
        className="h-full"
        initial={{ y: distance, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.55, ease: EASE, delay }}
      >
        {children}
      </m.div>
    </div>
  );
}

/* -------------------------------------------------------------- SplitWords */

type Token = { key: string; text: string; accent: boolean };

/**
 * Splits on whitespace and wraps each word in its own clipping mask so the
 * line reads as it rises. Mark accent words with asterisks:
 *   <SplitWords text="Built on *trust*" />
 */
function tokenize(text: string): Token[] {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((word, i) => {
      const accent = word.startsWith('*') && word.endsWith('*') && word.length > 2;
      // Words can repeat, so the position is part of the key
      return {
        key: `${i}-${word}`,
        text: accent ? word.slice(1, -1) : word.replaceAll('*', ''),
        accent,
      };
    });
}

export function SplitWords({
  text,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  stagger = 0.02,
}: Readonly<{
  text: string;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
}>) {
  const reduced = usePrefersReducedMotion();
  const tokens = tokenize(text);

  if (reduced) {
    return (
      <Tag className={className}>
        {tokens.map((t) => (
          <React.Fragment key={t.key}>
            {t.accent ? <span className="accent-word">{t.text}</span> : t.text}{' '}
          </React.Fragment>
        ))}
      </Tag>
    );
  }

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  const word: Variants = {
    hidden: { y: '108%' },
    show: { y: '0%', transition: { duration: 0.55, ease: EASE } },
  };

  return (
    <m.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      <Tag className={className}>
        {tokens.map((t) => (
          <React.Fragment key={t.key}>
            <span
              className="reveal-mask"
              style={{
                display: 'inline-block',
                verticalAlign: 'top',
                // keep descenders from being clipped by the mask
                paddingBottom: '0.16em',
                marginBottom: '-0.16em',
              }}
            >
              <m.span
                variants={word}
                style={{ display: 'inline-block', willChange: 'transform' }}
                className={t.accent ? 'accent-word' : undefined}
              >
                {t.text}
              </m.span>
            </span>{' '}
          </React.Fragment>
        ))}
      </Tag>
    </m.div>
  );
}

/* --------------------------------------------------------- ScrollHighlight */

function HighlightWord({
  word,
  range,
  progress,
  reduced,
}: Readonly<{
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  reduced: boolean;
}>) {
  // Floor of 0.5 keeps the unread words legible (≥3:1 on the deep-blue panel)
  // rather than a ghost
  const opacity = useTransform(progress, range, [0.5, 1]);
  // Reduced motion: every word fully lit from the start, no scroll-driven fade
  return (
    <m.span style={{ opacity: reduced ? 1 : opacity }} className="inline-block">
      {word}
    </m.span>
  );
}

/**
 * Long statement that fills in word by word as it scrolls through the
 * viewport — the signature move on the reference site.
 */
export function ScrollHighlight({
  text,
  className = '',
}: Readonly<{
  text: string;
  className?: string;
}>) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    // Finishes while the block is still well inside the viewport
    offset: ['start 0.9', 'end 0.65'],
  });

  const words = text.split(/\s+/).filter(Boolean);

  // One structure whether or not motion is reduced: the <p> (and its ref) must
  // always be there for useScroll, so reduced motion only changes the opacity.
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <React.Fragment key={`${word}-${i}`}>
            <HighlightWord
              word={word}
              range={[start, end]}
              progress={scrollYProgress}
              reduced={reduced}
            />{' '}
          </React.Fragment>
        );
      })}
    </p>
  );
}

/* --------------------------------------------------------------- FadeIn --- */

export function FadeIn({
  children,
  delay = 0,
  className = '',
  y = 16,
}: Readonly<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}>) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
}

/* --------------------------------------------------------------- Stagger -- */

export function Stagger({
  children,
  className = '',
  stagger = 0.06,
  delay = 0,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}>) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  const reduced = usePrefersReducedMotion();
  return (
    <m.div
      className={className}
      variants={
        reduced
          ? { hidden: {}, show: {} }
          : {
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }
      }
    >
      {children}
    </m.div>
  );
}
