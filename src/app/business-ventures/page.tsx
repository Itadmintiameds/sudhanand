'use client';

import Image from '@/app/components/site/Img';
import Link from 'next/link';
import React from 'react';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { ACCENTS, type Accent } from '@/app/components/site/accents';
import { ChipRow } from '@/app/components/site/ChipMarquee';
import CountUp from '@/app/components/site/CountUp';
import PageHero from '@/app/components/site/PageHero';
import { FadeIn, Reveal, SplitWords } from '@/app/components/site/Reveal';
import SwapButton from '@/app/components/site/SwapButton';

// `accent` matches each venture page's own colour
const ventures: {
  id: string;
  category: string;
  description: string;
  bgImage: string;
  accent: Accent;
}[] = [
  {
    id: 'healthcare',
    category: 'Healthcare',
    description:
      'Sudhanand Healthcare Solutions and Sudhanand Pharmacies deliver advanced care — hospitals, clinics and medical equipment — to promote a healthier society.',
    bgImage: '/healthcare.png',
    accent: 'red',
  },
  {
    id: 'technology',
    category: 'Technology',
    description:
      'Sudhanand Business Solutions, TiaMeds Technologies and Mindworx build software, enterprise AI, digital transformation programmes and cybersecurity for the digital age.',
    bgImage: '/tech.png',
    accent: 'blue',
  },
  {
    id: 'hospitality',
    category: 'Hospitality',
    description:
      'Sudhanand Four Seasons in Mysore, Whispering Green Lawn and Utsava Lawn deliver stays and celebrations built around comfort and genuine service.',
    bgImage: '/hospitality.png',
    accent: 'amber',
  },
  {
    id: 'sports-infrastructure',
    category: 'Sport',
    description:
      'At ARC Sportzone we build and operate modern sports facilities, stadiums and training centres that promote fitness, wellness and athletic talent.',
    bgImage: '/sports.png',
    accent: 'green',
  },
  {
    id: 'real-estate',
    category: 'Real Estate',
    description:
      'Through Stone Tower Constructions and Rock Solid Holdings, we are expanding across construction, property development and real estate solutions.',
    bgImage: '/real-estate/card.jpg',
    accent: 'teal',
  },
  {
    id: 'charitable-trust',
    category: 'Charitable Trust',
    description:
      'Our CSR work, led by Sudhanand Educational Trust and CurePlus Blood Bank, focuses on education, healthcare and community development.',
    bgImage: '/charity.png',
    accent: 'violet',
  },
];

// Three matching white cards. (They used to be solid blue, red and navy, which
// made the one row the loudest thing on the page.)
// The hairline keeps them visible on the dark-mode panel.
const STAT_TONES = Array(3).fill('bg-paper border border-ink/10');

export default function BusinessVenturesPage() {
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="The portfolio"
        title="Six sectors. One *conviction*."
        intro="Driving progress across healthcare, technology and lifestyle through purpose-driven ventures."
        image="/hero/ventures.jpg"
        imagePosition="65% 100%"
      />

      {/* ── Numbers ── */}
      <section className="bg-bone rounded-[var(--radius-lg)] mx-[var(--gutter)] mt-3 md:mt-5">
        <div className="shell section">
          <FadeIn>
            <p className="t-h6 t-h6--rule text-ink/70">By the numbers</p>
          </FadeIn>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            {[
              ['15+', 'years in service'],
              ['120%', 'year-on-year growth'],
              ['10+', 'brands across sectors'],
            ].map(([num, label], i) => (
              <Reveal key={label} delay={i * 0.08}>
                <div className={`rounded-[var(--radius-lg)] p-5 md:p-6 h-full ${STAT_TONES[i]}`}>
                  <div className="t-h1">
                    <CountUp value={num} />
                  </div>
                  <div className="t-h6 mt-2">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sector chips ── */}
      <section className="py-6 md:py-8">
        <ChipRow
          items={[
            'Hospitals',
            'Pharmacies',
            'Blood banking',
            'SaaS platforms',
            'IT & ITES',
            'Enterprise AI',
            'Hotels & event lawns',
            'Sports facilities',
            'Construction & real estate',
            'Education trust',
          ]}
          duration={46}
        />
      </section>

      {/* ── Ventures index ── */}
      <section className="bg-paper rounded-[var(--radius-lg)] mx-[var(--gutter)]">
        <div className="shell section">
          <div className="grid lg:grid-cols-2 gap-3 lg:gap-16 mb-6 md:mb-8 items-end">
            <SplitWords text="The *ventures*" as="h2" className="t-h2" />
            <FadeIn delay={0.1}>
              <p className="t-lead text-slate">
                Each venture answers to the same test: does it serve people well,
                and will it still stand in twenty years?
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {ventures.map((v, i) => (
              <Reveal key={v.id} delay={(i % 3) * 0.06}>
                <Link
                  href={`/ventures/${v.id}`}
                  className={`group block h-full rounded-[var(--radius-lg)] overflow-hidden ${ACCENTS[v.accent].tint}`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={v.bgImage}
                      alt={v.category}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="t-h4">{v.category}</h3>
                      <span
                        className={`shrink-0 w-9 h-9 rounded-full border border-ink flex items-center justify-center transition-colors duration-300 ${ACCENTS[v.accent].arrowHover}`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M7 17L17 7M17 7H8M17 7v9"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/75">
                      {v.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <SwapButton
              label="Partner with us"
              href="/business-partners"
              className="mt-8"
            />
          </FadeIn>
        </div>
      </section>

      {/* ── Slim image band ── */}
      <FadeIn>
        <div className="relative h-32 md:h-44 mx-[var(--gutter)] my-3 md:my-5 rounded-[var(--radius-lg)] overflow-hidden">
          <Image
            src="/Image divider section.png"
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
