import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <Header />

      {/* Hero Section - Fixed Mobile View */}
<section
  className="relative h-[760px] px-12 pt-12 pb-16 bg-cover bg-center bg-no-repeat
    max-sm:h-auto max-sm:px-4 max-sm:pt-28 max-sm:pb-8"
  style={{ backgroundImage: "url('/about-head.png')" }}
>
  {/* Background Image Container - Fixed Height for Mobile */}
  <div className="absolute inset-0 max-sm:h-[200px]"></div>
  
  {/* Content Container - Appears below image on mobile */}
  <div className="relative w-full h-full flex flex-col justify-end
      max-sm:mt-[200px] max-sm:block max-sm:h-auto">
    <div className="flex justify-between items-end
        max-sm:flex-col max-sm:items-center max-sm:gap-6">
      <div className="w-[523px] text-slate-500 text-9xl font-normal font-['Geist'] leading-[114px]
          max-sm:w-full max-sm:text-5xl max-sm:leading-[1.2] max-sm:text-center">
        Company Profile
      </div>
      <div className="w-96 text-zinc-700 text-lg font-normal font-['Geist'] leading-normal
          max-sm:w-full max-sm:text-base max-sm:text-center max-sm:px-4">
        Empowering communities and enriching lives through impactful initiatives in healthcare, education, and well-being. We strive to ensure access to quality care, support learning, and create sustainable change for a brighter, more inclusive future lifelong.
      </div>
    </div>
  </div>
</section>

     {/* Vision & Mission Section */}
<div className="w-full py-12 bg-orange-50 flex flex-col items-center px-4 md:py-16 lg:px-8">

  {/* Vision */}
  <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center">
    {/* Text */}
    <div className="flex-1 space-y-6">
      <h2 className="text-4xl md:text-5xl font-normal text-slate-500 font-geist">
        Our Vision
      </h2>
      <p className="text-lg text-zinc-700 font-inter leading-relaxed">
        To be a transformative force across industries and borders delivering world-class solutions in healthcare, pharmaceuticals, technology, hospitality, and wellness while staying rooted in our mission to uplift communities, empower people, and inspire a future of inclusive, purpose-driven growth. By 2030, we aim to build a network of over 200 CurePlus Hospitals, bringing accessible, affordable, and quality healthcare to rural and underserved regions across Karnataka, Goa and beyond.
      </p>
    </div>

    {/* Image */}
    <div className="flex-1 w-full h-auto">
      <Image
        src="/about/bulb.png"
        alt="Vision illustration"
        width={800}
        height={600}
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
  </div>

  {/* Mission */}
  <div className="w-full max-w-6xl flex flex-col md:flex-row-reverse gap-8 items-center mt-12 md:mt-16 mb-0">
    {/* Text */}
    <div className="flex-1 space-y-6">
      <h2 className="text-4xl md:text-5xl font-normal text-slate-500 font-geist">
        Our Mission
      </h2>
      <p className="text-lg text-zinc-700 font-inter leading-relaxed">
  To create integrated, impactful businesses that solve real-world problems whether it&#39;s through delivering compassionate healthcare, advancing accessible medicines, building technology-driven efficiencies, offering meaningful hospitality, or promoting community wellness. Every Sudhanand initiative is guided by innovation, integrity, and a commitment to social good.
</p>

    </div>

    {/* Image */}
    <div className="flex-1 w-full h-auto">
      <Image
        src="/about/mission.png"
        alt="Mission illustration"
        width={800}
        height={600}
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
  </div>
</div>


      {/* Founders Section */}
      <section className="bg-orange-50 px-12 py-28 flex flex-col gap-32 items-center
        max-sm:px-4 max-sm:py-10 max-sm:gap-12"
      >
        {/* Founder - Dr. Arjun */}
        <div className="flex justify-center items-center gap-16 px-16 pt-28 pb-10
          max-sm:flex-col max-sm:gap-6 max-sm:px-0 max-sm:pt-0 max-sm:pb-0 max-sm:w-full"
        >
          {/* Text */}
          <div className="w-[544px] flex flex-col justify-center items-start gap-6
            max-sm:w-full max-sm:items-center max-sm:text-center max-sm:px-2"
          >
            <div className="text-zinc-700 text-2xl font-medium font-['Inter'] leading-7
              max-sm:text-lg"
            >
              Founder
            </div>
            <div className="text-black text-4xl font-bold font-['Inter'] leading-10
              max-sm:text-2xl"
            >
              Dr. ARJUN SACHIDANAND
            </div>
            <div className="text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed
              max-sm:text-base"
            >
              Dr. Arjun is a visionary leader with a passion for healthcare and community service. He has dedicated his career to improving healthcare access and quality for underserved populations. With a background in medicine and public health, Dr. Arjun brings a unique perspective to the management team, ensuring that patient care remains at the forefront of all initiatives.
            </div>
          </div>
          {/* Image */}
          <div className="w-[484px] h-96 rounded-2xl overflow-hidden
            max-sm:w-full max-sm:h-auto max-sm:max-h-[300px] max-sm:aspect-square"
          >
            <Image
              src="/about/arjunsir.png"
              alt="Dr. Arjun Sachidanand"
              width={484}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Managing Director - Dr. Sini */}
        <div className="flex justify-center items-center gap-16 px-16 py-10
          max-sm:flex-col-reverse max-sm:gap-6 max-sm:px-0 max-sm:py-6 max-sm:w-full"
        >
          {/* Image */}
          <div className="w-[484px] h-96 rounded-2xl overflow-hidden
            max-sm:w-full max-sm:h-auto max-sm:max-h-[300px] max-sm:aspect-square"
          >
            <Image
              src="/about/sinimam.png"
              alt="Dr. Sini Arjun"
              width={484}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="w-[544px] flex flex-col justify-center items-start gap-6
            max-sm:w-full max-sm:items-center max-sm:text-center max-sm:px-2"
          >
            <div className="text-zinc-700 text-2xl font-medium font-['Inter'] leading-7
              max-sm:text-lg"
            >
              Managing Director
            </div>
            <div className="text-black text-4xl font-bold font-['Inter'] leading-10
              max-sm:text-2xl"
            >
              Dr. SINI ARJUN
            </div>
            <div className="text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed
              max-sm:text-base"
            >
              Dr. Sini is an expert in healthcare management and patient care, ensuring quality services across all facilities. With years of experience in clinical practice and administration, she is committed to maintaining high standards of care and implementing best practices in healthcare delivery. Dr. Sini is also a strong advocate for patient rights and community health initiatives.
            </div>
          </div>
        </div>

        {/* COO - Capt. Raghu Das */}
        <div className="flex justify-center items-center gap-16 px-16 py-10
          max-sm:flex-col max-sm:gap-6 max-sm:px-0 max-sm:py-6 max-sm:w-full"
        >
          {/* Text */}
          <div className="w-[544px] flex flex-col justify-center items-start gap-6
            max-sm:w-full max-sm:items-center max-sm:text-center max-sm:px-2"
          >
            <div className="text-zinc-700 text-2xl font-medium font-['Inter'] leading-7
              max-sm:text-lg"
            >
              Chief Operating Officer
            </div>
            <div className="text-black text-4xl font-bold font-['Inter'] leading-10
              max-sm:text-2xl"
            >
              Capt. Raghu Das
            </div>
            <div className="text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed
              max-sm:text-base"
            >
              Capt. Raghu is a strategic planner with a focus on operational excellence and efficiency. His military background has instilled in him a strong sense of discipline and leadership, which he applies to managing the day-to-day operations of the organization. Capt. Raghu is dedicated to optimizing processes and ensuring that all teams work cohesively towards common goals.
            </div>
          </div>
          {/* Image */}
          <div className="w-[484px] h-96 rounded-2xl overflow-hidden
            max-sm:w-full max-sm:h-auto max-sm:max-h-[300px] max-sm:aspect-square"
          >
            <Image
              src="/about/capt.png"
              alt="Capt. Raghu Das"
              width={484}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CAO - Vijay Asrani */}
        <div className="flex justify-center items-center gap-16 px-16 py-10
          max-sm:flex-col-reverse max-sm:gap-6 max-sm:px-0 max-sm:py-6 max-sm:w-full"
        >
          {/* Image */}
          <div className="w-[484px] h-96 rounded-2xl overflow-hidden
            max-sm:w-full max-sm:h-auto max-sm:max-h-[300px] max-sm:aspect-square"
          >
            <Image
              src="/about/vijay.png"
              alt="Vijay Asrani"
              width={484}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="w-[544px] flex flex-col justify-center items-start gap-6
            max-sm:w-full max-sm:items-center max-sm:text-center max-sm:px-2"
          >
            <div className="text-zinc-700 text-2xl font-medium font-['Inter'] leading-7
              max-sm:text-lg"
            >
              Chief Administrative Officer
            </div>
            <div className="text-black text-4xl font-bold font-['Inter'] leading-10
              max-sm:text-2xl"
            >
              Vijay Asrani
            </div>
            <div className="text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed
              max-sm:text-base"
            >
              As Chief Administrative Officer at Sudhanand Group, Vijay Asrani oversees financial controls, compliance, and internal audits across all verticals. He ensures effective budgeting, reporting, and cost management while maintaining financial discipline. With deep expertise in corporate finance, he supports strategic growth and decision-making, playing a key role in the group&apos;s stability, transparency, and long-term success.
            </div>
          </div>
        </div>

        {/* VP - New Initiatives & Investments - Abhinandan S. Rao */}
        <div className="flex justify-center items-center gap-16 px-16 py-10
          max-sm:flex-col max-sm:gap-6 max-sm:px-0 max-sm:py-6 max-sm:w-full"
        >
          {/* Text */}
          <div className="w-[544px] flex flex-col justify-center items-start gap-6
            max-sm:w-full max-sm:items-center max-sm:text-center max-sm:px-2"
          >
            <div className="text-zinc-700 text-2xl font-medium font-['Inter'] leading-7
              max-sm:text-lg"
            >
              VP - New Initiatives & Investments
            </div>
            <div className="text-black text-4xl font-bold font-['Inter'] leading-10
              max-sm:text-2xl"
            >
              Mr. Abhinandan S. Rao
            </div>
            <div className="text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed
              max-sm:text-base"
            >
              Abhinandan is an innovative thinker driving new projects and investments for growth. With a keen eye for market trends and opportunities, he is responsible for identifying and developing new initiatives that align with the organization&apos;s mission. Abhinandan&apos;s strategic approach to investments ensures that resources are allocated effectively to maximize impact.
            </div>
          </div>
          {/* Image */}
          <div className="w-[484px] h-96 rounded-2xl overflow-hidden
            max-sm:w-full max-sm:h-auto max-sm:max-h-[300px] max-sm:aspect-square"
          >
            <Image
              src="/about/abhi.png"
              alt="Abhinandan S. Rao"
              width={484}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Senior Operations Manager - Srinivasa C */}
        <div className="flex justify-center items-center gap-16 px-16 py-10
          max-sm:flex-col-reverse max-sm:gap-6 max-sm:px-0 max-sm:py-6 max-sm:w-full"
        >
          {/* Image */}
          <div className="w-[484px] h-96 rounded-2xl overflow-hidden
            max-sm:w-full max-sm:h-auto max-sm:max-h-[300px] max-sm:aspect-square"
          >
            <Image
              src="/about/srinivas.png"
              alt="Srinivasa C"
              width={484}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="w-[544px] flex flex-col justify-center items-start gap-6
            max-sm:w-full max-sm:items-center max-sm:text-center max-sm:px-2"
          >
            <div className="text-zinc-700 text-2xl font-medium font-['Inter'] leading-7
              max-sm:text-lg"
            >
              Senior Operations Manager
            </div>
            <div className="text-black text-4xl font-bold font-['Inter'] leading-10
              max-sm:text-2xl"
            >
              Mr. Srinivasa C
            </div>
            <div className="text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed
              max-sm:text-base"
            >
              Srinivas is a dedicated manager focused on operational efficiency and patient satisfaction. He works closely with clinical and administrative teams to streamline processes and enhance the patient experience. Srinivas is passionate about continuous improvement and regularly seeks feedback from staff and patients to identify areas for enhancement.
            </div>
          </div>
        </div>

        {/* VP - Internal Audit & Finance - Keshav Murthy */}
        <div className="flex justify-center items-center gap-16 px-16 pt-10 pb-28
          max-sm:flex-col max-sm:gap-6 max-sm:px-0 max-sm:pt-6 max-sm:pb-10 max-sm:w-full"
        >
          {/* Text */}
          <div className="w-[544px] flex flex-col justify-center items-start gap-6
            max-sm:w-full max-sm:items-center max-sm:text-center max-sm:px-2"
          >
            <div className="text-zinc-700 text-2xl font-medium font-['Inter'] leading-7
              max-sm:text-lg"
            >
              VP - Internal Audit & Finance
            </div>
            <div className="text-black text-4xl font-bold font-['Inter'] leading-10
              max-sm:text-2xl"
            >
              Mr. Keshav Murthy
            </div>
            <div className="text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed
              max-sm:text-base"
            >
              Keshavmurthy is a financial strategist ensuring fiscal responsibility and transparency. He oversees the organization&apos;s financial operations, including budgeting, auditing, and compliance. With a strong background in finance and accounting, Keshavmurthy is committed to maintaining the highest standards of financial integrity and accountability.
            </div>
          </div>
          {/* Image */}
          <div className="w-[484px] h-96 rounded-2xl overflow-hidden
            max-sm:w-full max-sm:h-auto max-sm:max-h-[300px] max-sm:aspect-square"
          >
            <Image
              src="/about/keshav.png"
              alt="Keshav Murthy"
              width={484}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Fixed Scrolling Images Section */}
      <section className="w-full bg-orange-50 overflow-hidden py-8">
        <div className="relative w-full overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .scrolling-wrapper {
              display: flex;
              width: max-content;
              animation: scroll 30s linear infinite;
            }
            @media (max-width: 640px) {
              .scrolling-wrapper {
                animation-duration: 40s;
              }
              .image-set {
                gap: 8px;
                padding: 0 4px;
              }
              .mobile-large-img {
                width: 160px;
                height: 160px;
              }
              .mobile-img-column {
                width: 160px;
                gap: 8px;
              }
              .mobile-small-img {
                width: 160px;
                height: 76px;
              }
            }
          `}</style>
          
          <div className="scrolling-wrapper">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="image-set flex items-start gap-4">
                {/* Large vertical image */}
                <div className="mobile-large-img w-[640px] h-[625px] relative">
                  <Image
                    src="/about/Rectangle 52.png"
                    alt="Hospital facility"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Column with two images */}
                <div className="mobile-img-column flex flex-col gap-4">
                  <div className="mobile-small-img w-[630px] h-[308px] relative">
                    <Image
                      src="/about/Rectangle 54.png"
                      alt="Medical team"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mobile-small-img w-[630px] h-[308px] relative">
                    <Image
                      src="/about/Rectangle 55.png"
                      alt="Patient care"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Medium vertical image */}
                <div className="mobile-large-img w-[361px] h-[625px] relative">
                  <Image
                    src="/about/Rectangle 57.png"
                    alt="Hospital building"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Wide horizontal image */}
                <div className="mobile-large-img w-[972px] h-[625px] relative">
                  <Image
                    src="/about/Rectangle 58.png"
                    alt="Community outreach"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}