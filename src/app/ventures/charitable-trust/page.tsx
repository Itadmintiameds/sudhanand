'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useTheme } from '@/app/components/DarkModeContext';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const Reveal = ({ children, delay = 0, className = '', from = 'bottom' }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: 'bottom' | 'left' | 'right';
}) => {
  const { ref, visible } = useReveal();
  const t = from === 'left' ? 'translateX(-24px)' : from === 'right' ? 'translateX(24px)' : 'translateY(20px)';
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : t,
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};


// ── CountUp — typing animation for stats ─────────────────────────────────────
function useCountUp(target: string, duration = 1800) {
  const [display, setDisplay] = useState('0');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Extract numeric part and suffix (e.g. "120+" → 120, "+")
  const numeric = parseInt(target.replace(/[^0-9]/g, ''), 10);
  const suffix  = target.replace(/[0-9]/g, '');

  const start = useCallback(() => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * numeric);
      // Format: if >= 1000, show as "1K", "19K" etc
      let formatted: string;
      if (numeric >= 1000) {
        formatted = (current / 1000).toFixed(current % 1000 === 0 ? 0 : 0) + 'K';
      } else {
        formatted = String(current);
      }
      setDisplay(formatted + suffix);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(target); // snap to exact final value
    };
    requestAnimationFrame(tick);
  }, [started, numeric, suffix, target, duration]);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { start(); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [start]);

  return { ref, display };
}

const CountUpStat = ({ value, className }: { value: string; className?: string }) => {
  const { ref, display } = useCountUp(value);
  return <span ref={ref} className={className}>{display}</span>;
};

export default function CharitableTrustPage() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const secBg    = dark ? 'bg-slate-900'    : 'bg-orange-50';
  const statText = dark ? 'text-orange-300' : 'text-orange-950';
  const headText = dark ? 'text-orange-300' : 'text-orange-950';
  const subText  = dark ? 'text-slate-400'  : 'text-black';
  const bodyText = dark ? 'text-slate-400'  : 'text-black';
  const border   = dark ? 'border-slate-600': 'border-black';
  const linkText = dark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800';
  const linkIconCls = dark ? 'invert opacity-50' : '';

  return (
    <div className={`flex flex-col transition-colors duration-300 ${dark ? 'bg-slate-950' : 'bg-white'}`}>
      <Header />

      {/* ── HERO ── */}
      <div className="relative h-56 md:h-80 lg:h-96 px-5 md:px-10 lg:px-40 pt-12 pb-10 bg-gradient-to-b from-orange-50/0 to-orange-50 inline-flex flex-col justify-end items-start">
        {/* bg image */}
        <div className="absolute inset-0">
          <Image
            src="/trust-header.png"
            alt="Charitable Trust"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* dark-mode tint overlay — sits above image, below text */}
        {dark && (
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 to-slate-950/80 z-[1]" />
        )}
        {/* light-mode gradient — same as original */}
        {!dark && (
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/0 to-orange-50 z-[1]" />
        )}
        {/* content */}
        <div className="relative z-[2] self-stretch inline-flex justify-between items-end">
          <Reveal from="left">
            <div className="inline-flex flex-col justify-start items-start">
              <h1 className={`text-3xl md:text-4xl lg:text-6xl font-semibold font-['Geist'] leading-tight md:leading-[69.76px] ${headText}`}>
                Charitable Trust
              </h1>
              <p className={`text-xl md:text-2xl lg:text-4xl font-medium font-['Geist'] leading-tight md:leading-10 ${subText}`}>
                Committed to uplifting lives
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className={`px-5 md:px-10 lg:px-40 pt-8 pb-4 transition-colors duration-300 ${secBg}`}>
        <div className="w-full max-w-[1180px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
          {([['120+', 'Partner hospitals'], ['19K+', 'People reached'], ['180+', 'Villages']] as [string,string][]).map(
            ([val, label], i) => (
              <Reveal key={val} delay={i * 0.12} className="flex flex-col items-center md:items-start gap-3 md:gap-8">
                <CountUpStat value={val} className={`text-5xl md:text-6xl lg:text-9xl font-normal font-['Geist'] leading-tight md:leading-[114px] tabular-nums ${statText}`} />
                <span className={`text-xl md:text-2xl font-normal font-['Geist'] leading-relaxed ${statText}`}>{label}</span>
              </Reveal>
            )
          )}
        </div>
      </div>

      {/* ── VENTURES ── */}
      <div className={`px-5 md:px-10 lg:px-36 pt-14 md:pt-24 pb-14 md:pb-40 transition-colors duration-300 ${secBg} flex flex-col items-center`}>
        <div className="w-full max-w-[1040px]">

          {/* Row 1 — SMT Trust + CurePlus Blood Bank */}
          <div className="flex flex-col lg:flex-row justify-between items-start">

            <Reveal delay={0} className="w-full lg:w-[480px]">
              <div className={`py-8 lg:py-10 border-t ${border} flex flex-col gap-6 lg:gap-10`}>
                <Image
                  src="/trust-page/SMT 2.png"
                  alt="SMT Educational Trust Logo"
                  width={128}
                  height={96}
                  className="w-20 lg:w-28 h-16 lg:h-20 object-contain"
                />
                <div className="flex flex-col gap-3 lg:gap-6">
                  <div className="flex items-start gap-3 lg:gap-4">
                    <a
                      href="https://www.smt.help/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-lg lg:text-2xl font-normal font-['Geist'] capitalize leading-snug lg:leading-loose hover:underline ${linkText}`}
                    >
                      Dr. M. D. Sachidananda Murthy Memorial Educational Trust
                    </a>
                    <a href="https://www.smt.help/" target="_blank" rel="noopener noreferrer" className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 mt-1">
                      <Image src="/link-icon.png" alt="Link" width={20} height={20} className={`w-full h-full ${linkIconCls}`} />
                    </a>
                  </div>
                  <p className={`text-xs lg:text-sm font-normal font-['Geist'] leading-snug ${bodyText}`}>
                    Founded in March 2013 by Dr. Arjun Sachidanand, the Trust began with a mission to improve education and has since expanded into healthcare. Recognized under Sections 12A and 80G of the Income Tax Act, the Trust organizes initiatives like Sudhanand Arogya Vahini, a mobile health service for underserved communities, and CurePlus Blood Bank, ensuring timely access to safe blood.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="w-full lg:w-[480px]">
              <div className={`py-8 lg:py-10 border-t ${border} flex flex-col gap-6 lg:gap-10`}>
                <Image
                  src="/trust-page/CUREPLUS BLOOD BANK 1.png"
                  alt="CurePlus Blood Bank Logo"
                  width={208}
                  height={96}
                  className="w-32 lg:w-44 h-14 lg:h-20 object-contain"
                />
                <div className="flex flex-col gap-3 lg:gap-6">
                  <div className="flex items-start gap-3 lg:gap-4">
                    <a
                      href="https://www.cureplusbloodbank.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-lg lg:text-2xl font-normal font-['Geist'] capitalize leading-snug lg:leading-loose hover:underline ${linkText}`}
                    >
                      CurePlus Blood Centre
                    </a>
                    <a href="https://www.cureplusbloodbank.com/" target="_blank" rel="noopener noreferrer" className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 mt-1">
                      <Image src="/link-icon.png" alt="Link" width={20} height={20} className={`w-full h-full ${linkIconCls}`} />
                    </a>
                  </div>
                  <p className={`text-xs lg:text-sm font-normal font-['Geist'] leading-snug ${bodyText}`}>
                    CurePlus Blood Bank ensures the availability of blood across rural Karnataka. Based in Mysuru, it houses 2,000 units of blood, supporting CurePlus Hospitals in remote areas. Our mobile Sudhanand Arogya Vahinis facilitate swift transportation, reducing long-distance travel and improving access to life-saving healthcare services in underserved communities.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Row 2 — Arogya Vahini */}
          <div className={`border-b ${border} flex flex-col lg:flex-row`}>
            <Reveal delay={0} className="w-full lg:w-[480px]">
              <div className={`py-8 lg:py-10 border-t ${border} flex flex-col gap-6 lg:gap-10`}>
                <Image
                  src="/trust-page/SMT 2.png"
                  alt="SMT Educational Trust Logo"
                  width={128}
                  height={96}
                  className="w-20 lg:w-28 h-16 lg:h-20 object-contain"
                />
                <div className="flex flex-col gap-3 lg:gap-6">
                  <div className="flex items-start gap-3 lg:gap-4">
                    <a
                      href="https://www.smt.help/sav"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-lg lg:text-2xl font-normal font-['Geist'] capitalize leading-snug lg:leading-loose hover:underline ${linkText}`}
                    >
                      Sudhanand Arogya Vahini
                    </a>
                    <a href="https://www.smt.help/sav" target="_blank" rel="noopener noreferrer" className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 mt-1">
                      <Image src="/link-icon.png" alt="Link" width={20} height={20} className={`w-full h-full ${linkIconCls}`} />
                    </a>
                  </div>
                  <p className={`text-xs lg:text-sm font-normal font-['Geist'] leading-snug ${bodyText}`}>
                    In partnership with SAS Poorna Arogya Health Care and CurePlus Hospitals, the Trust launched the Sudhanand Arogya Vahini (SAV), a mobile healthcare unit serving rural communities. During Covid-19, SAV offered lab tests, telemedicine consultations, and data collection, helping patients avoid exposure and travel costs.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* ── DIVIDER IMAGE ── */}
      <div className="relative h-48 md:h-80 lg:h-[625px]">
        <Image src="/trust-div.png" alt="Healthcare team" fill className="object-cover" />
      </div>

      <Footer />
    </div>
  );
}