'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};

const BusinessVentures = () => {
  const ventures = [
    {
      id: 'healthcare',
      category: 'Healthcare',
      description: 'At Sudhanand Healthcare Solutions Pvt. Ltd. (SHPL) and Sudhanand Pharmacies Pvt. Ltd. (SPPL) are committed to providing advanced healthcare solutions, including hospitals, clinics, and medical equipment, to promote a healthier society.',
      // image: '/healthcare.png',
      bgImage: '/healthcare.png'
    },
    {
      id: 'technology',
      category: 'Technology',
      description: 'At Sudhanand Business Solutions Pvt. Ltd. (SBPL) and TiaMeds Technologies Pvt. Ltd. provide cutting-edge IT solutions, including software development, digital transformation, and cybersecurity, to empower businesses in the digital age.',
      // image: '/tech.png',
      bgImage: '/tech.png'
    },
    {
      id: 'hospitality',
      category: 'Hospitality',
      description: 'At Nova Candolim by Sudhanand in Goa and Sudhanand Four Seasons in Mysore focus on delivering world-class hospitality services, including hotels, resorts, and catering, to enhance customer experiences with top-tier service and comfort.',
      // image: '/hospitality.png',
      bgImage: '/hospitality.png'
    },
    {
      id: 'sports-infrastructure',
      category: 'Sports Infrastructure',
      description: 'At ARC Sportzone, we build and operate modern sports facilities, stadiums, and training centers to promote fitness, wellness, and the development of athletic talent. Our goal is to create world-class infrastructure that nurtures athletes.',
      // image: '/sports.pn',
      bgImage: '/sports.png'
    },
    {
      id: 'charitable-trust',
      category: 'Charitable Trust',
      description: 'Our corporate social responsibility initiatives, led by Sudhanand Educational Trust and Cure Plus Blood Bank, focus on education, healthcare, and community development to create a positive social impact.',
      // image: '/charity.png',
      bgImage: '/charity.png'
    }
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-black">
        {/* Hero Section */}
        <AnimatedSection>
          <section className="relative self-stretch h-96 px-10 md:px-20 lg:px-40 pt-12 pb-10 bg-gradient-to-b from-orange-50/0 to-orange-50 flex flex-col justify-end items-start">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/venture.png"
                alt="Our Ventures Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white" />
            </div>

            {/* Content */}
            <div className="relative z-10 self-stretch flex flex-col lg:flex-row justify-between items-end gap-8">
              <div className="w-64 flex flex-col justify-start items-start">
                <motion.h2 
                  className="text-gray-700 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
                  variants={textVariants}
                >
                  Our ventures
                </motion.h2>
              </div>
              <div className="w-72 py-2 flex justify-center items-center">
                <motion.p 
                  className="text-neutral-800 text-lg md:text-xl font-medium leading-snug"
                  variants={textVariants}
                >
                  Driving innovation across healthcare, technology, and lifestyle through purpose driven ventures.
                </motion.p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection>
          <section className="self-stretch px-10 md:px-20 lg:px-40 py-10 bg-white-50 flex flex-col justify-start items-center gap-2.5">
            <div className="w-full max-w-[1180px] flex flex-col md:flex-row justify-between items-start">
              <div className="w-52 flex flex-col justify-start items-start gap-14">
                <motion.h3 
                  className="text-slate-500 text-7xl md:text-8xl lg:text-9xl font-normal leading-[114px]"
                  variants={textVariants}
                >
                  15+
                </motion.h3>
                <motion.p 
                  className="text-slate-500 text-xl md:text-2xl font-normal leading-relaxed"
                  variants={textVariants}
                >
                  Years in Service
                </motion.p>
              </div>
              <div className="flex flex-col justify-start items-start gap-14">
                <motion.h3 
                  className="text-slate-500 text-7xl md:text-8xl lg:text-9xl font-normal leading-[114px]"
                  variants={textVariants}
                >
                  120%
                </motion.h3>
                <motion.p 
                  className="text-slate-500 text-xl md:text-2xl font-normal leading-relaxed"
                  variants={textVariants}
                >
                  year-on-year growth
                </motion.p>
              </div>
              <div className="w-64 flex flex-col justify-start items-start gap-14">
                <motion.h3 
                  className="text-slate-500 text-7xl md:text-8xl lg:text-9xl font-normal leading-[114px]"
                  variants={textVariants}
                >
                  10+
                </motion.h3>
                <motion.p 
                  className="text-slate-500 text-xl md:text-2xl font-normal leading-relaxed"
                  variants={textVariants}
                >
                  Brands in various sectors
                </motion.p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Ventures Section */}
        <AnimatedSection>
          <section className="relative self-stretch px-6 sm:px-12 md:px-20 lg:px-36 py-16 md:py-28 flex justify-center items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/venture-page/venturebg.png"
                alt="Ventures Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-blue/80" />
            </div>

            <div className="relative z-10 flex-1 max-w-6xl pb-5 border-b border-white/50 flex flex-col justify-start items-start gap-20 md:gap-44">
              <div className="self-stretch flex flex-col justify-start items-start gap-10">
                {/* First row */}
                <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-20">
                  {ventures.slice(0, 2).map((venture, index) => (
                    <Link href={`/ventures/${venture.id}`} key={index} className="flex-1">
                      <motion.div 
                        className="opacity-80 hover:opacity-100 transition-opacity border-t border-white/50 flex flex-col justify-start items-start"
                        variants={textVariants}
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="self-stretch h-64 relative">
                          <Image
                            src={venture.bgImage}
                            alt={venture.category}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="self-stretch py-5 flex flex-col justify-start items-start gap-4">
                          <h3 className="text-blue-300 text-2xl font-bold leading-loose">
                            {venture.category}
                          </h3>
                          <p className="text-white text-base font-normal leading-snug">
                            {venture.description}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
                
                {/* Second row */}
                <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-20">
                  {ventures.slice(2, 4).map((venture, index) => (
                    <Link href={`/ventures/${venture.id}`} key={index} className="flex-1">
                      <motion.div 
                        className="opacity-80 hover:opacity-100 transition-opacity border-t border-white/50 flex flex-col justify-start items-start"
                        variants={textVariants}
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="self-stretch h-64 relative">
                          <Image
                            src={venture.bgImage}
                            alt={venture.category}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="self-stretch py-5 flex flex-col justify-start items-start gap-4">
                          <h3 className="text-blue-300 text-2xl font-bold leading-loose">
                            {venture.category}
                          </h3>
                          <p className="text-white text-base font-normal leading-snug">
                            {venture.description}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
                
                {/* Third row */}
                <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-20">
                  {ventures.slice(4, 5).map((venture, index) => (
                    <Link href={`/ventures/${venture.id}`} key={index} className="w-full lg:w-[529px]">
                      <motion.div 
                        className="opacity-80 hover:opacity-100 transition-opacity border-t border-white/50 flex flex-col justify-start items-start"
                        variants={textVariants}
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="self-stretch h-64 relative">
                          <Image
                            src={venture.bgImage}
                            alt={venture.category}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="self-stretch py-5 flex flex-col justify-start items-start gap-4">
                          <h3 className="text-blue-300 text-2xl font-bold leading-loose">
                            {venture.category}
                          </h3>
                          <p className="text-white text-base font-normal leading-snug">
                            {venture.description}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Full-width Image Section */}
        <AnimatedSection>
          <div className="self-stretch h-[625px] relative">
            <Image
              src="/Image divider section.png"
              alt="Ventures Banner"
              fill
              className="object-cover"
            />
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </>
  );
};

export default BusinessVentures;