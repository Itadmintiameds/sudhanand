'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from './Header';
import Footer from './Footer';

/* ===================== TYPES ===================== */
type Service = {
  id: string;
  label: string;
};

type LogoItem = {
  id: string;
  href: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type VideoItem = {
  id: string;
  src: string;
  title: string;
};

/* ===================== DATA ===================== */
const SERVICES: Service[] = [
  { id: 'healthcare', label: 'Healthcare Solutions' },
  { id: 'pharma', label: 'Pharmaceuticals' },
  { id: 'it', label: 'IT & ITES Solutions' },
  { id: 'insurance', label: 'US Home Insurance' },
  { id: 'hospitality', label: 'Hotels & Hospitality' },
  { id: 'bloodbank', label: 'Blood Bank Services' },
  { id: 'saas', label: 'SaaS Solutions' },
  { id: 'sports', label: 'Sports & Fitness' }
];

const LOGOS: LogoItem[] = [
  { id: 'sbpl', href: 'https://www.sudhanandbusinesssolutions.com/', src: '/home/SBPL 2 1.png', alt: 'SBPL' },
  { id: 'pharma', href: 'https://www.sudhanandpharmacies.com/', src: '/home/Rectangle 4.png', alt: 'Pharmacies' },
  { id: 'tiameds', href: 'https://www.tiameds.ai/', src: '/home/Rectangle 1 (1).png', alt: 'Tiameds' },
  { id: 'hospital', href: 'https://www.cureplushospitals.com/', src: '/home/Rectangle 1.png', alt: 'Hospitals' },
  { id: 'bloodbank', href: 'https://www.cureplusbloodbank.com/', src: '/home/Rectangle 3.png', alt: 'Blood Bank' },
  { id: 'sinimeds', href: 'https://www.sinimeds.com/', src: '/home/sinimeds.png', alt: 'SiniMeds' },
  { id: 'smt', href: 'https://smt.help/', src: '/home/smt.png', alt: 'SMT' },
  { id: 'nova', href: 'https://sudhanandnovacandolim.com/', src: '/home/NOVA.png', alt: 'Nova' },
  {
    id: 'fourseasons',
    href: 'https://sudhanandfourseasons.com/',
    src: '/home/FOUR SEASONS.png',
    alt: 'Four Seasons',
    width: 192,
    height: 36
  }
];

const VIDEOS: VideoItem[] = [
  { id: 'v1', src: 'https://www.youtube.com/embed/Wazu-Z27wyY', title: 'TiaMeds Team' },
  { id: 'v2', src: 'https://www.youtube.com/embed/TkLjQyNti78', title: 'Healthcare Innovation' },
  { id: 'v3', src: 'https://www.youtube.com/embed/fE77gCpSnPM', title: 'Healthcare Innovation' },
  { id: 'v4', src: 'https://www.youtube.com/embed/wW_WOzha5to', title: 'Healthcare Innovation' },
  { id: 'v5', src: 'https://www.youtube.com/embed/AYV5wQw0lu4', title: 'Tech for Good' },
  { id: 'v6', src: 'https://www.youtube.com/embed/0sWf8vru8t8', title: 'Community Impact' }
];

/* ===================== COMPONENT ===================== */
export default function Home() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  /* Auto-scroll videos (stable DOM id, Sonar-safe) */
  useEffect(() => {
    const container = document.getElementById('video-scroll');
    if (!container) return;

    const interval = window.setInterval(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 400, behavior: 'smooth' });
      }
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="bg-white text-black">
      <Header />

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[400px] md:h-[680px] px-6 pt-6 pb-16 flex flex-col justify-end"
        style={{
          backgroundImage: "url('/header.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="text-3xl md:text-6xl font-bold text-slate-700">
          Sudhanand Group
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-neutral-700">
          Built on trust, driven by innovation, growing with purpose.
        </p>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20 bg-orange-50 px-6">
        <h2 className="text-3xl font-medium mb-6">Who We Are</h2>
        <p className="max-w-3xl">
          We excel across multiple industries, driven by ethical, community-focused,
          and socially responsible business practices.
        </p>
      </section>

      {/* ================= LOGO MARQUEE ================= */}
      <section className="bg-orange-50 overflow-hidden py-12">
        <div className="flex gap-10 animate-[marquee_30s_linear_infinite]">
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <a
              key={`${logo.id}-${index}`}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width ?? 112}
                height={logo.height ?? 112}
                className="opacity-60 hover:opacity-100 transition"
              />
            </a>
          ))}
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section
        className="relative py-24 bg-cover"
        style={{ backgroundImage: "url('/Video section.png')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 px-10 text-white">
          <h2 className="text-4xl font-bold text-center mb-10">
            Businesses That Work For A Better Tomorrow
          </h2>

          <div
            id="video-scroll"
            className="flex gap-8 overflow-x-auto scroll-smooth"
            role="region"
            aria-label="Business videos"
          >
            {VIDEOS.map((video) => (
              <div
                key={video.id}
                className="min-w-[350px] md:min-w-[400px] aspect-video rounded-xl overflow-hidden shadow-lg"
              >
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section
        className="py-20 bg-cover"
        style={{ backgroundImage: "url('/home/what we do.png')" }}
      >
        <h2 className="text-3xl text-white mb-8 px-10">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-4 px-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className={`text-2xl text-white transition ${
                hoveredService === service.id ? 'opacity-100' : 'opacity-80'
              }`}
            >
              {service.label}
            </div>
          ))}
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="/timeline.png"
            alt="Timeline background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
        <h2 className="relative z-10 text-center text-white text-4xl font-bold">
          Our Journey Through Time
        </h2>
      </section>

      {/* ================= FOUNDER ================= */}
      <section
        className="py-28 bg-cover"
        style={{ backgroundImage: "url('/updfound.png')" }}
      >
        <div className="max-w-5xl mx-auto bg-white/50 backdrop-blur-md rounded-3xl p-12 flex gap-10">
          <Image src="/home/arjunsir.png" alt="Founder" width={320} height={320} />
          <div>
            <h3 className="text-2xl mb-4">Hear from our founder</h3>
            <p>
              Sudhanand started as a dream to serve with purpose. Today we grow with
              compassion, innovation, and integrity.
            </p>
            <p className="mt-4 font-medium">Dr. Arjun Sachidanand</p>
          </div>
        </div>
      </section>

      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="h-[1000px] bg-cover bg-center"
        style={{ backgroundImage: "url('/home/Images.png')" }}
      />

      <Footer />

      {/* Marquee keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
