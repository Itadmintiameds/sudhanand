'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../components/DarkModeContext';

// ── Easing & Variants ─────────────────────────────────────────────────────────
const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

const up: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: E } },
};
const left: Variants = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: E } },
};
const right: Variants = {
  hidden:  { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: E } },
};
const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ── InView Reveal ─────────────────────────────────────────────────────────────
const Reveal = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  );
};

// ── Img with skeleton ─────────────────────────────────────────────────────────
const Img = ({
  src, alt, fill = false, className = '', priority = false,
  width, height, sizes = '100vw',
}: {
  src: string; alt: string; fill?: boolean; className?: string;
  priority?: boolean; width?: number; height?: number; sizes?: string;
}) => {
  const { theme } = useTheme();
  const [ok, setOk] = useState(false);
  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        {!ok && (
          <motion.div key="sk" className="absolute inset-0 z-10"
            style={{ background: theme === 'dark' ? '#1e293b' : '#e2e8f0', animation: 'sk 1.4s ease-in-out infinite' }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }} />
        )}
      </AnimatePresence>
      {fill ? (
        <Image src={src} alt={alt} fill className={`${className} transition-opacity duration-500 ${ok ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setOk(true)} priority={priority} sizes={sizes} placeholder="empty" />
      ) : (
        <Image src={src} alt={alt} width={width!} height={height!}
          className={`${className} transition-opacity duration-500 ${ok ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setOk(true)} priority={priority} placeholder="empty" />
      )}
    </div>
  );
};

// ── Partner Card ──────────────────────────────────────────────────────────────
const PartnerCard = ({
  logo, logoAlt, logoW, logoH, description, index,
}: {
  logo: string; logoAlt: string; logoW: number; logoH: number;
  description: React.ReactNode; index: number;
}) => {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  return (
    <motion.div
      variants={index % 2 === 0 ? left : right}
      className="flex flex-col gap-8 md:gap-10 p-8 md:p-10 rounded-2xl border transition-all duration-300"
      style={{
        background: dark ? 'rgba(30,41,59,0.6)' : 'rgba(255,255,255,0.8)',
        borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
        backdropFilter: 'blur(12px)',
      }}
      whileHover={{
        y: -4,
        borderColor: dark ? 'rgba(147,197,253,0.3)' : 'rgba(37,99,235,0.2)',
        transition: { duration: 0.3 },
      }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center md:justify-start h-16">
        <div className="relative" style={{ width: logoW, height: logoH, maxWidth: '100%' }}>
          <Img
            src={logo} alt={logoAlt}
            width={logoW} height={logoH}
            className={`object-contain w-full h-full ${dark ? 'brightness-0 invert' : ''}`}
            priority
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full" style={{ background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }} />

      {/* Description */}
      <p className="text-sm md:text-base leading-relaxed"
        style={{ color: dark ? '#94a3b8' : '#475569', transition: 'color 0.3s' }}>
        {description}
      </p>
    </motion.div>
  );
};

// ── Page ──────────────────────────────────────────────────────────────────────
const BusinessPartnersPage: React.FC = () => {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const bg     = dark ? '#0f172a' : '#f8fafc';
  const bgAlt  = dark ? '#1e293b' : '#eff6ff';
  const text   = dark ? '#f1f5f9' : '#0f172a';
  const muted  = dark ? '#94a3b8' : '#64748b';
  const heroGrad = dark
    ? 'linear-gradient(to bottom, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.98) 100%)'
    : 'linear-gradient(to bottom, rgba(15,23,42,0.0) 0%, rgba(15,23,42,0.82) 100%)';

  const partners = [
    {
      logo: '/cc.png',
      logoAlt: 'Cabrillo Coastal',
      logoW: 280,
      logoH: 80,
      description: (
        <>
          Sudhanand Group has partnered with <strong>Cabrillo Coastal</strong>, a specialist in property insurance for high-risk coastal areas. Together, they enhance claims processing, customer support, and service efficiency — combining Sudhanand&apos;s operational expertise with Cabrillo&apos;s commitment to quality insurance solutions.
          <br /><br />
          This collaboration provides integrated, reliable offerings in healthcare and property protection, ensuring accessibility and efficiency for clients. Their joint efforts drive innovation and excellence, setting new standards across both critical sectors.
        </>
      ),
    },
    {
      logo: '/creditgram.png',
      logoAlt: 'CreditAccess Grameen',
      logoW: 280,
      logoH: 80,
      description: (
        <>
          <strong>CreditAccess Grameen</strong>, a leading microfinance institution in India, empowers low-income communities through financial services that enhance livelihoods and stability. Sudhanand Group provides accessible, quality healthcare to underserved populations.
          <br /><br />
          Together, they form a powerful partnership bridging microfinance and healthcare — promoting financial inclusion, improved medical access, and sustainable socio-economic development across rural and semi-urban India.
        </>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Business Partners | Sudhanand Group</title>
        <meta name="description" content="Our valued business partners at Sudhanand Group" />
      </Head>

      <style>{`
        @keyframes sk {
          0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
        }
      `}</style>

      <main style={{ backgroundColor: bg, color: text, transition: 'background-color 0.3s, color 0.3s' }}>

        {/* ── HERO ── */}
        <Reveal>
          <section className="relative h-[420px] sm:h-[500px] md:h-[640px] flex flex-col justify-end px-6 sm:px-10 md:px-20 lg:px-40 pb-12 md:pb-16 overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0">
              <Img src="/partnerhead.png" alt="Business Partners" fill className="object-cover object-center" priority />
              <div className="absolute inset-0" style={{ background: heroGrad }} />
            </div>

            <Header />

            {/* Text */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end gap-6 lg:gap-8">
              <div className="flex flex-col gap-2">
                <motion.h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white"
                  variants={left}
                >
                  Our Partners
                </motion.h1>
              </div>
              <motion.p
                className="max-w-sm text-base md:text-lg leading-relaxed font-normal text-white/75 lg:mb-1"
                variants={right}
              >
                At Sudhanand Group, our business partners are integral to our journey — fostering innovation, sharing a commitment to excellence, and creating lasting value together.
              </motion.p>
            </div>
          </section>
        </Reveal>

        {/* ── PARTNERS ── */}
        <Reveal>
          <section
            className="px-6 sm:px-10 md:px-20 lg:px-36 py-8 md:py-12 transition-colors duration-300"
            style={{ backgroundColor: bgAlt }}
          >
            <div className="max-w-6xl mx-auto flex flex-col gap-8">

              {/* Section label */}
              <motion.div className="flex flex-col gap-3" variants={up}>
                <p className="text-xs uppercase tracking-[0.22em] font-medium"
                  style={{ color: dark ? '#60a5fa' : '#2563eb' }}>
                  Collaborations
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight"
                  style={{ color: text, transition: 'color 0.3s' }}>
                  Trusted partnerships,<br className="hidden md:block" /> shared purpose
                </h2>
                <p className="text-base max-w-xl mt-1" style={{ color: muted }}>
                  Every partnership we form is built on mutual trust, aligned values, and a shared vision to create meaningful impact.
                </p>
              </motion.div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {partners.map((p, i) => (
                  <PartnerCard key={p.logoAlt} {...p} index={i} />
                ))}
              </div>

            </div>
          </section>
        </Reveal>

      </main>

      <div id="page-footer">
        <Footer />
      </div>
    </>
  );
};

export default BusinessPartnersPage;