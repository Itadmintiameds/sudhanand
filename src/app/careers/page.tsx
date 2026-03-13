'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useTheme } from '@/app/components/DarkModeContext';

type Job = { id: number; title: string; location: string; exp: string; category: string; applyUrl: string; onsite?: boolean; fullTime?: boolean; };

const industries = [
  { name:'Healthcare',  image:'/career/Rectangle 61 (1).png' },
  { name:'Pharma',      image:'/career/Rectangle 62 (1).png' },
  { name:'Hospitality', image:'/career/Rectangle 64 (1).png' },
  { name:'Technology',  image:'/career/Rectangle 65 (1).png' },
  { name:'Sports',      image:'/career/Rectangle 63 (1).png' },
];

function parseJobsFromCSV(csv: string): Job[] {
  const lines = csv.trim().split('\n'); if (lines.length < 2) return [];
  const headers = lines[0].split(',').map(h => h.trim());
  return lines.slice(1).filter(Boolean).map(line => {
    const vals = line.split(',');
    const obj: Record<string, string|number|boolean> = {};
    headers.forEach((h, i) => {
      const v = vals[i]?.trim() ?? '';
      if (h==='id') obj[h] = parseInt(v,10);
      else if (h==='onsite'||h==='fullTime') obj[h] = v.toLowerCase()==='true';
      else obj[h] = v;
    });
    return obj as unknown as Job;
  }).filter(j => j.id && j.title);
}

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
    <div ref={ref} className={className} style={{ opacity: visible?1:0, transform: visible?'none':'translateY(24px)', transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
};

export default function CareersPage() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('View all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-LW4hTDmhoBa_90tdx8HkGIsiZQc7_NSDBJm_CEKL2WdIxgEiERzDzdFCmJK6Drpp8LXEFdRgg_Ef/pub?gid=0&single=true&output=csv';
    fetch(url).then(r=>r.text()).then(csv=>{ setJobs(parseJobsFromCSV(csv)); }).catch(console.error).finally(()=>setIsLoading(false));
  }, []);

  const uniqueCategories = Array.from(new Set(jobs.map(j => j.category)));
  // Only show "View all" + category filters if there are 2+ distinct categories
  const showFilters = uniqueCategories.length >= 2;
  const categories = showFilters ? ['View all', ...uniqueCategories] : uniqueCategories;
  const filtered = selectedCategory === 'View all' ? jobs : jobs.filter(j => j.category === selectedCategory);

  const pageBg    = dark ? 'bg-slate-950' : 'bg-orange-50';
  const sectionBg = dark ? 'bg-slate-900' : 'bg-orange-50';
  const cardBg    = dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200';
  const headText  = dark ? 'text-slate-300' : 'text-slate-500';
  const bodyText  = dark ? 'text-slate-400' : 'text-zinc-700';
  const titleText = dark ? 'text-slate-200' : 'text-neutral-900';
  const subText   = dark ? 'text-slate-500' : 'text-gray-600';
  const chipBg    = dark ? 'bg-orange-900/50 text-orange-300' : 'bg-orange-100 text-orange-700';
  const tagBg     = dark ? 'bg-slate-700 text-slate-300'  : 'bg-gray-100 text-gray-800';
  const filterActive   = 'bg-orange-500 text-white border-orange-500 shadow-md';
  const filterInactive = dark ? 'bg-slate-800 text-slate-300 border-slate-600 hover:bg-slate-700' : 'bg-white text-gray-700 border-gray-300 hover:bg-orange-100';
  const heroOverlay = dark ? 'bg-gradient-to-b from-slate-950/20 to-slate-950/85' : 'bg-gradient-to-b from-orange-50/0 to-orange-50';

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${pageBg}`}>
      <Header />

      {/* ── HERO ── */}
      <section className="relative w-full h-[300px] md:h-[420px] lg:h-[560px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <Image src="/career/Header section.png" alt="Careers Hero" fill className="object-cover" quality={80} priority />
        </div>
        <div className={`absolute inset-0 z-[1] transition-colors duration-500 ${heroOverlay}`} />
        <div className="relative z-[2] px-6 md:px-12 lg:px-20 pb-8 md:pb-12 flex flex-col sm:flex-row justify-between items-end gap-4">
          <Reveal>
            <h1 className={`text-5xl md:text-6xl lg:text-8xl font-normal font-['Geist'] leading-none ${headText}`}>Join Us</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className={`text-sm md:text-base font-medium font-['Geist'] leading-relaxed max-w-xs md:max-w-sm text-right ${bodyText}`}>
              Build your career with one of India&apos;s fastest-growing diversified groups across healthcare, hospitality, sports, and technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className={`w-full px-4 md:px-12 lg:px-20 py-10 md:py-14 transition-colors duration-300 ${sectionBg}`}>
        <Reveal>
          <h2 className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-6 ${titleText}`}>Be Part Of Diverse Industries</h2>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.08}>
              <div className="relative h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden group cursor-pointer">
                <Image src={ind.image} alt={ind.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-3 md:p-4">
                  <h3 className="text-white text-sm md:text-lg font-semibold">{ind.name}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── JOBS ── */}
      <section className={`w-full px-4 md:px-12 lg:px-20 py-10 md:py-14 transition-colors duration-300 ${sectionBg}`}>
        <Reveal>
          <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1 ${titleText}`}>Open Positions</h2>
          <p className={`text-sm md:text-base max-w-2xl mb-6 ${subText}`}>We are always seeking passionate individuals to grow alongside us.</p>
        </Reveal>

        {/* Filters — only shown when 2+ categories exist */}
        {showFilters && (
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {categories.map(cat => (
                <button key={cat} onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-sm border transition-all duration-200 font-medium ${selectedCategory === cat ? filterActive : filterInactive}`}>
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {isLoading ? (
          <div className="flex justify-center py-16">
            <div className="h-10 w-10 border-4 border-orange-300 border-t-orange-500 animate-spin rounded-full" />
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((job, i) => (
              <Reveal key={job.id} delay={(i % 3) * 0.08}>
                <div className={`rounded-2xl border shadow-sm p-5 flex flex-col justify-between h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${cardBg}`}>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className={`text-base md:text-lg font-semibold ${titleText}`}>{job.title}</h3>
                      <span className={`flex-shrink-0 text-xs px-3 py-1 rounded-full font-medium ${chipBg}`}>{job.category}</span>
                    </div>
                    <p className={`mt-2 text-sm ${subText}`}>{job.exp}</p>
                    <p className={`mt-0.5 text-sm ${subText}`}>{job.location}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      {job.onsite && <span className={`px-2 py-1 rounded-md font-medium ${tagBg}`}>Onsite</span>}
                      {job.fullTime && <span className={`px-2 py-1 rounded-md font-medium ${tagBg}`}>Full-time</span>}
                    </div>
                  </div>
                  <a href={job.applyUrl} target="_blank" rel="noopener noreferrer"
                    className="mt-4 self-start rounded-lg bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 text-sm font-medium transition-colors duration-200 inline-block">
                    Apply Now
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className={`py-16 px-6 text-center rounded-xl border ${dark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
              <h4 className={`text-base font-semibold ${titleText}`}>No Open Positions</h4>
              <p className={`mt-1 text-sm ${subText}`}>There are currently no open positions. Please check back later.</p>
            </div>
          </Reveal>
        )}
      </section>

      {/* ── SCROLLING IMAGES ── */}
      <section className={`w-full overflow-hidden py-6 transition-colors duration-300 ${sectionBg}`}>
        <style>{`
          @keyframes careers-scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .careers-scroll-wrapper { display:flex; width:max-content; animation:careers-scroll 30s linear infinite; }
          .careers-scroll-wrapper:hover { animation-play-state:paused; }
        `}</style>
        <div className="careers-scroll-wrapper">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-start gap-3 md:gap-4 mx-2">
              <div className="w-40 h-40 sm:w-72 sm:h-64 md:w-[400px] md:h-[360px] lg:w-[580px] lg:h-[460px] relative flex-shrink-0">
                <Image src="/career/Rectangle 52 (1).png" alt="Hospital" fill className="object-cover rounded-lg" />
              </div>
              <div className="flex flex-col gap-3 md:gap-4 flex-shrink-0">
                <div className="w-40 h-[76px] sm:w-64 sm:h-[124px] md:w-[360px] md:h-[174px] lg:w-[480px] lg:h-[222px] relative">
                  <Image src="/career/Rectangle 54 (1).png" alt="Team" fill className="object-cover rounded-lg" />
                </div>
                <div className="w-40 h-[76px] sm:w-64 sm:h-[124px] md:w-[360px] md:h-[174px] lg:w-[480px] lg:h-[222px] relative">
                  <Image src="/career/Rectangle 55 (2).png" alt="Care" fill className="object-cover rounded-lg" />
                </div>
              </div>
              <div className="w-28 h-40 sm:w-48 sm:h-64 md:w-[260px] md:h-[360px] lg:w-[340px] lg:h-[460px] relative flex-shrink-0">
                <Image src="/career/Rectangle 57.png" alt="Building" fill className="object-cover rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}