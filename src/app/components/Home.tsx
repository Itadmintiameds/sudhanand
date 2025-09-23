
// 'use client';

// import React, { useState, useRef, useEffect } from 'react';

// // --- START: Placeholder Components ---
// // To fix the import errors, simple placeholder components for Header and Footer
// // are created here. You can expand them with your actual content later.

// const Header = () => {
//   // This is a placeholder. You can replace it with your actual Header markup.
//   return (
//     <header className="w-full absolute top-0 left-0 p-6 z-20">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Placeholder Logo */}
//         <div className="text-white text-2xl font-bold">
//           Sudhanand Group
//         </div>
//         {/* Placeholder Navigation */}
//         <nav className="hidden md:flex gap-6 text-white">
//           <a href="#" className="hover:underline">Home</a>
//           <a href="#" className="hover:underline">About Us</a>
//           <a href="#" className="hover:underline">Ventures</a>
//           <a href="#" className="hover:underline">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// const Footer = () => {
//   // This is a placeholder. You can replace it with your actual Footer markup.
//   return (
//     <footer className="bg-gray-800 text-white p-8 text-center">
//       <p>&copy; {new Date().getFullYear()} Sudhanand Group. All Rights Reserved.</p>
//     </footer>
//   );
// };
// // --- END: Placeholder Components ---


// const HomePage = () => {
//   const [hoveredService, setHoveredService] = useState<number | null>(null);
//   const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  
//   const videos = [
//     { id: 'b-bzT9WbjL0', title: 'New Video 1' },
//     { id: 'fE77gCpSnPM', title: 'New Video 2' },
//     { id: 'TkLjQyNti78', title: 'New Video 3' },
//     { id: 'wW_WOzha5to', title: 'Healthcare Innovation' },
//     { id: 'AYV5wQw0lu4', title: 'Tech for Good' },
//     { id: '0sWf8vru8t8', title: 'Community Impact' },
//   ];

//   const services = [
//     "Healthcare Solutions",
//     "Pharmaceuticals",
//     "IT & ITES Solutions",
//     "US Home Insurance",
//     "Hotels & Hospitality",
//     "Blood Bank Services",
//     "SaaS Solutions",
//     "Sports & Fitness"
//   ];

//   // --- START: Refs and logic for hover-to-scroll ---
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

//   const startScrolling = (direction: 'left' | 'right') => {
//     if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
//     scrollIntervalRef.current = setInterval(() => {
//       if (scrollContainerRef.current) {
//         const scrollAmount = direction === 'right' ? 15 : -15;
//         scrollContainerRef.current.scrollLeft += scrollAmount;
//       }
//     }, 25);
//   };

//   const stopScrolling = () => {
//     if (scrollIntervalRef.current) {
//       clearInterval(scrollIntervalRef.current);
//     }
//   };

//   useEffect(() => {
//     return () => stopScrolling();
//   }, []);
//   // --- END: Refs and logic for hover-to-scroll ---

//   return ( 
//     <main className="bg-white text-black">
//       {/* Hero Section */}
//       <section
//         className="relative min-h-[400px] md:h-[680px] px-4 md:px-12 pt-6 pb-10 md:pb-16 bg-gradient-to-b from-orange-50/0 via-orange-50/20 to-orange-50 flex flex-col justify-end items-start gap-10 md:gap-20"
//         style={{
//           backgroundImage: "url('/header.png')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <Header />
//         <div className="self-stretch px-4 md:px-10 inline-flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 z-10">
//           <div className="w-full md:w-96 text-slate-700 text-3xl md:text-6xl font-bold font-['Playfair_Display']">
//             Sudhanand Group
//           </div>
//           <div className="py-4 md:py-6 flex justify-center items-center w-full md:w-96">
//             <div className="text-neutral-700 text-lg md:text-3xl font-medium font-['Geist'] leading-relaxed md:leading-loose text-center md:text-left">
//               Built on trust, driven by innovation, growing with purpose.
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Businesses Section */}
//       <section className="py-16 md:py-20 bg-orange-50 flex flex-col justify-center items-center gap-10 md:gap-14 overflow-hidden px-4 md:px-0">
//         <div className="w-full max-w-[1008px] flex flex-col justify-center items-start gap-6">
//           <div className="flex items-center gap-3">
//             <img src="/Group.png" alt="Left icon" width={20} height={20} />
//             <h2 className="text-black text-2xl md:text-3xl font-medium font-['Geist'] leading-9">
//               Who We Are
//             </h2>
//             <img src="/Group (1).png" alt="Right icon" width={20} height={20} />
//           </div>
//           <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
//             <div className="flex-1 max-w-full md:max-w-[560px]">
//               <p className="text-black text-base md:text-lg font-normal font-geist leading-relaxed md:leading-normal">
//                 We excel across multiple industries, driven by a strong foundation in ethical, community-focused, and socially responsible business practices. Our commitment to integrity and sustainable growth guides every decision we make, ensuring that our operations positively impact society. With a deep-rooted belief in the power of entrepreneurship and strategic diversification, we actively explore opportunities across sectors such as healthcare, technology, pharmaceuticals, hospitality, and beyond.
//               </p>
//             </div>
//             <div className="px-0 md:px-10 flex flex-col justify-center items-center gap-4 max-w-full md:max-w-[320px]">
//               <blockquote className="w-full text-center text-orange-950 text-3xl md:text-4xl font-normal font-['Satisfy'] leading-[40px] md:leading-[54px]">
//                 &ldquo;Growing with Purpose, Impacting Lives through Innovation and Responsibility.&rdquo;
//               </blockquote>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Brand Logos Section - Infinite Scrolling */}
//       <div className="self-stretch pb-20 md:pb-28 bg-orange-50 overflow-x-hidden">
//         <div className="marquee-wrapper">
//           <div className="marquee-track flex items-center">
//             {[...Array(2)].map((_, i) => (
//               <div key={i} className="marquee-group flex items-center gap-8 px-6">
//                 <a href="https://www.sudhanandbusinesssolutions.com/" target="_blank" rel="noopener noreferrer"><img src="/home/SBPL 2 1.png" alt="SBPL Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" style={{ width: '112px', height: '112px' }}/></a>
//                 <a href="https://www.sudhanandpharmacies.com/" target="_blank" rel="noopener noreferrer"><img src="/home/Rectangle 4.png" alt="Pharmacies Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" style={{ width: '112px', height: '112px' }}/></a>
//                 <a href="https://www.tiameds.ai/" target="_blank" rel="noopener noreferrer"><img src="/home/Rectangle 1 (1).png" alt="Tiameds Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" style={{ width: '112px', height: '112px' }}/></a>
//                 <a href="https://www.cureplushospitals.com/" target="_blank" rel="noopener noreferrer"><img src="/home/Rectangle 1.png" alt="Hospitals Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" style={{ width: '112px', height: '112px' }}/></a>
//                 <a href="https://www.cureplusbloodbank.com/" target="_blank" rel="noopener noreferrer"><img src="/home/Rectangle 3.png" alt="Blood Bank Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" style={{ width: '112px', height: '112px' }}/></a>
//                 <a href="https://www.sinimeds.com/" target="_blank" rel="noopener noreferrer"><img src="/home/sinimeds.png" alt="SiniMeds Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" style={{ width: '112px', height: '112px' }}/></a>
//                 <a href="https://www.cureplushospitals.com/" target="_blank" rel="noopener noreferrer"><img src="/home/CUREPLUS PHARMA 1.png" alt="Pharma Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" style={{ width: '112px', height: '112px' }}/></a>
//                 <a href="https://www.arcsportzone.com/" target="_blank" rel="noopener noreferrer"><div className="w-20 h-28 relative opacity-60 hover:opacity-100 cursor-pointer hover:scale-105 transform-gpu transition-opacity duration-300 flex items-center justify-center"><img src="/home/ARC.png" alt="ARC Logo" width={64} height={80} className="absolute top-[6px] left-[8px] object-contain" style={{ width: '64px', height: '80px' }}/></div></a>
//                 <a href="https://smt.help/" target="_blank" rel="noopener noreferrer"><img src="/home/smt.png" alt="SMT Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" style={{ width: '112px', height: '112px' }}/></a>
//                 <a href="https://sudhanandnovacandolim.com/" target="_blank" rel="noopener noreferrer"><img src="/home/NOVA.png" alt="Nova Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" style={{ width: '112px', height: '112px' }}/></a>
//                 <a href="https://sudhanandfourseasons.com/" target="_blank" rel="noopener noreferrer"><img src="/home/FOUR SEASONS.png" alt="Four Seasons Logo" width={192} height={36} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" style={{ width: '192px', height: '36px' }}/></a>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* --- MODIFICATION: Changed to global style to apply scrollbar-hide everywhere --- */}
//         <style jsx global>{`
//           .marquee-wrapper { overflow: hidden; width: 100%; position: relative; }
//           .marquee-track { display: flex; width: max-content; animation: scroll-marquee 30s linear infinite; align-items: center; will-change: transform; }
//           .marquee-wrapper:hover .marquee-track { animation-play-state: paused; }
//           @keyframes scroll-marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
//           .marquee-group { flex-shrink: 0; display: flex; align-items: center; gap: 2rem; }
          
//           /* This class will now be available to the whole component */
//           .scrollbar-hide::-webkit-scrollbar { display: none; }
//           .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
//         `}</style>
//       </div>
      
//       {/* Business Section */}
//       <section
//         className="relative px-6 md:px-12 py-16 md:py-32 flex flex-col justify-center items-center gap-12"
//         style={{ backgroundImage: "url('/Video section.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
//       >
//         <div className="absolute inset-0 bg-black/30"></div>
//         <div className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-10">
//           <h2 className="text-3xl md:text-5xl font-bold text-center text-white">Businesses That Work For A Better Tomorrow</h2>
//           <p className="text-lg md:text-2xl text-white text-center max-w-4xl">Sudhanand Group builds sustainable, impactful ventures that empower communities and drive progress for a healthier, smarter future.</p>
//           <div className="w-full mt-8 md:mt-12">
            
//             <div className="hidden md:block relative group">
//               <div
//                 ref={scrollContainerRef}
//                 className="flex w-full overflow-x-auto scroll-smooth pb-4 scrollbar-hide space-x-8"
//                 onMouseLeave={stopScrolling}
//               >
//                 {videos.map((video, index) => {
//                   const videoSrc = index === activeVideoIndex
//                       ? `https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&rel=0&modestbranding=1`
//                       : `https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`;
//                   return (
//                     <div
//                       key={video.id}
//                       className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video transform hover:scale-105 w-96 flex-shrink-0"
//                       onMouseEnter={() => setActiveVideoIndex(index)}
//                     >
//                       <iframe src={videoSrc} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
//                     </div>
//                   );
//                 })}
//               </div>
//               <div
//                 className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
//                 onMouseEnter={() => startScrolling('left')}
//                 onMouseLeave={stopScrolling}
//               ></div>
//               <div
//                 className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
//                 onMouseEnter={() => startScrolling('right')}
//                 onMouseLeave={stopScrolling}
//               ></div>
//             </div>

//             <div className="md:hidden relative w-full max-w-lg mx-auto overflow-hidden">
//               <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeVideoIndex * 100}%)` }}>
//                 {videos.map((video) => {
//                   const videoSrc = `https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`;
//                   return (
//                     <div key={video.id} className="w-full flex-shrink-0">
//                       <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video mx-2">
//                         <iframe src={videoSrc} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="flex justify-center items-center gap-3 mt-8">
//               {videos.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveVideoIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${activeVideoIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
//                   aria-label={`Go to video ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         className="w-full min-h-[400px] py-12 md:py-20 bg-slate-500 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-4 md:px-12 lg:px-24 mx-auto relative"
//         style={{ backgroundImage: "url('/home/what we do.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
//       >
//         <div className="absolute inset-0 bg-black/10 z-0"></div>
//         <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-16">
//           <div className="md:w-1/4 flex items-start"><h2 className="text-white text-2xl md:text-3xl font-medium font-geist tracking-wide">What We Do</h2></div>
//           <div className="md:w-3/4 flex flex-col">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
//               {services.map((service, index) => (
//                 <div key={index} className={`text-white text-2xl md:text-3xl font-normal font-geist leading-snug py-1 transition-all duration-200 cursor-pointer ${hoveredService === index ? "scale-[1.02] pl-1 text-white/90" : "text-white/80"} hover:text-white`} onMouseEnter={() => setHoveredService(index)} onMouseLeave={() => setHoveredService(null)}>{service}</div>
//               ))}
//               <div className="text-neutral-300 text-2xl md:text-3xl font-normal font-geist leading-snug py-1">+More</div>
//             </div>
//             <a href="/business-ventures" className="mt-8 md:mt-10 px-6 py-3 bg-white rounded-full flex justify-center items-center gap-2 hover:bg-gray-100 transition-all duration-300 w-fit">
//               <span className="text-black text-lg font-small font-geist">See all ventures</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
//             </a>
//           </div>
//         </div>
//       </section>

//       <section className="w-full px-4 md:px-20 py-24 relative overflow-hidden">
//         <img src="/timeline.png" alt="Background" className="absolute inset-0 w-full h-full object-cover"/>
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>
//         <div className="relative z-10">
//           <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-12 md:mb-20">Our Journey Through Time</h2>
//           <div className="md:hidden flex flex-col items-center gap-6">{[{ year: '2010', img: '/home/humble.png', special: true },{ year: '2011', desc: 'Started our journey with SAS Poorna Arogya Healthcare' },{ year: '2012', desc: 'Started Sachidananda Organic Farm – Nanjangud' },{ year: '2013', desc: 'Dr. M. D. Sachidananda Murthy Memorial Education Trust\n\n Sudhanand Healthcare Solutions Pvt. Ltd. – Mysuru' },{ year: '2017', desc: 'Our first hospital "Disha Hospital" – Mysuru\nOpened Dharani Hospital – Chamaarajanagara' },{ year: '2018', desc: 'Started Kaveri Hospital – Kodagu\n& ARC Sportzone – Mysuru' },{ year: '2020', desc: 'Opened Krishna Hospital – Bettadapura\n\nStarted Sudhanand Business Solutions Pvt. Ltd. – Mysuru' },{ year: '2021', desc: 'Opened our hotel\nSudhanand Four Seasons – Mysuru' },{ year: '2022', desc: 'Nova Candolim by Sudhanand – Goa\n\n Sudhanand Arogya Vahini\nKarnataka Sudhanand Animal & Dairy Farms – Yelandur' },{ year: '2023', desc: 'Sudhanand Pharmacies Pvt. Ltd – Mysore\n\n Sudhanand Distributors – Mysuru\n\n Narasegowda Memorial Hospital – Mandya' },{ year: '2024', desc: 'Started Idea Gateway Inc. – New York\n\n Tiameds Technologies Pvt. Ltd. – Mysuru' },{ year: '2025', desc: 'Started our 4 New Spoke Hospitals\n\n Started Sini Meds' }].map((item, i) => (<div key={i} className="w-full max-w-md flex flex-col justify-start items-center gap-1 group transition-all duration-300"><div className={`w-full h-16 px-2.5 py-4 rounded-tl-2xl rounded-tr-2xl outline outline-1 outline-white/40 backdrop-blur-md flex justify-center items-center ${item.special ? 'bg-amber-900/30' : 'bg-black/20'} group-hover:bg-black/30 transition-colors`}><div className="text-rose-50 text-2xl font-semibold font-geist">{item.year}</div></div><div className={`w-full px-6 py-4 rounded-bl-2xl rounded-br-2xl outline outline-1 outline-white/40 backdrop-blur-md flex flex-col justify-center items-center gap-2 ${item.special ? 'bg-gradient-to-b from-amber-200/20 to-amber-300/20' : 'bg-black/10'} group-hover:bg-black/20 transition-colors min-h-[120px]`}>{item.img ? (<img src={item.img} className="h-28 object-contain group-hover:scale-105 transition-transform" alt="Humble beginnings" width={112} height={112}/>) : (<div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">{item.desc}</div>)}</div>{i < 11 && (<div className="w-6 h-6 my-2 flex justify-center items-center"><img src="/downarrow.svg" className="w-6 h-6 opacity-80 group-hover:opacity-100 group-hover:animate-bounce" alt="Next" width={24} height={24}/></div>)}</div>))}</div>
//           <div className="hidden md:flex flex-col items-center gap-8"><div className="flex items-center justify-center gap-4">{[{ year: '2010', img: '/home/humble.png', special: true },'right',{ year: '2011', desc: 'Started our journey with SAS Poorna Arogya Healthcare' },'right',{ year: '2012', desc: 'Started Sachidananda Organic Farm – Nanjangud' },'right',{ year: '2013', desc: 'Dr. M. D. Sachidananda Murthy Memorial Education Trust\n\n Sudhanand Healthcare Solutions Pvt. Ltd. – Mysuru' }].map((item, i, arr) => {const isLast = i === arr.length - 1; if (item === 'right') { return (<img key={i} src="/rightarrow.svg" className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" alt="Right arrow" width={24} height={24}/>);} const year = typeof item === 'object' && item.year; const desc = typeof item === 'object' && item.desc; const img = typeof item === 'object' && item.img; const special = typeof item === 'object' && item.special; return (<div key={i} className="w-56 h-60 flex flex-col justify-start items-center gap-1 relative group transition-all duration-300 hover:scale-105"><div className={`w-full h-16 px-2.5 py-4 rounded-tl-2xl rounded-tr-2xl outline outline-1 outline-white/40 backdrop-blur-md flex justify-center items-center ${special ? 'bg-amber-900/30' : 'bg-black/20'} group-hover:bg-black/30 transition-colors`}><div className="text-rose-50 text-2xl font-semibold font-geist">{year}</div></div><div className={`w-full flex-1 px-6 py-4 rounded-bl-2xl rounded-br-2xl outline outline-1 outline-white/40 backdrop-blur-md flex flex-col justify-center items-center gap-2 ${special ? 'bg-gradient-to-b from-amber-200/20 to-amber-300/20' : 'bg-black/10'} group-hover:bg-black/20 transition-colors`}>{img ? (<img src={img} className="h-28 object-contain group-hover:scale-105 transition-transform" alt="Timeline image" width={112} height={112}/>) : (<div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">{desc}</div>)}</div>{isLast && (<img src="/downarrow.svg" className="w-6 h-6 mt-2 absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-80 group-hover:opacity-100 group-hover:animate-bounce" alt="Down arrow" width={24} height={24}/>)}</div>);})}</div><div className="flex items-center justify-center gap-4">{[{ year: '2021', desc: 'Opened our hotel\nSudhanand Four Seasons – Mysuru' },'left',{ year: '2020', desc: 'Opened Krishna Hospital – Bettadapura\n\nStarted Sudhanand Business Solutions Pvt. Ltd. – Mysuru' },'left',{ year: '2018', desc: 'Started Kaveri Hospital – Kodagu\n& ARC Sportzone – Mysuru' },'left',{ year: '2017', desc: 'Our first hospital "Disha Hospital" – Mysuru\n\n Opened Dharani Hospital – Chamaarajanagara' }].map((item, i) => {const isFirst = i === 0; if (item === 'left') { return (<img key={i} src="/leftarrow.svg" className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" alt="Left arrow" width={24} height={24}/>);} const year = typeof item === 'object' && item.year; const desc = typeof item === 'object' && item.desc; return (<div key={i} className="w-56 h-60 flex flex-col justify-start items-center gap-1 relative group transition-all duration-300 hover:scale-105"><div className="w-full h-16 px-2.5 py-4 bg-black/20 rounded-tl-2xl rounded-tr-2xl outline outline-1 outline-white/40 backdrop-blur-md flex justify-center items-center group-hover:bg-black/30 transition-colors"><div className="text-rose-50 text-2xl font-semibold font-geist">{year}</div></div><div className="w-full flex-1 px-6 py-4 bg-black/10 rounded-bl-2xl rounded-br-2xl outline outline-1 outline-white/40 backdrop-blur-md flex flex-col justify-center items-center gap-2 group-hover:bg-black/20 transition-colors"><div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">{desc}</div></div>{isFirst && (<img src="/downarrow.svg" className="w-6 h-6 mt-2 absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-80 group-hover:opacity-100 group-hover:animate-bounce" alt="Down arrow" width={24} height={24}/>)}</div>);})}</div><div className="flex items-center justify-center gap-4">{[{ year: '2022', desc: 'Nova Candolim by Sudhanand – Goa\n\n Sudhanand Arogya Vahini\nKarnataka Sudhanand Animal & Dairy Farms – Yelandur' },'right',{ year: '2023', desc: 'Sudhanand Pharmacies Pvt. Ltd – Mysore\n\n Sudhanand Distributors – Mysuru\n\n Narasegowda Memorial Hospital – Mandya' },'right',{ year: '2024', desc: 'Started Idea Gateway Inc. – New York\n\n Tiameds Technologies Pvt. Ltd. – Mysuru' },'right',{ year: '2025', desc: 'Started our 4 New Spoke Hospitals\n\n Started Sini Meds' }].map((item, i) => {if (item === 'right') { return (<img key={i} src="/rightarrow.svg" className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" alt="Right arrow" width={24} height={24}/>);} const year = typeof item === 'object' && item.year; const desc = typeof item === 'object' && item.desc; return (<div key={i} className="w-56 h-60 flex flex-col justify-start items-center gap-1 group transition-all duration-300 hover:scale-105"><div className="w-full h-16 px-2.5 py-4 bg-black/20 rounded-tl-2xl rounded-tr-2xl outline outline-1 outline-white/40 backdrop-blur-md flex justify-center items-center group-hover:bg-black/30 transition-colors"><div className="text-rose-50 text-2xl font-semibold font-geist">{year}</div></div><div className="w-full flex-1 px-6 py-4 bg-black/10 rounded-bl-2xl rounded-br-2xl outline outline-1 outline-white/40 backdrop-blur-md flex flex-col justify-center items-center gap-2 group-hover:bg-black/20 transition-colors"><div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">{desc}</div></div></div>);})}</div></div>
//         </div>
//       </section>

//       <div
//         className="w-full h-auto md:h-[788px] py-20 md:py-28 flex flex-col justify-center items-center gap-16 overflow-hidden bg-cover bg-center bg-no-repeat px-4 md:px-0"
//         style={{ backgroundImage: "url('/updfound.png')" }}
//       >
//         <div className="h-auto md:h-96 px-6 md:px-20 py-10 bg-zinc-100/50 rounded-3xl outline outline-8 outline-white outline-offset-[-4px] backdrop-blur-md flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl w-full">
//           <img className="w-64 md:w-80 max-w-full relative" src="/home/arjunsir.png" alt="Founder" width={320} height={320} />
//           <div className="w-full md:w-[493px] p-6 rounded-2xl backdrop-blur-md flex flex-col justify-center items-start gap-8 md:gap-10">
//             <div className="p-4 md:p-6 rounded-2xl flex flex-col justify-start items-start gap-4">
//               <div className="text-center md:text-left text-zinc-800 text-xl md:text-2xl font-medium font-['Geist'] leading-relaxed">Hear from our founder</div>
//               <div className="text-neutral-600 text-sm md:text-base font-normal font-['Geist'] leading-tight">Sudhanand started as a dream to serve with purpose. Today, across industries, we grow with compassion, innovation, and integrity—building lasting impact, not just businesses.</div>
//               <div className="flex flex-wrap gap-3">{['Innovation', 'Trust', 'Quality', 'Sustainability'].map((tag) => (<div key={tag} className="px-4 py-1 bg-slate-300/20 rounded-2xl backdrop-blur-md flex justify-center items-center"><div className="text-slate-500 text-xs md:text-sm font-normal font-['Geist'] leading-none">{tag}</div></div>))}</div>
//             </div>
//             <div className="px-4 flex justify-center items-center w-full"><div className="flex-1 text-slate-500 text-lg md:text-xl font-medium font-['Geist'] leading-snug text-center md:text-left">Dr. Arjun Sachidanand</div></div>
//           </div>
//         </div>
//       </div>

//       <div
//         className="w-full h-[600px] md:h-[1000px] p-2.5 rounded-2xl shadow-lg mx-auto"
//         style={{ backgroundImage: "url('/home/Images.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
//       >
//         <style jsx>{` @media (max-width: 767px) { div { background-position: 10% center !important; } } `}</style>
//       </div>

//       <Footer />
//     </main>
//   );
// };

// export default HomePage;

'use client';

import React, { useState, useRef, useEffect } from 'react';

// --- START: Placeholder Components ---
const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0 p-6 z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Sudhanand Group
        </div>
        <nav className="hidden md:flex gap-6 text-white">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Ventures</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center">
      <p>&copy; {new Date().getFullYear()} Sudhanand Group. All Rights Reserved.</p>
    </footer>
  );
};
// --- END: Placeholder Components ---


const HomePage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  
  const videos = [
    { id: 'b-bzT9WbjL0', title: 'New Video 1' },
    { id: 'fE77gCpSnPM', title: 'New Video 2' },
    { id: 'TkLjQyNti78', title: 'New Video 3' },
    { id: 'wW_WOzha5to', title: 'Healthcare Innovation' },
    { id: 'AYV5wQw0lu4', title: 'Tech for Good' },
    { id: '0sWf8vru8t8', title: 'Community Impact' },
  ];

  const services = [
    "Healthcare Solutions", "Pharmaceuticals", "IT & ITES Solutions",
    "US Home Insurance", "Hotels & Hospitality", "Blood Bank Services",
    "SaaS Solutions", "Sports & Fitness"
  ];

  // --- START: Updated scrolling logic with auto-scroll ---
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const manualScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startManualScrolling = (direction: 'left' | 'right') => {
    stopAutoScrolling(); // Stop auto-scroll when manually scrolling
    if (manualScrollIntervalRef.current) clearInterval(manualScrollIntervalRef.current);
    manualScrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const scrollAmount = direction === 'right' ? 15 : -15;
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }, 25);
  };

  const stopManualScrolling = () => {
    if (manualScrollIntervalRef.current) {
      clearInterval(manualScrollIntervalRef.current);
    }
  };
  
  const startAutoScrolling = () => {
    stopAutoScrolling(); // Prevent multiple intervals
    autoScrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollLeft += 1;
        }
      }
    }, 50);
  };

  const stopAutoScrolling = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
  };

  useEffect(() => {
    startAutoScrolling();
    return () => {
      stopAutoScrolling();
      stopManualScrolling();
    };
  }, []);
  // --- END: Updated scrolling logic ---

  // --- State and handlers for mobile touch-to-slide ---
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveVideoIndex(prev => prev < videos.length - 1 ? prev + 1 : prev);
    } else if (isRightSwipe) {
      setActiveVideoIndex(prev => prev > 0 ? prev - 1 : prev);
    }
    
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return ( 
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section
        className="relative min-h-[400px] md:h-[680px] px-4 md:px-12 pt-6 pb-10 md:pb-16 bg-gradient-to-b from-orange-50/0 via-orange-50/20 to-orange-50 flex flex-col justify-end items-start gap-10 md:gap-20"
        style={{ backgroundImage: "url('/header.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Header />
        <div className="self-stretch px-4 md:px-10 inline-flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 z-10">
          <div className="w-full md:w-96 text-slate-700 text-3xl md:text-6xl font-bold font-['Playfair_Display']">Sudhanand Group</div>
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
            <img src="/Group.png" alt="Left icon" width={20} height={20} />
            <h2 className="text-black text-2xl md:text-3xl font-medium font-['Geist'] leading-9">Who We Are</h2>
            <img src="/Group (1).png" alt="Right icon" width={20} height={20} />
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="flex-1 max-w-full md:max-w-[560px]">
              <p className="text-black text-base md:text-lg font-normal font-geist leading-relaxed md:leading-normal">
                We excel across multiple industries, driven by a strong foundation in ethical, community-focused, and socially responsible business practices. Our commitment to integrity and sustainable growth guides every decision we make, ensuring that our operations positively impact society. With a deep-rooted belief in the power of entrepreneurship and strategic diversification, we actively explore opportunities across sectors such as healthcare, technology, pharmaceuticals, hospitality, and beyond.
              </p>
            </div>
            <div className="px-0 md:px-10 flex flex-col justify-center items-center gap-4 max-w-full md:max-w-[320px]">
              <blockquote className="w-full text-center text-orange-950 text-3xl md:text-4xl font-normal font-['Satisfy'] leading-[40px] md:leading-[54px]">
                &ldquo;Growing with Purpose, Impacting Lives through Innovation and Responsibility.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos Section - Infinite Scrolling */}
      <div className="self-stretch pb-20 md:pb-28 bg-orange-50 overflow-x-hidden">
        <div className="marquee-wrapper">
          <div className="marquee-track flex items-center">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="marquee-group flex items-center gap-8 px-6">
                <a href="https://www.sudhanandbusinesssolutions.com/" target="_blank" rel="noopener noreferrer"><img src="/home/SBPL 2 1.png" alt="SBPL Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" /></a>
                <a href="https://www.sudhanandpharmacies.com/" target="_blank" rel="noopener noreferrer"><img src="/home/Rectangle 4.png" alt="Pharmacies Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" /></a>
                <a href="https://www.tiameds.ai/" target="_blank" rel="noopener noreferrer"><img src="/home/Rectangle 1 (1).png" alt="Tiameds Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" /></a>
                <a href="https://www.cureplushospitals.com/" target="_blank" rel="noopener noreferrer"><img src="/home/Rectangle 1.png" alt="Hospitals Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" /></a>
                <a href="https://www.cureplusbloodbank.com/" target="_blank" rel="noopener noreferrer"><img src="/home/Rectangle 3.png" alt="Blood Bank Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" /></a>
                <a href="https://www.sinimeds.com/" target="_blank" rel="noopener noreferrer"><img src="/home/sinimeds.png" alt="SiniMeds Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" /></a>
                <a href="https://www.cureplushospitals.com/" target="_blank" rel="noopener noreferrer"><img src="/home/CUREPLUS PHARMA 1.png" alt="Pharma Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" /></a>
                <a href="https://www.arcsportzone.com/" target="_blank" rel="noopener noreferrer"><div className="w-20 h-28 relative opacity-60 hover:opacity-100 cursor-pointer hover:scale-105 transform-gpu transition-opacity duration-300 flex items-center justify-center"><img src="/home/ARC.png" alt="ARC Logo" width={64} height={80} className="absolute top-[6px] left-[8px] object-contain" /></div></a>
                <a href="https://smt.help/" target="_blank" rel="noopener noreferrer"><img src="/home/smt.png" alt="SMT Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" /></a>
                <a href="https://sudhanandnovacandolim.com/" target="_blank" rel="noopener noreferrer"><img src="/home/NOVA.png" alt="Nova Logo" width={112} height={112} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" /></a>
                <a href="https://sudhanandfourseasons.com/" target="_blank" rel="noopener noreferrer"><img src="/home/FOUR SEASONS.png" alt="Four Seasons Logo" width={192} height={36} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transform-gpu object-contain" /></a>
              </div>
            ))}
          </div>
        </div>
        <style jsx global>{`
          .marquee-wrapper { overflow: hidden; width: 100%; position: relative; }
          .marquee-track { display: flex; width: max-content; animation: scroll-marquee 30s linear infinite; align-items: center; will-change: transform; }
          .marquee-wrapper:hover .marquee-track { animation-play-state: paused; }
          @keyframes scroll-marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
          .marquee-group { flex-shrink: 0; display: flex; align-items: center; gap: 2rem; }
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
      
      {/* Business Section */}
      <section
        className="relative px-6 md:px-12 py-16 md:py-32 flex flex-col justify-center items-center gap-12"
        style={{ backgroundImage: "url('/Video section.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white">Businesses That Work For A Better Tomorrow</h2>
          <p className="text-lg md:text-2xl text-white text-center max-w-4xl">Sudhanand Group builds sustainable, impactful ventures that empower communities and drive progress for a healthier, smarter future.</p>
          <div className="w-full mt-8 md:mt-12">
            
            <div className="hidden md:block relative group" onMouseEnter={stopAutoScrolling} onMouseLeave={startAutoScrolling}>
              <div ref={scrollContainerRef} className="flex w-full overflow-x-auto scroll-smooth pb-4 scrollbar-hide space-x-8">
                {videos.map((video, index) => {
                  const videoSrc = index === activeVideoIndex
                      ? `https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&rel=0&modestbranding=1`
                      : `https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`;
                  return (
                    <div key={video.id} className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video transform hover:scale-105 w-96 flex-shrink-0" onMouseEnter={() => setActiveVideoIndex(index)}>
                      <iframe src={videoSrc} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                    </div>
                  );
                })}
              </div>
              <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto" onMouseEnter={() => startManualScrolling('left')} onMouseLeave={stopManualScrolling}></div>
              <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto" onMouseEnter={() => startManualScrolling('right')} onMouseLeave={stopManualScrolling}></div>
            </div>

            <div 
              className="md:hidden relative w-full max-w-lg mx-auto overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeVideoIndex * 100}%)` }}>
                {videos.map((video) => {
                  const videoSrc = `https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`;
                  return (
                    <div key={video.id} className="w-full flex-shrink-0">
                      <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video mx-2">
                        <iframe src={videoSrc} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full pointer-events-none"></iframe>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center items-center gap-3 mt-8">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveVideoIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeVideoIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section
        className="w-full min-h-[400px] py-12 md:py-20 bg-slate-500 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-4 md:px-12 lg:px-24 mx-auto relative"
        style={{ backgroundImage: "url('/home/what we do.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="md:w-1/4 flex items-start"><h2 className="text-white text-2xl md:text-3xl font-medium font-geist tracking-wide">What We Do</h2></div>
          <div className="md:w-3/4 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {services.map((service, index) => (
                <div key={index} className={`text-white text-2xl md:text-3xl font-normal font-geist leading-snug py-1 transition-all duration-200 cursor-pointer ${hoveredService === index ? "scale-[1.02] pl-1 text-white/90" : "text-white/80"} hover:text-white`} onMouseEnter={() => setHoveredService(index)} onMouseLeave={() => setHoveredService(null)}>{service}</div>
              ))}
              <div className="text-neutral-300 text-2xl md:text-3xl font-normal font-geist leading-snug py-1">+More</div>
            </div>
            <a href="/business-ventures" className="mt-8 md:mt-10 px-6 py-3 bg-white rounded-full flex justify-center items-center gap-2 hover:bg-gray-100 transition-all duration-300 w-fit">
              <span className="text-black text-lg font-small font-geist">See all ventures</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full px-4 md:px-20 py-24 relative overflow-hidden">
        <img src="/timeline.png" alt="Background" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>
        <div className="relative z-10">
          <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-12 md:mb-20">Our Journey Through Time</h2>
          <div className="md:hidden flex flex-col items-center gap-6">{[{ year: '2010', img: '/home/humble.png', special: true },{ year: '2011', desc: 'Started our journey with SAS Poorna Arogya Healthcare' },{ year: '2012', desc: 'Started Sachidananda Organic Farm – Nanjangud' },{ year: '2013', desc: 'Dr. M. D. Sachidananda Murthy Memorial Education Trust\n\n Sudhanand Healthcare Solutions Pvt. Ltd. – Mysuru' },{ year: '2017', desc: 'Our first hospital "Disha Hospital" – Mysuru\nOpened Dharani Hospital – Chamaarajanagara' },{ year: '2018', desc: 'Started Kaveri Hospital – Kodagu\n& ARC Sportzone – Mysuru' },{ year: '2020', desc: 'Opened Krishna Hospital – Bettadapura\n\nStarted Sudhanand Business Solutions Pvt. Ltd. – Mysuru' },{ year: '2021', desc: 'Opened our hotel\nSudhanand Four Seasons – Mysuru' },{ year: '2022', desc: 'Nova Candolim by Sudhanand – Goa\n\n Sudhanand Arogya Vahini\nKarnataka Sudhanand Animal & Dairy Farms – Yelandur' },{ year: '2023', desc: 'Sudhanand Pharmacies Pvt. Ltd – Mysore\n\n Sudhanand Distributors – Mysuru\n\n Narasegowda Memorial Hospital – Mandya' },{ year: '2024', desc: 'Started Idea Gateway Inc. – New York\n\n Tiameds Technologies Pvt. Ltd. – Mysuru' },{ year: '2025', desc: 'Started our 4 New Spoke Hospitals\n\n Started Sini Meds' }].map((item, i) => (<div key={i} className="w-full max-w-md flex flex-col justify-start items-center gap-1 group transition-all duration-300"><div className={`w-full h-16 px-2.5 py-4 rounded-tl-2xl rounded-tr-2xl outline outline-1 outline-white/40 backdrop-blur-md flex justify-center items-center ${item.special ? 'bg-amber-900/30' : 'bg-black/20'} group-hover:bg-black/30 transition-colors`}><div className="text-rose-50 text-2xl font-semibold font-geist">{item.year}</div></div><div className={`w-full px-6 py-4 rounded-bl-2xl rounded-br-2xl outline outline-1 outline-white/40 backdrop-blur-md flex flex-col justify-center items-center gap-2 ${item.special ? 'bg-gradient-to-b from-amber-200/20 to-amber-300/20' : 'bg-black/10'} group-hover:bg-black/20 transition-colors min-h-[120px]`}>{item.img ? (<img src={item.img} className="h-28 object-contain group-hover:scale-105 transition-transform" alt="Humble beginnings" width={112} height={112}/>) : (<div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">{item.desc}</div>)}</div>{i < 11 && (<div className="w-6 h-6 my-2 flex justify-center items-center"><img src="/downarrow.svg" className="w-6 h-6 opacity-80 group-hover:opacity-100 group-hover:animate-bounce" alt="Next" width={24} height={24}/></div>)}</div>))}</div>
          <div className="hidden md:flex flex-col items-center gap-8"><div className="flex items-center justify-center gap-4">{[{ year: '2010', img: '/home/humble.png', special: true },'right',{ year: '2011', desc: 'Started our journey with SAS Poorna Arogya Healthcare' },'right',{ year: '2012', desc: 'Started Sachidananda Organic Farm – Nanjangud' },'right',{ year: '2013', desc: 'Dr. M. D. Sachidananda Murthy Memorial Education Trust\n\n Sudhanand Healthcare Solutions Pvt. Ltd. – Mysuru' }].map((item, i, arr) => {const isLast = i === arr.length - 1; if (item === 'right') { return (<img key={i} src="/rightarrow.svg" className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" alt="Right arrow" width={24} height={24}/>);} const year = typeof item === 'object' && item.year; const desc = typeof item === 'object' && item.desc; const img = typeof item === 'object' && item.img; const special = typeof item === 'object' && item.special; return (<div key={i} className="w-56 h-60 flex flex-col justify-start items-center gap-1 relative group transition-all duration-300 hover:scale-105"><div className={`w-full h-16 px-2.5 py-4 rounded-tl-2xl rounded-tr-2xl outline outline-1 outline-white/40 backdrop-blur-md flex justify-center items-center ${special ? 'bg-amber-900/30' : 'bg-black/20'} group-hover:bg-black/30 transition-colors`}><div className="text-rose-50 text-2xl font-semibold font-geist">{year}</div></div><div className={`w-full flex-1 px-6 py-4 rounded-bl-2xl rounded-br-2xl outline outline-1 outline-white/40 backdrop-blur-md flex flex-col justify-center items-center gap-2 ${special ? 'bg-gradient-to-b from-amber-200/20 to-amber-300/20' : 'bg-black/10'} group-hover:bg-black/20 transition-colors`}>{img ? (<img src={img} className="h-28 object-contain group-hover:scale-105 transition-transform" alt="Timeline image" width={112} height={112}/>) : (<div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">{desc}</div>)}</div>{isLast && (<img src="/downarrow.svg" className="w-6 h-6 mt-2 absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-80 group-hover:opacity-100 group-hover:animate-bounce" alt="Down arrow" width={24} height={24}/>)}</div>);})}</div><div className="flex items-center justify-center gap-4">{[{ year: '2021', desc: 'Opened our hotel\nSudhanand Four Seasons – Mysuru' },'left',{ year: '2020', desc: 'Opened Krishna Hospital – Bettadapura\n\nStarted Sudhanand Business Solutions Pvt. Ltd. – Mysuru' },'left',{ year: '2018', desc: 'Started Kaveri Hospital – Kodagu\n& ARC Sportzone – Mysuru' },'left',{ year: '2017', desc: 'Our first hospital "Disha Hospital" – Mysuru\n\n Opened Dharani Hospital – Chamaarajanagara' }].map((item, i) => {const isFirst = i === 0; if (item === 'left') { return (<img key={i} src="/leftarrow.svg" className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" alt="Left arrow" width={24} height={24}/>);} const year = typeof item === 'object' && item.year; const desc = typeof item === 'object' && item.desc; return (<div key={i} className="w-56 h-60 flex flex-col justify-start items-center gap-1 relative group transition-all duration-300 hover:scale-105"><div className="w-full h-16 px-2.5 py-4 bg-black/20 rounded-tl-2xl rounded-tr-2xl outline outline-1 outline-white/40 backdrop-blur-md flex justify-center items-center group-hover:bg-black/30 transition-colors"><div className="text-rose-50 text-2xl font-semibold font-geist">{year}</div></div><div className="w-full flex-1 px-6 py-4 bg-black/10 rounded-bl-2xl rounded-br-2xl outline outline-1 outline-white/40 backdrop-blur-md flex flex-col justify-center items-center gap-2 group-hover:bg-black/20 transition-colors"><div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">{desc}</div></div>{isFirst && (<img src="/downarrow.svg" className="w-6 h-6 mt-2 absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-80 group-hover:opacity-100 group-hover:animate-bounce" alt="Down arrow" width={24} height={24}/>)}</div>);})}</div><div className="flex items-center justify-center gap-4">{[{ year: '2022', desc: 'Nova Candolim by Sudhanand – Goa\n\n Sudhanand Arogya Vahini\nKarnataka Sudhanand Animal & Dairy Farms – Yelandur' },'right',{ year: '2023', desc: 'Sudhanand Pharmacies Pvt. Ltd – Mysore\n\n Sudhanand Distributors – Mysuru\n\n Narasegowda Memorial Hospital – Mandya' },'right',{ year: '2024', desc: 'Started Idea Gateway Inc. – New York\n\n Tiameds Technologies Pvt. Ltd. – Mysuru' },'right',{ year: '2025', desc: 'Started our 4 New Spoke Hospitals\n\n Started Sini Meds' }].map((item, i) => {if (item === 'right') { return (<img key={i} src="/rightarrow.svg" className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity" alt="Right arrow" width={24} height={24}/>);} const year = typeof item === 'object' && item.year; const desc = typeof item === 'object' && item.desc; return (<div key={i} className="w-56 h-60 flex flex-col justify-start items-center gap-1 group transition-all duration-300 hover:scale-105"><div className="w-full h-16 px-2.5 py-4 bg-black/20 rounded-tl-2xl rounded-tr-2xl outline outline-1 outline-white/40 backdrop-blur-md flex justify-center items-center group-hover:bg-black/30 transition-colors"><div className="text-rose-50 text-2xl font-semibold font-geist">{year}</div></div><div className="w-full flex-1 px-6 py-4 bg-black/10 rounded-bl-2xl rounded-br-2xl outline outline-1 outline-white/40 backdrop-blur-md flex flex-col justify-center items-center gap-2 group-hover:bg-black/20 transition-colors"><div className="text-rose-50 text-sm font-semibold font-geist leading-tight text-center whitespace-pre-line">{desc}</div></div></div>);})}</div></div>
        </div>
      </section>

      {/* Founder Section */}
      <div
        className="w-full h-auto md:h-[788px] py-20 md:py-28 flex flex-col justify-center items-center gap-16 overflow-hidden bg-cover bg-center bg-no-repeat px-4 md:px-0"
        style={{ backgroundImage: "url('/updfound.png')" }}
      >
        <div className="h-auto md:h-96 px-6 md:px-20 py-10 bg-zinc-100/50 rounded-3xl outline outline-8 outline-white outline-offset-[-4px] backdrop-blur-md flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl w-full">
          <img className="w-64 md:w-80 max-w-full relative" src="/home/arjunsir.png" alt="Founder" width={320} height={320} />
          <div className="w-full md:w-[493px] p-6 rounded-2xl backdrop-blur-md flex flex-col justify-center items-start gap-8 md:gap-10">
            <div className="p-4 md:p-6 rounded-2xl flex flex-col justify-start items-start gap-4">
              <div className="text-center md:text-left text-zinc-800 text-xl md:text-2xl font-medium font-['Geist'] leading-relaxed">Hear from our founder</div>
              <div className="text-neutral-600 text-sm md:text-base font-normal font-['Geist'] leading-tight">Sudhanand started as a dream to serve with purpose. Today, across industries, we grow with compassion, innovation, and integrity—building lasting impact, not just businesses.</div>
              <div className="flex flex-wrap gap-3">{['Innovation', 'Trust', 'Quality', 'Sustainability'].map((tag) => (<div key={tag} className="px-4 py-1 bg-slate-300/20 rounded-2xl backdrop-blur-md flex justify-center items-center"><div className="text-slate-500 text-xs md:text-sm font-normal font-['Geist'] leading-none">{tag}</div></div>))}</div>
            </div>
            <div className="px-4 flex justify-center items-center w-full"><div className="flex-1 text-slate-500 text-lg md:text-xl font-medium font-['Geist'] leading-snug text-center md:text-left">Dr. Arjun Sachidanand</div></div>
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div
        className="w-full h-[600px] md:h-[1000px] p-2.5 rounded-2xl shadow-lg mx-auto"
        style={{ backgroundImage: "url('/home/Images.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <style jsx>{` @media (max-width: 767px) { div { background-position: 10% center !important; } } `}</style>
      </div>

      <Footer />
    </main>
  );
};

export default HomePage;

