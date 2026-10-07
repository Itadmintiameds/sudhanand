'use client';

import { AnimatePresence, m } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/**
 * Route changes: a progress bar from the moment a link is clicked (so a slow
 * route — compiling in dev, a cold fetch in prod — never feels like a dead
 * click), then a short fade on the new page. No full-screen curtain: the new
 * page is already rendered, so covering it only adds waiting.
 */
export default function PageTransition({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // Compare against the last path rather than a "first render" flag: StrictMode
  // runs effects twice in dev, which made the flag misfire on first paint.
  const prevPath = useRef<string | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    prevPath.current = pathname;
    setPending(false);
  }, [pathname]);

  // Capture phase: Next's <Link> calls preventDefault in its own handler, so
  // by the bubble phase every internal click looks "handled".
  useEffect(() => {
    let safety = 0;
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a?.href || a.target === '_blank' || a.hasAttribute('download')) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      setPending(true);
      window.clearTimeout(safety);
      safety = window.setTimeout(() => setPending(false), 10000);
    };
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      window.clearTimeout(safety);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {pending && (
          <m.div
            key="route-progress"
            aria-hidden
            className="fixed top-0 inset-x-0 z-[9999] h-[3px] bg-red origin-left pointer-events-none"
            initial={{ scaleX: 0, opacity: 0 }}
            // Held back a beat so near-instant navigations don't flash it
            animate={{
              scaleX: 0.85,
              opacity: 1,
              transition: {
                scaleX: { duration: 5, ease: [0.1, 0.7, 0.2, 1] },
                opacity: { duration: 0.15, delay: 0.12 },
              },
            }}
            exit={{ scaleX: 1, opacity: 0, transition: { duration: 0.3 } }}
          />
        )}
      </AnimatePresence>

      <m.div
        key={pathname}
        // No entrance on first paint: an `initial` here is baked into the
        // static HTML as opacity:0, hiding the whole page until hydration.
        initial={prevPath.current === null ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </m.div>
    </>
  );
}
