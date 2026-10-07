'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// Indian shorthand plus K / M. Each expands to its full figure.
const UNITS: Record<string, number> = {
  K: 1e3,
  L: 1e5, // lakh
  M: 1e6,
  Cr: 1e7, // crore
};

const parse = (value: string) => {
  const m = value.trim().match(/^([\d.]+)\s*(Cr|[KLM])?(.*)$/);
  if (!m) return { target: 0, tail: value };
  const [, num, unit, tail] = m;
  return { target: Math.round(parseFloat(num) * (unit ? UNITS[unit] : 1)), tail };
};

// en-IN groups the Indian way: 1,00,000 / 10,00,000 / 1,00,00,000
const group = (n: number) => n.toLocaleString('en-IN');

/**
 * A stat spelled out in full: "10L+" → "10,00,000+", "19K+" → "19,000+";
 * "120%" and "18+" are unchanged. This is what the counter shows while it
 * runs, so it is also the widest the figure ever gets — exported so a layout
 * can size for it before anything has counted.
 */
export const expandStat = (value: string) => {
  const { target, tail } = parse(value);
  return group(target) + tail;
};

/**
 * Counts up to a value once it scrolls into view. Abbreviated figures count
 * through every full number — "10L+" runs 1,65,655 … 9,99,999 — and then
 * settle on the short label as written, so it ends as "10L+".
 */
export default function CountUp({
  value,
  duration,
  className = '',
  style,
}: {
  value: string;
  /** ms; defaults to longer for big figures so the digits stay readable */
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  const { target, tail } = parse(value);
  const [display, setDisplay] = useState(`0${tail}`);

  const ms = duration ?? (target >= 1000 ? 2400 : 1800);

  const run = useCallback(() => {
    if (started.current) return;
    started.current = true;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }

    const t0 = performance.now();
    const tick = (now: number) => {
      // rAF's timestamp is the frame's start, which can precede t0 on the
      // first tick — unclamped, that briefly showed a negative figure.
      const p = Math.min(Math.max((now - t0) / ms, 0), 1);
      if (p < 1) {
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(group(Math.floor(eased * target)) + tail);
        requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };
    requestAnimationFrame(tick);
  }, [ms, tail, target, value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [run]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`} style={style}>
      {display}
    </span>
  );
}
