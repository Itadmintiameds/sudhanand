'use client';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BusinessPartnersPage: React.FC = () => {
  // Scroll handler for button
  const scrollToFooter = () => {
    const footerElement = document.getElementById('page-footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Business Partners | Sudhanand Group</title>
        <meta name="description" content="Our valued business partners at Sudhanand Group" />
      </Head>

      <Header />

      <main className="text-white">
        {/* Hero Section with Background Image */}
        <div
          className="relative h-[500px] md:h-[750px] px-6 md:px-12 pt-12 pb-16 flex flex-col justify-end items-start gap-6 md:gap-10"
          style={{
            backgroundImage: "url('/partnerhead.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/0 to-stone-950/90 z-0"></div>

          {/* Content */}
          <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
            <h1 className="text-slate-600 text-5xl md:text-9xl font-normal font-['Geist'] leading-tight md:leading-[114px] whitespace-pre-line">
              Our <br />Partners
            </h1>
            <p className="w-full md:w-[480px] text-white text-base md:text-lg font-medium font-geist leading-relaxed md:leading-normal">
              At Sudhanand Group, our business partners are integral to our journey. Together, we foster innovation, share a commitment to excellence, and work collaboratively to create lasting value across healthcare, technology, hospitality, and beyond.
            </p>
          </div>
        </div>

        {/* Partners Section */}
        <div className="w-full px-6 md:px-36 pt-20 md:pt-28 pb-20 md:pb-28 bg-orange-50 flex flex-col justify-center items-center gap-10">
          <div className="w-full max-w-[1180px] border-b-[0.5px] border-neutral-600 flex flex-col md:flex-row justify-between items-start">
            {/* Partner 1 */}
            <div className="w-full md:w-1/2 py-10 md:py-14 border-t-[0.5px] border-neutral-600 flex flex-col justify-start items-center gap-8 md:gap-10">
              <div className="w-full max-w-[320px] h-auto relative">
                <Image
                  className="w-full h-auto object-contain"
                  src="/cc.png"
                  alt="Cabrillo Coastal Logo"
                  width={320}
                  height={100}
                  priority
                />
              </div>
              <div className="w-full max-w-[400px] flex flex-col justify-center items-start gap-8 md:gap-14 px-4 md:px-0">
                <p className="text-neutral-600 text-base md:text-lg font-normal font-['Geist'] leading-relaxed md:leading-normal">
                  Sudhanand Group, a leader in healthcare, IT, and education services, has partnered with Cabrillo Coastal, a specialist in property insurance for high-risk coastal areas. Together, they enhance claims processing, customer support, and service efficiency by combining Sudhanand&apos;s operational expertise with Cabrillo&apos;s commitment to quality insurance solutions.
                  <br /><br />
                  This collaboration provides integrated, reliable offerings in healthcare and property protection, ensuring accessibility and efficiency for clients. Their joint efforts drive innovation and excellence, setting new standards across both critical sectors.
                </p>
              </div>
            </div>

            {/* Partner 2 */}
            <div className="w-full md:w-1/2 py-10 md:py-14 border-t-[0.5px] border-neutral-600 flex flex-col justify-start items-center gap-8 md:gap-10">
              <div className="w-full max-w-[320px] h-auto relative">
                <Image
                  className="w-full h-auto object-contain"
                  src="/creditgram.png"
                  alt="CreditAccess Grameen Logo"
                  width={320}
                  height={100}
                  priority
                />
              </div>
              <div className="w-full max-w-[400px] flex flex-col justify-center items-center gap-8 md:gap-14 px-4 md:px-0">
                <p className="text-neutral-600 text-base md:text-lg font-normal font-['Geist'] leading-relaxed md:leading-normal text-center md:text-left">
                  CreditAccess Grameen, a leading microfinance institution in India, empowers low-income communities through financial services that enhance livelihoods and stability. Sudhanand Group provides accessible, quality healthcare to underserved populations. Together, they form a powerful partnership bridging microfinance and healthcare, addressing critical needs in rural and semi-urban areas. This collaboration promotes financial inclusion and improved medical access, enabling communities to thrive. By combining resources and expertise, they drive sustainable socio-economic development and well-being. Their joint efforts reflect a commitment to innovation and impact, empowering individuals and families to build healthier, more financially secure futures.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="w-full max-w-[1180px] flex flex-col md:flex-row justify-between items-center gap-6 mt-10 px-4 md:px-0">
            <div className="w-full md:w-auto text-neutral-600 text-2xl md:text-3xl font-normal font-['Geist'] leading-9 text-center md:text-left">
              Discover how we can help
            </div>
            <button
              className="w-full md:w-auto px-6 py-4 bg-slate-500 rounded-full flex justify-center items-center gap-2.5 hover:bg-slate-600 transition-colors"
              onClick={scrollToFooter}
            >
              <span className="text-white text-lg font-normal font-['Geist'] leading-snug">
                Contact Us
              </span>
            </button>
          </div>
        </div>
      </main>

      {/* Wrap Footer with a div having id for scrolling */}
      <div id="page-footer">
        <Footer />
      </div>
    </>
  );
};

export default BusinessPartnersPage;
