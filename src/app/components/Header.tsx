'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { HiPlus, HiX } from 'react-icons/hi';
import { useTheme } from './DarkModeContext';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/business-ventures', label: 'Our Ventures' },
  { href: '/business-partners', label: 'Partners' },
  { href: '/careers', label: 'Careers' },
  { href: '/about', label: 'About Us' },
];

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative flex items-center justify-between w-14 h-7 rounded-full p-1 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
        isDark
          ? 'bg-slate-700 border border-slate-500'
          : 'bg-orange-100 border border-orange-200'
      } ${className}`}
    >
      {/* Icons */}
      <span className={`flex items-center justify-center w-5 h-5 transition-all duration-300 ${isDark ? 'text-slate-400' : 'text-orange-400'}`}>
        <SunIcon />
      </span>
      <span className={`flex items-center justify-center w-5 h-5 transition-all duration-300 ${isDark ? 'text-slate-200' : 'text-slate-300'}`}>
        <MoonIcon />
      </span>
      {/* Slider pill */}
      <span
        className={`absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-all duration-500 flex items-center justify-center ${
          isDark
            ? 'left-[calc(100%-1.75rem)] bg-slate-900 text-slate-200'
            : 'left-0.5 bg-white text-orange-500'
        }`}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* MOBILE HEADER */}
      <header
        className={`md:hidden fixed top-0 left-0 w-full h-12 px-3 z-50 flex items-center
          backdrop-blur-[20px] transition-all duration-300
          ${isDark
            ? 'bg-gradient-to-r from-slate-900/90 to-slate-800/90 border-b border-slate-700/50'
            : 'bg-gradient-to-r from-white/80 to-slate-500/80'}
          ${isScrolled ? 'shadow-md' : ''}
        `}
        style={{ minHeight: '48px' }}
      >
        <div className="flex-shrink-0 w-8 h-8 relative">
          <Image
            src="/logo.svg"
            alt="Sudhanand Group Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-sm whitespace-nowrap ${isDark ? 'text-white' : 'text-black'}`}>
          Sudhanand Group
        </div>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <button
            className={`text-2xl ${isDark ? 'text-white' : 'text-black'}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <HiX /> : <HiPlus />}
          </button>
        </div>
      </header>

      {/* MOBILE NAV MENU */}
      <div
        className={`md:hidden fixed top-12 left-0 w-full z-40 overflow-hidden transition-all duration-300
          ${menuOpen ? 'max-h-60 shadow-md' : 'max-h-0'}
          ${isDark ? 'bg-slate-900 border-b border-slate-700' : 'bg-white border-b border-gray-200'}
        `}
      >
        <nav className="flex flex-col py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 py-3 font-medium transition ${
                isDark
                  ? 'text-slate-200 hover:bg-slate-800'
                  : 'text-black hover:bg-gray-100'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* DESKTOP HEADER */}
      <header
        className={`hidden md:block fixed top-0 left-0 w-full h-16 px-12 py-4 z-50 transition-all duration-300
          backdrop-blur-[20px]
          ${isDark
            ? 'bg-gradient-to-r from-slate-900/90 to-slate-800/90 border-b border-slate-700/50'
            : 'bg-gradient-to-r from-white/80 to-slate-500/80'}
          ${isScrolled ? 'shadow-md' : ''}
        `}
      >
        <div className="w-full h-full flex justify-between items-center">
          <Link href="/" className="relative w-10 h-10">
            <Image
              src="/logo.svg"
              alt="Sudhanand Group Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <nav className="flex items-center gap-9 text-base font-['Geist'] leading-none">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${isDark ? 'text-slate-200 hover:text-white' : 'text-white hover:text-white/80'}`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;