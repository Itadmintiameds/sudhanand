'use client';

import { AnimatePresence, m } from 'framer-motion';
import Image from '@/app/components/site/Img';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CONTACT } from './contact';
import { lockScroll, unlockScroll } from './SmoothScroll';

/* --------------------------------------------------------------- context -- */

type EnquiryCtx = { open: () => void; close: () => void; isOpen: boolean };

const Ctx = createContext<EnquiryCtx>({
  open: () => {},
  close: () => {},
  isOpen: false,
});

/** Opens the contact window (every "Contact us" button on the site). */
export const useEnquiry = () => useContext(Ctx);

export function EnquiryProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) lockScroll();
    else unlockScroll();
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <ContactModal isOpen={isOpen} close={close} />
    </Ctx.Provider>
  );
}

/* ----------------------------------------------------------------- modal -- */

const EASE = [0.16, 1, 0.3, 1] as const;

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M7 17L17 7M17 7H8M17 7v9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const rowClass =
  'group flex items-start justify-between gap-6 py-5 transition-colors duration-300';

function ContactModal({ isOpen, close }: Readonly<{ isOpen: boolean; close: () => void }>) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Focus moves into the window on open and back to the trigger on close
  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus({ preventScroll: true });
    return () => opener?.focus({ preventScroll: true });
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="fixed inset-0 z-[9970] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
        >
          <button
            type="button"
            tabIndex={-1}
            aria-hidden
            onClick={close}
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm on-ink !cursor-[inherit]"
          />

          <m.div
            className="relative w-full max-w-4xl max-h-[92svh] overflow-y-auto bg-paper rounded-[1.75rem] md:rounded-[2.5rem]"
            data-lenis-prevent
            initial={{ y: 40, scale: 0.97, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-sky text-ink flex items-center justify-center transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>

            <div className="grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="relative hidden md:block m-3 rounded-[1.75rem] overflow-hidden bg-sky">
                <Image
                  src="/recep.png"
                  alt=""
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-10 md:py-12 md:pr-12 md:pl-8">
                <p className="t-h6 t-h6--rule text-slate">Sudhanand Group</p>
                <h2 id="contact-title" className="t-h3 mt-3 pr-14">
                  Contact us
                </h2>
                <p className="t-lead text-slate mt-3 max-w-md">
                  For enquiries about our ventures, partnerships or careers,
                  please reach us using the details below.
                </p>

                <div className="mt-8 flex flex-col divide-y divide-ink/15 border-y border-ink/15">
                  <a href={CONTACT.phoneHref} className={rowClass}>
                    <span>
                      <span className="block t-h6 text-slate">Phone</span>
                      <span className="block t-h4 mt-1 transition-colors duration-300 group-hover:text-red">
                        {CONTACT.phone}
                      </span>
                    </span>
                    <span className="mt-1 text-slate transition-colors duration-300 group-hover:text-red">
                      <ArrowIcon />
                    </span>
                  </a>

                  <a href={CONTACT.emailHref} className={rowClass}>
                    <span className="min-w-0">
                      <span className="block t-h6 text-slate">Email</span>
                      <span className="block t-h4 mt-1 break-words transition-colors duration-300 group-hover:text-red">
                        {CONTACT.email}
                      </span>
                    </span>
                    <span className="mt-1 text-slate transition-colors duration-300 group-hover:text-red">
                      <ArrowIcon />
                    </span>
                  </a>

                  <a
                    href={CONTACT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={rowClass}
                  >
                    <span>
                      <span className="block t-h6 text-slate">Address</span>
                      <span className="block t-h5 mt-1 transition-colors duration-300 group-hover:text-red">
                        {CONTACT.addressLines.map((line, i) => (
                          <React.Fragment key={line}>
                            {i > 0 && <br />}
                            {line}
                          </React.Fragment>
                        ))}
                      </span>
                    </span>
                    <span className="mt-1 text-slate transition-colors duration-300 group-hover:text-red">
                      <ArrowIcon />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
