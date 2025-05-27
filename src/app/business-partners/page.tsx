import React from 'react';
import Head from 'next/head';
import Header from '../components/Header'; // Adjust import path as needed
import Footer from '../components/Footer'; // Adjust import path as needed
import Link from 'next/link';

interface Partner {
  name: string;
  description: string;
  logo: string;
  logoClass?: string;
}

const BusinessPartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: "Cabrillo Coastal",
description: `Sudhanand Group, a leader in healthcare, IT, and education services, has partnered with Cabrillo Coastal, a specialist in property insurance for high-risk coastal areas. Together, they enhance claims processing, customer support, and service efficiency by combining Sudhanand’s operational expertise with Cabrillo’s commitment to quality insurance solutions.
This collaboration provides integrated, reliable offerings in healthcare and property protection, ensuring accessibility and efficiency for clients. Their joint efforts drive innovation and excellence, setting new standards across both critical sectors.`,
      logo: "/cc.png",
      logoClass: "w-80 h-40 object-contain"
    },
    {
      name: "Credit Access Grameen",
      description: `CreditAccess Grameen, a leading microfinance institution in India, empowers low-income communities with financial solutions to improve livelihoods. Sudhanand Group focuses on providing accessible, quality healthcare services to underserved populations.
Their partnership combines microfinance and healthcare to enhance financial inclusion and medical access, addressing critical needs for community well-being. Together, they drive sustainable socio-economic development through innovative, impact-driven solutions.`,
      logo: "/creditgram.png",
      logoClass: "w-80 h-36 object-contain"
    }
  ];

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
          className="relative h-[750px] px-12 pt-12 pb-16 flex flex-col justify-end items-start gap-10"
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
          <div className="relative z-10 w-full flex justify-between items-end">
            <h1 className="text-white text-7xl md:text-9xl font-normal font-geist leading-tight md:leading-[114px]">
              Business <br />Partners
            </h1>
            <p className="w-full md:w-[480px] text-white text-lg font-medium font-geist leading-normal">
              At Sudhanand Group, our business partners are integral to our journey — together, we foster innovation, share a commitment to excellence, and work collaboratively to create lasting value across healthcare, technology, hospitality, and beyond.
            </p>
          </div>
        </div>

        {/* Partners Section with Background Image */}
        <div 
          className="relative px-6 md:px-36 pt-20 md:pt-28 pb-28 md:pb-56 flex flex-col justify-center items-center gap-20 md:gap-44"
          style={{
            backgroundImage: "url('/partnerbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed"
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-stone-950/80 z-0"></div>
          
          {/* Content */}
          <div className="relative z-10 w-full max-w-[1180px] border-b-[0.50px] border-white flex flex-col justify-start items-start gap-9">
            <div className="w-full flex flex-col justify-start items-start gap-5">
              {partners.map((partner, index) => (
                <article key={index} className="w-full py-8 md:py-12 border-t-[0.50px] border-white flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="flex-shrink-0 w-full md:w-auto">
                    <img 
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className={`mx-auto md:mx-0 ${partner.logoClass}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-6 md:gap-14 md:pl-8">
                    <h2 className="text-white text-xl md:text-2xl font-semibold font-geist leading-relaxed">
                      {partner.name}
                    </h2>
                    <p className="text-white text-base md:text-lg font-normal font-geist leading-normal">
                      {partner.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative z-10 w-full flex flex-col md:flex-row justify-start items-center gap-8 md:gap-24">
            <h3 className="w-full md:w-96 text-white text-2xl md:text-3xl font-normal font-geist leading-9">
              Discover how we can help
            </h3>
            <Link 
              href="/"
              className="px-6 py-4 bg-white rounded-[500px] flex justify-center items-center gap-2.5 hover:bg-opacity-90 transition-colors w-full md:w-auto"
            >
              <span className="text-black text-lg font-normal font-geist leading-snug">
                Contact us
              </span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BusinessPartnersPage;