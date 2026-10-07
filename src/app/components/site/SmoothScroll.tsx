'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Module-scoped handle so any component (modals, nav) can pause/resume
 * momentum scrolling without threading a context through the tree.
 */
let lenis: Lenis | null = null;

export const getLenis = () => lenis;

export const lockScroll = () => {
  lenis?.stop();
  document.body.classList.add('is-locked');
};

export const unlockScroll = () => {
  lenis?.start();
  document.body.classList.remove('is-locked');
};

export const scrollToTop = (immediate = true) =>
  lenis?.scrollTo(0, { immediate });

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    lenis = new Lenis({
      // 0.09 trailed the wheel by ~half a second, which reads as "stuck"
      lerp: 0.12,
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis?.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // Next's App Router restores scroll itself, but Lenis holds its own
  // position — reset both on navigation so pages don't open mid-way down.
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
