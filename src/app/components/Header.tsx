'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { HiPlus, HiX } from 'react-icons/hi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/business-ventures', label: 'Our Ventures' },
  { href: '/business-partners', label: 'Partners' },
  { href: '/about', label: 'About Us' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          bg-gradient-to-r from-white/80 to-slate-500/80 backdrop-blur-[20px]
          ${isScrolled ? 'shadow-md' : ''}
        `}
        style={{ minHeight: '48px' }}
      >
        {/* Logo Left */}
        <div className="flex-shrink-0 w-8 h-8 relative">
          <Image
            src="/logo.svg"
            alt="Sudhanand Group Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Centered Name */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-black text-sm whitespace-nowrap">
          Sudhanand Group
        </div>
        {/* Plus Icon Right */}
        <button
          className="ml-auto text-2xl text-black"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <HiX /> : <HiPlus />}
        </button>
      </header>

      {/* MOBILE NAV MENU */}
      <div
        className={`md:hidden fixed top-12 left-0 w-full z-40 bg-white overflow-hidden transition-all duration-300
          ${menuOpen ? 'max-h-60 shadow-md border-b border-gray-200' : 'max-h-0'}
        `}
        style={{ boxShadow: menuOpen ? '0 2px 8px rgba(0,0,0,0.08)' : undefined }}
      >
        <nav className="flex flex-col py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-6 py-3 text-black font-medium hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* DESKTOP HEADER (unchanged) */}
      <header
        className={`hidden md:block fixed top-0 left-0 w-full h-16 px-12 py-4 z-50 transition-all duration-300
          bg-gradient-to-r from-white/80 to-slate-500/80 backdrop-blur-[20px]
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
          <nav className="flex gap-9 text-base text-white font-['Geist'] leading-none">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
