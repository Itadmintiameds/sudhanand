'use client';
import Header from './Header';
import Footer from './Footer';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from './DarkModeContext';

const HomePage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const services = [
    "Healthcare Solutions",
    "Pharmaceuticals",
    "IT & ITES Solutions",
    "US Home Insurance",
    "Hotels & Hospitality",
    "Blood Bank Services",
    "SaaS Solutions",
    "Sports & Fitness"
  ];

  return (
    <main className={isDark ? 'bg-slate-950 text-white' : 'bg-white text-black'}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        .animate-fadeInUp   { animation: fadeInUp 0.7s ease-out both; }
        .animate-fadeIn     { animation: fadeIn 1s ease-out both; }
        .animate-floatY     { animation: floatY 4s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
      <HeroSection />
      <WhoWeAreSection />
      <BrandLogosSection />
      <BusinessVideosSection />
      <WhatWeDoSection
        services={services}
        hoveredService={hoveredService}
        setHoveredService={setHoveredService}
      />
      <TimelineSection />
      <FounderSection />
      <BackgroundImageSection />
      <Footer />
    </main>
  );
};

// ─── Hero ────────────────────────────────────────────────────────────────────
const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="relative min-h-[400px] md:h-[680px] px-4 md:px-12 pt-6 pb-10 md:pb-16 flex flex-col justify-end items-start gap-10 md:gap-20 overflow-hidden">
      <Image
        src="/header.png"
        alt="Sudhanand Group"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className={`absolute inset-0 z-[1] transition-all duration-500 pointer-events-none ${
        isDark
          ? 'bg-slate-950/55 mix-blend-multiply'
          : 'bg-gradient-to-b from-black/10 via-transparent to-orange-950/50'
      }`} />

      <Header />

      <div className="relative z-[2] self-stretch px-4 md:px-10 inline-flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
        {/* Big brand name */}
        <div className={`animate-fadeInUp w-full md:w-96 text-3xl md:text-6xl font-bold font-['Playfair_Display'] drop-shadow-lg ${
          isDark ? 'text-white' : 'text-white'
        }`}>
          Sudhanand Group
        </div>

        {/* Tagline — three lines, bottom-aligned with name */}
        <div className="animate-fadeInUp delay-300 py-4 md:py-6 flex justify-end items-end w-full md:w-96">
          <div className={`flex flex-col gap-1 text-lg md:text-2xl font-normal font-['Geist'] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] text-right ${
            isDark ? 'text-orange-200' : 'text-orange-100'
          }`}>
            <span>Built on trust</span>
            <span>Driven by innovation</span>
            <span>Growing with purpose.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Who We Are ──────────────────────────────────────────────────────────────
const WhoWeAreSection = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-16 md:py-20 flex flex-col justify-center items-center gap-10 md:gap-14 overflow-hidden px-4 md:px-0 transition-colors duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-orange-50'
    }`}>
      <div className="w-full max-w-[1008px] flex flex-col justify-center items-start gap-6">
        <div className="animate-fadeInUp flex items-center gap-3">
          <Image src="/Group.png" alt="Left icon" width={20} height={20} loading="lazy" />
          <h2 className={`text-2xl md:text-3xl font-medium font-['Geist'] leading-9 ${isDark ? 'text-white' : 'text-black'}`}>
            Who We Are
          </h2>
          <Image src="/Group (1).png" alt="Right icon" width={20} height={20} loading="lazy" />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex-1 max-w-full md:max-w-[560px]">
            <p className={`text-base md:text-lg font-normal font-geist leading-relaxed md:leading-normal ${isDark ? 'text-slate-300' : 'text-black'}`}>
              We excel across multiple industries, driven by a strong foundation in ethical, community-focused, and socially responsible business practices. Our commitment to integrity and sustainable growth guides every decision we make, ensuring that our operations positively impact society. With a deep-rooted belief in the power of entrepreneurship and strategic diversification, we actively explore opportunities across sectors such as healthcare, technology, pharmaceuticals, hospitality, and beyond.
            </p>
          </div>
          <div className="px-0 md:px-10 flex flex-col justify-center items-center gap-4 max-w-full md:max-w-[320px]">
            <blockquote className={`w-full text-center text-3xl md:text-4xl font-normal font-['Satisfy'] leading-[40px] md:leading-[54px] ${isDark ? 'text-orange-300' : 'text-orange-950'}`}>
              &ldquo;Growing with Purpose, Impacting Lives through Innovation and Responsibility.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Brand Logos ─────────────────────────────────────────────────────────────
const BrandLogosSection = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const brands = [
    { src: "/home/SBPL 2 1.png", alt: "SBPL Logo", href: "https://www.sudhanandbusinesssolutions.com/", width: 112, height: 112 },
    { src: "/home/Rectangle 4.png", alt: "Pharmacies Logo", href: "https://www.sudhanandpharmacies.com/", width: 112, height: 112 },
    { src: "/home/Rectangle 1 (1).png", alt: "Tiameds Logo", href: "https://www.tiameds.ai/", width: 112, height: 112 },
    { src: "/home/Rectangle 1.png", alt: "Hospitals Logo", href: "https://www.cureplushospitals.com/", width: 112, height: 112 },
    { src: "/home/Rectangle 3.png", alt: "Blood Bank Logo", href: "https://www.cureplusbloodbank.com/", width: 112, height: 112 },
    { src: "/home/sinimeds.png", alt: "SiniMeds Logo", href: "https://www.sinimeds.com/", width: 112, height: 112 },
    { src: "/home/CUREPLUS PHARMA 1.png", alt: "Pharma Logo", href: "https://www.cureplushospitals.com/", width: 112, height: 112 },
    { src: "/home/ARC.png", alt: "ARC Logo", href: "https://www.arcsportzone.com/", width: 64, height: 80, containerClass: "w-20 h-28 relative" },
    { src: "/home/smt.png", alt: "SMT Logo", href: "https://smt.help/", width: 112, height: 112 },
    { src: "/home/NOVA.png", alt: "Nova Logo", href: "https://sudhanandnovacandolim.com/", width: 112, height: 112 },
    { src: "/home/FOUR SEASONS.png", alt: "Four Seasons Logo", href: "https://sudhanandfourseasons.com/", width: 192, height: 36 },
  ];

  const BrandLogoItem = ({ brand }: { brand: typeof brands[0] }) => {
    const commonClasses = `transition-all duration-500 ease-out cursor-pointer hover:scale-110 transform-gpu object-contain opacity-50 hover:opacity-100 ${
      isDark ? 'brightness-0 invert' : 'hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]'
    }`;
    if (brand.containerClass) {
      return (
        <a href={brand.href} target="_blank" rel="noopener noreferrer">
          <div className={`${brand.containerClass} ${commonClasses} flex items-center justify-center`}>
            <Image src={brand.src} alt={brand.alt} width={brand.width} height={brand.height} loading="lazy" className="object-contain" style={{ width: `${brand.width}px`, height: `${brand.height}px` }} />
          </div>
        </a>
      );
    }
    return (
      <a href={brand.href} target="_blank" rel="noopener noreferrer">
        <Image src={brand.src} alt={brand.alt} width={brand.width} height={brand.height} loading="lazy" className={commonClasses} style={{ width: `${brand.width}px`, height: `${brand.height}px` }} />
      </a>
    );
  };

  return (
    <div className={`self-stretch pb-20 md:pb-28 overflow-x-hidden scrollbar-hide transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-orange-50'}`}>
      <div className="marquee-wrapper">
        <div className="marquee-track flex items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="marquee-group flex items-center gap-8 px-6">
              {brands.map((brand, index) => (
                <BrandLogoItem key={index} brand={brand} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee-wrapper { overflow: hidden; width: 100%; position: relative; }
        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-wrapper::before { left: 0; background: linear-gradient(to right, ${isDark ? '#0f172a' : '#fff7ed'}, transparent); }
        .marquee-wrapper::after  { right: 0; background: linear-gradient(to left,  ${isDark ? '#0f172a' : '#fff7ed'}, transparent); }
        .marquee-track { display: flex; width: max-content; animation: scroll-marquee 35s linear infinite; align-items: center; will-change: transform; }
        .marquee-wrapper:hover .marquee-track { animation-play-state: paused; }
        @keyframes scroll-marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .marquee-group { flex-shrink: 0; display: flex; align-items: center; gap: 2rem; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

// ─── Business Videos ──────────────────────────────────────────────────────────
const BusinessVideosSection = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const videos = [
    { src: "https://www.youtube.com/embed/Wazu-Z27wyY?si=-uyEa6YpRI3vpupo", title: "TiaMeds Team" },
    { src: "https://www.youtube.com/embed/TkLjQyNti78?si=gwzz4P2OccscW0cg", title: "Healthcare Innovation" },
    { src: "https://www.youtube.com/embed/fE77gCpSnPM?si=dAKbVoqIIsg8AMbd", title: "Healthcare Innovation" },
    { src: "https://www.youtube.com/embed/wW_WOzha5to?rel=0", title: "Healthcare Innovation" },
    { src: "https://www.youtube.com/embed/AYV5wQw0lu4?si=PHUqgleF_0xfGVYk", title: "Tech for Good" },
    { src: "https://www.youtube.com/embed/0sWf8vru8t8?si=7-a961Jge8_PQCUl", title: "Community Impact" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const scrollLeft = () => containerRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  const scrollRight = () => containerRef.current?.scrollBy({ left: 400, behavior: "smooth" });

  useEffect(() => {
    autoScrollInterval.current = setInterval(() => {
      const container = containerRef.current;
      if (!container || container.dataset.autoScroll === 'paused') return;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 400, behavior: 'smooth' });
      }
    }, 3000);
    return () => { if (autoScrollInterval.current) clearInterval(autoScrollInterval.current); };
  }, []);

  const ArrowButton = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
    <button
      className={`absolute ${direction === 'left' ? '-left-4 md:-left-8' : '-right-4 md:-right-8'} z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 md:p-3 transition-all duration-300 backdrop-blur-md shadow-lg`}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
        {direction === 'left'
          ? <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          : <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />}
      </svg>
    </button>
  );

  return (
    <section
      className="relative px-6 md:px-24 py-16 md:py-32 flex flex-col justify-center items-center gap-12"
      style={{
        backgroundImage: "url('/Video section.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className={`absolute inset-0 ${isDark ? 'bg-black/60' : 'bg-black/30'}`}></div>
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
          Businesses That Work For A Better Tomorrow
        </h2>
        <p className="text-lg md:text-2xl text-white text-center max-w-4xl">
          Sudhanand Group builds sustainable, impactful ventures that empower communities and drive progress for a healthier, smarter future.
        </p>
        <div className="relative w-full flex items-center mt-8 md:mt-12">
          <ArrowButton direction="left" onClick={scrollLeft} />
          <div
            ref={containerRef}
            id="videoScroll"
            className="flex overflow-x-auto scroll-smooth gap-8 w-full px-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            data-auto-scroll="active"
            onMouseEnter={() => { if (containerRef.current) containerRef.current.dataset.autoScroll = 'paused'; }}
            onMouseLeave={() => { if (containerRef.current) containerRef.current.dataset.autoScroll = 'active'; }}
          >
            <style>{`#videoScroll::-webkit-scrollbar { display: none; }`}</style>
            {videos.map((video, index) => (
              <div key={index} className="min-w-[350px] md:min-w-[400px] relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-video">
                <iframe src={video.src} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
              </div>
            ))}
          </div>
          <ArrowButton direction="right" onClick={scrollRight} />
        </div>
      </div>
    </section>
  );
};

// ─── What We Do ───────────────────────────────────────────────────────────────
const WhatWeDoSection = ({
  services, hoveredService, setHoveredService
}: {
  services: string[];
  hoveredService: number | null;
  setHoveredService: (index: number | null) => void;
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className="w-full min-h-[400px] py-12 md:py-20 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-4 md:px-12 lg:px-24 mx-auto relative transition-colors duration-300"
      style={isDark ? {
        backgroundColor: '#0f172a',
      } : {
        backgroundImage: "url('/home/what we do.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={`absolute inset-0 z-0 transition-colors duration-300 ${isDark ? 'bg-slate-950/80' : 'bg-black/10'}`} />
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/4 flex items-start">
          <h2 className={`text-2xl md:text-3xl font-medium font-geist tracking-wide ${isDark ? 'text-orange-300' : 'text-white'}`}>
            What We Do
          </h2>
        </div>
        <div className="md:w-3/4 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {services.map((service, index) => (
              <div
                key={index}
                className={`text-2xl md:text-3xl font-normal font-geist leading-snug py-1 transition-all duration-200 cursor-pointer ${
                  isDark
                    ? hoveredService === index ? 'text-white scale-[1.02] pl-1' : 'text-slate-400 hover:text-white'
                    : hoveredService === index ? 'text-white scale-[1.02] pl-1' : 'text-white/80 hover:text-white'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {service}
              </div>
            ))}
            <div className={`text-2xl md:text-3xl font-normal font-geist leading-snug py-1 ${isDark ? 'text-slate-500' : 'text-neutral-300'}`}>
              +More
            </div>
          </div>
          <a
            href="/business-ventures"
            className={`mt-8 md:mt-10 px-6 py-3 rounded-full flex justify-center items-center gap-2 transition-all duration-300 w-fit ${
              isDark ? 'bg-orange-500 hover:bg-orange-400 text-white' : 'bg-white hover:bg-gray-100 text-black'
            }`}
          >
            <span className="text-lg font-geist">See all ventures</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── Timeline ─────────────────────────────────────────────────────────────────
const TimelineSection = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const timelineItems = [
    { year: '2010', img: '/home/humble.png', special: true },
    { year: '2011', desc: 'Started our journey with SAS Poorna Arogya Healthcare' },
    { year: '2012', desc: 'Started Sachidananda Organic Farm – Nanjangud' },
    { year: '2013', desc: 'Dr. M. D. Sachidananda Murthy Memorial Education Trust\n\n Sudhanand Healthcare Solutions Pvt. Ltd. – Mysuru' },
    { year: '2017', desc: 'Our first hospital "Disha Hospital" – Mysuru\nOpened Dharani Hospital – Chamaarajanagara' },
    { year: '2018', desc: 'Started Kaveri Hospital – Kodagu\n& ARC Sportzone – Mysuru' },
    { year: '2020', desc: 'Opened Krishna Hospital – Bettadapura\n\nStarted Sudhanand Business Solutions Pvt. Ltd. – Mysuru' },
    { year: '2021', desc: 'Opened our hotel\nSudhanand Four Seasons – Mysuru' },
    { year: '2022', desc: 'Nova Candolim by Sudhanand – Goa\n\n Sudhanand Arogya Vahini\nKarnataka Sudhanand Animal & Dairy Farms – Yelandur' },
    { year: '2023', desc: 'Sudhanand Pharmacies Pvt. Ltd – Mysore\n\n Sudhanand Distributors – Mysuru\n\n Narasegowda Memorial Hospital – Mandya' },
    { year: '2024', desc: 'Started Idea Gateway Inc. – New York\n\n Tiameds Technologies Pvt. Ltd. – Mysuru' },
    { year: '2025', desc: 'Started our 4 New Spoke Hospitals\n\n Started Sini Meds' },
  ];

  const yearBox = (special: boolean) => `w-full h-16 px-2.5 py-4 rounded-tl-2xl rounded-tr-2xl outline outline-1 backdrop-blur-md flex justify-center items-center transition-colors ${
    special
      ? isDark ? 'bg-amber-900/50 outline-amber-700/40' : 'bg-amber-900/30 outline-white/40'
      : isDark ? 'bg-slate-800/60 outline-slate-600/40' : 'bg-black/20 outline-white/40'
  } group-hover:brightness-110`;

  const contentBox = (special: boolean) => `w-full flex-1 px-6 py-4 rounded-bl-2xl rounded-br-2xl outline outline-1 backdrop-blur-md flex flex-col justify-center items-center gap-2 transition-colors ${
    special
      ? isDark ? 'bg-amber-900/30 outline-amber-700/40' : 'bg-gradient-to-b from-amber-200/20 to-amber-300/20 outline-white/40'
      : isDark ? 'bg-slate-800/40 outline-slate-600/40' : 'bg-black/10 outline-white/40'
  } group-hover:brightness-110`;

  const MobileCard = ({ item, index }: { item: typeof timelineItems[0]; index: number }) => (
    <div className="w-full max-w-md flex flex-col justify-start items-center gap-1 group transition-all duration-300">
      <div className={yearBox(!!item.special)}>
        <div className="text-rose-50 text-2xl font-semibold font-geist">{item.year}</div>
      </div>
      <div className={`${contentBox(!!item.special)} min-h-[120px]`}>
        {item.img
          ? <Image src={item.img} className="h-28 object-contain group-hover:scale-105 transition-transform" alt="Humble beginnings" width={112} height={112} />
          : <div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">{item.desc}</div>}
      </div>
      {index < 11 && (
        <div className="w-6 h-6 my-2 flex justify-center items-center">
          <Image src="/downarrow.svg" className="w-6 h-6 opacity-80 group-hover:opacity-100 group-hover:animate-bounce" alt="Next" width={24} height={24} />
        </div>
      )}
    </div>
  );

  const DesktopCard = ({ item, showDownArrow }: { item: typeof timelineItems[0]; showDownArrow?: boolean }) => (
    <div className="w-56 h-60 flex flex-col justify-start items-center gap-1 relative group transition-all duration-300 hover:scale-105">
      <div className={yearBox(!!item.special)}>
        <div className="text-rose-50 text-2xl font-semibold font-geist">{item.year}</div>
      </div>
      <div className={`${contentBox(!!item.special)} flex-1`}>
        {item.img
          ? <Image src={item.img} className="h-28 object-contain group-hover:scale-105 transition-transform" alt="Timeline image" width={112} height={112} />
          : <div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">{item.desc}</div>}
      </div>
      {showDownArrow && (
        <Image src="/downarrow.svg" className="w-6 h-6 mt-2 absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-80 group-hover:opacity-100 group-hover:animate-bounce" alt="Down arrow" width={24} height={24} />
      )}
    </div>
  );

  const row1 = timelineItems.slice(0, 4);
  const row2 = [timelineItems[7], timelineItems[6], timelineItems[5], timelineItems[4]];
  const row3 = timelineItems.slice(8, 12);

  return (
    <section className="w-full px-4 md:px-20 py-24 relative overflow-hidden">
      <Image src="/timeline.png" alt="Background" fill className="object-cover" quality={100} />
      <div className={`absolute inset-0 backdrop-blur-md z-0 ${isDark ? 'bg-black/60' : 'bg-black/30'}`} />
      <div className="relative z-10">
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-12 md:mb-20">Our Journey Through Time</h2>

        <div className="md:hidden flex flex-col items-center gap-6">
          {timelineItems.map((item, i) => <MobileCard key={i} item={item} index={i} />)}
        </div>

        <div className="hidden md:flex flex-col items-center gap-8">
          <div className="flex items-center justify-center gap-4">
            {row1.map((item, i, arr) => (
              <React.Fragment key={item.year}>
                <DesktopCard item={item} showDownArrow={i === arr.length - 1} />
                {i < arr.length - 1 && <Image src="/rightarrow.svg" className="w-6 h-6 opacity-80" alt="→" width={24} height={24} />}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            {row2.map((item, i, arr) => (
              <React.Fragment key={item.year}>
                <DesktopCard item={item} showDownArrow={i === 0} />
                {i < arr.length - 1 && <Image src="/leftarrow.svg" className="w-6 h-6 opacity-80" alt="←" width={24} height={24} />}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            {row3.map((item, i, arr) => (
              <React.Fragment key={item.year}>
                <DesktopCard item={item} />
                {i < arr.length - 1 && <Image src="/rightarrow.svg" className="w-6 h-6 opacity-80" alt="→" width={24} height={24} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Founder ──────────────────────────────────────────────────────────────────
const FounderSection = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className="w-full h-auto md:h-[788px] py-20 md:py-28 flex flex-col justify-center items-center gap-16 overflow-hidden bg-cover bg-center bg-no-repeat px-4 md:px-0 relative"
      style={{ backgroundImage: "url('/updfound.png')" }}
    >
      <div className={`absolute inset-0 z-0 transition-all duration-300 ${isDark ? 'bg-slate-950/70' : 'bg-transparent'}`} />
      <div className={`relative z-10 h-auto md:h-96 px-6 md:px-20 py-10 rounded-3xl outline outline-8 outline-offset-[-4px] backdrop-blur-md flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl w-full transition-colors duration-300 ${
        isDark ? 'bg-slate-900/80 outline-slate-700' : 'bg-zinc-100/50 outline-white'
      }`}>
        <Image className="animate-floatY w-64 md:w-80 max-w-full relative" src="/home/arjunsir.png" alt="Founder" width={320} height={320} loading="lazy" />
        <div className="w-full md:w-[493px] p-6 rounded-2xl backdrop-blur-md flex flex-col justify-center items-start gap-8 md:gap-10">
          <div className="p-4 md:p-6 rounded-2xl flex flex-col justify-start items-start gap-4">
            <div className={`text-center md:text-left text-xl md:text-2xl font-medium font-['Geist'] leading-relaxed ${isDark ? 'text-white' : 'text-zinc-800'}`}>
              Hear from our founder
            </div>
            <div className={`text-sm md:text-base font-normal font-['Geist'] leading-tight ${isDark ? 'text-slate-300' : 'text-neutral-600'}`}>
              Sudhanand started as a dream to serve with purpose. Today, across industries, we grow with compassion, innovation, and integrity—building lasting impact, not just businesses.
            </div>
            <div className="flex flex-wrap gap-3">
              {['Innovation', 'Trust', 'Quality', 'Sustainability'].map((tag) => (
                <div key={tag} className={`px-4 py-1 rounded-2xl backdrop-blur-md flex justify-center items-center ${isDark ? 'bg-slate-700/60' : 'bg-slate-300/20'}`}>
                  <div className={`text-xs md:text-sm font-normal font-['Geist'] leading-none ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>{tag}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-4 flex justify-center items-center w-full">
            <div className={`flex-1 text-lg md:text-xl font-medium font-['Geist'] leading-snug text-center md:text-left ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
              Dr. Arjun Sachidanand
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Background Image ─────────────────────────────────────────────────────────
const BackgroundImageSection = () => (
  <div
    className="w-full h-[600px] md:h-[1000px] p-2.5 rounded-2xl shadow-lg mx-auto"
    style={{
      backgroundImage: "url('/home/Images.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <style jsx>{`
      @media (max-width: 767px) {
        div { background-position: 10% center !important; }
      }
    `}</style>
  </div>
);

export default HomePage;