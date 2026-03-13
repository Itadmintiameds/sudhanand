'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useTheme } from '@/app/components/DarkModeContext';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const Reveal = ({ children, delay = 0, className = '', from = 'bottom' }: {
  children: React.ReactNode; delay?: number; className?: string; from?: 'bottom'|'left'|'right'|'none';
}) => {
  const { ref, visible } = useReveal();
  const t = from === 'left' ? 'translateX(-28px)' : from === 'right' ? 'translateX(28px)' : from === 'none' ? 'none' : 'translateY(24px)';
  return (
    <div ref={ref} className={className} style={{ opacity: visible?1:0, transform: visible?'none':t, transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  );
};

function useCountUp(target: string, duration = 2000) {
  const [display, setDisplay] = useState('0');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const numeric = parseInt(target.replace(/[^0-9]/g, ''), 10);
  const suffix  = target.replace(/[0-9]/g, '');
  const startAnim = React.useCallback(() => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = Math.floor(eased * numeric);
      if (progress < 1) { setDisplay(String(current) + suffix); requestAnimationFrame(tick); }
      else setDisplay(target);
    };
    requestAnimationFrame(tick);
  }, [started, numeric, suffix, target, duration]);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { startAnim(); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el); return () => obs.disconnect();
  }, [startAnim]);
  return { ref, display };
}
const CountUpStat = ({ value, className }: { value: string; className?: string }) => {
  const { ref, display } = useCountUp(value);
  return <span ref={ref} className={className}>{display}</span>;
};

const ventures = [
  { id:'healthcare',            category:'Healthcare',            description:"Sudhanand Healthcare Solutions Pvt. Ltd. (SHPL) and Sudhanand Pharmacies Pvt. Ltd. (SPPL) are committed to providing advanced healthcare solutions, including hospitals, clinics, and medical equipment, to promote a healthier society.", bgImage:'/healthcare.png' },
  { id:'technology',            category:'Technology',            description:"Sudhanand Business Solutions Pvt. Ltd. (SBPL) and TiaMeds Technologies Pvt. Ltd. provide cutting-edge IT solutions, including software development, digital transformation, and cybersecurity, to empower businesses in the digital age.", bgImage:'/tech.png' },
  { id:'hospitality',           category:'Hospitality',           description:"Nova Candolim by Sudhanand in Goa and Sudhanand Four Seasons in Mysore focus on delivering world-class hospitality services, including hotels, resorts, and catering, to enhance customer experiences with top-tier service and comfort.", bgImage:'/hospitality.png' },
  { id:'sports-infrastructure', category:'Sports Infrastructure', description:"At ARC Sportzone, we build and operate modern sports facilities, stadiums, and training centers to promote fitness, wellness, and the development of athletic talent.", bgImage:'/sports.png' },
  { id:'charitable-trust',      category:'Charitable Trust',      description:"Our CSR initiatives, led by Sudhanand Educational Trust and Cure Plus Blood Bank, focus on education, healthcare, and community development to create a positive social impact.", bgImage:'/charity.png' },
];

export default function BusinessVenturesPage() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const pageBg   = dark ? 'bg-slate-950' : 'bg-white';
  const statBg   = dark ? 'bg-slate-900' : 'bg-white';
  const statText = dark ? 'text-slate-400' : 'text-slate-500';
  const heroGrad = dark ? 'bg-gradient-to-b from-slate-950/10 to-slate-950' : 'bg-gradient-to-b from-white/0 to-white';

  return (
    <>
      <Header />
      <main className={`transition-colors duration-300 ${pageBg}`}>

        {/* ── HERO ── */}
        <section className="relative h-80 md:h-96 px-6 md:px-20 lg:px-40 pt-12 pb-10 flex flex-col justify-end">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image src="/venture.png" alt="Our Ventures" fill className="object-cover" priority />
            <div className={`absolute inset-0 transition-colors duration-500 ${heroGrad}`} />
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end gap-6">
            <Reveal from="left">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold font-['Geist'] leading-tight transition-colors duration-300 ${dark ? 'text-slate-300' : 'text-gray-700'}`}>
                Our ventures
              </h1>
            </Reveal>
            <Reveal delay={0.2} from="right">
              <p className={`w-full lg:w-72 text-base md:text-lg font-medium leading-snug transition-colors duration-300 ${dark ? 'text-slate-400' : 'text-neutral-700'}`}>
                Driving innovation across healthcare, technology, and lifestyle through purpose driven ventures.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={`px-6 md:px-20 lg:px-40 pt-8 pb-4 transition-colors duration-300 ${statBg}`}>
          <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-4">
            {[['15+','Years in Service'],['120%','Year-on-year growth'],['10+','Brands in various sectors']].map(([num, label], i) => (
              <Reveal key={i} delay={i * 0.1} className="flex flex-col items-center gap-4 md:gap-10">
                <CountUpStat value={num!} className={`text-7xl md:text-8xl lg:text-9xl font-normal font-['Geist'] leading-none tabular-nums ${statText}`} />
                <span className={`text-lg md:text-2xl font-normal font-['Geist'] leading-relaxed text-center ${statText}`}>{label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── VENTURES GRID ── */}
        <section className={`px-6 sm:px-12 md:px-20 lg:px-36 py-16 md:py-28 transition-colors duration-300 ${statBg}`}>
          <div className={`w-full max-w-6xl mx-auto pb-5 border-b ${dark ? 'border-slate-700' : 'border-slate-200'} flex flex-col gap-10 md:gap-16`}>
            {[ventures.slice(0,2), ventures.slice(2,4), ventures.slice(4)].map((row, ri) => (
              <div key={ri} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
                {row.map((v, i) => (
                  <Reveal key={v.id} delay={i * 0.1}>
                    <Link href={`/ventures/${v.id}`} className={`group block border-t transition-all duration-300 ${dark ? 'border-slate-700 hover:border-slate-400' : 'border-slate-200 hover:border-slate-500'}`}>
                      <div className="relative h-52 md:h-64 overflow-hidden">
                        <Image src={v.bgImage} alt={v.category} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="py-5 flex flex-col gap-3">
                        <h3 className={`text-xl md:text-2xl font-bold leading-loose ${statText}`}>{v.category}</h3>
                        <p className={`text-sm md:text-base leading-snug ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{v.description}</p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div className="relative h-52 sm:h-80 md:h-[500px] lg:h-[625px]">
          <Image src="/Image divider section.png" alt="Ventures Banner" fill className="object-cover" />
        </div>

      </main>
      <Footer />
    </>
  );
}