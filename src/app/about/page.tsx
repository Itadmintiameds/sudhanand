'use client';

import { AnimatePresence, m } from 'framer-motion';
import Image from '@/app/components/site/Img';
import { useCallback, useEffect, useRef, useState } from 'react';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { TINTS } from '@/app/components/site/accents';
import { ChipRow } from '@/app/components/site/ChipMarquee';
import PageHero from '@/app/components/site/PageHero';
import PhotoMarquee from '@/app/components/site/PhotoMarquee';
import RailButton from '@/app/components/site/RailButton';
import {
  FadeIn,
  Reveal,
  ScrollHighlight,
  SplitWords,
} from '@/app/components/site/Reveal';
import { lockScroll, unlockScroll } from '@/app/components/site/SmoothScroll';
import SwapButton from '@/app/components/site/SwapButton';
import { useOverflowX } from '@/app/components/site/useOverflowX';
import teamData from './team.json';

const EASE = [0.16, 1, 0.3, 1] as const;

// Pass `bio` as an array for multi-paragraph profiles.
type Person = { role: string; name: string; img: string; bio: string | string[] };

const team = teamData as Person[];

const gallery = [
  '/about/Rectangle 52.png',
  '/about/Rectangle 54.png',
  '/about/Rectangle 55.png',
  '/about/Rectangle 57.png',
  '/about/Rectangle 58.png',
];

export default function AboutPage() {
  const railRef = useRef<HTMLDivElement>(null);
  // Arrows only when the cards don't all fit on screen
  const canScroll = useOverflowX(railRef);
  const [active, setActive] = useState<number | null>(null);
  const closeProfile = useCallback(() => setActive(null), []);

  const nudge = (dir: -1 | 1) =>
    railRef.current?.scrollBy({
      left: dir * railRef.current.clientWidth * 0.7,
      behavior: 'smooth',
    });

  return (
    <main>
      <Header />

      <PageHero
        eyebrow="Company profile"
        title="Empowering communities through *impact*"
        intro="Healthcare, education and well-being — the three threads that run through everything the group builds."
        image="/hero/about.jpg"
      />

      {/* ── Statement ── */}
      <section className="bg-blue-deep text-white rounded-[var(--radius-lg)] mx-[var(--gutter)] mt-3 md:mt-5">
        <div className="shell section">
          <ScrollHighlight
            className="t-h2 max-w-[50rem]"
            text="We build companies that serve people first. Strong on the inside, recognisable on the outside, and answerable to the communities they operate in."
          />
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section">
        <div className="shell grid md:grid-cols-2 gap-3 md:gap-4">
          {[
            {
              tag: 'Our vision',
              img: '/about/bulb.png',
              tone: 'bg-sky',
              body: 'To be a transformative force across industries — delivering world-class solutions in healthcare, pharmaceuticals, technology, hospitality and wellness while uplifting communities. By 2030 we aim to build over 200 CurePlus Hospitals across Karnataka, Goa and beyond.',
            },
            {
              tag: 'Our mission',
              img: '/about/mission.png',
              tone: 'bg-blush',
              body: 'To create integrated, impactful businesses that solve real problems — through compassionate healthcare, accessible medicines, technology-driven efficiency, meaningful hospitality and community wellness. Every initiative is guided by innovation, integrity and commitment to social good.',
            },
          ].map((card, i) => (
            <Reveal key={card.tag} delay={i * 0.08}>
              <div className="h-full rounded-[var(--radius-lg)] overflow-hidden bg-paper">
                <div className="relative aspect-[21/8]">
                  <Image
                    src={card.img}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className={`${card.tone} p-5 md:p-7`}>
                  <p className="t-h6 text-ink/70">{card.tag}</p>
                  <p className="text-base leading-relaxed mt-2">{card.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="bg-paper rounded-[var(--radius-lg)] mx-[var(--gutter)]">
        <div className="section">
          <div className="shell flex items-end justify-between gap-6 mb-6">
            <div>
              <FadeIn>
                <p className="t-h6 text-slate">{team.length} people</p>
              </FadeIn>
              <SplitWords
                text="The *leadership*"
                as="h2"
                className="t-h2 mt-1"
              />
            </div>
            {canScroll && (
              <FadeIn delay={0.1} className="flex gap-2 shrink-0">
                <RailButton dir={-1} onClick={() => nudge(-1)} />
                <RailButton dir={1} onClick={() => nudge(1)} />
              </FadeIn>
            )}
          </div>

          {/* pt leaves room for the cards' focus ring, which the scroller would clip.
              No data-lenis-prevent: this rail only scrolls sideways, and opting
              out of Lenis made vertical scrolling hand off to the browser's
              stepped native scroll whenever the pointer crossed it. */}
          <div
            ref={railRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory pt-1.5 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ paddingInline: 'var(--gutter)', scrollPaddingInline: 'var(--gutter)' }}
          >
            {team.map((person, i) => (
              // Whole card opens the profile; spans keep the button's content valid
              <button
                key={person.name}
                type="button"
                onClick={() => setActive(i)}
                aria-haspopup="dialog"
                aria-label={`${person.name}, ${person.role} — view profile`}
                className={`group shrink-0 snap-start w-[62vw] sm:w-[15rem] rounded-[var(--radius-lg)] overflow-hidden ${TINTS[i % TINTS.length]} flex flex-col text-left`}
              >
                <span className="relative block w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src={person.img}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 62vw, 15rem"
                    className="object-cover object-top"
                  />
                </span>
                <span className="p-4 flex-1 flex flex-col w-full">
                  <span className="block t-h6 !text-xs text-ink/70">{person.role}</span>
                  <span className="block t-h4 mt-1">{person.name}</span>
                  <span className="mt-auto pt-3 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 group-hover:text-red">
                    View profile
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M7 17L17 7M17 7H8M17 7v9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values chips ── */}
      <section className="py-6 md:py-8">
        <ChipRow
          items={[
            'Integrity',
            'Compassion',
            'Innovation',
            'Accountability',
            'Sustainability',
            'Community first',
          ]}
          duration={40}
        />
      </section>

      {/* ── Gallery ── */}
      <section className="pb-4">
        <PhotoMarquee images={gallery} duration={55} />
      </section>

      <section className="section">
        <div className="shell text-center flex flex-col items-center gap-4">
          <SplitWords
            text="Explore our *ventures*"
            as="h2"
            className="t-h2 max-w-3xl"
          />
          <FadeIn delay={0.15}>
            <SwapButton label="View ventures" href="/business-ventures" />
          </FadeIn>
        </div>
      </section>

      <ProfileModal
        person={active === null ? null : team[active]}
        tint={active === null ? '' : TINTS[active % TINTS.length]}
        onClose={closeProfile}
      />

      <Footer />
    </main>
  );
}

/* Profile window: photo, role and the full bio. Esc, the backdrop or the
   close button dismiss it, and focus goes back to the card that opened it. */
function ProfileModal({
  person,
  tint,
  onClose,
}: Readonly<{
  person: Person | null;
  tint: string;
  onClose: () => void;
}>) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = person !== null;

  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement as HTMLElement | null;
    lockScroll();
    closeRef.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      unlockScroll();
      opener?.focus({ preventScroll: true });
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {person && (
        <m.div
          key="profile"
          className="fixed inset-0 z-[9970] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="profile-name"
        >
          <button
            type="button"
            tabIndex={-1}
            aria-hidden
            onClick={onClose}
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
              onClick={onClose}
              aria-label="Close profile"
              className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-paper/85 backdrop-blur-sm text-ink flex items-center justify-center transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>

            <div className="grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div
                className={`relative m-3 aspect-[4/3] md:aspect-auto md:min-h-[26rem] rounded-[1.25rem] md:rounded-[1.75rem] overflow-hidden ${tint}`}
              >
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  sizes="(max-width: 768px) 92vw, 22rem"
                  className="object-cover object-top"
                />
              </div>

              <div className="px-6 pt-4 pb-8 sm:px-10 sm:pb-10 md:py-12 md:pl-7 md:pr-12">
                <p className="t-h6 t-h6--rule text-slate md:pr-14">{person.role}</p>
                <h2 id="profile-name" className="t-h3 mt-3">
                  {person.name}
                </h2>
                <div className="mt-6 flex flex-col gap-4">
                  {[person.bio].flat().map((para) => (
                    <p key={para} className="t-lead text-ink/80">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
