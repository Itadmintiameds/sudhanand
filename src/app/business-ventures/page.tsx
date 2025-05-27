'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Animated section component
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
  const [activeSlide, setActiveSlide] = useState(0);

  const ventures = [
    {
      id: 'healthcare',
      category: 'Healthcare',
      description:
        'At Sudhanand Healthcare Solutions Pvt. Ltd. (SHPL) and Sudhanand Pharmacies Pvt. Ltd. (SPPL) are committed to providing advanced healthcare solutions, including hospitals, clinics, and medical equipment, to promote a healthier society.',
      image: '/healthcare.png'
    },
    {
      id: 'technology',
      category: 'Technology',
      description:
        'Our technology ventures focus on innovative solutions that drive digital transformation across industries, creating smarter and more efficient systems for businesses and consumers alike.',
      image: '/tech.png'
    },
    {
      id: 'hospitality',
      category: 'Hospitality',
      description:
        'We create exceptional hospitality experiences through our premium properties and services that blend luxury with authentic local culture.',
      image: '/hospitality.png'
    },
    {
      id: 'sports-infrastructure',
      category: 'Sports Infrastructure',
      description:
        'Developing world-class sports facilities that nurture talent and promote healthy lifestyles through accessible sporting infrastructure.',
      image: '/sports.png'
    },
    {
      id: 'charitable-trust',
      category: 'Charitable Trust',
      description:
        'Our philanthropic initiatives focus on education, healthcare, and community development to create sustainable social impact.',
      image: '/charity.png'
    }
  ];

  return (
    <>
      <Header />

      <main className="bg-black text-white">
        {/* Hero Section */}
        <AnimatedSection>
          <section className="relative min-h-[70vh] px-6 md:px-16 lg:px-40 pt-32 pb-20">
            <div className="absolute inset-0 z-0">
              <Image
                src="/venture.png"
                alt="Business Ventures Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-orange-50/0 to-orange-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8">
              <div className="lg:w-1/2">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4"
                  variants={textVariants}
                >
                  Shaping the Future Through Diversified
                </motion.h1>
                <motion.h2
                  className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-700"
                  variants={textVariants}
                >
                  Business ventures
                </motion.h2>
              </div>
              <div className="lg:w-1/2 flex items-end">
                <motion.p
                  className="text-xl text-black max-w-md"
                  variants={textVariants}
                >
                  Driving innovation across healthcare, technology, and
                  lifestyle through purpose driven ventures.
                </motion.p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection>
          <section className="relative py-20">
            {/* Background Image for Services */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/Our services section.png"
                alt="Services Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Services Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-36 space-y-20">
              {ventures.map((service, index) => (
                <Link href={`/ventures/${service.id}`} key={index} passHref>
                  <motion.div
                    className="self-stretch opacity-80 border-t-[0.50px] border-white inline-flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-28 pt-10 cursor-pointer hover:opacity-100 transition-opacity"
                    variants={textVariants}
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Direct Image */}
                    <Image
                      src={service.image}
                      alt={service.category}
                      width={500}
                      height={200}
                      className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    />

                    {/* Content */}
                    <div className="flex-1 py-5 flex flex-col justify-start items-start gap-4">
                      <motion.h3
                        className="text-blue-300 text-2xl font-bold leading-loose hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        {service.category}
                      </motion.h3>
                      <motion.p
                        className="text-white text-lg font-normal leading-normal"
                        whileHover={{ scale: 1.01 }}
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </>
  );
};

export default BusinessVentures;
