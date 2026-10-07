'use client';

import { AnimatePresence, m } from 'framer-motion';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const DURATION = 900;
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

// Layout effect on the client, plain effect during SSR (where it never runs).
const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Preloader({ onDone }: { onDone: () => void }) {
  // Must start `true` on both server and client — reading sessionStorage in the
  // initialiser makes the first client render disagree with the SSR output and
  // React throws the whole tree away, restarting every entrance animation.
  const [active, setActive] = useState(true);
  const [progress, setProgress] = useState(0);
  const done = useRef(false);
  const skipped = useRef(false);

  const finish = () => {
    if (done.current) return;
    done.current = true;
    sessionStorage.setItem('sg-preloaded', '1');
    onDone();
  };

  // Runs before paint, so a repeat visit drops the curtain without a flash
  useIsoLayoutEffect(() => {
    if (sessionStorage.getItem('sg-preloaded') === '1') {
      skipped.current = true;
      setActive(false);
      document.body.classList.remove('is-locked');
      finish();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (skipped.current) return;

    document.body.classList.add('is-locked');

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      setProgress(Math.round(easeOutExpo(t) * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
      else window.setTimeout(() => setActive(false), 120);
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleExitComplete = () => {
    document.body.classList.remove('is-locked');
    finish();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {active && (
        <m.div
          // `preloader` lets the inline script in layout.tsx hide the curtain
          // on repeat visits before any JS has loaded (see globals.css).
          className="preloader on-ink fixed inset-0 z-[9990] bg-ink flex flex-col items-center justify-center pointer-events-none overflow-hidden"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <m.div
            className="w-full"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            {/* The wordmark fills the screen exactly as it does on the hero */}
            <div className="@container px-4">
              <div className="t-huge t-huge--fit text-paper text-center whitespace-nowrap">
                Sudhanand
              </div>
            </div>

            <div className="shell mt-10 flex items-center gap-5">
              <div className="relative h-[3px] flex-1 bg-paper/20">
                <div
                  className="absolute inset-y-0 left-0 bg-red"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="t-h6 text-paper tabular-nums">
                {String(progress).padStart(3, '0')}
              </span>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
