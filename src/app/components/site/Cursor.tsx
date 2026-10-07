'use client';

import { useEffect, useRef } from 'react';

const HOVER_SELECTOR =
  'a, button, input, textarea, select, label, [role="button"], [data-cursor="hover"]';

/**
 * Two-layer cursor: an accent dot that tracks the pointer exactly, and a ring
 * that lags behind it and swells over anything interactive.
 * Only mounts for fine pointers — touch devices keep native behaviour.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduced.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    // target = true pointer position, ring position eases toward it
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let rx = tx;
    let ry = ty;
    let scale = 1;
    let targetScale = 1;
    let shown = false;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!shown) {
        shown = true;
        rx = tx;
        ry = ty;
        dot.classList.add('is-ready');
        ring.classList.add('is-ready');
      }
    };

    const onOver = (e: PointerEvent) => {
      const hit = (e.target as Element | null)?.closest?.(HOVER_SELECTOR);
      targetScale = hit ? 2.1 : 1;
      ring.classList.toggle('is-hovering', Boolean(hit));
    };

    const onLeave = () => {
      shown = false;
      dot.classList.remove('is-ready');
      ring.classList.remove('is-ready');
    };

    const onDown = () => (targetScale *= 0.72);
    const onUp = () => (targetScale = ring.classList.contains('is-hovering') ? 2.1 : 1);

    const render = () => {
      // 0.15 easing — same lag factor the reference site uses
      rx += (tx - rx) * 0.15;
      ry += (ty - ry) * 0.15;
      scale += (targetScale - scale) * 0.15;

      dot.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) scale(${scale})`;

      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerleave', onLeave);
      root.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-el cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-el cursor-dot" aria-hidden />
    </>
  );
}
