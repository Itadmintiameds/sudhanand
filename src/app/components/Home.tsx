'use client';

import { m } from 'framer-motion';
import Image from '@/app/components/site/Img';
import Link from 'next/link';
import React, { useRef } from 'react';
import Footer from './Footer';
import Header from './Header';
import { ACCENTS } from './site/accents';
import ChipMarquee from './site/ChipMarquee';
import {
  FadeIn,
  Reveal,
  ScrollHighlight,
  SplitWords,
} from './site/Reveal';
import RailButton from './site/RailButton';
import { useAppReady } from './site/SiteChrome';
import SwapButton from './site/SwapButton';
import TypeWordmark from './site/TypeWordmark';
import { useOverflowX } from './site/useOverflowX';
import { VENTURES } from './site/ventures';
import VideosSection from './site/Videos';

const EASE = [0.16, 1, 0.3, 1] as const;

const HomePage = () => (
  <main>
    <Header />
    <Hero />
    <ImpactSection />
    <VideosSection />
    <VentureSlider />
    <StatementSection />
    <CapabilitiesMarquee />
    <JourneySection />
    <Footer />
  </main>
);

/* ------------------------------------------------------------------ hero -- */

const Hero = () => {
  const ready = useAppReady();

  return (
    <section className="relative bg-canvas pt-[var(--header-h)]">
      <m.div
        className="shell pt-5 md:pt-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <p className="t-h6 t-h6--rule text-slate">Est. 2010 — Mysuru, India</p>
        <p className="t-h6 text-slate">10+ companies / 6 sectors</p>
      </m.div>

      {/* Wordmark block — left-aligned and cut by the red keyline */}
      <div className="relative mt-3 md:mt-5 mx-[var(--gutter)] rounded-[var(--radius-lg)] bg-ink overflow-hidden on-ink">
        {/* Backdrop photo at full strength. Its pale baked-in bottom edge fades
            into the navy block, and a scrim darkens the text side only. */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/header.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_22%]"
            style={{
              maskImage: 'linear-gradient(to bottom, #000 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, #000 50%, transparent 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-ink/30 max-md:from-ink/75 max-md:via-ink/65 max-md:to-ink/55" />
        </div>

        <div className="@container relative z-[2] px-5 md:px-10 pt-8 md:pt-12">
          {/* No clipping mask here (unlike before): script faces have swashes and
              descenders that a mask would slice off */}
          <TypeWordmark ready={ready} />

          <m.div
            className="h-[3px] bg-red mt-2 md:mt-3 origin-left"
            initial={{ scaleX: 0 }}
            animate={ready ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, ease: EASE, delay: 0.75 }}
          />
        </div>

        <m.div
          className="relative z-[2] px-5 md:px-10 pt-5 pb-8 md:pb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
        >
          <h1 className="t-h6 text-paper/55">We are Sudhanand Group</h1>
          <p className="t-h4 mt-3 text-paper font-normal max-w-2xl">
            A diversified group serving communities in transition — because
            there is no progress without{' '}
            <span className="accent-word">movement</span>.
          </p>
        </m.div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------- venture slider -- */

const VentureSlider = () => {
  const railRef = useRef<HTMLDivElement>(null);
  // Arrows only when the cards don't all fit on screen
  const canScroll = useOverflowX(railRef);

  const nudge = (dir: -1 | 1) =>
    railRef.current?.scrollBy({
      left: dir * railRef.current.clientWidth * 0.7,
      behavior: 'smooth',
    });

  return (
    <section className="bg-canvas pt-8 md:pt-12 pb-8 md:pb-12">
      <div className="shell flex items-end justify-between gap-6 pb-4">
        <FadeIn>
          <p className="t-h6 t-h6--rule text-slate">Portfolio</p>
          <h2 className="t-h3 mt-2">Our ventures</h2>
        </FadeIn>
        {canScroll && (
          <FadeIn delay={0.1} className="flex gap-2 shrink-0">
            <RailButton dir={-1} onClick={() => nudge(-1)} />
            <RailButton dir={1} onClick={() => nudge(1)} />
          </FadeIn>
        )}
      </div>

      {/* No data-lenis-prevent: the rail only scrolls sideways, and opting out of
          Lenis here made vertical scrolling hand off to the browser's stepped
          native scroll whenever the pointer crossed it. */}
      <div
        ref={railRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        // scroll-padding keeps the first card on the gutter instead of the screen edge
        style={{ paddingInline: 'var(--gutter)', scrollPaddingInline: 'var(--gutter)' }}
      >
        {VENTURES.map((v) => (
          <Link
            key={v.id}
            href={`/ventures/${v.id}`}
            className="group relative shrink-0 snap-start w-[62vw] sm:w-[14.5rem] lg:w-[15.5rem] aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden bg-ink on-ink"
          >
            <Image
              src={v.img}
              alt=""
              fill
              sizes="(max-width: 640px) 62vw, 16rem"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4">
              <span className={`block h-1 w-8 rounded-full ${ACCENTS[v.accent].bar}`} />
              <div className="mt-3 flex items-end justify-between gap-3">
                <div>
                  <h3 className="t-h4 text-paper">{v.name}</h3>
                  <p className="t-small !text-paper/80 mt-1">{v.blurb}</p>
                </div>
                <span className="shrink-0 w-9 h-9 rounded-full bg-white text-ink flex items-center justify-center transition-colors duration-300 group-hover:bg-red group-hover:text-white">
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
              </div>
            </div>
            <span className="visually-hidden">{`View ${v.name}`}</span>
          </Link>
        ))}
      </div>

      <FadeIn delay={0.1} className="shell mt-5">
        <SwapButton label="View all ventures" href="/business-ventures" variant="ghost" />
      </FadeIn>
    </section>
  );
};

/* ------------------------------------------------------------- statement -- */

const StatementSection = () => (
  <section className="bg-blue-deep text-white rounded-[var(--radius-lg)] mx-[var(--gutter)]">
    <div className="shell section">
      <ScrollHighlight
        className="t-h2 max-w-[52rem]"
        text="Together we build good companies. Companies people are proud of. Strong on the inside. Recognisable on the outside. Driven by purpose. Built to outlast us."
      />
    </div>
  </section>
);

/* ---------------------------------------------------------- capabilities -- */

const CapabilitiesMarquee = () => (
  <section className="py-8 md:py-10">
    <ChipMarquee
      rowOne={[
        'Healthcare solutions',
        'Pharmaceuticals',
        'IT & ITES',
        'Enterprise AI',
        'Blood bank services',
        'SaaS platforms',
      ]}
      rowTwo={[
        'Hotels & hospitality',
        'Real estate & construction',
        'Sports & fitness',
        'US home insurance',
        'Education & trust',
        'Distribution',
      ]}
    />
  </section>
);

/* --------------------------------------------------------------- journey -- */

const timeline = [
  { year: '2010', lines: ['Humble beginnings — the first step, taken in Mysuru.'] },
  { year: '2011', lines: ['Started our journey with SAS Poorna Arogya Healthcare.'] },
  { year: '2012', lines: ['Started Sachidananda Organic Farm — Nanjangud.'] },
  { year: '2013', lines: ['Dr. M. D. Sachidananda Murthy Memorial Education Trust. Sudhanand Healthcare Solutions Pvt. Ltd. — Mysuru.'] },
  { year: '2017', lines: ['Our first hospital, Disha Hospital — Mysuru. Opened Dharani Hospital — Chamarajanagara.'] },
  { year: '2018', lines: ['Started Kaveri Hospital — Kodagu, and ARC Sportzone — Mysuru.'] },
  { year: '2020', lines: ['Opened Krishna Hospital — Bettadapura. Started Sudhanand Business Solutions Pvt. Ltd.'] },
  { year: '2021', lines: ['Opened our hotel, Sudhanand Four Seasons — Mysuru.'] },
  { year: '2022', lines: ['Nova Candolim by Sudhanand — Goa. Sudhanand Arogya Vahini. Animal & Dairy Farms — Yelandur.'] },
  { year: '2023', lines: ['Sudhanand Pharmacies and Distributors — Mysuru. Narasegowda Memorial Hospital — Mandya.'] },
  { year: '2024', lines: ['Started Idea Gateway Inc. — New York.', 'Established TiaMeds Technologies Pvt. Ltd. — Mysuru.'] },
  {
    year: '2025',
    lines: [
      'Expanded our healthcare network with four new spoke hospitals.',
      'Introduced SiniMeds RCM, strengthening our commitment to accessible healthcare solutions.',
      'Established Stone Tower Constructions LLP — Mysuru.',
      'Established Aviratha Ventures LLP — Mysuru.',
    ],
  },
  {
    year: '2026',
    lines: [
      'Established CurePlus Blood Centre — Mysuru.',
      'Rebranded SiniMeds as Mindworx Technologies Pvt. Ltd.',
      'Established RockSolid Holdings LLC — Pattaya, Thailand.',
    ],
  },
];

const JourneySection = () => (
  <section className="section">
    <div className="shell">
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 mb-6 md:mb-8">
        <SplitWords text="Fifteen years, one *direction*" as="h2" className="t-h2" />
        <FadeIn delay={0.1}>
          <p className="t-lead text-slate">
            From a single healthcare practice in Mysuru to a group spanning six
            sectors — built one commitment at a time.
          </p>
        </FadeIn>
      </div>

      <div className="border-t border-ink/15">
        {timeline.map((item, i) => (
          <Reveal key={item.year} delay={Math.min(i, 4) * 0.04}>
            <div className="group grid grid-cols-[4rem_1fr] md:grid-cols-[9rem_1fr] gap-4 md:gap-10 border-b border-ink/15 py-3.5 md:py-4 transition-colors duration-300 hover:bg-paper/60 px-2 -mx-2 rounded-xl">
              <span className="t-h4 text-blue transition-colors duration-300 group-hover:text-red">
                {item.year}
              </span>
              <div className="text-[0.9375rem] leading-relaxed text-ink/80">
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------------------------------------------------------- impact -- */

// Artwork in /public/brands is cropped to the mark (no built-in padding) and
// at full strength; `ratio` is each file's width / height. Brands without
// artwork yet render as a typeset name in their own colour.
//
// `href` is the company's own site where it has one (the same links the
// venture pages use). Companies without a public site link to their venture
// page instead, so every tile still goes somewhere.
type Brand = {
  alt: string;
  href: string;
  src?: string;
  ratio?: number;
  tone?: string;
};

const brandLogos: Brand[] = [
  { src: '/brands/sbpl.png', ratio: 0.9, alt: 'Sudhanand Business Solutions', href: 'https://www.sudhanandbusinesssolutions.com/' },
  { src: '/brands/sudhanand-pharmacies.png', ratio: 0.92, alt: 'Sudhanand Pharmacies', href: 'https://www.sudhanandpharmacies.com/' },
  { src: '/brands/tiameds.png', ratio: 3.29, alt: 'Tiameds', href: 'https://www.tiameds.ai/' },
  { src: '/brands/cureplus-hospitals.png', ratio: 1.8, alt: 'CurePlus Hospitals', href: 'https://www.cureplushospitals.com/' },
  { src: '/brands/cureplus-blood-centre.png', ratio: 2.58, alt: 'CurePlus Blood Bank', href: 'https://www.cureplusbloodbank.com/' },
  { src: '/brands/mindworx.png', ratio: 1.16, alt: 'Mindworx Technologies & Business Solutions', href: '/ventures/technology' },
  { src: '/brands/cureplus-pharma.png', ratio: 1.77, alt: 'CurePlus Pharma', href: '/ventures/healthcare' },
  { src: '/brands/arc-sportzone.png', ratio: 0.76, alt: 'ARC Sportzone', href: 'https://www.arcsportzone.com/' },
  { src: '/brands/smt.png', ratio: 0.84, alt: 'SMT', href: 'https://www.smt.help/' },
  { src: '/brands/stone-tower.png', ratio: 2.75, alt: 'Stone Tower Constructions', href: '/ventures/real-estate' },
  { src: '/brands/whispering-green-lawn.png', ratio: 0.99, alt: 'Whispering Green Lawn', href: 'https://www.instagram.com/whispering_green_lawn/' },
  { src: '/brands/utsava-lawn.png', ratio: 0.97, alt: 'Utsava Lawn', href: '/ventures/hospitality' },
  { src: '/brands/four-seasons.png', ratio: 5.02, alt: 'Four Seasons Mysuru', href: 'https://sudhanandfourseasons.com/' },
  { src: '/brands/rock-solid.png', ratio: 0.9, alt: 'Rock Solid Holdings', href: '/ventures/real-estate' },
];

// Every tile is the same size, and each logo inside is scaled to roughly the
// same visual area — so a round crest and a long wordmark read as equals
// rather than one looking tiny next to the other.
const TILE_ASPECT = 1.9; // a tile's inner width / height, after padding (w-48 h-28 px-5 py-4)
const LOGO_AREA = 0.45; // share of that inner box each logo covers

/** Logo height as a % of the tile's inner height, capped to fit the tile. */
const logoHeight = (ratio: number) =>
  Math.min(Math.sqrt((LOGO_AREA * TILE_ASPECT) / ratio), 1, TILE_ASPECT / ratio) * 100;

// White in both themes — the artwork is drawn for a light ground
const TILE_CLASS =
  'on-light w-48 h-28 px-5 py-4 rounded-[1rem] bg-white flex items-center justify-center shrink-0 ring-1 ring-inset ring-ink/10 transition-shadow duration-300 hover:ring-2 hover:ring-red focus-visible:ring-2 focus-visible:ring-red';

/**
 * One logo, linked. The marquee renders every tile twice for a seamless loop,
 * so the second copy is hidden from assistive tech and the tab order.
 */
const BrandTile = ({ brand, duplicate }: Readonly<{ brand: Brand; duplicate: boolean }>) => {
  const external = /^https?:\/\//.test(brand.href);

  const face =
    brand.src && brand.ratio ? (
      <Image
        src={brand.src}
        alt={brand.alt}
        width={240}
        height={Math.round(240 / brand.ratio)}
        className="max-w-full object-contain"
        style={{ height: `${logoHeight(brand.ratio)}%`, width: 'auto' }}
      />
    ) : (
      <span className={`t-h5 font-semibold leading-tight text-center ${brand.tone ?? 'text-ink'}`}>
        {brand.alt}
      </span>
    );

  const shared = {
    className: TILE_CLASS,
    tabIndex: duplicate ? -1 : undefined,
    'aria-hidden': duplicate || undefined,
  };

  return external ? (
    <a
      href={brand.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={duplicate ? undefined : `${brand.alt} (opens in a new tab)`}
      {...shared}
    >
      {face}
    </a>
  ) : (
    <Link href={brand.href} {...shared}>
      {face}
    </Link>
  );
};

const ImpactSection = () => (
  <section className="mt-4 md:mt-6 mx-[var(--gutter)] rounded-[var(--radius-lg)] bg-sky overflow-hidden py-8 md:py-10">
    <FadeIn className="px-5 md:px-10 mb-5 md:mb-6">
      <p className="t-h6 t-h6--rule text-ink/70">Our impact</p>
      <h2 className="t-h3 mt-2 max-w-3xl">
        Ten-plus companies, six sectors, one group.
      </h2>
    </FadeIn>

    {/* Hovering pauses the loop, so a moving logo is easy to click */}
    <div className="marquee-host">
      <div
        className="marquee"
        style={{ '--marquee-duration': '60s' } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-3 pr-3 shrink-0">
            {brandLogos.map((b) => (
              <BrandTile key={`${copy}-${b.alt}`} brand={b} duplicate={copy === 1} />
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomePage;
