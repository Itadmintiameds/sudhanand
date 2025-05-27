'use client';

import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

type Brand = {
  logo: string;
  link: string;
  alt: string;
};

type TimelineItem = {
  year: string;
  description: string;
};

type VideoItem = {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
  description: string;
};

const HomePage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  const brands: Brand[] = [
    { logo: '/SP.png', link: '/sp', alt: 'SP Logo' },
    { logo: '/Tiamed.png', link: '/tiameds', alt: 'Tiamed Logo' },
    { logo: '/Cureplus.png', link: '/cure', alt: 'Cureplus Logo' },
    { logo: '/cureblood.png', link: '/bloodbank', alt: 'Cureblood Logo' },
    { logo: '/curepharma.png', link: '/pjaha', alt: 'Curepharma Logo' },
    { logo: '/arc.png', link: '/aro', alt: 'ARC Logo' },
    { logo: '/smt.png', link: '/smt', alt: 'SMT Logo' }
  ];

  const timelineData: TimelineItem[] = [
    { year: '2011', description: 'Started our journey with SAS Poorna Arogya Healthcare' },
    { year: '2012', description: 'Started Sachidananda Organic Farm - Nanjangud' },
    { year: '2013', description: 'Dr. M. D. Sachidananda Murthy Memorial Education Trust\nSudhanand Healthcare Solutions Pvt. Ltd. - Mysuru' },
    { year: '2014', description: 'Our first hospital "Disha Hospital" - Mysuru' },
    { year: '2020', description: 'Opened Krishna Hospital - Bettadapuru' },
    { year: '2019', description: 'Started Sudhanand Business Solutions Pvt. Ltd. - Mysuru' },
    { year: '2018', description: 'Started\nKaveri Hospital - Kodagu & ARC Sportzone - Mysuru' },
    { year: '2017', description: 'Opened \nDharani Hospital - Chamaarjanagara' },
    { year: '2021', description: 'Opened \nOpened our hotel Sudhanand Four Seasons - Mysuru' },
    { year: '2022', description: 'Started\nOpened Nova Candolim by Sudhanand - Goa Sudhanand Arogya Vahini - Karnataka Sudhanand Animal & Dairy Farms - Yelandur' },
    { year: '2023', description: 'Sudhanand Pharmacies Pvt. Ltd - Mysore Sudhanand Distributors - Mysuru \nNarasegowda Memorial Hospital - Mandya' },
    { year: '2025', description: 'Started Idea Gateway Inc. - New York\nTiameds Technologies Pvt. Ltd. - Mysuru\n9 New Spoke Hospitals' }
  ];

  const services = [
    "Healthcare Service",
    "Pharmacy Services",
    "Blood Bank Services",
    "IT & ITES Solutions",
    "Finance & Accounting",
    "US Home Insurance",
    "SaaS Solutions"
  ];

  const BrandLogo = ({ brand }: { brand: Brand }) => (
    <Link 
      href={brand.link}
      className="w-32 h-32 md:w-40 md:h-40 relative opacity-70 hover:opacity-100 transition-opacity duration-100"
    >
      <Image
        src={brand.logo}
        alt={brand.alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 80px, 112px"
      />
    </Link>
  );

  const TimelineBox = ({ item }: { item: TimelineItem }) => (
    <div className="w-full md:w-56 h-60 flex flex-col justify-start items-center gap-1 transition-all duration-300 hover:scale-105">
      <div className="w-full h-16 px-2.5 py-4 bg-black/10 rounded-tl-2xl rounded-tr-2xl outline outline-1 outline-offset-[-0.50px] outline-white/40 backdrop-blur-md flex justify-center items-center gap-2.5">
        <div className="text-center text-rose-50 text-2xl md:text-3xl font-semibold font-geist leading-10">{item.year}</div>
      </div>
      <div className="w-full flex-1 px-4 md:px-6 py-4 bg-black/10 rounded-bl-2xl rounded-br-2xl outline outline-1 outline-offset-[-0.50px] outline-white/40 backdrop-blur-md flex flex-col justify-center items-center gap-2.5">
        <div className="w-full text-center text-rose-50 text-xs md:text-sm font-semibold font-geist leading-tight whitespace-pre-line">
          {item.description}
        </div>
      </div>
    </div>
  );


  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section 
        className="relative h-[720px] px-4 md:px-12 pt-6 pb-16 bg-gradient-to-b from-black/0 to-black outline outline-1 outline-offset-[-1px] outline-black flex flex-col justify-end items-start gap-20"
        style={{
          backgroundImage: "url('/Header section.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Header />
        <div className="relative z-10 flex flex-col justify-center items-start gap-4 px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Sudhanand Group</h1>
          <p className="text-xl md:text-2xl font-medium text-white max-w-xl">
            Built on trust, driven by innovation, growing with purpose
          </p>
          <p className="max-w-md text-lg text-white">
            Sudhanand Group is building innovative, future-focused businesses that drive growth,
            empower communities, and create lasting impact across industries.
          </p>
        </div>
      </section>

      {/* Our Businesses Section */}
      <section className="py-20 bg-orange-50 flex flex-col justify-center items-center gap-14 overflow-hidden px-4">
        <div className="w-full max-w-[1008px] flex flex-col justify-center items-start gap-6">
          
         <div className="flex items-center gap-3">
  <img src="/Group.png" alt="Left icon" className="w-5 h-5" />
  <h2 className="text-black text-3xl font-medium font-['Geist'] leading-9">
    Our Businesses
  </h2>
  <img src="/Group (1).png" alt="Right icon" className="w-5 h-5" />
</div>

          <div className="w-full pl-0 md:pl-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-1 max-w-[560px]">
              <p className="text-black text-lg font-normal font-geist leading-normal">
                Sudhanand Group, headquartered in Mysuru, is a dynamic and diversified conglomerate with a strong foundation in healthcare. Over the years, it has expanded into sectors including hospitality, education, IT-BPO, organic farming, and sports. Its healthcare division operates multiple hospitals across Karnataka, delivering affordable and accessible medical services to underserved communities. In the hospitality sector, the group manages a boutique hotel in Mysuru, while its educational initiatives span kindergartens and charitable trusts dedicated to supporting underprivileged children.
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

{/* Brand Logos Section */}
<section className="px-4 md:px-36 pb-28 bg-orange-50 flex flex-wrap justify-center items-center gap-8 md:gap-16 overflow-hidden">
  {brands.map((brand, index) => (
    <div key={index} className="w-32 h-32 flex items-center justify-center">
      <BrandLogo brand={brand} />
    </div>
  ))}
</section>


{/* { Business Section} */}
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
          <a
            href="https://youtu.be/0sWf8vru8t8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src="https://img.youtube.com/vi/0sWf8vru8t8/maxresdefault.jpg"
              alt="Healthcare Innovation"
              className="w-full aspect-video object-cover"
            />
            <h3 className="mt-4 text-xl font-medium text-white text-center group-hover:text-blue-300">
              Healthcare Innovation
            </h3>
          </a>

          {/* Video 2 */}
          <a
            href="https://youtu.be/dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
              alt="Tech for Good"
              className="w-full aspect-video object-cover"
            />
            <h3 className="mt-4 text-xl font-medium text-white text-center group-hover:text-blue-300">
              Tech for Good
            </h3>
          </a>

          {/* Video 3 */}
          <a
            href="https://youtu.be/9bZkp7q19f0"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src="https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg"
              alt="Community Impact"
              className="w-full aspect-video object-cover"
            />
            <h3 className="mt-4 text-xl font-medium text-white text-center group-hover:text-blue-300">
              Community Impact
            </h3>
          </a>
        </div>
      </div>
    </section>

      <section className="py-8 md:py-10 bg-slate-500 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 overflow-hidden px-4">
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
          className={`text-white text-3xl md:text-6xl font-normal font-geist leading-[1.2] md:leading-[72px] transition-all duration-300 ${
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
      href="/ventures"
      className="px-4 py-2 bg-white rounded-[500px] flex justify-center items-center gap-2.5 hover:bg-gray-100 transition-colors w-full md:w-auto"
    >
      <span className="text-center text-black text-base md:text-lg font-normal font-geist leading-snug">
        See all ventures
      </span>
    </Link>
  </div>
</section>


{/* Timeline Section with Background Image and Arrows */}
<section 
  className="relative px-4 md:px-28 py-20 flex flex-col justify-center items-center"
  style={{
    backgroundImage: "url('/Timeline section.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}
>
  {/* Background overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
  
  {/* Content */}
  <div className="relative z-10 w-full max-w-[1040px] flex flex-col justify-start items-start gap-8">
    <h2 className="w-full text-center text-3xl md:text-4xl font-bold text-white mb-8">
      Our Journey Through Time
    </h2>
    
    {[...Array(3)].map((_, row) => (
      <div key={row} className="w-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 relative">
        {/* Left arrow for mobile */}
        {row > 0 && (
          <div className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-20">
            <Image 
              src="/uparrow.svg" 
              alt="Scroll up"
              width={24}
              height={24}
              className="opacity-70 rotate-90"
            />
          </div>
        )}
        
        {timelineData.slice(row*4, row*4+4).map((item, i) => (
          <React.Fragment key={`${row}-${i}`}>
            <div className="relative">
              <TimelineBox item={item} />
              
              {/* First row last element has down arrow below it */}
              {row === 0 && i === 3 && (
                <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <Image 
                    src="/downarrow.svg" 
                    alt="Down"
                    width={24}
                    height={24}
                    className="opacity-70"
                  />
                </div>
              )}
              
              {/* Second row first box has down arrow below it */}
              {row === 1 && i === 0 && (
                <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <Image 
                    src="/downarrow.svg" 
                    alt="Down"
                    width={24}
                    height={24}
                    className="opacity-70"
                  />
                </div>
              )}
            </div>
            
            {/* Arrow changes based on your requirements */}
            {i < 3 && (
              <>
                {/* Second row arrows are left arrows */}
                {row === 1 ? (
                  <div className="hidden md:flex w-8 h-8 items-center justify-center">
                    <Image 
                      src="/leftarrow.svg" 
                      alt="Previous"
                      width={24}
                      height={24}
                      className="opacity-70"
                    />
                  </div>
                ) : (
                  /* Default right arrow for other cases */
                  <div className="hidden md:flex w-8 h-8 items-center justify-center">
                    <Image 
                      src="/rightarrow.svg" 
                      alt="Next"
                      width={24}
                      height={24}
                      className="opacity-70"
                    />
                  </div>
                )}
                
                {/* Mobile always shows down arrow */}
                <div className="md:hidden w-8 h-8 flex items-center justify-center rotate-90">
                  <Image 
                    src="/downarrow.svg" 
                    alt="Next"
                    width={24}
                    height={24}
                    className="opacity-70"
                  />
                </div>
              </>
            )}
          </React.Fragment>
        ))}
        
        {/* Right arrow for mobile */}
        {row < 2 && (
          <div className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-20">
            <Image 
              src="/uparrow.svg" 
              alt="Scroll down"
              width={24}
              height={24}
              className="opacity-70 -rotate-90"
            />
          </div>
        )}
      </div>
    ))}
    
    {/* Navigation dots for mobile */}
    <div className="md:hidden flex justify-center items-center gap-2 mt-6">
      {[...Array(3)].map((_, i) => (
        <div 
          key={i} 
          className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/30'}`}
        />
      ))}
    </div>
  </div>
</section>

     

      {/* Founder Section with Background and Profile Images */}
      <section 
        className="relative h-[788px] px-4 md:px-20 py-16 md:py-28 bg-black/5 flex flex-col justify-center items-center gap-12 md:gap-20 overflow-hidden"
        style={{
          backgroundImage: "url('/road.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 w-full md:w-[1120px] h-auto md:h-96 px-4 md:px-20 py-10 bg-black/20 rounded-3xl outline outline-4 md:outline-8 outline-offset-[-4px] outline-zinc-950/40 backdrop-blur-sm flex flex-col md:flex-row justify-center items-center gap-8 md:gap-14">
          <div className="w-full md:flex-1 h-64 md:h-80 max-w-full md:max-w-80 relative">
            <Image
              src="/arjunsir.png"
              alt="Founder"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
          <div className="w-full md:flex-1 p-4 md:p-6 bg-zinc-800/20 rounded-2xl backdrop-blur-md flex flex-col justify-center items-start gap-4 md:gap-6">
            <div className="w-full p-4 md:p-6 bg-zinc-800/40 rounded-2xl backdrop-blur-md flex flex-col justify-start items-start gap-3 md:gap-4">
              <div className="text-center text-orange-50 text-xl md:text-2xl font-medium font-geist leading-relaxed">
                Hear from the founder
              </div>
              <div className="text-orange-50 text-sm md:text-base font-normal font-geist leading-none">
                Sudhanand started as a dream to serve with purpose. Today, across industries, we grow with compassion, innovation, and integrity—building lasting impact, not just businesses.
              </div>
              <div className="flex flex-col justify-start items-start gap-2 md:gap-3">
                <div className="flex flex-wrap justify-start items-start gap-2 md:gap-4">
                  <div className="px-4 md:px-6 py-1 bg-sky-100/5 rounded-2xl backdrop-blur-md flex justify-center items-center">
                    <div className="text-sky-100 text-xs md:text-sm font-normal font-geist leading-none">Innovation</div>
                  </div>
                  <div className="px-4 md:px-6 py-1 bg-sky-100/5 rounded-2xl backdrop-blur-md flex justify-center items-center">
                    <div className="text-sky-100 text-xs md:text-sm font-normal font-geist leading-none">Trust</div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-start items-start gap-2 md:gap-4">
                  <div className="px-4 md:px-6 py-1 bg-sky-100/5 rounded-2xl backdrop-blur-md flex justify-center items-center">
                    <div className="text-sky-100 text-xs md:text-sm font-normal font-geist leading-none">Quality</div>
                  </div>
                  <div className="px-4 md:px-6 py-1 bg-sky-100/5 rounded-2xl backdrop-blur-md flex justify-center items-center">
                    <div className="text-sky-100 text-xs md:text-sm font-normal font-geist leading-none">Sustainability</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 flex justify-center items-center">
              <div className="text-orange-50 text-lg md:text-xl font-medium font-geist leading-snug">
                — Dr. Arjun Sachidanand
              </div>
            </div>
          </div>
        </div>

      </section>
        <div className="self-stretch h-[625px] p-2.5 bg-black/5">
          <img src="recep.png" alt="Description of image" className="w-full h-full object-cover" />
        </div>


      <Footer />
    </main>
  );
};

export default HomePage;