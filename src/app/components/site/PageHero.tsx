'use client';

import Image from '@/app/components/site/Img';
import React from 'react';
import { FadeIn, SplitWords } from './Reveal';

/**
 * Shared inner-page opener: a forest block on the lime canvas carrying the
 * eyebrow, oversized title and standfirst, with the page image dimmed behind.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imagePosition = '50% 50%',
  meta,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  /** A photo already cropped to its subject — see scripts/crop-heroes.mjs */
  image?: string;
  /** CSS object-position. Only the sideways part shows on wide screens; on
   *  phones, where a narrow slice of the photo is visible, it picks the slice. */
  imagePosition?: string;
  meta?: { label: string; value: string }[];
}) {
  return (
    <section className="bg-canvas pt-[var(--header-h)]">
      <div className="relative mt-3 md:mt-5 mx-[var(--gutter)] rounded-[var(--radius-lg)] bg-ink text-paper on-ink overflow-hidden">
        {image && (
          <div className="absolute inset-0 z-0">
            {/* The photo is pre-cropped to its subject, so it just fills the
                panel at full strength — no mask, no fade to hide. */}
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: imagePosition }}
            />
            {/* Scrim for the text, heaviest at the left edge and gone by the
                middle, so the subject on the right is shown as shot. On phones
                the text spans the full width, so the scrim does too. */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/62 via-45% to-ink/10 max-md:from-ink/72 max-md:via-ink/60 max-md:to-ink/48" />
            {/* The intro sits along the bottom: a little extra weight there */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent max-md:from-ink/80" />
          </div>
        )}

        {/* The soft shadow keeps text readable over the brighter parts of a photo */}
        <div className="relative z-[1] px-5 md:px-10 lg:px-12 pt-12 md:pt-16 pb-8 md:pb-10 [text-shadow:0_1px_16px_rgb(6_20_34/0.5)]">
          <FadeIn y={12}>
            <p className="t-h6 text-paper/85">{eyebrow}</p>
          </FadeIn>

          <SplitWords
            text={title}
            as="h1"
            className="t-h1 mt-3 max-w-4xl"
            delay={0.05}
          />

          {intro && (
            <FadeIn delay={0.15}>
              <p className="t-lead mt-4 max-w-xl text-paper/80">{intro}</p>
            </FadeIn>
          )}

          {meta && meta.length > 0 && (
            <FadeIn delay={0.2}>
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-paper/20 pt-5">
                {meta.map((m) => (
                  <div key={m.label}>
                    <dt className="text-sm text-paper/60">{m.label}</dt>
                    <dd className="t-h3 mt-1">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
