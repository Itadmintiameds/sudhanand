'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-16 px-12 py-4 z-50 transition-all duration-300
        bg-gradient-to-r from-white/80 to-slate-500/80 backdrop-blur-[20px]
        ${isScrolled ? 'shadow-md' : ''}
      `}
    >
      <div className="w-full h-full flex justify-between items-center">
        {/* Pixel Logo on the left */}
        <Link href="/" className="relative w-10 h-10">
          <Image
            src="/logo.svg"
            alt="Sudhanand Group Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Nav Links on the right */}
        <nav className="flex gap-9 text-base text-white font-['Geist'] leading-none">
          <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
          <Link href="/business-ventures" className="hover:text-white/80 transition-colors">Our Ventures</Link>
          <Link href="/business-partners" className="hover:text-white/80 transition-colors">Partners</Link>
          <Link href="/about" className="hover:text-white/80 transition-colors">About Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
