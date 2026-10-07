'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { navLinks } from '../Header';

const VENTURES = [
  'healthcare',
  'technology',
  'hospitality',
  'sports-infrastructure',
  'real-estate',
  'charitable-trust',
];

const ROUTES = [
  ...navLinks.map((l) => l.href),
  ...VENTURES.map((v) => `/ventures/${v}`),
];

type Connection = { saveData?: boolean; effectiveType?: string };

/**
 * Warms every route once the first page has settled, so any click is served
 * from the router cache. <Link> only prefetches links that scroll into view,
 * and the mobile menu's links don't exist until it opens. In `next dev` this
 * also compiles each route in the background (Link prefetch is off in dev,
 * router.prefetch is not).
 */
export default function RoutePrefetch() {
  const router = useRouter();

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: Connection }).connection;
    if (conn?.saveData || /(^|-)2g$/.test(conn?.effectiveType ?? '')) return;

    // Safari has no requestIdleCallback
    const hasIdle = typeof window.requestIdleCallback === 'function';
    const idle = (cb: () => void) =>
      hasIdle ? window.requestIdleCallback(cb, { timeout: 3000 }) : window.setTimeout(cb, 300);
    const cancel = (id: number) =>
      hasIdle ? window.cancelIdleCallback(id) : window.clearTimeout(id);

    // One route per idle slot, starting after the page's own work is done
    let i = 0;
    let handle = 0;
    const step = () => {
      if (i >= ROUTES.length) return;
      const href = ROUTES[i++];
      if (href !== window.location.pathname) router.prefetch(href);
      handle = idle(step);
    };
    const start = window.setTimeout(() => (handle = idle(step)), 1500);

    return () => {
      window.clearTimeout(start);
      cancel(handle);
    };
  }, [router]);

  return null;
}
