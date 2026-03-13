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

const ventures = [
  {
    logo:'/technology-page/SBPL 2 2.png', logoW:112, logoH:96, logoClass:'w-20 md:w-28 h-auto',
    href:'https://www.sudhanandbusinesssolutions.com/', name:'Sudhanand Business Solutions',
    desc:"Sudhanand Business Solutions Pvt. Ltd. is a growing IT and ITES company with presence in India and the USA. Since 2019, SBPL has built a strong reputation, growing from 4 employees to over 100 professionals. Our IT wing specializes in Software Testing and Data Science using Agile, Selenium, Jira, and RPA. In ITES, SBPL supports pre-underwriting, claims, bookrolls & policy binding, and accounting, serving top home insurance providers like Cabrillo Coastal in the USA.",
  },
  {
    logo:'/technology-page/tiameds.png', logoW:256, logoH:96, logoClass:'w-48 md:w-64 h-auto',
    href:'https://www.tiameds.ai/', name:'TiaMeds Technologies Pvt. Ltd.',
    desc:"TiaMeds Technologies Pvt. Ltd., founded in early 2024, is the tech arm of the Sudhanand Group, focused on developing cutting-edge, in-house software solutions for the healthcare and pharma sectors. With expertise in development, testing, data science, BI, analytics, and digital marketing, our team delivers end-to-end products built for impact.",
  },
  {
    logo:'/technology-page/sinimeds.png', logoW:128, logoH:96, logoClass:'w-20 md:w-28 h-auto',
    href:'https://www.sinimeds.com/', name:'SiniMeds Pvt. Ltd.',
    desc:"SiniMeds Pvt.Ltd. is a modern medical billing and revenue cycle management partner, designed to simplify operations and improve cash flow for healthcare providers. Our AI-powered platform ensures accurate coding, faster claim processing, and proactive denial prevention. Fully HIPAA compliant, we safeguard patient data while helping practices run more efficiently.",
  },
];


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
export default function TechnologyPage() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const pageBg    = dark ? 'bg-slate-950' : 'bg-orange-50';
  const sectionBg = dark ? 'bg-slate-900' : 'bg-orange-50';
  const statText  = dark ? 'text-slate-400' : 'text-blue-950';
  const border    = dark ? 'border-slate-600' : 'border-black';
  const bodyText  = dark ? 'text-slate-400'  : 'text-black';
  const linkText  = dark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800';
  const headText  = dark ? 'text-blue-300' : 'text-blue-950';

  return (
    <div className={`flex flex-col transition-colors duration-300 ${pageBg}`}>
      <Header />

      {/* Hero */}
      <div className="relative h-56 md:h-80 lg:h-96 px-5 md:px-10 lg:px-40 pt-12 pb-10 flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <Image src="/tech-head.png" alt="Technology" fill className="object-cover" priority />
        </div>
        {dark && (
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 to-slate-950/80 z-[1]" />
        )}
        {!dark && (
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/0 to-orange-50 z-[1]" />
        )}
        <div className="relative z-[2]">
          <Reveal>
            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-semibold font-['Geist'] leading-tight ${headText}`}>Technology Frontier</h1>
            <p className={`text-xl md:text-3xl lg:text-4xl font-medium font-['Geist'] leading-tight mt-1 ${dark?'text-slate-400':'text-black'}`}>Where ideas drive change</p>
          </Reveal>
        </div>
      </div>

      {/* Stats */}
      <div className={`px-5 md:px-10 lg:px-40 pt-8 pb-4 transition-colors duration-300 ${sectionBg}`}>
        <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
          {[['15+','Hospitals'],['5L+','Patients served'],['100+','Professionals across teams']].map(([num,label],i) => (
            <Reveal key={i} delay={i*0.12} className="flex flex-col items-center gap-4 md:gap-10">
              <CountUpStat value={num!} className={`text-5xl md:text-7xl lg:text-9xl font-normal font-['Geist'] leading-tight tabular-nums ${statText}`} />
              <span className={`text-lg md:text-2xl font-normal font-['Geist'] leading-relaxed ${statText}`}>{label}</span>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Ventures */}
      <div className={`px-5 md:px-10 lg:px-36 pt-12 md:pt-28 pb-14 md:pb-40 transition-colors duration-300 ${sectionBg} flex flex-col items-center gap-10`}>
        <div className="w-full max-w-[1040px] flex flex-col">

          {/* Row 1: two ventures */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-0">
            {ventures.slice(0,2).map((v,i) => (
              <Reveal key={v.name} delay={i*0.12} className="w-full lg:w-[480px]">
                <div className={`py-8 lg:py-12 border-t ${border} flex flex-col gap-6 lg:gap-14`}>
                  <Image src={v.logo} alt={v.name} width={v.logoW} height={v.logoH} className={v.logoClass+' object-contain'} />
                  <div className="flex flex-col gap-4 lg:gap-8">
                    <div className="flex items-start gap-4">
                      <a href={v.href} target="_blank" rel="noopener noreferrer"
                        className={`flex-1 text-xl lg:text-3xl font-normal font-['Geist'] capitalize leading-relaxed lg:leading-loose hover:underline ${linkText}`}>
                        {v.name}
                      </a>
                      <a href={v.href} target="_blank" rel="noopener noreferrer" className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 mt-1">
                        <Image src="/link-icon.png" alt="Link" width={24} height={24} className={`w-full h-full ${dark?'invert opacity-60':''}`} />
                      </a>
                    </div>
                    <p className={`text-sm lg:text-base font-normal font-['Geist'] leading-snug ${bodyText}`}>{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Row 2: single venture + bottom border */}
          <div className={`border-b ${border} flex flex-col lg:flex-row`}>
            <Reveal delay={0} className="w-full lg:w-[480px]">
              <div className={`py-8 lg:py-12 border-t ${border} flex flex-col gap-6 lg:gap-14`}>
                <Image src={ventures[2].logo} alt={ventures[2].name} width={ventures[2].logoW} height={ventures[2].logoH} className={ventures[2].logoClass+' object-contain'} />
                <div className="flex flex-col gap-4 lg:gap-8">
                  <div className="flex items-start gap-4">
                    <a href={ventures[2].href} target="_blank" rel="noopener noreferrer"
                      className={`flex-1 text-xl lg:text-3xl font-normal font-['Geist'] capitalize leading-relaxed lg:leading-loose hover:underline ${linkText}`}>
                      {ventures[2].name}
                    </a>
                    <a href={ventures[2].href} target="_blank" rel="noopener noreferrer" className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 mt-1">
                      <Image src="/link-icon.png" alt="Link" width={24} height={24} className={`w-full h-full ${dark?'invert opacity-60':''}`} />
                    </a>
                  </div>
                  <p className={`text-sm lg:text-lg font-normal font-['Geist'] leading-normal ${bodyText}`}>{ventures[2].desc}</p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="relative h-48 md:h-80 lg:h-[625px]">
        <Image src="/tech-div.png" alt="Technology team" fill className="object-cover" />
      </div>

      <Footer />
    </div>
  );
}