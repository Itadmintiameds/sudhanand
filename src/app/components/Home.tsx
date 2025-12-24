'use client';
import Header from './Header';
import Footer from './Footer';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

// Data Constants
const SERVICES = [
  "Healthcare Solutions",
  "Pharmaceuticals",
  "IT & ITES Solutions",
  "US Home Insurance",
  "Hotels & Hospitality",
  "Blood Bank Services",
  "SaaS Solutions",
  "Sports & Fitness"
];

const BRAND_LOGOS = [
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
  { src: "/home/FOUR SEASONS.png", alt: "Four Seasons Logo", href: "https://sudhanandfourseasons.com/", width: 192, height: 36 }
];

const VIDEOS = [
  { src: "https://www.youtube.com/embed/Wazu-Z27wyY", title: "TiaMeds Team" },
  { src: "https://www.youtube.com/embed/TkLjQyNti78", title: "Healthcare Innovation" },
  { src: "https://www.youtube.com/embed/fE77gCpSnPM", title: "Healthcare Innovation" },
  { src: "https://www.youtube.com/embed/wW_WOzha5to", title: "Healthcare Innovation" },
  { src: "https://www.youtube.com/embed/AYV5wQw0lu4", title: "Tech for Good" },
  { src: "https://www.youtube.com/embed/0sWf8vru8t8", title: "Community Impact" }
];

const TIMELINE_ITEMS = [
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

const FOUNDER_TAGS = ['Innovation', 'Trust', 'Quality', 'Sustainability'];

// Reusable Components
const SectionTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-black text-2xl md:text-3xl font-medium font-['Geist'] leading-9 ${className}`}>
    {children}
  </h2>
);

const Quote = ({ text }: { text: string }) => (
  <blockquote className="w-full text-center text-orange-950 text-3xl md:text-4xl font-normal font-['Satisfy'] leading-[40px] md:leading-[54px]">
    &ldquo;{text}&rdquo;
  </blockquote>
);

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' | 'down' }) => {
  const paths = {
    left: "M15.75 19.5L8.25 12l7.5-7.5",
    right: "M8.25 4.5l7.5 7.5-7.5 7.5",
    down: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  };
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 md:w-6 md:h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[direction]} />
    </svg>
  );
};

const ArrowButton = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
  <button
    className={`absolute ${direction === 'left' ? '-left-4 md:-left-8' : '-right-4 md:-right-8'} z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 md:p-3 transition-all duration-300 backdrop-blur-md shadow-lg`}
    onClick={onClick}
    aria-label={`Scroll ${direction}`}
  >
    <ArrowIcon direction={direction} />
  </button>
);

const BrandLogo = ({ brand }: { brand: typeof BRAND_LOGOS[0] }) => {
  const commonClasses = "opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu";
  
  const content = (
    <Image
      src={brand.src}
      alt={brand.alt}
      width={brand.width}
      height={brand.height}
      className="object-contain"
      style={{ width: `${brand.width}px`, height: `${brand.height}px` }}
      priority={false}
      loading="lazy"
    />
  );

  if (brand.containerClass) {
    return (
      <a href={brand.href} target="_blank" rel="noopener noreferrer">
        <div className={`${brand.containerClass} ${commonClasses} flex items-center justify-center`}>
          {content}
        </div>
      </a>
    );
  }
  
  return (
    <a href={brand.href} target="_blank" rel="noopener noreferrer">
      <div className={commonClasses}>
        {content}
      </div>
    </a>
  );
};

const ServiceItem = ({ 
  service, 
  index, 
  hoveredService, 
  setHoveredService 
}: { 
  service: string;
  index: number;
  hoveredService: number | null;
  setHoveredService: (index: number | null) => void;
}) => (
  <div
    className={`text-white text-2xl md:text-3xl font-normal font-geist leading-snug py-1 transition-all duration-200 cursor-pointer ${
      hoveredService === index ? "scale-[1.02] pl-1 text-white/90" : "text-white/80"
    } hover:text-white`}
    onMouseEnter={() => setHoveredService(index)}
    onMouseLeave={() => setHoveredService(null)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        setHoveredService(index);
      }
    }}
  >
    {service}
  </div>
);

const TimelineCard = ({ 
  item, 
  isMobile = false,
  showDownArrow = false
}: { 
  item: typeof TIMELINE_ITEMS[0];
  isMobile?: boolean;
  showDownArrow?: boolean;
}) => {
  const cardClasses = `w-full ${isMobile ? 'min-h-[120px]' : 'h-60 flex-1'} px-6 py-4 rounded-bl-2xl rounded-br-2xl outline outline-1 outline-white/40 backdrop-blur-md flex flex-col justify-center items-center gap-2 ${item.special ? 'bg-gradient-to-b from-amber-200/20 to-amber-300/20' : 'bg-black/10'} group-hover:bg-black/20 transition-colors`;

  const headerClasses = `w-full h-16 px-2.5 py-4 rounded-tl-2xl rounded-tr-2xl outline outline-1 outline-white/40 backdrop-blur-md flex justify-center items-center ${item.special ? 'bg-amber-900/30' : 'bg-black/20'} group-hover:bg-black/30 transition-colors`;

  return (
    <div className={`${isMobile ? 'w-full max-w-md' : 'w-56'} flex flex-col justify-start items-center gap-1 relative group transition-all duration-300 ${!isMobile ? 'hover:scale-105' : ''}`}>
      <div className={headerClasses}>
        <div className="text-rose-50 text-2xl font-semibold font-geist">
          {item.year}
        </div>
      </div>
      <div className={cardClasses}>
        {item.img ? (
          <Image 
            src={item.img} 
            className="h-28 object-contain group-hover:scale-105 transition-transform" 
            alt="Timeline image"
            width={112}
            height={112}
            priority={false}
            loading="lazy"
          />
        ) : (
          <div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">
            {item.desc}
          </div>
        )}
      </div>
      {showDownArrow && !isMobile && (
        <Image
          src="/downarrow.svg"
          className="w-6 h-6 mt-2 absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-80 group-hover:opacity-100 group-hover:animate-bounce"
          alt="Down arrow"
          width={24}
          height={24}
          priority={false}
          loading="lazy"
        />
      )}
    </div>
  );
};

const SeeAllVenturesButton = () => (
  <a
    href="/business-ventures"
    className="mt-8 md:mt-10 px-6 py-3 bg-white rounded-full flex justify-center items-center gap-2 hover:bg-gray-100 transition-all duration-300 w-fit"
    aria-label="View all business ventures"
  >
    <span className="text-black text-lg font-small font-geist">
      See all ventures
    </span>
    <ArrowIcon direction="right" />
  </a>
);

const Tag = ({ text }: { text: string }) => (
  <div className="px-4 py-1 bg-slate-300/20 rounded-2xl backdrop-blur-md flex justify-center items-center">
    <div className="text-slate-500 text-xs md:text-sm font-normal font-['Geist'] leading-none">
      {text}
    </div>
  </div>
);

// Main Sections
const HeroSection = () => (
  <section
    className="relative min-h-[400px] md:h-[680px] px-4 md:px-12 pt-6 pb-10 md:pb-16 bg-gradient-to-b from-orange-50/0 via-orange-50/20 to-orange-50 flex flex-col justify-end items-start gap-10 md:gap-20"
    style={{
      backgroundImage: "url('/header.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <Header />
    <div className="self-stretch px-4 md:px-10 inline-flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
      <div className="w-full md:w-96 text-slate-700 text-3xl md:text-6xl font-bold font-['Playfair_Display']">
        Sudhanand Group
      </div>
      <div className="py-4 md:py-6 flex justify-center items-center w-full md:w-96">
        <div className="text-neutral-700 text-lg md:text-2xl font-medium font-['Geist'] leading-relaxed md:leading-loose text-center md:text-left">
          Built on trust, driven by innovation, growing with purpose.
        </div>
      </div>
    </div>
  </section>
);

const WhoWeAreSection = () => (
  <section className="py-16 md:py-20 bg-orange-50 flex flex-col justify-center items-center gap-10 md:gap-14 overflow-hidden px-4 md:px-0">
    <div className="w-full max-w-[1008px] flex flex-col justify-center items-start gap-6">
      <div className="flex items-center gap-3">
        <Image src="/Group.png" alt="Left icon" width={20} height={20} priority={false} loading="lazy" />
        <SectionTitle>Who We Are</SectionTitle>
        <Image src="/Group (1).png" alt="Right icon" width={20} height={20} priority={false} loading="lazy" />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="flex-1 max-w-full md:max-w-[560px]">
          <p className="text-black text-base md:text-lg font-normal font-geist leading-relaxed md:leading-normal">
            We excel across multiple industries, driven by a strong foundation in ethical, community-focused, and socially responsible business practices. Our commitment to integrity and sustainable growth guides every decision we make, ensuring that our operations positively impact society. With a deep-rooted belief in the power of entrepreneurship and strategic diversification, we actively explore opportunities across sectors such as healthcare, technology, pharmaceuticals, hospitality, and beyond.
          </p>
        </div>
        <div className="px-0 md:px-10 flex flex-col justify-center items-center gap-4 max-w-full md:max-w-[320px]">
          <Quote text="Growing with Purpose, Impacting Lives through Innovation and Responsibility." />
        </div>
      </div>
    </div>
  </section>
);

const BrandLogosSection = () => (
  <div className="self-stretch pb-20 md:pb-28 bg-orange-50 overflow-x-hidden scrollbar-hide">
    <div className="marquee-wrapper">
      <div className="marquee-track flex items-center">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="marquee-group flex items-center gap-8 px-6">
            {BRAND_LOGOS.map((brand, index) => (
              <BrandLogo key={index} brand={brand} />
            ))}
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      .marquee-wrapper {
        overflow: hidden;
        width: 100%;
        position: relative;
      }
      .marquee-track {
        display: flex;
        width: max-content;
        animation: scroll-marquee 30s linear infinite;
        align-items: center;
        will-change: transform;
      }
      .marquee-wrapper:hover .marquee-track {
        animation-play-state: paused;
      }
      @keyframes scroll-marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .marquee-group {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        gap: 2rem;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}</style>
  </div>
);

const BusinessVideosSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const scrollLeft = useCallback(() => {
    containerRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback(() => {
    containerRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
      
      autoScrollInterval.current = setInterval(() => {
        const container = containerRef.current;
        if (!container || container.dataset.autoScroll === 'paused') return;
        
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }, 3000);
    };

    startAutoScroll();

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, []);

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
      <div className="absolute inset-0 bg-black/30"></div>
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
            className="flex overflow-x-auto scroll-smooth gap-8 w-full px-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            data-auto-scroll="active"
            onMouseEnter={() => {
              if (containerRef.current) {
                containerRef.current.dataset.autoScroll = 'paused';
              }
            }}
            onMouseLeave={() => {
              if (containerRef.current) {
                containerRef.current.dataset.autoScroll = 'active';
              }
            }}
          >
            <style>{`
              [data-auto-scroll]::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {VIDEOS.map((video, index) => (
              <div key={index} className="min-w-[350px] md:min-w-[400px] relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-video">
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          <ArrowButton direction="right" onClick={scrollRight} />
        </div>
      </div>
    </section>
  );
};

const WhatWeDoSection = ({ 
  hoveredService, 
  setHoveredService 
}: { 
  hoveredService: number | null;
  setHoveredService: (index: number | null) => void;
}) => (
  <section
    className="w-full min-h-[400px] py-12 md:py-20 bg-slate-500 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-4 md:px-12 lg:px-24 mx-auto relative"
    style={{
      backgroundImage: "url('/home/what we do.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="absolute inset-0 bg-black/10 z-0"></div>
    <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="md:w-1/4 flex items-start">
        <h2 className="text-white text-2xl md:text-3xl font-medium font-geist tracking-wide">
          What We Do
        </h2>
      </div>
      <div className="md:w-3/4 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {SERVICES.map((service, index) => (
            <ServiceItem
              key={index}
              service={service}
              index={index}
              hoveredService={hoveredService}
              setHoveredService={setHoveredService}
            />
          ))}
          <div className="text-neutral-300 text-2xl md:text-3xl font-normal font-geist leading-snug py-1">
            +More
          </div>
        </div>
        <SeeAllVenturesButton />
      </div>
    </div>
  </section>
);

const TimelineSection = () => {
  const row1 = TIMELINE_ITEMS.slice(0, 4);
  const row2 = TIMELINE_ITEMS.slice(4, 8);
  const row3 = TIMELINE_ITEMS.slice(8, 12);

  return (
    <section className="w-full px-4 md:px-20 py-24 relative overflow-hidden">
      <Image
        src="/timeline.png"
        alt="Background"
        fill
        className="object-cover"
        quality={90}
        priority={true}
        sizes="100vw"
      />
      
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>
      
      <div className="relative z-10">
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-12 md:mb-20">
          Our Journey Through Time
        </h2>
        
        {/* Mobile Vertical Timeline */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {TIMELINE_ITEMS.map((item, i) => (
            <React.Fragment key={i}>
              <TimelineCard item={item} isMobile={true} />
              {i < TIMELINE_ITEMS.length - 1 && (
                <div className="w-6 h-6 my-2 flex justify-center items-center">
                  <Image
                    src="/downarrow.svg"
                    className="w-6 h-6 opacity-80 hover:opacity-100 hover:animate-bounce"
                    alt="Next"
                    width={24}
                    height={24}
                    priority={false}
                    loading="lazy"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:flex flex-col items-center gap-8">
          {/* Row 1 */}
          <div className="flex items-center justify-center gap-4">
            {row1.map((item, i, arr) => (
              <React.Fragment key={i}>
                <TimelineCard item={item} showDownArrow={i === arr.length - 1} />
                {i < arr.length - 1 && (
                  <Image 
                    src="/rightarrow.svg" 
                    className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" 
                    alt="Right arrow"
                    width={24}
                    height={24}
                    priority={false}
                    loading="lazy"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Row 2 */}
          <div className="flex items-center justify-center gap-4">
            {row2.map((item, i, arr) => (
              <React.Fragment key={i}>
                <TimelineCard item={item} showDownArrow={i === 0} />
                {i < arr.length - 1 && (
                  <Image 
                    src="/leftarrow.svg" 
                    className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" 
                    alt="Left arrow"
                    width={24}
                    height={24}
                    priority={false}
                    loading="lazy"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Row 3 */}
          <div className="flex items-center justify-center gap-4">
            {row3.map((item, i, arr) => (
              <React.Fragment key={i}>
                <TimelineCard item={item} />
                {i < arr.length - 1 && (
                  <Image 
                    src="/rightarrow.svg" 
                    className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" 
                    alt="Right arrow"
                    width={24}
                    height={24}
                    priority={false}
                    loading="lazy"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FounderSection = () => (
  <div
    className="w-full h-auto md:h-[788px] py-20 md:py-28 flex flex-col justify-center items-center gap-16 overflow-hidden bg-cover bg-center bg-no-repeat px-4 md:px-0"
    style={{
      backgroundImage: "url('/updfound.png')",
    }}
  >
    <div className="h-auto md:h-96 px-6 md:px-20 py-10 bg-zinc-100/50 rounded-3xl outline outline-8 outline-white outline-offset-[-4px] backdrop-blur-md flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl w-full">
      <Image 
        className="w-64 md:w-80 max-w-full relative" 
        src="/home/arjunsir.png" 
        alt="Founder" 
        width={320} 
        height={320} 
        priority={true}
        sizes="(max-width: 768px) 256px, 320px"
      />
      <div className="w-full md:w-[493px] p-6 rounded-2xl backdrop-blur-md flex flex-col justify-center items-start gap-8 md:gap-10">
        <div className="p-4 md:p-6 rounded-2xl flex flex-col justify-start items-start gap-4">
          <div className="text-center md:text-left text-zinc-800 text-xl md:text-2xl font-medium font-['Geist'] leading-relaxed">
            Hear from our founder
          </div>
          <div className="text-neutral-600 text-sm md:text-base font-normal font-['Geist'] leading-tight">
            Sudhanand started as a dream to serve with purpose. Today, across industries, we grow with compassion, innovation, and integrity—building lasting impact, not just businesses.
          </div>
          <div className="flex flex-wrap gap-3">
            {FOUNDER_TAGS.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
        <div className="px-4 flex justify-center items-center w-full">
          <div className="flex-1 text-slate-500 text-lg md:text-xl font-medium font-['Geist'] leading-snug text-center md:text-left">
            Dr. Arjun Sachidanand
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
        div {
          background-position: 10% center !important;
        }
      }
    `}</style>
  </div>
);

// Main Component
const HomePage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (  
    <main className="bg-white text-black">
      <HeroSection />
      <WhoWeAreSection />
      <BrandLogosSection />
      <BusinessVideosSection />
      <WhatWeDoSection 
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

export default HomePage;