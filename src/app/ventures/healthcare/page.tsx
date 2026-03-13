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
export default function HealthcarePage() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const pageBg    = dark ? 'bg-slate-950' : 'bg-orange-50';
  const sectionBg = dark ? 'bg-slate-900' : 'bg-orange-50';
  const statText  = dark ? 'text-slate-400' : 'text-slate-500';
  const border    = dark ? 'border-slate-600' : 'border-black';
  const bodyText  = dark ? 'text-slate-400'  : 'text-black';
  const linkText  = dark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800';

  return (
    <div className={`flex flex-col min-h-screen overflow-x-hidden transition-colors duration-300 ${pageBg}`}>
      <Header />

      {/* Hero */}
      <div className="relative h-56 sm:h-80 md:h-96 px-4 sm:px-10 lg:px-40 pt-8 md:pt-12 pb-8 md:pb-10 flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <Image src="/healthhead.png" alt="Healthcare" fill className="object-cover" priority style={{ objectPosition:'center' }} />
        </div>
        {dark && (
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 to-slate-950/80 z-[1]" />
        )}
        {!dark && (
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/0 to-orange-50 z-[1]" />
        )}
        <div className="relative z-[2] w-full max-w-[1180px] mx-auto">
          <Reveal>
            <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] ${dark?'text-slate-300':'text-slate-500'}`}>Healthcare Services</h1>
            <p className={`text-base sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-2 sm:mt-4 max-w-[502px] ${dark?'text-slate-400':'text-black'}`}>It&apos;s all about caring for people</p>
          </Reveal>
        </div>
      </div>

      {/* Stats */}
      <div className={`w-full px-4 sm:px-10 lg:px-40 pt-8 pb-4 transition-colors duration-300 ${sectionBg}`}>
        <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
          {[['15+','Hospitals'],['5L+','Patients served'],['15+','Years in service']].map(([num,label],i) => (
            <Reveal key={i} delay={i*0.12} className="flex flex-col items-center gap-3 md:gap-6">
              <CountUpStat value={num!} className={`text-5xl md:text-7xl lg:text-9xl font-normal leading-tight tabular-nums ${statText}`} />
              <span className={`text-lg md:text-2xl font-normal ${statText}`}>{label}</span>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Ventures */}
      <div className={`w-full px-4 sm:px-10 lg:px-28 pt-10 md:pt-24 lg:pt-40 pb-14 md:pb-40 transition-colors duration-300 ${sectionBg} flex flex-col items-center gap-10`}>
        <div className={`w-full max-w-[1040px] pb-8 md:pb-10 border-b ${border} flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0`}>

          {/* Venture 1 */}
          <Reveal delay={0} className="w-full md:w-[480px]">
            <div className={`pt-4 md:pt-8 border-t ${border} flex flex-col gap-6 md:gap-14`}>
              <div className="w-40 h-16 md:w-52 md:h-24 relative">
                <Image src="/hospitality-page/cureplus.png" alt="Cureplus Hospitals" fill className="object-contain" />
              </div>
              <div className="flex flex-col gap-2 md:gap-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-4">
                  <a href="https://www.cureplushospitals.com/" target="_blank" rel="noopener noreferrer"
                    className={`text-xl md:text-2xl lg:text-3xl font-normal font-['Geist'] capitalize leading-loose hover:underline ${linkText}`}>
                    Sudhanand Healthcare Solutions Pvt. Ltd.
                  </a>
                  <a href="https://www.cureplushospitals.com/" target="_blank" rel="noopener noreferrer" className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
                    <Image src="/link-icon.png" alt="Link" width={24} height={24} className={`w-full h-full ${dark?'invert opacity-60':''}`} />
                  </a>
                </div>
                <p className={`text-sm md:text-base leading-snug ${bodyText}`}>
                  Cureplus Hospitals is a growing network across Mysore, Chamarajanagar & Kodagu, led by the 40-bed NABH-accredited Cureplus Disha Hospital in Mysuru. The network includes 20-bed hospitals in T. Narasipura, Hassan, Bherya, H.D. Kote, Halli Mysuru, Hosur, Ramapura & Terakanambi. Offering affordable, quality care with modern diagnostics, Cureplus combines clinical excellence with compassion across urban & rural communities.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Venture 2 */}
          <Reveal delay={0.15} className="w-full md:w-[480px]">
            <div className={`pt-4 md:pt-8 border-t ${border} flex flex-col gap-6 md:gap-14`}>
              <div className="w-16 h-16 md:w-24 md:h-24 relative">
                <Image src="/hospitality-page/SUDHANAND PHARMACIES 1.png" alt="Sudhanand Pharmacies" fill className="object-contain" />
              </div>
              <div className="flex flex-col gap-2 md:gap-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-4">
                  <a href="https://www.sudhanandpharmacies.com/" target="_blank" rel="noopener noreferrer"
                    className={`text-xl md:text-2xl lg:text-3xl font-normal font-['Geist'] capitalize leading-loose hover:underline ${linkText}`}>
                    Sudhanand Pharmacies Pvt. Ltd.
                  </a>
                  <a href="https://www.sudhanandpharmacies.com/" target="_blank" rel="noopener noreferrer" className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
                    <Image src="/link-icon.png" alt="Link" width={24} height={24} className={`w-full h-full ${dark?'invert opacity-60':''}`} />
                  </a>
                </div>
                <p className={`text-sm md:text-base leading-snug ${bodyText}`}>
                  Sudhanand Pharmacies Pvt. Ltd. (SPPL), founded in 2023, is the pharmaceutical arm of the Sudhanand Group, committed to delivering high-quality, effective, and affordable medicines. Currently offering 31 products across key therapeutic areas, SPPL continues to expand its portfolio. Our focus is on balancing efficacy and affordability to make reliable healthcare accessible to all.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Divider */}
      <div className="relative h-40 md:h-80 lg:h-[625px]">
        <Image src="/health div.png" alt="Healthcare team" fill className="object-cover" />
      </div>

      <Footer />
    </div>
  );
}