import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const BusinessPartnersPage: React.FC = () => {
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
            <h1 className="justify-start text-slate-500 text-9xl font-normal font-['Geist'] leading-[114px]">
              Our <br />Partners
            </h1>
            <p className="w-full md:w-[480px] text-white text-lg font-medium font-geist leading-normal">
              At Sudhanand Group, our business partners are integral to our journey. Together, we foster innovation, share a commitment to excellence, and work collaboratively to create lasting value across healthcare, technology, hospitality, and beyond.
            </p>
          </div>
        </div>

        {/* Partners Section */}
        <div className="w-full px-36 pt-28 pb-28 bg-orange-50 flex flex-col justify-center items-center gap-10">
          <div className="w-full max-w-[1180px] border-b-[0.50px] border-neutral-600 flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-1/2 py-14 border-t-[0.50px] border-neutral-600 flex flex-col justify-start items-center gap-10">
              <div className="w-80 h-40 relative">
                <img className="w-80 h-40 left-0 top-0 absolute" src="/cc.png" alt="Cabrillo Coastal Logo" />
              </div>
              <div className="w-96 flex flex-col justify-center items-start gap-14">
                <div className="self-stretch text-center justify-start text-neutral-600 text-lg font-normal font-['Geist'] leading-normal">
                  Sudhanand Group, a leader in healthcare, IT, and education services, has partnered with Cabrillo Coastal, a specialist in property insurance for high-risk coastal areas. Together, they enhance claims processing, customer support, and service efficiency by combining Sudhanand's operational expertise with Cabrillo's commitment to quality insurance solutions.<br/><br/>This collaboration provides integrated, reliable offerings in healthcare and property protection, ensuring accessibility and efficiency for clients. Their joint efforts drive innovation and excellence, setting new standards across both critical sectors.
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 py-14 border-t-[0.50px] border-neutral-600 flex flex-col justify-start items-center gap-10">
              <div className="w-80 h-40 relative">
                <img className="w-80 h-40 left-0 top-0 absolute" src="/creditgram.png" alt="CreditAccess Grameen Logo" />
              </div>
              <div className="w-96 flex flex-col justify-center items-center gap-14">
                <div className="self-stretch text-center justify-start text-neutral-600 text-lg font-normal font-['Geist'] leading-normal">
                  CreditAccess Grameen, a leading microfinance institution in India, empowers low-income communities through financial services that enhance livelihoods and stability. Sudhanand Group provides accessible, quality healthcare to underserved populations. Together, they form a powerful partnership bridging microfinance and healthcare, addressing critical needs in rural and semi-urban areas. This collaboration promotes financial inclusion and improved medical access, enabling communities to thrive. By combining resources and expertise, they drive sustainable socio-economic development and well-being. Their joint efforts reflect a commitment to innovation and impact, empowering individuals and families to build healthier, more financially secure futures.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1180px] flex flex-col md:flex-row justify-between items-center gap-6 mt-10">
            <div className="w-full md:w-auto justify-start text-neutral-600 text-3xl font-normal font-['Geist'] leading-9">
              Discover how we can help
            </div>
            <button className="px-6 py-4 bg-slate-500 rounded-[500px] flex justify-center items-center gap-2.5 hover:bg-slate-600 transition-colors">
              <div className="text-center justify-start text-white text-lg font-normal font-['Geist'] leading-snug">
                Contact Us
              </div>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default BusinessPartnersPage;