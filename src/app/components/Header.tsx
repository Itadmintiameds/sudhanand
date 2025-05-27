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
    <header className={`fixed top-0 left-0 w-full flex items-center justify-between px-12 py-6 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/20 backdrop-blur-[2px] shadow-sm' 
        : 'bg-black/5 backdrop-blur-[1px]'
    }`}>
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src="/logo2.svg"
          alt="Sudhanand Group Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex space-x-10 text-sm font-medium">
        <Link href="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
        <Link href="/business-ventures" className="text-white/90 hover:text-white transition-colors">Business Ventures</Link>
        <Link href="/business-partners" className="text-white/90 hover:text-white transition-colors">Business Partners</Link>
        <Link href="/about" className="text-white/90 hover:text-white transition-colors">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;