'use client';
import React, { useEffect, useRef, useState} from 'react';
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
export default function HospitalityPage() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const pageBg    = dark ? 'bg-slate-950' : 'bg-orange-50';
  const sectionBg = dark ? 'bg-slate-900' : 'bg-orange-50';
  const statText  = dark ? 'text-slate-400' : 'text-slate-500';
  const statLabel = dark ? 'text-slate-400' : 'text-blue-950';
  const border    = dark ? 'border-slate-600' : 'border-black';
  const bodyText  = dark ? 'text-slate-400'  : 'text-black';
  const linkText  = dark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800';

  return (
    <div className={`flex flex-col overflow-x-hidden transition-colors duration-300 ${pageBg}`}>
      <Header />

      {/* Hero */}
      <div className="relative h-64 sm:h-80 md:h-96 px-4 sm:px-10 lg:px-40 pt-8 sm:pt-12 pb-8 sm:pb-10 flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <Image src="/hospi-head.png" alt="Hospitality" fill className="object-cover" priority />
        </div>
        {dark && (
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 to-slate-950/80 z-[1]" />
        )}
        {!dark && (
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/0 to-orange-50 z-[1]" />
        )}
        <div className="relative z-[2]">
          <Reveal>
          <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-semibold font-['Geist'] leading-[1.1] ${dark?'text-slate-300':'text-slate-500'}`}>Warm Hospitality</h1>
          <p className={`text-lg md:text-3xl lg:text-4xl font-medium font-['Geist'] mt-2 ${dark?'text-slate-400':'text-black'}`}>Welcome to a World of Comfort and Care</p>
          </Reveal>
        </div>
      </div>

      {/* Stats */}
      <div className={`px-4 sm:px-10 lg:px-40 pt-8 pb-4 transition-colors duration-300 ${sectionBg}`}>
        <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
          {[['2+','Stays and expanding'],['1L+','Satisfied customers'],['80+','Exceptional Hospitality Team']].map(([num,label],i) => (
            <Reveal key={i} delay={i*0.12} className="flex flex-col items-center gap-4 md:gap-10">
              <CountUpStat value={num!} className={`text-5xl sm:text-7xl lg:text-9xl font-normal font-['Geist'] leading-tight tabular-nums ${statText}`} />
              <span className={`text-lg sm:text-xl lg:text-2xl font-normal font-['Geist'] leading-relaxed ${statLabel}`}>{label}</span>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Ventures */}
      <div className={`px-4 sm:px-20 lg:px-36 py-14 sm:py-28 transition-colors duration-300 ${sectionBg} flex flex-col items-center gap-14 sm:gap-40`}>
        <div className={`w-full max-w-[1040px] pb-8 sm:pb-10 border-b ${border} flex flex-col sm:flex-row justify-between items-start gap-10 sm:gap-0`}>

          {/* Nova Candolim */}
          <Reveal delay={0} className="w-full sm:w-[480px]">
            <div className={`pt-6 sm:pt-8 border-t ${border} flex flex-col gap-6 md:gap-14`}>
              <div className="relative w-20 h-24">
                <Image src="/hospitality-page2/NOVA CANDOLIM BY SUDHANAND 2.png" alt="Nova Candolim" fill className="object-contain" />
              </div>
              <div className="flex flex-col gap-4 sm:gap-8">
                <div className="flex justify-between items-start gap-4">
                  <a href="https://sudhanandnovacandolim.com/" target="_blank" rel="noopener noreferrer"
                    className={`flex-1 text-2xl md:text-3xl font-normal font-['Geist'] capitalize leading-loose hover:underline ${linkText}`}>
                    Sudhanand Candolim In Goa
                  </a>
                  <a href="https://sudhanandnovacandolim.com/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex-shrink-0 mt-2">
                    <Image src="/link-icon.png" alt="Link" width={24} height={24} className={`w-full h-full ${dark?'invert opacity-60':''}`} />
                  </a>
                </div>
                <p className={`text-sm md:text-base font-normal font-['Geist'] leading-snug ${bodyText}`}>
                  Nova Candolim by Sudhanand is a boutique hotel in North Goa, ideally located on Candolim Main Road near Fort Aguada and Baga Beach. Our stylish, air-conditioned rooms offer cozy luxury with modern comforts. Guests can enjoy delicious meals at our pool-view restaurant, unwind at the vibrant outdoor restobar, or relax at our top-floor spa. Perfect for couples, families, or solo travelers.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Four Seasons */}
          <Reveal delay={0.15} className="w-full sm:w-[480px]">
            <div className={`pt-6 sm:pt-14 border-t ${border} flex flex-col gap-6 md:gap-14`}>
              <div className="relative w-72 h-16">
                <Image src="/hospitality-page2/FOUR SEASONS 2.png" alt="Four Seasons Mysore" fill className={`object-contain ${dark ? 'brightness-90' : ''}`} />
              </div>
              <div className="flex flex-col gap-4 sm:gap-8">
                <div className="flex justify-between items-start gap-4">
                  <a href="https://sudhanandfourseasons.com/" target="_blank" rel="noopener noreferrer"
                    className={`flex-1 text-2xl md:text-3xl font-normal font-['Geist'] capitalize leading-loose hover:underline ${linkText}`}>
                    Sudhanand Four Seasons in Mysore
                  </a>
                  <a href="https://sudhanandfourseasons.com/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex-shrink-0 mt-2">
                    <Image src="/link-icon.png" alt="Link" width={24} height={24} className={`w-full h-full ${dark?'invert opacity-60':''}`} />
                  </a>
                </div>
                <p className={`text-sm md:text-base font-normal font-['Geist'] leading-snug ${bodyText}`}>
                  Sudhanand Four Seasons is a deluxe boutique hotel in Mysore, offering luxury, comfort, and exceptional service. Located near Mysore Palace and Nexus Mall, ideal for both leisure and business travelers. Our stylish rooms provide a serene environment. We offer complimentary Wi-Fi, 24/7 room service, and in-house dining, ensuring the highest standards of hospitality.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Divider */}
      <div className="relative h-40 sm:h-64 lg:h-[625px]">
        <Image src="/hospi-div.png" alt="Hospitality" fill className="object-cover" />
      </div>

      <Footer />
    </div>
  );
}