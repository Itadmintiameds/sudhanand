'use client';

import Image from '@/app/components/site/Img';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { ACCENTS, type Accent } from './accents';
import { ChipRow } from './ChipMarquee';
import CountUp, { expandStat } from './CountUp';
import { useEnquiry } from './Enquiry';
import PageHero from './PageHero';
import { FadeIn, Reveal, ScrollHighlight, SplitWords } from './Reveal';
import SwapButton from './SwapButton';

export type Company = {
  /** Omit when no logo artwork exists yet — a monogram tile stands in. */
  logo?: string;
  /** Round or square emblems get a square slot instead of the wide wordmark one. */
  logoSquare?: boolean;
  name: string;
  /** Omit for companies without a public website — the row renders unlinked. */
  href?: string;
  /** Pass an array for multi-paragraph copy. */
  desc?: string | string[];
};

export type VentureData = {
  /** Sector colour — paints the statement panel, stats and hover states. */
  accent: Accent;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  /** Sideways focal point for the hero photo (CSS object-position) */
  heroPosition?: string;
  statement: string;
  stats?: [value: string, label: string][];
  chips: string[];
  companies: Company[];
  dividerImage: string;
};

const monogram = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

// Logo artwork is drawn for white; in dark mode it sits on a white plate
const LOGO_PLATE = 'block shrink-0 dark:bg-white dark:rounded-[1rem] dark:p-2';
const LOGO_WIDE = `${LOGO_PLATE} w-32 h-12 md:w-full md:h-16`;
const LOGO_SQUARE = `${LOGO_PLATE} w-20 h-20 md:w-28 md:h-28`;

/** "@handle" when `href` is an Instagram profile, otherwise null. */
const instagramHandle = (href?: string) => {
  if (!href || !URL.canParse(href)) return null;
  const { hostname, pathname } = new URL(href);
  if (hostname !== 'instagram.com' && !hostname.endsWith('.instagram.com')) return null;
  const handle = pathname.split('/').find(Boolean);
  return handle ? `@${handle}` : null;
};

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
  </svg>
);

export default function VentureTemplate({ data }: Readonly<{ data: VentureData }>) {
  const { open } = useEnquiry();
  const accent = ACCENTS[data.accent];

  // All three figures share one size, set by the widest once spelled out
  // (~0.62em a character), and capped at the usual heading size.
  const widest = Math.max(0, ...(data.stats ?? []).map(([v]) => expandStat(v).length));
  const statFontSize = `min(clamp(2.25rem, 4.6vw, 3.75rem), ${(100 / (Math.max(widest, 4) * 0.62)).toFixed(1)}cqi)`;

  return (
    <main>
      <Header />

      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        intro={data.intro}
        image={data.heroImage}
        imagePosition={data.heroPosition}
      />

      {/* ── Stats ── */}
      {data.stats && data.stats.length > 0 && (
        <section className="mt-3 md:mt-5">
          <div className="shell grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {data.stats.map(([value, label], i) => (
              <Reveal key={label} delay={i * 0.08}>
                {/* @container so the figure can size itself to the card: a
                    spelled-out number like 10,00,000+ is far wider than 18+ */}
                <div className={`@container h-full rounded-[var(--radius-lg)] p-5 md:p-6 ${accent.tint}`}>
                  <CountUp
                    value={value}
                    className="t-h1 block whitespace-nowrap"
                    style={{ fontSize: statFontSize }}
                  />
                  <p className="t-h6 text-ink/70 mt-2">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ── Statement ── */}
      <section
        className={`${accent.solid} text-white rounded-[var(--radius-lg)] mx-[var(--gutter)] mt-3 md:mt-5`}
      >
        <div className="shell section">
          <ScrollHighlight className="t-h2 max-w-[48rem]" text={data.statement} />
        </div>
      </section>

      {/* ── Chips ── */}
      <section className="py-6 md:py-8">
        <ChipRow items={data.chips} duration={44} />
      </section>

      {/* ── Companies ── */}
      <section className="bg-paper rounded-[var(--radius-lg)] mx-[var(--gutter)]">
        <div className="shell section">
          <SplitWords
            text="The *companies*"
            as="h2"
            className="t-h2 mb-5 md:mb-6"
          />

          <div className="flex flex-col">
            {data.companies.map((c, i) => {
              const instagram = instagramHandle(c.href);
              const body = (
                <>
                  {c.logo ? (
                    <span className={c.logoSquare ? LOGO_SQUARE : LOGO_WIDE}>
                      <span className="relative block w-full h-full">
                        <Image
                          src={c.logo}
                          alt={c.name}
                          fill
                          sizes="14rem"
                          className="object-contain object-left dark:object-center"
                        />
                      </span>
                    </span>
                  ) : (
                    <span
                      aria-hidden
                      className={`flex w-12 h-12 md:w-16 md:h-16 shrink-0 items-center justify-center rounded-[1rem] ${accent.tint} t-h4 text-ink/70`}
                    >
                      {monogram(c.name)}
                    </span>
                  )}

                  <div>
                    <h3
                      className={`t-h4 transition-colors duration-300 ${
                        c.href ? 'group-hover:text-red' : ''
                      }`}
                    >
                      {c.name}
                    </h3>
                    {c.desc &&
                      [c.desc].flat().map((para) => (
                        <p key={para} className="text-[0.9375rem] leading-relaxed text-slate mt-2 max-w-2xl">
                          {para}
                        </p>
                      ))}
                    {instagram && (
                      // A span, not a link: the whole row is already the anchor
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">
                        <InstagramIcon />
                        {instagram}
                      </span>
                    )}
                  </div>

                  {c.href && (
                    <span
                      className={`hidden md:flex w-10 h-10 rounded-full border border-ink items-center justify-center shrink-0 transition-colors duration-300 ${accent.arrowHover}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M7 17L17 7M17 7H8M17 7v9"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </>
              );

              const rowClass =
                'group grid md:grid-cols-[11rem_1fr_2.5rem] gap-3 md:gap-8 items-start border-t border-ink/15 py-5 md:py-6 last:border-b px-3 -mx-3 rounded-[1rem]';

              return (
                <Reveal key={c.name} delay={Math.min(i, 3) * 0.06}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${rowClass} transition-colors duration-300 ${accent.rowHover}`}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className={rowClass}>{body}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3">
              <SwapButton label="Contact us" onClick={open} />
              <SwapButton
                label="All ventures"
                href="/business-ventures"
                variant="ghost"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Divider ── */}
      <FadeIn>
        <div className="relative h-32 md:h-44 mx-[var(--gutter)] my-3 md:my-5 rounded-[var(--radius-lg)] overflow-hidden">
          <Image
            src={data.dividerImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </FadeIn>

      <Footer />
    </main>
  );
}
