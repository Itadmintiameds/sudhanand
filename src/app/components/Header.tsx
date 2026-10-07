'use client';

import { AnimatePresence, m } from 'framer-motion';
import Image from '@/app/components/site/Img';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { CONTACT } from './site/contact';
import { lockScroll, unlockScroll } from './site/SmoothScroll';
import ThemeToggle from './site/ThemeToggle';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/business-ventures', label: 'Ventures' },
  { href: '/business-partners', label: 'Partners' },
  { href: '/careers', label: 'Careers' },
  { href: '/about', label: 'About us' },
];

const EASE = [0.76, 0, 0.24, 1] as const;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const isActive = (href: string, pathname: string) =>
  href === '/'
    ? pathname === '/'
    : pathname.startsWith(href) ||
      // venture detail pages live under /ventures/*, the index under /business-ventures
      (href === '/business-ventures' && pathname.startsWith('/ventures/'));

/**
 * Frosted once the page moves. `hidden` tracks scroll direction (down = hide,
 * up = show); the header only acts on it below lg — desktop stays put.
 */
function useScrollChrome() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y < 120) setHidden(false);
      else if (Math.abs(y - last) > 6) setHidden(y > last);
      last = y;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { scrolled, hidden };
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrolled, hidden } = useScrollChrome();

  useEffect(() => {
    if (menuOpen) lockScroll();
    else unlockScroll();
  }, [menuOpen]);

  // Close the overlay once the route actually changes
  useEffect(() => setMenuOpen(false), [pathname]);

  // The overlay is the only nav below lg — don't strand it open if the
  // viewport grows past the breakpoint (e.g. a tablet rotating).
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Transparent at the top (clicks pass through to the hero); once it carries
  // a background it should catch clicks rather than leak them to hidden content.
  const bar = menuOpen
    ? 'pointer-events-none'
    : scrolled
      ? 'bg-canvas/95 shadow-[0_1px_0_rgba(6,38,61,0.08)] dark:shadow-[0_1px_0_rgba(255,255,255,0.06)]'
      : 'pointer-events-none';

  return (
    <>
      <header
        // `on-ink` while the overlay is open keeps the bar's white-on-navy
        // colours in dark mode too
        className={`fixed top-0 left-0 w-full z-[9950] transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${bar} ${
          hidden && !menuOpen ? 'max-lg:-translate-y-full' : ''
        } ${menuOpen ? 'on-ink' : ''}`}
        style={{ height: 'var(--header-h)' }}
      >
        {/* lg+: three columns so the nav stays centred between logo and toggle */}
        <div className="shell h-full flex items-center justify-between gap-2 sm:gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="pointer-events-auto flex items-center gap-2.5 py-1.5 justify-self-start"
            aria-label="Sudhanand Group — home"
          >
            <span
              className={`relative w-9 h-9 md:w-10 md:h-10 block ${
                menuOpen ? 'brightness-0 invert' : ''
              }`}
            >
              <Image src="/logo.svg" alt="" fill priority unoptimized className="object-contain" />
            </span>
            {/* 15px on phones so logo + name + theme + Menu fit a 360px screen */}
            <span
              className={`t-h5 !text-[0.9375rem] sm:!text-[length:clamp(1.0625rem,1.5vw,1.3125rem)] font-semibold leading-none whitespace-nowrap transition-colors duration-300 ${
                menuOpen ? 'text-paper' : 'text-ink'
              }`}
            >
              Sudhanand Group
            </span>
          </Link>

          {/* Desktop: links in the bar — one click to any page */}
          <nav
            aria-label="Main"
            className="pointer-events-auto hidden lg:flex items-center gap-1 rounded-full bg-paper/90 p-1"
          >
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href, pathname) ? 'page' : undefined}
                className={`px-4 py-2.5 rounded-full text-[0.9375rem] font-medium leading-none transition-colors duration-300 ${
                  isActive(link.href, pathname)
                    ? 'bg-ink text-paper'
                    : 'text-ink hover:bg-ink/[0.07]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <ThemeToggle />

            {/* Below lg: full-screen overlay. Visibility lives on the wrapper:
                `.btn` is unlayered CSS, so it beats Tailwind's `lg:hidden`
                utility on the same node. */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className={`pointer-events-auto btn btn--compact ${menuOpen ? 'btn--paper' : ''}`}
              >
                <span className="btn__dot" />
                <span className="grid overflow-hidden text-left">
                  <m.span
                    className="col-start-1 row-start-1 block"
                    animate={{ y: menuOpen ? '-115%' : '0%', opacity: menuOpen ? 0 : 1 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                  >
                    Menu
                  </m.span>
                  <m.span
                    className="col-start-1 row-start-1 block"
                    initial={false}
                    animate={{ y: menuOpen ? '0%' : '115%', opacity: menuOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                  >
                    Close
                  </m.span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <m.div
            className="fixed inset-0 z-[9940] bg-ink text-paper on-ink flex flex-col overflow-y-auto lg:hidden"
            data-lenis-prevent
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div
              className="shell flex-1 flex flex-col justify-center gap-5 py-6 sm:gap-10 sm:py-16"
              style={{ paddingTop: 'calc(var(--header-h) + 1rem)' }}
            >
              <nav className="flex flex-col" aria-label="Main">
                {navLinks.map((link, i) => (
                  <span key={link.href} className="reveal-mask">
                    <m.span
                      className="block"
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 + i * 0.035 }}
                    >
                      <Link
                        href={link.href}
                        aria-current={isActive(link.href, pathname) ? 'page' : undefined}
                        // Same-page taps don't change the route, so close here too
                        onClick={() => link.href === pathname && setMenuOpen(false)}
                        className="t-h1 block w-fit py-1.5 text-paper transition-colors duration-300 hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    </m.span>
                  </span>
                ))}
              </nav>

              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex flex-col gap-4 sm:gap-8"
              >
                <div className="h-px w-full bg-paper/25" />
                <div className="grid sm:grid-cols-3 gap-3 sm:gap-8">
                  <a href={CONTACT.phoneHref} className="group block">
                    <p className="text-sm text-paper/60">Phone</p>
                    <span className="t-h5 group-hover:text-red transition-colors duration-300">
                      {CONTACT.phone}
                    </span>
                  </a>
                  <a href={CONTACT.emailHref} className="group block">
                    <p className="text-sm text-paper/60">Email</p>
                    <span className="t-h5 group-hover:text-red transition-colors duration-300 break-all">
                      {CONTACT.email}
                    </span>
                  </a>
                  <a
                    href={CONTACT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <p className="text-sm text-paper/60">Address</p>
                    <span className="t-h5 group-hover:text-red transition-colors duration-300">
                      Dakshina Murthy Towers,
                      <br />
                      Udayagiri, Mysore 570019
                    </span>
                  </a>
                </div>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
