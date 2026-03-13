'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTheme } from './DarkModeContext';

const mapsUrl = 'https://maps.app.goo.gl/TYASLtgbvsTEduedA';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/business-ventures', label: 'Our Ventures' },
  { href: '/business-partners', label: 'Partners' },
  { href: '/careers', label: 'Careers' },
  { href: '/about', label: 'About Us' },
];

const brands = [
  { label: 'Sudhanand Business Solutions', href: 'https://www.sudhanandbusinesssolutions.com/' },
  { label: 'Sudhanand Pharmacies', href: 'https://www.sudhanandpharmacies.com/' },
  { label: 'Tiameds Technologies', href: 'https://www.tiameds.ai/' },
  { label: 'CurePlus Hospitals', href: 'https://www.cureplushospitals.com/' },
  { label: 'CurePlus Blood Bank', href: 'https://www.cureplusbloodbank.com/' },
  { label: 'SiniMeds', href: 'https://www.sinimeds.com/' },
  { label: 'ARC Sportzone', href: 'https://www.arcsportzone.com/' },
  { label: 'SMT Help', href: 'https://smt.help/' },
  { label: 'Nova Candolim', href: 'https://sudhanandnovacandolim.com/' },
  { label: 'Four Seasons Mysuru', href: 'https://sudhanandfourseasons.com/' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sudhanand-group/',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1EBYjjGogu/',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/life_at_sudhanand?igsh=dnV6eHE4a3Uwanh5',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const linkCls = `text-sm font-['Geist'] transition-colors duration-200 w-fit ${
    isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
  }`;

  const headingCls = `text-xs font-semibold uppercase tracking-widest font-['Geist'] ${
    isDark ? 'text-orange-400' : 'text-orange-600'
  }`;

  return (
    <footer
      className={`self-stretch px-6 sm:px-10 md:px-20 lg:px-36 py-8 sm:py-12 lg:py-16 flex flex-col gap-10 sm:gap-16 lg:gap-20 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-slate-900' : 'bg-orange-50'
      }`}
    >
      {/* ── Big Logo + Name ── */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-10">
        <div
          className={`w-20 h-20 sm:w-28 sm:h-28 relative flex-shrink-0 transition-all duration-300 ${
            isDark ? 'brightness-0 invert opacity-90' : ''
          }`}
        >
          <Image src="/logo.svg" alt="Sudhanand Group Logo" fill className="object-contain" />
        </div>
        <h1
          className={`text-3xl sm:text-5xl font-normal font-['Geist'] leading-8 sm:leading-10 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          Sudhanand Group
        </h1>
      </div>

      {/* ── Tagline ── */}
      <div
        className={`text-base sm:text-lg font-normal font-['Geist'] leading-normal text-center sm:text-left transition-colors duration-300 ${
          isDark ? 'text-slate-400' : 'text-black'
        }`}
      >
        Deep expertise, decisive execution - The hallmark of Sudhanand Group.
      </div>

      {/* ── Nav / Brands / Contact columns ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className={headingCls}>Navigation</h3>
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkCls}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Our Brands */}
        <div className="flex flex-col gap-4">
          <h3 className={headingCls}>Our Brands</h3>
          <div className="flex flex-col gap-2.5">
            {brands.slice(0, 6).map((brand) => (
              <a key={brand.label} href={brand.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                {brand.label}
              </a>
            ))}
          </div>
        </div>

        {/* More Ventures */}
        <div className="flex flex-col gap-4">
          <h3 className={headingCls}>More Ventures</h3>
          <div className="flex flex-col gap-2.5">
            {brands.slice(6).map((brand) => (
              <a key={brand.label} href={brand.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                {brand.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className={headingCls}>Contact</h3>
          <div className="flex flex-col gap-2.5">
            <a href="mailto:info@sudhanandgroup.com" className={linkCls}>
              info@sudhanandgroup.com
            </a>
            <a href="tel:+918214280152" className={linkCls}>
              +91 821 428 0152
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-['Geist'] transition-colors duration-200 leading-snug ${
                isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Sy. No. 59, 2nd Floor, Dakshina Murthy Towers, Devanooru,
              Rajeevnagara 2nd Stage, Udayagiri, Mysore 570019.
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isDark
                    ? 'bg-slate-800 text-slate-400 hover:bg-orange-500 hover:text-white border border-slate-700'
                    : 'bg-slate-100 text-slate-500 hover:bg-orange-500 hover:text-white border border-slate-200'
                }`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        className={`border-t ${isDark ? 'border-slate-700/60' : 'border-slate-200'}`}
      />

      {/* ── Legal ── */}
      <div
        className={`text-sm font-normal font-['Geist'] leading-tight transition-colors duration-300 ${
          isDark ? 'text-slate-500' : 'text-black'
        }`}
      >
        Sudhanand Group Legal
        <br />
        © 2026 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;