'use client';

import Image from '@/app/components/site/Img';
import React from 'react';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { useEnquiry } from '@/app/components/site/Enquiry';
import PageHero from '@/app/components/site/PageHero';
import {
  FadeIn,
  Reveal,
  ScrollHighlight,
  SplitWords,
} from '@/app/components/site/Reveal';
import SwapButton from '@/app/components/site/SwapButton';

const partners = [
  {
    logo: '/cc.png',
    name: 'Cabrillo Coastal',
    tone: 'bg-sky',
    sector: 'Property insurance',
    body: [
      'Sudhanand Group has partnered with Cabrillo Coastal, a specialist in property insurance for high-risk coastal areas. Together we improve claims processing, customer support and service efficiency — combining Sudhanand&rsquo;s operational expertise with Cabrillo&rsquo;s commitment to quality insurance.',
      'The collaboration provides integrated, reliable offerings across healthcare and property protection, keeping both accessible and efficient for clients.',
    ],
  },
  {
    logo: '/creditgram.png',
    name: 'CreditAccess Grameen',
    tone: 'bg-blush',
    sector: 'Microfinance',
    body: [
      'CreditAccess Grameen, a leading microfinance institution in India, empowers low-income communities through financial services that improve livelihoods and stability. Sudhanand Group provides accessible, quality healthcare to those same underserved populations.',
      'Together we bridge microfinance and healthcare — promoting financial inclusion, better medical access and sustainable socio-economic development across rural and semi-urban India.',
    ],
  },
];

export default function BusinessPartnersPage() {
  const { open } = useEnquiry();

  return (
    <main>
      <Header />

      <PageHero
        eyebrow="Collaborations"
        title="Trusted partnerships, shared *purpose*"
        intro="Our partners are integral to the journey — fostering innovation, sharing a commitment to excellence, and creating lasting value together."
        image="/hero/partners.jpg"
      />

      {/* ── Statement ── */}
      <section className="bg-blue-deep text-white rounded-[var(--radius-lg)] mx-[var(--gutter)] mt-3 md:mt-5">
        <div className="shell section">
          <ScrollHighlight
            className="t-h2 max-w-[50rem]"
            text="Every partnership we form is built on mutual trust, aligned values, and a shared intent to create meaningful impact."
          />
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="section">
        <div className="shell">
          <SplitWords text="The *partners*" as="h2" className="t-h2 mb-6" />

          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <article className="h-full rounded-[var(--radius-lg)] overflow-hidden bg-paper flex flex-col">
                  {/* White in both themes — the logos are drawn for a light ground */}
                  <div className="p-5 flex items-center justify-center h-28 bg-white">
                    <span className="relative block w-48 h-16">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        fill
                        sizes="14rem"
                        className="object-contain"
                      />
                    </span>
                  </div>

                  <div className={`${p.tone} p-5 md:p-7 flex-1 flex flex-col gap-3`}>
                    <div>
                      <p className="t-h6 text-ink/70">{p.sector}</p>
                      <h3 className="t-h3 mt-1">{p.name}</h3>
                    </div>
                    {p.body.map((para) => (
                      <p
                        key={para.slice(0, 24)}
                        className="text-[0.9375rem] leading-relaxed text-ink/75"
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bone rounded-[var(--radius-lg)] mx-[var(--gutter)]">
        <div className="shell section text-center flex flex-col items-center gap-4">
          <SplitWords
            text="Become a *partner*"
            as="h2"
            className="t-h2 max-w-3xl"
          />
          <FadeIn delay={0.1}>
            <p className="t-lead text-ink/75 max-w-xl">
              If your work and ours point in the same direction, we would like to
              hear from you.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <SwapButton label="Contact us" onClick={open} />
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
