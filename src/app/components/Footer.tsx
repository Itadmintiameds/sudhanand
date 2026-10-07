'use client';

import Image from '@/app/components/site/Img';
import React from 'react';
import { CONTACT, SOCIALS } from './site/contact';
import { useEnquiry } from './site/Enquiry';
import { FadeIn } from './site/Reveal';
import SwapButton from './site/SwapButton';

const Footer: React.FC = () => {
  const { open } = useEnquiry();

  return (
    <footer className="bg-ink text-paper on-ink rounded-t-[var(--radius-lg)] overflow-hidden">
      {/* ── Closing CTA ── */}
      <div className="shell py-10 md:py-14 flex flex-col items-center text-center gap-4">
        <FadeIn>
          <h2 className="t-h2 max-w-3xl">Let&rsquo;s build good companies.</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="t-lead text-paper/70 max-w-xl">
            Strong on the inside. Recognisable on the outside. Companies people
            are genuinely proud of.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <SwapButton
            label="Contact us"
            onClick={open}
            variant="paper"
            className="mt-2"
          />
        </FadeIn>
      </div>

      {/* ── Contact grid ── */}
      <div className="shell pb-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 sm:gap-8 border-t border-paper/20 pt-8 md:pt-10">
        <div className="flex flex-col gap-5 sm:gap-6">
          <a href={CONTACT.phoneHref} className="group block">
            <p className="t-h6 text-paper/60">Phone</p>
            <span className="t-h4 group-hover:text-red transition-colors duration-300">
              {CONTACT.phone}
            </span>
          </a>
          <a href={CONTACT.emailHref} className="group block">
            <p className="t-h6 text-paper/60">Email</p>
            <span className="t-h5 group-hover:text-red transition-colors duration-300 break-all">
              {CONTACT.email}
            </span>
          </a>
        </div>

        {/* Two-up on phones (the handles are short), a single column from sm up */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:flex sm:flex-col sm:gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block min-w-0 py-2 sm:py-0"
            >
              <p className="t-h6 text-paper/60">{s.label}</p>
              <span className="t-h5 !text-[0.9375rem] sm:!text-[length:clamp(1.0625rem,1.5vw,1.3125rem)] block break-words group-hover:text-red transition-colors duration-300">
                {s.handle}
              </span>
            </a>
          ))}
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <a
            href={CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <p className="t-h6 text-paper/60">Address</p>
            <span className="t-h5 group-hover:text-red transition-colors duration-300">
              {CONTACT.addressLines.map((line, i) => (
                <React.Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </span>
          </a>
        </div>
      </div>

      {/* ── Oversized wordmark ── */}
      <div className="@container px-4">
        <div className="flex items-center justify-center gap-3">
          <span className="relative w-8 h-8 md:w-14 md:h-14 shrink-0 block brightness-0 invert opacity-90">
            <Image src="/logo.svg" alt="" fill unoptimized className="object-contain" />
          </span>
          <span className="t-huge t-huge--brand text-paper whitespace-nowrap pb-[0.22em]">
            Sudhanand Group
          </span>
        </div>
      </div>

      <div className="shell py-5 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-paper/20 mt-5">
        <p className="text-sm text-paper/60">© 2026 Sudhanand Group. All rights reserved.</p>
        <p className="text-sm text-paper/60">Established 2010 · Mysuru, India</p>
      </div>
    </footer>
  );
};

export default Footer;
