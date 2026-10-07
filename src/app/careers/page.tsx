'use client';

import Image from '@/app/components/site/Img';
import React, { useEffect, useState } from 'react';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { TINTS } from '@/app/components/site/accents';
import { ChipRow } from '@/app/components/site/ChipMarquee';
import { useEnquiry } from '@/app/components/site/Enquiry';
import PageHero from '@/app/components/site/PageHero';
import { FadeIn, Reveal, SplitWords } from '@/app/components/site/Reveal';
import SwapButton from '@/app/components/site/SwapButton';

type Job = {
  id: number;
  title: string;
  location: string;
  exp: string;
  category: string;
  applyUrl: string;
  onsite?: boolean;
  fullTime?: boolean;
};

const JOBS_CSV =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-LW4hTDmhoBa_90tdx8HkGIsiZQc7_NSDBJm_CEKL2WdIxgEiERzDzdFCmJK6Drpp8LXEFdRgg_Ef/pub?gid=0&single=true&output=csv';

const industries = [
  { name: 'Healthcare', image: '/career/Rectangle 61 (1).png' },
  { name: 'Pharma', image: '/career/Rectangle 62 (1).png' },
  { name: 'Hospitality', image: '/career/Rectangle 64 (1).png' },
  { name: 'Technology', image: '/career/Rectangle 65 (1).png' },
  { name: 'Sports', image: '/career/Rectangle 63 (1).png' },
  { name: 'Real Estate', image: '/career/real-estate.jpg' },
];

const gallery = [
  '/career/Rectangle 52 (1).png',
  '/career/Rectangle 54 (1).png',
  '/career/Rectangle 55 (2).png',
  '/career/Rectangle 57.png',
];

function parseJobsFromCSV(csv: string): Job[] {
  const lines = csv.trim().split('\n');
  if (lines.length < 2) return [];
  const headers = lines[0].split(',').map((h) => h.trim());

  return lines
    .slice(1)
    .filter(Boolean)
    .map((line) => {
      const vals = line.split(',');
      const obj: Record<string, string | number | boolean> = {};
      headers.forEach((h, i) => {
        const v = vals[i]?.trim() ?? '';
        if (h === 'id') obj[h] = parseInt(v, 10);
        else if (h === 'onsite' || h === 'fullTime') obj[h] = v.toLowerCase() === 'true';
        else obj[h] = v;
      });
      return obj as unknown as Job;
    })
    .filter((j) => j.id && j.title);
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selected, setSelected] = useState('View all');
  const [loading, setLoading] = useState(true);
  const { open } = useEnquiry();

  useEffect(() => {
    fetch(JOBS_CSV)
      .then((r) => r.text())
      .then((csv) => setJobs(parseJobsFromCSV(csv)))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const uniqueCategories = Array.from(new Set(jobs.map((j) => j.category)));
  const showFilters = uniqueCategories.length >= 2;
  const categories = showFilters ? ['View all', ...uniqueCategories] : uniqueCategories;
  const filtered =
    selected === 'View all' ? jobs : jobs.filter((j) => j.category === selected);

  return (
    <main>
      <Header />

      <PageHero
        eyebrow="Careers"
        title="Build something worth *staying* for"
        intro="Grow with one of India's fastest-moving diversified groups — across healthcare, hospitality, sport, technology and real estate."
        image="/hero/careers.jpg"
      />

      {/* ── Industries ── */}
      <section className="bg-sky rounded-[var(--radius-lg)] mx-[var(--gutter)] mt-3 md:mt-5">
        <div className="shell section">
          <SplitWords
            text="Be part of *diverse* industries"
            as="h2"
            className="t-h2 max-w-3xl"
          />

          <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 md:gap-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.05}>
                <div className="group relative h-32 md:h-40 rounded-[1rem] overflow-hidden on-ink">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <h3 className="absolute bottom-3 left-3.5 t-h5 text-paper font-semibold">
                    {ind.name}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perks chips ── */}
      <section className="py-6 md:py-8">
        <ChipRow
          items={[
            'Learning budget',
            'Health cover',
            'Internal mobility',
            'Mentorship',
            'Flexible leave',
            'Team offsites',
          ]}
          duration={42}
        />
      </section>

      {/* ── Open positions ── */}
      <section className="bg-paper rounded-[var(--radius-lg)] mx-[var(--gutter)]">
        <div className="shell section">
          <div className="grid lg:grid-cols-2 gap-3 lg:gap-16 mb-6 items-end">
            <SplitWords text="Open *positions*" as="h2" className="t-h2" />
            <FadeIn delay={0.1}>
              <p className="t-lead text-slate">
                We are always looking for people who want to grow alongside us.
                Nothing that fits right now? Write to us anyway.
              </p>
            </FadeIn>
          </div>

          {showFilters && (
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelected(cat)}
                    className={`chip transition-colors duration-300 ${
                      selected === cat
                        ? 'chip--ink'
                        : 'hover:bg-sky'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeIn>
          )}

          {loading ? (
            <div className="flex justify-center py-10">
              <div className="h-10 w-10 rounded-full border-2 border-ink/20 border-t-ink animate-spin" />
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {filtered.map((job, i) => (
                <Reveal key={job.id} delay={(i % 3) * 0.05}>
                  <article
                    className={`h-full rounded-[var(--radius-lg)] ${TINTS[i % TINTS.length]} p-5 flex flex-col justify-between gap-4`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="t-h5 font-semibold">{job.title}</h3>
                        <span className="chip chip--paper !py-1.5 !px-3 !text-xs shrink-0">
                          {job.category}
                        </span>
                      </div>
                      <p className="t-small mt-3 !text-ink/70">{job.exp}</p>
                      <p className="t-small !text-ink/70">{job.location}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.onsite && (
                          <span className="chip chip--paper !py-1 !px-3 !text-xs">
                            Onsite
                          </span>
                        )}
                        {job.fullTime && (
                          <span className="chip chip--paper !py-1 !px-3 !text-xs">
                            Full-time
                          </span>
                        )}
                      </div>
                    </div>

                    <SwapButton
                      label="Apply now"
                      href={job.applyUrl}
                      external
                      className="self-start"
                    />
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <FadeIn>
              <div className="rounded-[var(--radius-lg)] bg-sky p-8 text-center">
                <h3 className="t-h4">No open positions at the moment</h3>
                <p className="t-lead text-slate mt-3 max-w-md mx-auto">
                  Please check back soon, or contact us to share your profile
                  for future openings.
                </p>
                <SwapButton label="Contact us" onClick={open} className="mt-8" />
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-6 md:py-8">
        <div className="marquee-host">
          <div
            className="marquee"
            style={{ '--marquee-duration': '50s' } as React.CSSProperties}
          >
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-stretch gap-3 pr-3 shrink-0">
                {gallery.map((src, i) => (
                  <span
                    key={`${copy}-${src}`}
                    className={`relative block rounded-[var(--radius-lg)] overflow-hidden shrink-0 ${
                      i % 2 === 0
                        ? 'w-[56vw] md:w-[22rem] h-[34vw] md:h-[14rem]'
                        : 'w-[38vw] md:w-[14rem] h-[34vw] md:h-[14rem]'
                    }`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 56vw, 22rem"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
