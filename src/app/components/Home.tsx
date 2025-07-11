'use client';

import Header from './Header';
import Footer from './Footer';
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
        className="relative min-h-[400px] md:h-[680px] px-4 md:px-12 pt-6 pb-10 md:pb-16 bg-gradient-to-b from-orange-50/0 via-orange-50/20 to-orange-50 flex flex-col justify-end items-start gap-10 md:gap-20"
        style={{
          backgroundImage: "url('/header.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <div className="self-stretch px-4 md:px-10 inline-flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
          <div className="w-full md:w-96 text-slate-500 text-3xl md:text-6xl font-bold font-['Playfair_Display']">
            Sudhanand Group
          </div>
          <div className="py-4 md:py-6 flex justify-center items-center w-full md:w-96">
            <div className="text-neutral-700 text-lg md:text-3xl font-medium font-['Geist'] leading-relaxed md:leading-loose text-center md:text-left">
              Built on trust, driven by innovation, growing with purpose.
            </div>
          </div>
        </div>
      </section>

      {/* Our Businesses Section */}
      <section className="py-16 md:py-20 bg-orange-50 flex flex-col justify-center items-center gap-10 md:gap-14 overflow-hidden px-4 md:px-0">
        <div className="w-full max-w-[1008px] flex flex-col justify-center items-start gap-6">
          <div className="flex items-center gap-3">
            <img src="/Group.png" alt="Left icon" className="w-5 h-5" />
            <h2 className="text-black text-2xl md:text-3xl font-medium font-['Geist'] leading-9">
              Who We Are
            </h2>
            <img src="/Group (1).png" alt="Right icon" className="w-5 h-5" />
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="flex-1 max-w-full md:max-w-[560px]">
              <p className="text-black text-base md:text-lg font-normal font-geist leading-relaxed md:leading-normal">
                We excel across multiple industries, driven by a strong foundation in ethical, community-focused, and socially responsible business practices. Our commitment to integrity and sustainable growth guides every decision we make, ensuring that our operations positively impact society. With a deep-rooted belief in the power of entrepreneurship and strategic diversification, we actively explore opportunities across sectors such as healthcare, technology, pharmaceuticals, hospitality, and beyond.
              </p>
            </div>
            <div className="px-0 md:px-10 flex flex-col justify-center items-center gap-4 max-w-full md:max-w-[320px]">
              <blockquote className="w-full text-center text-orange-950 text-3xl md:text-4xl font-normal font-['Satisfy'] leading-[40px] md:leading-[54px]">
                "Growing with Purpose, Impacting Lives through Innovation and Responsibility."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos Section - Infinite Scrolling */}
      <div className="self-stretch pb-20 md:pb-28 bg-orange-50 overflow-x-auto scrollbar-hide">
        <div className="marquee-wrapper">
          <div className="marquee-track flex w-max animate-scroll-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="marquee-group flex items-center gap-8 px-6">
                <a href="https://www.sudhanandbusinesssolutions.com/">
                  <img className="w-20 h-20 md:w-28 md:h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/SBPL 2 1.png" alt="SBPL Logo" />
                </a>
                <a href="https://www.sudhanandpharmacies.com/">
                  <img className="w-20 h-20 md:w-28 md:h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/Rectangle 4.png" alt="Pharmacies Logo" />
                </a>
                <a href="https://www.tiameds.ai/">
                  <img className="w-20 h-20 md:w-28 md:h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/Rectangle 1 (1).png" alt="Tiameds Logo" />
                </a>
                <a href="https://www.cureplushospitals.com/">
                  <img className="w-20 h-20 md:w-28 md:h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/Rectangle 1.png" alt="Hospitals Logo" />
                </a>
                <a href="https://www.cureplusbloodbank.com/">
  <img 
    className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-60 hover:opacity-100 transition-opacity cursor-pointer" 
    src="/home/Rectangle 3.png" 
    alt="Blood Bank Logo" 
  />
</a>

                <a href="https://www.cureplushospitals.com/">
                  <img className="w-20 h-20 md:w-28 md:h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/CUREPLUS PHARMA 1.png" alt="Pharma Logo" />
                </a>
                <a href="https://www.arcsportzone.com/">
                  <div className="w-16 h-28 relative opacity-60">
                    <img className="w-12 h-20 absolute top-[6.11px] left-[7.71px] transition-opacity cursor-pointer" src="/home/ARC.png" alt="ARC Logo" />
                  </div>
                </a>
                <a href="https://smt.help/">
                  <img className="w-20 h-20 md:w-28 md:h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/smt.png" alt="SMT Logo" />
                </a>
                <a href="https://sudhanandnovacandolim.com/">
                  <img className="w-20 h-20 md:w-28 md:h-28 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/NOVA.png" alt="Nova Logo" />
                </a>
                <a href="https://sudhanandfourseasons.com/">
                  <img className="w-36 h-7 md:w-48 md:h-9 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" src="/home/FOUR SEASONS.png" alt="Four Seasons Logo" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .marquee-wrapper {
            overflow: hidden;
            width: 100%;
            position: relative;
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: scroll-marquee 20s linear infinite;
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
          /* Hide scrollbar for Chrome, Safari and Opera */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for IE, Edge and Firefox */
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}</style>
      </div>

      {/* Business Section */}
      <section
        className="relative px-6 md:px-24 py-16 md:py-32 flex flex-col justify-center items-center gap-12"
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
        <div className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
            Businesses That Work For A Better Tomorrow
          </h2>

          <p className="text-lg md:text-2xl text-white text-center max-w-4xl">
            Sudhanand Group builds sustainable, impactful ventures that empower communities and drive progress for a healthier, smarter future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8 md:mt-12">
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

      {/* What We Do Section - Fixed height issue */}
      <section
        className="w-full h-auto py-8 md:py-10 bg-slate-500 flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8 overflow-visible px-4 md:px-0 mx-auto"
        style={{
          backgroundImage: "url('/what we do.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="py-2 flex justify-center items-start w-full md:w-auto">
          <h2 className="text-white text-2xl md:text-3xl font-medium font-geist leading-9">
            What We Do
          </h2>
        </div>
        <div className="flex flex-col justify-start items-start gap-4 md:gap-6 w-full md:w-auto">
          <div className="flex flex-col justify-center items-start gap-2 md:gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`text-white text-xl md:text-6xl font-normal font-geist leading-[1.2] md:leading-[72px] transition-all duration-300 cursor-pointer ${
                  hoveredService === index ? "scale-105 pl-2 md:pl-4" : "scale-100"
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
          <a
            href="/business-ventures"
            className="px-4 py-2 bg-white rounded-full flex justify-center items-center gap-2.5 hover:bg-gray-100 transition-colors w-full md:w-auto mt-4 md:mt-0"
          >
            <span className="text-center text-black text-base md:text-lg font-normal font-geist leading-snug">
              See all ventures
            </span>
          </a>
        </div>
      </section>

      {/* Timeline Section */}
      {/* ... (You can add your timeline code here, unchanged) */}

      {/* Founder Section */}
      <div
        className="w-full h-auto md:h-[788px] py-20 md:py-28 flex flex-col justify-center items-center gap-16 overflow-hidden bg-cover bg-center bg-no-repeat px-4 md:px-0"
        style={{
          backgroundImage: "url('/updfound.png')",
        }}
      >
        <div className="h-auto md:h-96 px-6 md:px-20 py-10 bg-zinc-100/50 rounded-3xl outline outline-8 outline-offset-[-4px] backdrop-blur-md flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl w-full">
          <img className="w-64 md:w-80 max-w-full relative" src="/home/arjunsir.png" alt="Founder" />
          <div className="w-full md:w-[493px] p-6 rounded-2xl backdrop-blur-md flex flex-col justify-center items-start gap-8 md:gap-10">
            <div className="p-4 md:p-6 rounded-2xl flex flex-col justify-start items-start gap-4">
              <div className="text-center md:text-left text-zinc-800 text-xl md:text-2xl font-medium font-['Geist'] leading-relaxed">
                Hear from our founder
              </div>
              <div className="text-neutral-600 text-sm md:text-base font-normal font-['Geist'] leading-tight">
                Sudhanand started as a dream to serve with purpose. Today, across industries, we grow with compassion, innovation, and integrity—building lasting impact, not just businesses.
              </div>
              <div className="flex flex-wrap gap-3">
                {['Innovation', 'Trust', 'Quality', 'Sustainability'].map((tag) => (
                  <div key={tag} className="px-4 py-1 bg-slate-300/20 rounded-2xl backdrop-blur-md flex justify-center items-center">
                    <div className="text-slate-500 text-xs md:text-sm font-normal font-['Geist'] leading-none">
                      {tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-4 flex justify-center items-center w-full">
              <div className="flex-1 text-slate-500 text-lg md:text-xl font-medium font-['Geist'] leading-snug text-center md:text-left">
                Dr. Arjun Sachidanand
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div
        className="w-full h-[600px] md:h-[1000px] p-2.5 rounded-2xl shadow-lg mx-auto"
        style={{
          backgroundImage: "url('/home/Images.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default HomePage;
