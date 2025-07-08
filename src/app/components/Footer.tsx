'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Murthy+Towers,Devanooru,Rajeevnagara+2nd+Stage,Udayagiri,Mysore+570019";

  return (
    <div className="self-stretch px-36 py-16 bg-orange-50 flex flex-col justify-start items-start gap-20 overflow-hidden">
      {/* Logo and Group Name */}
      <div className="self-stretch inline-flex justify-start items-center gap-10">
        {/* Company Logo */}
        <div className="w-28 h-28 relative">
          <Image
            src="/logo.svg"
            alt="Sudhanand Group Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="justify-start text-black text-5xl font-normal font-['Geist'] leading-10">Sudhanand Group</div>
      </div>

      {/* Tagline */}
      <div className="self-stretch flex justify-center items-center gap-2.5">
        <div className="flex-1 text-black text-lg font-normal font-geist leading-normal">
          Deep expertise, decisive execution - the hallmark of Sudhanand Group
        </div>
      </div>

      {/* Contact Info, Address, and Links */}
      <div className="flex justify-start items-start gap-11">
        {/* Contact Info */}
        <div className="flex flex-col justify-center items-start gap-0.5">
          <a 
            href="mailto:hello@figma.com?subject=Inquiry%20from%20Website" 
            className="w-64 text-black text-sm font-normal font-geist leading-tight hover:underline"
          >
            hello@figma.com
          </a>
          <a 
            href="mailto:hello@sudhanandgroup.com?subject=Inquiry%20from%20Website" 
            className="w-64 text-black text-sm font-normal font-geist leading-tight hover:underline"
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
        <div className="flex flex-col justify-center items-start gap-0.5">
          <a 
            href={mapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-64 text-black text-sm font-normal font-inter leading-snug hover:underline"
          >
            Sy. No. 59, 2nd Floor, Dakshina Murthy Towers, Devanooru, Rajeevnagara 2nd Stage, Udayagiri, Mysore 570019.
          </a>
        </div>

        {/* Navigation Links */}
        <div className="inline-flex flex-col justify-center items-start gap-0.5">
          <Link href="/" className="w-64 text-black text-sm font-normal font-geist leading-tight hover:underline">
            Home
          </Link>
          <Link href="/business-ventures" className="w-64 text-black text-sm font-normal font-geist leading-tight hover:underline">
            Business Ventures
          </Link>
          <Link href="/business-partners" className="w-64 text-black text-sm font-normal font-geist leading-tight hover:underline">
            Business Partners
          </Link>
          <Link href="/about" className="w-64 text-black text-sm font-normal font-geist leading-tight hover:underline">
            About Us
          </Link>
        </div>
      </div>

      {/* Legal Info */}
      <div className="flex justify-start items-center gap-2.5">
        <div className="w-48 text-black text-sm font-normal font-geist leading-tight">
          Sudhanand Group Legal<br/>
          © 2025 All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;