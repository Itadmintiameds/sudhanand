'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Murthy+Towers,Devanooru,Rajeevnagara+2nd+Stage,Udayagiri,Mysore+570019';

const Footer: React.FC = () => {
  return (
    <footer className="self-stretch px-6 sm:px-10 md:px-20 lg:px-36 py-8 sm:py-12 lg:py-16 bg-orange-50 flex flex-col gap-10 sm:gap-16 lg:gap-20 overflow-hidden">
      {/* Logo and Group Name */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-10">
        <div className="w-20 h-20 sm:w-28 sm:h-28 relative flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Sudhanand Group Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-black text-3xl sm:text-5xl font-normal font-['Geist'] leading-8 sm:leading-10">
          Sudhanand Group
        </h1>
      </div>

      {/* Tagline */}
      <div className="text-black text-base sm:text-lg font-normal font-geist leading-normal text-center sm:text-left">
        Deep expertise, decisive execution - the hallmark of Sudhanand Group
      </div>

      {/* Contact Info, Address, and Links */}
      <div className="flex flex-col sm:flex-row sm:justify-start sm:items-start gap-8 sm:gap-11">
        {/* Contact Info */}
        <div className="flex flex-col gap-1.5">
          <a
            href="mailto:hello@figma.com?subject=Inquiry%20from%20Website"
            className="w-64 text-black text-sm font-normal font-geist leading-tight hover:underline break-words"
          >
            hello@figma.com
          </a>
          <a
            href="mailto:hello@sudhanandgroup.com?subject=Inquiry%20from%20Website"
            className="w-64 text-black text-sm font-normal font-geist leading-tight hover:underline break-words"
          >
            hello@sudhanandgroup.com
          </a>
          <a
            href="tel:+918214280152"
            className="w-64 text-black text-sm font-normal font-inter leading-snug hover:underline"
          >
            +91 821 428 0152
          </a>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-1.5">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 text-black text-sm font-normal font-inter leading-snug hover:underline break-words"
          >
            Sy. No. 59, 2nd Floor, Dakshina Murthy Towers, Devanooru, Rajeevnagara
            2nd Stage, Udayagiri, Mysore 570019.
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1.5">
          <Link
            href="/"
            className="w-64 text-black text-sm font-normal font-geist leading-tight hover:underline"
          >
            Home
          </Link>
          <Link
            href="/business-ventures"
            className="w-64 text-black text-sm font-normal font-geist leading-tight hover:underline"
          >
            Business Ventures
          </Link>
          <Link
            href="/business-partners"
            className="w-64 text-black text-sm font-normal font-geist leading-tight hover:underline"
          >
            Business Partners
          </Link>
          <Link
            href="/about"
            className="w-64 text-black text-sm font-normal font-geist leading-tight hover:underline"
          >
            About Us
          </Link>
        </nav>
      </div>

      {/* Legal Info */}
      <div className="text-black text-sm font-normal font-geist leading-tight">
        Sudhanand Group Legal
        <br />
        © 2025 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
