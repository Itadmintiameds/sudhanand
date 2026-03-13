'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useTheme } from '@/app/components/DarkModeContext';

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el); return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const Reveal = ({ children, delay = 0, className = '', from = 'bottom' }: {
  children: React.ReactNode; delay?: number; className?: string; from?: 'bottom'|'left'|'right';
}) => {
  const { ref, visible } = useReveal();
  const t = from === 'left' ? 'translateX(-28px)' : from === 'right' ? 'translateX(28px)' : 'translateY(24px)';
  return (
    <div ref={ref} className={className}
      style={{ opacity: visible?1:0, transform: visible?'none':t, transition:`opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  );
};

const team = [
  { role:'Founder',                            name:'Dr. Arjun Sachidanand', img:'/about/arjunsir.png',
    bio:"Visionary leader with a passion for healthcare and community service. Dedicated career to improving healthcare access for underserved populations, keeping patient care at the forefront of all initiatives." },
  { role:'Managing Director',                  name:'Dr. Sini Arjun',        img:'/about/sinimam.png',
    bio:"Expert in healthcare management and patient care, ensuring quality services across all facilities. Strong advocate for patient rights and community health initiatives." },
  { role:'Chief Operating Officer',            name:'Capt. Raghu Das',       img:'/about/capt.png',
    bio:"Strategic planner focused on operational excellence. Military background instilled discipline applied to day-to-day operations, ensuring all teams work cohesively towards common goals." },
  { role:'Chief Administrative Officer',       name:'Vijay Asrani',          img:'/about/vijay.png',
    bio:"Oversees financial controls, compliance, and internal audits across all verticals. Ensures effective budgeting, reporting, and cost management supporting strategic growth." },
  { role:'VP – New Initiatives & Investments', name:'Mr. Abhinandan S. Rao', img:'/about/abhi.png',
    bio:"Innovative thinker driving new projects and investments for growth. Identifies initiatives aligned with the organization's mission, ensuring resources are allocated to maximize impact." },
  { role:'Senior Operations Manager',          name:'Mr. Srinivasa C',       img:'/about/srinivas.png',
    bio:"Dedicated manager focused on operational efficiency and patient satisfaction. Works with clinical and administrative teams to streamline processes and enhance the patient experience." },
  { role:'VP – Internal Audit & Finance',      name:'Mr. Keshav Murthy',     img:'/about/keshav.png',
    bio:"Financial strategist ensuring fiscal responsibility and transparency. Oversees budgeting, auditing, and compliance with the highest standards of financial integrity." },
];

const AUTO_INTERVAL = 5000;

function LeadershipSection({ dark }: { dark: boolean }) {
  const [active, setActive]   = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused]   = useState(false);

  const go = useCallback((idx: number) => { setActive(idx); setAnimKey(k => k + 1); }, []);
  const next = useCallback(() => go((active + 1) % team.length), [active, go]);
  const prev = useCallback(() => go((active - 1 + team.length) % team.length), [active, go]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => { setActive(a => (a + 1) % team.length); setAnimKey(k => k + 1); }, AUTO_INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  const member = team[active];

  const panelBg   = dark ? 'bg-slate-900'     : 'bg-white';
  const sidebarBg = dark ? 'bg-slate-950'     : 'bg-slate-50';
  const border    = dark ? 'border-slate-800' : 'border-slate-100';
  const rowHover  = dark ? 'hover:bg-slate-800/60' : 'hover:bg-white';
  const activeRow = dark ? 'bg-slate-800'     : 'bg-white';
  const nameText  = dark ? 'text-white'       : 'text-slate-900';
  const bodyText  = dark ? 'text-slate-400'   : 'text-zinc-500';
  const roleColor = dark ? 'text-orange-400'  : 'text-orange-500';
  const numColor  = dark ? 'text-slate-700'   : 'text-slate-300';
  const accentBar = dark ? 'bg-orange-500'    : 'bg-orange-400';
  const btnBorder = dark ? 'border-slate-700 hover:border-slate-500 text-slate-400' : 'border-slate-200 hover:border-slate-400 text-slate-500';
  const progressBg = dark ? 'bg-slate-700'   : 'bg-slate-200';

  return (
    <Reveal className="w-full mx-auto">
      <style>{`
        @keyframes ls-fade-up { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ls-photo   { from{opacity:0;transform:scale(1.04)} to{opacity:1;transform:scale(1)} }
        @keyframes ls-progress{ from{width:0%} to{width:100%} }
        .ls-content { animation: ls-fade-up 0.45s cubic-bezier(.25,.46,.45,.94) both; }
        .ls-photo   { animation: ls-photo   0.5s  cubic-bezier(.25,.46,.45,.94) both; }
        .ls-bar     { animation: ls-progress ${AUTO_INTERVAL}ms linear both; }
      `}</style>

      <div
        className={`flex flex-col lg:flex-row rounded-2xl overflow-hidden border ${border} shadow-md`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* ── SIDEBAR ── */}
        <div className={`lg:w-[300px] flex-shrink-0 flex flex-col ${sidebarBg} border-b lg:border-b-0 lg:border-r ${border}`}>
          <div className={`px-5 pt-5 pb-3 text-[11px] font-bold uppercase tracking-[0.18em] ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
            Leadership
          </div>
          <div className="flex-1 overflow-y-auto">
            {team.map((m, i) => (
              <button key={m.name} onClick={() => { go(i); setPaused(true); }}
                className={`w-full flex items-center gap-3 pl-4 pr-3 py-3.5 text-left transition-all duration-200 border-b ${border} last:border-b-0 relative ${i === active ? activeRow : rowHover}`}>
                {i === active && <div className={`absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full ${accentBar}`} />}
                <div className={`w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-1 transition-all duration-200 ${i === active ? 'ring-orange-400' : (dark ? 'ring-slate-700' : 'ring-slate-200')}`}>
                  <Image src={m.img} alt={m.name} width={40} height={40} className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className={`text-sm font-semibold truncate leading-tight font-['Geist'] ${i === active ? nameText : (dark ? 'text-slate-400' : 'text-slate-600')}`}>{m.name}</span>
                  <span className={`text-[11px] truncate leading-tight mt-0.5 ${i === active ? roleColor : (dark ? 'text-slate-600' : 'text-slate-400')}`}>{m.role}</span>
                </div>
                <span className={`text-xs font-mono flex-shrink-0 ${i === active ? roleColor : numColor}`}>{String(i+1).padStart(2,'0')}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── SPOTLIGHT ── */}
        <div className={`flex-1 flex flex-col sm:flex-row ${panelBg}`}>

          {/* Photo */}
          <div className="relative w-full sm:w-[280px] lg:w-[340px] flex-shrink-0 overflow-hidden" style={{ minHeight: '360px' }}>
            <Image key={`photo-${animKey}`} src={member.img} alt={member.name}
              fill className="object-cover object-[center_15%] ls-photo" />
            <div className={`absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t ${dark ? 'from-slate-900' : 'from-white'} to-transparent`} />
          </div>

          {/* Info — bigger fonts, more breathing room */}
          <div key={`info-${animKey}`} className="ls-content flex-1 flex flex-col justify-between px-8 py-10 lg:py-12">
            <div className="flex flex-col gap-4">
              <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${roleColor}`}>
                {member.role}
              </span>
              <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold font-['Geist'] leading-tight ${nameText}`}>
                {member.name}
              </h3>
              <div className={`w-10 h-[2px] rounded-full ${accentBar}`} />
              <p className={`text-base md:text-lg leading-relaxed font-['Geist'] ${bodyText}`}>
                {member.bio}
              </p>
            </div>

            {/* Controls */}
            <div className="mt-8 flex flex-col gap-3">
              <div className={`h-[2px] w-full rounded-full overflow-hidden ${progressBg}`}>
                <div key={`prog-${animKey}-${paused}`}
                  className={`h-full rounded-full ${accentBar} ${paused ? '' : 'ls-bar'}`}
                  style={{ width: paused ? '0%' : undefined }} />
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => { prev(); setPaused(true); }}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${btnBorder}`}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8 2.5L4.5 6.5L8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button onClick={() => { next(); setPaused(true); }}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${btnBorder}`}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M5 2.5L8.5 6.5L5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <span className={`text-[11px] font-mono ml-1 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {String(active+1).padStart(2,'0')} / {String(team.length).padStart(2,'0')}
                </span>
                <button onClick={() => setPaused(p => !p)}
                  className={`ml-auto flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all duration-200 ${paused ? (dark ? 'border-orange-500/50 text-orange-400' : 'border-orange-400 text-orange-500') : btnBorder}`}>
                  {paused
                    ? <><svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><polygon points="2,1 9,5 2,9"/></svg>Auto</>
                    : <><svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><rect x="1.5" y="1" width="2.5" height="8"/><rect x="6" y="1" width="2.5" height="8"/></svg>Pause</>
                  }
                </button>
              </div>
              <div className="flex gap-1.5 mt-1">
                {team.map((_, i) => (
                  <button key={i} onClick={() => { go(i); setPaused(true); }}
                    className={`rounded-full transition-all duration-300 ${i === active ? `w-5 h-1.5 ${accentBar}` : `w-1.5 h-1.5 ${dark ? 'bg-slate-700 hover:bg-slate-500' : 'bg-slate-300 hover:bg-slate-400'}`}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function AboutPage() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const pageBg   = dark ? 'bg-slate-950' : 'bg-white';
  const secBg    = dark ? 'bg-slate-900' : 'bg-orange-50';
  const headText = dark ? 'text-slate-400' : 'text-slate-500';
  const bodyText = dark ? 'text-slate-400' : 'text-zinc-600';
  // const divider  = dark ? 'bg-slate-700'  : 'bg-slate-200';
  const heroOverlay = dark
    ? 'bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/85'
    : 'bg-gradient-to-b from-black/0 via-black/0 to-black/55';

  return (
    <div className={`flex flex-col w-full transition-colors duration-300 ${pageBg}`}>
      <Header />

      {/* ── HERO — smaller, minimal ── */}
      <section
        className="relative h-[320px] md:h-[420px] lg:h-[520px] bg-cover bg-center bg-[top_10%]"
        style={{ backgroundImage: "url('/about-head.png')" }}
      >
        <div className={`absolute inset-0 transition-colors duration-500 ${heroOverlay}`} />
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12 pb-7 md:pb-10">
          <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-end gap-3 md:gap-10">
            <Reveal from="left" className="flex-1 min-w-0">
              <h1 className={`text-3xl md:text-4xl lg:text-5xl font-normal font-['Geist'] leading-[1.05] ${headText}`}>
                Company Profile
              </h1>
            </Reveal>
            <Reveal delay={0.2} from="right" className="self-end w-full md:w-[280px] lg:w-[320px] flex-shrink-0">
              <p className={`text-xs md:text-sm font-normal font-['Geist'] leading-relaxed ${dark ? 'text-slate-400' : 'text-white/80'}`}>
                Empowering communities through impactful initiatives in healthcare, education, and well-being.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <div className={`w-full transition-colors duration-300 ${secBg}`}>

        {/* Vision */}
        <Reveal>
          <div className="flex flex-col lg:flex-row">
            {/* Image — full bleed left */}
            <div className="relative w-full lg:w-[45%] h-64 md:h-80 lg:h-auto lg:min-h-[420px] flex-shrink-0 overflow-hidden">
              <Image src="/about/bulb.png" alt="Vision" fill className="object-cover object-center" />
              <div className={`absolute inset-0 ${dark ? 'bg-gradient-to-r from-transparent to-slate-900/60' : 'bg-gradient-to-r from-transparent to-orange-50/70'}`} />
            </div>
            {/* Text */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-16 py-12 md:py-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-normal font-['Geist'] leading-tight mb-6 ${headText}`}>Our Vision</h2>
              <div className={`w-12 h-[2px] mb-6 ${dark ? 'bg-orange-500' : 'bg-orange-400'}`} />
              <p className={`text-base md:text-lg leading-relaxed font-['Geist'] max-w-xl ${bodyText}`}>
                To be a transformative force across industries — delivering world-class solutions in healthcare, pharmaceuticals, technology, hospitality, and wellness while uplifting communities. By 2030, we aim to build over 200 CurePlus Hospitals across Karnataka, Goa and beyond.
              </p>
            </div>
          </div>
        </Reveal>

        <div className={`h-px mx-6 md:mx-12 lg:mx-20 ${dark ? 'bg-slate-800' : 'bg-slate-200'}`} />

        {/* Mission */}
        <Reveal delay={0.1}>
          <div className="flex flex-col lg:flex-row-reverse">
            {/* Image — full bleed right */}
            <div className="relative w-full lg:w-[45%] h-64 md:h-80 lg:h-auto lg:min-h-[420px] flex-shrink-0 overflow-hidden">
              <Image src="/about/mission.png" alt="Mission" fill className="object-cover object-center" />
              <div className={`absolute inset-0 ${dark ? 'bg-gradient-to-l from-transparent to-slate-900/60' : 'bg-gradient-to-l from-transparent to-orange-50/70'}`} />
            </div>
            {/* Text */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-16 py-12 md:py-16">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-normal font-['Geist'] leading-tight mb-6 ${headText}`}>Our Mission</h2>
              <div className={`w-12 h-[2px] mb-6 ${dark ? 'bg-orange-500' : 'bg-orange-400'}`} />
              <p className={`text-base md:text-lg leading-relaxed font-['Geist'] max-w-xl ${bodyText}`}>
                To create integrated, impactful businesses that solve real-world problems — through compassionate healthcare, accessible medicines, technology-driven efficiencies, meaningful hospitality, and community wellness. Every Sudhanand initiative is guided by innovation, integrity, and commitment to social good.
              </p>
            </div>
          </div>
        </Reveal>

      </div>

      {/* ── LEADERSHIP TEAM ── */}
      <section className={`w-full px-6 md:px-12 lg:px-16 pt-12 pb-16 md:pt-14 md:pb-20 transition-colors duration-300 ${secBg}`}>
        <Reveal className="max-w-full mx-auto mb-7">
          <div className={`flex items-end justify-between gap-4 pb-4 border-b ${dark ? 'border-slate-800' : 'border-slate-200'}`}>
            <h2 className={`text-2xl md:text-3xl font-normal font-['Geist'] ${headText}`}>Leadership Team</h2>
            <span className={`text-xs font-mono pb-0.5 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>{team.length} members</span>
          </div>
        </Reveal>
        <LeadershipSection dark={dark} />
      </section>

      {/* ── SCROLLING IMAGES ── */}
      <section className={`w-full overflow-hidden py-8 transition-colors duration-300 ${secBg}`}>
        <style>{`
          @keyframes about-scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .about-scroll { display:flex; width:max-content; animation:about-scroll 40s linear infinite; }
          .about-scroll:hover { animation-play-state:paused; }
        `}</style>
        <div className="about-scroll">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-start gap-3 md:gap-4 mx-1.5 md:mx-2">
              <div className="w-40 h-40 sm:w-64 sm:h-64 md:w-[440px] md:h-[380px] lg:w-[580px] lg:h-[460px] relative flex-shrink-0 overflow-hidden rounded-lg">
                <Image src="/about/Rectangle 52.png" alt="Hospital" fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-3 md:gap-4 flex-shrink-0">
                <div className="w-40 h-[76px] sm:w-56 sm:h-[120px] md:w-[360px] md:h-[184px] lg:w-[480px] lg:h-[222px] relative overflow-hidden rounded-lg">
                  <Image src="/about/Rectangle 54.png" alt="Team" fill className="object-cover" />
                </div>
                <div className="w-40 h-[76px] sm:w-56 sm:h-[120px] md:w-[360px] md:h-[184px] lg:w-[480px] lg:h-[222px] relative overflow-hidden rounded-lg">
                  <Image src="/about/Rectangle 55.png" alt="Care" fill className="object-cover" />
                </div>
              </div>
              <div className="w-28 h-40 sm:w-44 sm:h-64 md:w-[240px] md:h-[380px] lg:w-[320px] lg:h-[460px] relative flex-shrink-0 overflow-hidden rounded-lg">
                <Image src="/about/Rectangle 57.png" alt="Building" fill className="object-cover" />
              </div>
              <div className="w-52 h-40 sm:w-80 sm:h-64 md:w-[560px] md:h-[380px] lg:w-[760px] lg:h-[460px] relative flex-shrink-0 overflow-hidden rounded-lg">
                <Image src="/about/Rectangle 58.png" alt="Community" fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}