'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
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
const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={className} style={{ opacity:visible?1:0, transform:visible?'none':'translateY(28px)', transition:`opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  );
};


function useCountUp(target: string, duration = 2000) {
  const [display, setDisplay] = useState('0');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Parse the true numeric value and final display suffix
  const { numeric, suffix, isLakh, isMillion } = React.useMemo(() => {
    const isLakh   = target.includes('L');
    const isMillion = target.includes('M');
    const rawNum   = parseInt(target.replace(/[^0-9]/g, ''), 10);
    const numeric  = isLakh ? rawNum * 100000 : isMillion ? rawNum * 1000000 : rawNum;
    const suffix   = target.replace(/[0-9]/g, '').replace('L','').replace('M','');
    return { numeric, suffix, isLakh, isMillion };
  }, [target]);

  const startAnim = React.useCallback(() => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = Math.floor(eased * numeric);
      if (progress < 1) {
        // Show raw number while counting: 1,00,000 style for lakh
        if (isLakh || isMillion) {
          setDisplay(current.toLocaleString('en-IN'));
        } else {
          setDisplay(String(current));
        }
        requestAnimationFrame(tick);
      } else {
        setDisplay(target); // snap to e.g. "5L+"
      }
    };
    requestAnimationFrame(tick);
  }, [started, numeric, suffix, target, duration, isLakh, isMillion]);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { startAnim(); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el); return () => obs.disconnect();
  }, [startAnim]);
  return { ref, display };
}
const CountUpStat = ({ value, className }: { value: string; className?: string }) => {
  const { ref, display } = useCountUp(value);
  return <span ref={ref} className={className}>{display}</span>;
};
export default function SportsInfrastructurePage() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const pageBg    = dark ? 'bg-slate-950' : 'bg-orange-50';
  const sectionBg = dark ? 'bg-slate-900' : 'bg-orange-50';
  const statText  = dark ? 'text-slate-400' : 'text-slate-500';
  const border    = dark ? 'border-slate-600' : 'border-black';
  const bodyText  = dark ? 'text-slate-400'  : 'text-black';
  const linkText  = dark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800';

  return (
    <div className={`flex flex-col transition-colors duration-300 ${pageBg}`}>
      <Header />

      {/* Hero */}
      <div className="relative h-56 md:h-80 lg:h-96 px-5 md:px-10 lg:px-40 pt-12 pb-10 flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <Image src="/sports-head.png" alt="Sports Infrastructure" fill className="object-cover" priority />
        </div>
        {dark && (
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 to-slate-950/80 z-[1]" />
        )}
        {!dark && (
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/0 to-orange-50 z-[1]" />
        )}
        <div className="relative z-[2]">
          <Reveal>
          <h1 className={`text-3xl md:text-5xl lg:text-6xl font-semibold font-['Geist'] leading-tight ${dark?'text-slate-300':'text-slate-500'}`}>Sports Infrastructure</h1>
          <p className={`text-xl md:text-3xl lg:text-4xl font-medium font-['Geist'] leading-tight mt-1 ${dark?'text-slate-400':'text-black'}`}>Experience the Thrill of the Game</p>
        </Reveal>
        </div>
      </div>

      {/* Stats */}
      <div className={`px-5 md:px-10 lg:px-40 pt-6 pb-3 transition-colors duration-300 ${sectionBg}`}>
        <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
          {[['20+','Sports activities'],['10M+','Satisfied customers'],['80+','Expert sport trainers']].map(([num,label],i) => (
            <Reveal key={i} delay={i*0.12} className="flex flex-col items-center gap-4 md:gap-10">
              <CountUpStat value={num!} className={`text-5xl md:text-7xl lg:text-9xl font-normal font-['Geist'] leading-tight tabular-nums ${statText}`} />
              <span className={`text-lg md:text-2xl font-normal font-['Geist'] leading-relaxed ${statText}`}>{label}</span>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`px-5 md:px-10 lg:px-36 pt-12 md:pt-28 pb-14 md:pb-40 transition-colors duration-300 ${sectionBg} flex flex-col items-center`}>
        <div className={`w-full max-w-[1040px] border-b ${border} flex flex-col gap-5 md:gap-9`}>
          <Reveal>
            <div className={`py-8 md:py-12 border-t ${border} flex flex-col md:flex-row items-start gap-6 md:gap-10`}>
              {/* Logo + name */}
              <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 flex-shrink-0">
                <div className="relative w-64 h-72 md:w-72 md:h-80 overflow-hidden rounded-lg">
                  <Image src="/sports-page/ARC 1.png" alt="ARC Sportzone" fill className="object-cover" />
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://www.arcsportzone.com/" target="_blank" rel="noopener noreferrer"
                    className={`text-3xl md:text-4xl lg:text-5xl font-normal font-['Geist'] capitalize leading-tight hover:underline ${linkText}`}>
                    ARC Sportzone
                  </a>
                  <a href="https://www.arcsportzone.com/" target="_blank" rel="noopener noreferrer" className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
                    <Image src="/link-icon.png" alt="Link" width={24} height={24} className={`w-full h-full ${dark?'invert opacity-60':''}`} />
                  </a>
                </div>
              </div>
              {/* Description */}
              <div className="flex-1 flex flex-col justify-center">
                <p className={`text-sm md:text-base lg:text-lg font-medium font-['Geist'] leading-normal ${bodyText}`}>
                  ARC Sportzone is Mysore&apos;s premier destination for sports, fitness, and community. More than just a sports club, we offer world-class facilities for basketball, football, badminton, tennis, cricket, and more. With expert coaches and programs focused on skill development, teamwork, endurance, and sportsmanship, we cater to all ages and skill levels. Recognized as the best in Mysore, ARC Sportzone is where goals are set, friendships are made, and victories are celebrated.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Divider */}
      <div className="relative h-48 md:h-80 lg:h-[625px]">
        <Image src="/sports-div.png" alt="Sports" fill className="object-cover" />
      </div>

      <Footer />
    </div>
  );
}