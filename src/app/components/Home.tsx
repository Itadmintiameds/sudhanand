  'use client';

  import Header from './Header';
  import Footer from './Footer';
  import Image from 'next/image';
  import Link from 'next/link';
  import React, { useState } from 'react';


  const HomePage = () => {
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    const services = [
      "Healthcare Service",
      "Pharmacy Services",
      "Blood Bank Services",
      "IT & ITES Solutions",
      "Finance & Accounting",
      "US Home Insurance",
      "SaaS Solutions"
    ];


    return (
      <main className="bg-white text-black">
        {/* Hero Section */}
        <section 
          className="relative h-[680px] px-12 pt-6 pb-16 bg-gradient-to-b from-orange-50/0 via-orange-50/20 to-orange-50 flex flex-col justify-end items-start gap-20"
          style={{
            backgroundImage: "url('/header.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <Header />
          <div className="self-stretch px-10 inline-flex justify-between items-end">
            <div className="w-96 justify-start text-slate-500 text-6xl font-bold font-['Playfair_Display']">
              Sudhanand Group
            </div>
            <div className="py-6 flex justify-center items-center">
              <div className="w-96 justify-start text-neutral-700 text-3xl font-medium font-['Geist'] leading-loose">Built on trust, driven by innovation, growing with purpose.</div>
            </div>
          </div>
        </section>

        {/* Our Businesses Section */}
        <section className="py-20 bg-orange-50 flex flex-col justify-center items-center gap-14 overflow-hidden px-4">
          <div className="w-full max-w-[1008px] flex flex-col justify-center items-start gap-6">
            <div className="flex items-center gap-3">
              {/* <img src="/Group.png" alt="Left icon" className="w-5 h-5" /> */}
              <img src="/Group.png" alt="Right icon" className="w-5 h-5" />
              <h2 className="text-black text-3xl font-medium font-['Geist'] leading-9">
                Who We Are
              </h2>
              <img src="/Group (1).png" alt="Right icon" className="w-5 h-5" />
            </div>
            <div className="w-full pl-0 md:pl-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex-1 max-w-[560px]">
                <p className="text-black text-lg font-normal font-geist leading-normal">
                  We excel across multiple industries, driven by a strong foundation in ethical, community-focused, and socially responsible business practices. Our commitment to integrity and sustainable growth guides every decision we make, ensuring that our operations positively impact society. With a deep-rooted belief in the power of entrepreneurship and strategic diversification, we actively explore opportunities across sectors such as healthcare, technology, pharmaceuticals, hospitality, and beyond.
                </p>
              </div>
              <div className="px-0 md:px-10 flex flex-col justify-center items-center gap-4">
                <blockquote className="w-full md:w-80 text-center text-orange-950 text-4xl font-normal font-['Satisfy'] leading-[54px]">
                  "Growing with Purpose, Impacting Lives through Innovation and Responsibility."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

     {/* Brand Logos Section - Infinite Scrolling */}
<div className="self-stretch pb-28 bg-orange-50 overflow-hidden">
  <div className="marquee-wrapper">
    <div className="marquee-track">
      {/* 1 set of logos (repeated twice inside .marquee-track for loop) */}
      {[...Array(2)].map((_, i) => (
        <div key={i} className="marquee-group flex items-center gap-12 px-6">
          <a href="https://www.sudhanandbusinesssolutions.com/"><img className="w-28 h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/SBPL 2 1.png" /></a>
          <a href="https://www.sudhanandpharmacies.com/"><img className="w-28 h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/Rectangle 4.png" /></a>
          <a href="https://www.tiameds.ai/"><img className="w-28 h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/Rectangle 1 (1).png" /></a>
          <a href="https://www.cureplushospitals.com/"><img className="w-28 h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/Rectangle 1.png" /></a>
          <a href="https://www.cureplusbloodbank.com/"><img className="w-28 h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/Rectangle 3.png" /></a>
          <a href="https://www.cureplushospitals.com/"><img className="w-28 h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/CUREPLUS PHARMA 1.png" /></a>
          <a href="https://www.arcsportzone.com/"><div className="w-20 h-28 relative opacity-60"><img className="w-16 h-24 absolute top-[6.11px] left-[7.71px] transition-opacity cursor-pointer" src="/home/ARC.png" /></div></a>
          <a href="https://smt.help/"><img className="w-28 h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/smt.png" /></a>
          <a href="https://sudhanandnovacandolim.com/"><img className="w-28 h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/NOVA.png" /></a>
          <a href="https://sudhanandfourseasons.com/"><img className="w-48 h-9 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/FOUR SEASONS.png" /></a>
        </div>
      ))}
    </div>
  </div>
</div>

<style>
{`
  .marquee-wrapper {
    overflow: hidden;
    width: 100%;
    position: relative;
  }

  .marquee-track {
    display: flex;
    width: max-content;
    animation: scroll-marquee 10s linear infinite;
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
  }
`}
</style>



        {/* Business Section */}
        <section
          className="relative px-8 md:px-24 py-24 md:py-32 flex flex-col justify-center items-center gap-16"
          style={{
            backgroundImage: "url('/Video section.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
              Businesses That Work For A Better Tomorrow
            </h2>

            <p className="text-xl md:text-2xl text-white text-center max-w-4xl">
              Sudhanand Group builds sustainable, impactful ventures that empower communities and drive progress for a healthier, smarter future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-12">
    {/* Video 1 */}
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-video">
      <iframe
        src="https://www.youtube.com/embed/wW_WOzha5to?rel=0"
        title="Healthcare Innovation"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>

    {/* Video 2 */}
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-video">
      <iframe
        src="https://www.youtube.com/embed/AYV5wQw0lu4?si=PHUqgleF_0xfGVYk"
        title="Tech for Good"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>

    {/* Video 3 */}
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-video">
      <iframe
        src="https://www.youtube.com/embed/0sWf8vru8t8?si=7-a961Jge8_PQCUl"
        title="Community Impact"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  </div>
          </div>
        </section>

        {/* What We Do Section */}
  <section 
    className="w-1280px h-440px py-8 md:py-10 bg-slate-500 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 overflow-hidden px-4"
    style={{
      backgroundImage: "url('/what we do.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="py-2 flex justify-center items-start">
      <h2 className="text-white text-2xl md:text-3xl font-medium font-geist leading-9">
        What We Do
      </h2>
    </div>
    <div className="flex flex-col justify-start items-start gap-4 md:gap-6">
      <div className="flex flex-col justify-center items-start gap-2 md:gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`text-white text-2xl md:text-6xl font-normal font-geist leading-[1.2] md:leading-[72px] transition-all duration-300 ${
              hoveredService === index ? "scale-105 pl-4" : "scale-100"
            }`}
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {service}
          </div>
        ))}
        <div className="text-neutral-400 text-3xl md:text-6xl font-normal font-geist leading-[1.2] md:leading-[72px]">
          +More
        </div>
      </div>
      <Link
        href="/business-ventures"
        className="px-4 py-2 bg-white rounded-[500px] flex justify-center items-center gap-2.5 hover:bg-gray-100 transition-colors w-full md:w-auto"
      >
        <span className="text-center text-black text-base md:text-lg font-normal font-geist leading-snug">
          See all ventures
        </span>
      </Link>
    </div>
  </section>

  {/* Timeline Section */}
{/* Timeline Section – Zigzag 3-Column Layout */}
{/* Timeline Section – 4x3 with Arrows (Figma Accurate) */}
<section
  className="w-full px-4 md:px-20 py-24 bg-cover bg-center relative"
  style={{ backgroundImage: "url('/Timeline.png')" }}
>
  {/* Background overlay with blur */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>
  
  <div className="relative z-10">
    <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-12 md:mb-20">
      Our Journey Through Time
    </h2>

    {/* Mobile Vertical Timeline */}
    <div className="md:hidden flex flex-col items-center gap-6">
      {[
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
      ].map((item, i) => (
        <div 
          key={i} 
          className="w-full max-w-md flex flex-col justify-start items-center gap-1 group transition-all duration-300"
        >
          <div className={`
            w-full h-16 px-2.5 py-4 rounded-tl-2xl rounded-tr-2xl 
            outline outline-1 outline-white/40 backdrop-blur-md 
            flex justify-center items-center
            ${item.special ? 'bg-amber-900/30' : 'bg-black/20'}
            group-hover:bg-black/30 transition-colors
          `}>
            <div className="text-rose-50 text-2xl font-semibold font-geist">
              {item.year}
            </div>
          </div>
          <div className={`
            w-full px-6 py-4 rounded-bl-2xl rounded-br-2xl 
            outline outline-1 outline-white/40 backdrop-blur-md 
            flex flex-col justify-center items-center gap-2
            ${item.special ? 
              'bg-gradient-to-b from-amber-200/20 to-amber-300/20' : 
              'bg-black/10'}
            group-hover:bg-black/20 transition-colors
            min-h-[120px]
          `}>
            {item.img ? (
              <img 
                src={item.img} 
                className="h-28 object-contain group-hover:scale-105 transition-transform" 
                alt="Humble beginnings"
              />
            ) : (
              <div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">
                {item.desc}
              </div>
            )}
          </div>
          {i < 11 && (
            <div className="w-6 h-6 my-2 flex justify-center items-center">
              <img
                src="/downarrow.svg"
                className="w-6 h-6 opacity-80 group-hover:opacity-100 group-hover:animate-bounce"
                alt="Next"
              />
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Desktop Horizontal Timeline */}
    <div className="hidden md:flex flex-col items-center gap-8">
      {/* Row 1 */}
      <div className="flex items-center justify-center gap-4">
        {[
          { year: '2010', img: '/home/humble.png', special: true },
          'right',
          { year: '2011', desc: 'Started our journey with SAS Poorna Arogya Healthcare' },
          'right',
          { year: '2012', desc: 'Started Sachidananda Organic Farm – Nanjangud' },
          'right',
          { year: '2013', desc: 'Dr. M. D. Sachidananda Murthy Memorial Education Trust\n\n Sudhanand Healthcare Solutions Pvt. Ltd. – Mysuru' },
        ].map((item, i, arr) => {
          const isLast = i === arr.length - 1;
          if (item === 'right') {
            return (
              <img 
                key={i} 
                src="/rightarrow.svg" 
                className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" 
                alt="Right arrow"
              />
            );
          }

          const year = typeof item === 'object' && item.year;
          const desc = typeof item === 'object' && item.desc;
          const img = typeof item === 'object' && item.img;
          const special = typeof item === 'object' && item.special;

          return (
            <div 
              key={i} 
              className="w-56 h-60 flex flex-col justify-start items-center gap-1 relative group transition-all duration-300 hover:scale-105"
            >
              <div className={`
                w-full h-16 px-2.5 py-4 rounded-tl-2xl rounded-tr-2xl 
                outline outline-1 outline-white/40 backdrop-blur-md 
                flex justify-center items-center
                ${special ? 'bg-amber-900/30' : 'bg-black/20'}
                group-hover:bg-black/30 transition-colors
              `}>
                <div className="text-rose-50 text-2xl font-semibold font-geist">
                  {year}
                </div>
              </div>
              <div className={`
                w-full flex-1 px-6 py-4 rounded-bl-2xl rounded-br-2xl 
                outline outline-1 outline-white/40 backdrop-blur-md 
                flex flex-col justify-center items-center gap-2
                ${special ? 
                  'bg-gradient-to-b from-amber-200/20 to-amber-300/20' : 
                  'bg-black/10'}
                group-hover:bg-black/20 transition-colors
              `}>
                {img ? (
                  <img 
                    src={img} 
                    className="h-28 object-contain group-hover:scale-105 transition-transform" 
                    alt="Timeline image"
                  />
                ) : (
                  <div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">
                    {desc}
                  </div>
                )}
              </div>
              {isLast && (
                <img
                  src="/downarrow.svg"
                  className="w-6 h-6 mt-2 absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-80 group-hover:opacity-100 group-hover:animate-bounce"
                  alt="Down arrow"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Row 2 */}
      <div className="flex items-center justify-center gap-4">
        {[
          { year: '2021', desc: 'Opened our hotel\nSudhanand Four Seasons – Mysuru' },
          'left',
          { year: '2020', desc: 'Opened Krishna Hospital – Bettadapura\n\nStarted Sudhanand Business Solutions Pvt. Ltd. – Mysuru' },
          'left',
          { year: '2018', desc: 'Started Kaveri Hospital – Kodagu\n& ARC Sportzone – Mysuru' },
          'left',
          { year: '2017', desc: 'Our first hospital "Disha Hospital" – Mysuru\n\n Opened Dharani Hospital – Chamaarajanagara' },
        ].map((item, i) => {
          const isFirst = i === 0;
          if (item === 'left') {
            return (
              <img 
                key={i} 
                src="/leftarrow.svg" 
                className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" 
                alt="Left arrow"
              />
            );
          }

          const year = typeof item === 'object' && item.year;
          const desc = typeof item === 'object' && item.desc;

          return (
            <div 
              key={i} 
              className="w-56 h-60 flex flex-col justify-start items-center gap-1 relative group transition-all duration-300 hover:scale-105"
            >
              <div className="
                w-full h-16 px-2.5 py-4 bg-black/20 rounded-tl-2xl rounded-tr-2xl 
                outline outline-1 outline-white/40 backdrop-blur-md 
                flex justify-center items-center
                group-hover:bg-black/30 transition-colors
              ">
                <div className="text-rose-50 text-2xl font-semibold font-geist">
                  {year}
                </div>
              </div>
              <div className="
                w-full flex-1 px-6 py-4 bg-black/10 rounded-bl-2xl rounded-br-2xl 
                outline outline-1 outline-white/40 backdrop-blur-md 
                flex flex-col justify-center items-center gap-2
                group-hover:bg-black/20 transition-colors
              ">
                <div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">
                  {desc}
                </div>
              </div>
              {isFirst && (
                <img
                  src="/downarrow.svg"
                  className="w-6 h-6 mt-2 absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-80 group-hover:opacity-100 group-hover:animate-bounce"
                  alt="Down arrow"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Row 3 */}
      <div className="flex items-center justify-center gap-4">
        {[
          { year: '2022', desc: 'Nova Candolim by Sudhanand – Goa\n\n Sudhanand Arogya Vahini\nKarnataka Sudhanand Animal & Dairy Farms – Yelandur' },
          'right',
          { year: '2023', desc: 'Sudhanand Pharmacies Pvt. Ltd – Mysore\n\n Sudhanand Distributors – Mysuru\n\n Narasegowda Memorial Hospital – Mandya' },
          'right',
          { year: '2024', desc: 'Started Idea Gateway Inc. – New York\n\n Tiameds Technologies Pvt. Ltd. – Mysuru' },
          'right',
          { year: '2025', desc: 'Started our 4 New Spoke Hospitals\n\n Started Sini Meds' },
        ].map((item, i) => {
          if (item === 'right') {
            return (
              <img 
                key={i} 
                src="/rightarrow.svg" 
                className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" 
                alt="Right arrow"
              />
            );
          }

          const year = typeof item === 'object' && item.year;
          const desc = typeof item === 'object' && item.desc;

          return (
            <div 
              key={i} 
              className="w-56 h-60 flex flex-col justify-start items-center gap-1 group transition-all duration-300 hover:scale-105"
            >
              <div className="
                w-full h-16 px-2.5 py-4 bg-black/20 rounded-tl-2xl rounded-tr-2xl 
                outline outline-1 outline-white/40 backdrop-blur-md 
                flex justify-center items-center
                group-hover:bg-black/30 transition-colors
              ">
                <div className="text-rose-50 text-2xl font-semibold font-geist">
                  {year}
                </div>
              </div>
              <div className="
                w-full flex-1 px-6 py-4 bg-black/10 rounded-bl-2xl rounded-br-2xl 
                outline outline-1 outline-white/40 backdrop-blur-md 
                flex flex-col justify-center items-center gap-2
                group-hover:bg-black/20 transition-colors
              ">
                <div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">
                  {desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

        <div
  className="w-full h-[788px] py-28 flex flex-col justify-center items-center gap-20 overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/updfound.png')"
  }}
>
  <div className="h-96 px-8 md:px-20 py-10 bg-zinc-100/50 rounded-3xl outline outline-8 outline-offset-[-4px] backdrop-blur-blur flex justify-center items-center gap-14 max-w-5xl w-full">
    <img className="w-80 max-w-80 relative" src="/home/arjunsir.png" />
    <div className="w-[493px] p-6 rounded-2xl backdrop-blur-md flex flex-col justify-center items-start gap-10">
      <div className="p-6 rounded-2xl flex flex-col justify-start items-start gap-4">
        <div className="text-center text-zinc-800 text-2xl font-medium font-['Geist'] leading-relaxed">Hear from our founder</div>
        <div className="text-neutral-600 text-base font-normal font-['Geist'] leading-none">
          Sudhanand started as a dream to serve with purpose. Today, across industries, we grow with compassion, innovation, and integrity—building lasting impact, not just businesses.
        </div>
        <div className="flex flex-col gap-3">
          <div className="inline-flex gap-4">
            <div className="px-6 py-1 bg-slate-300/20 rounded-2xl backdrop-blur-md flex justify-center items-center">
              <div className="text-slate-500 text-sm font-normal font-['Geist'] leading-none">Innovation</div>
            </div>
            <div className="px-6 py-1 bg-slate-300/20 rounded-2xl backdrop-blur-md flex justify-center items-center">
              <div className="text-slate-500 text-sm font-normal font-['Geist'] leading-none">Trust</div>
            </div>
          </div>
          <div className="inline-flex gap-4">
            <div className="px-6 py-1 bg-slate-300/20 rounded-2xl backdrop-blur-md flex justify-center items-center">
              <div className="text-slate-500 text-sm font-normal font-['Geist'] leading-none">Quality</div>
            </div>
            <div className="px-6 py-1 bg-slate-300/20 rounded-2xl backdrop-blur-md flex justify-center items-center">
              <div className="text-slate-500 text-sm font-normal font-['Geist'] leading-none">Sustainability</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 flex justify-center items-center w-full">
        <div className="flex-1 text-slate-500 text-xl font-medium font-['Geist'] leading-snug">Dr. Arjun Sachidanand</div>
      </div>
    </div>
  </div>
</div>


<div
  className="w-full h-[1000px] p-2.5 rounded-2xl shadow-lg mx-auto"
  style={{
    backgroundImage: "url('/home/Images.png')",
    backgroundSize: 'cover',       // makes image cover entire div area
    backgroundPosition: 'center',  // centers the image
    backgroundRepeat: 'no-repeat', // prevents tiling
  }}
/>


        {/* Footer */}
        <Footer />
      </main>
    );
  };

  export default HomePage;
