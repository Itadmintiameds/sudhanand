import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <Header />

      {/* Hero Section */}
      <section
        className="h-[770px] px-12 pt-12 pb-16 bg-cover bg-center bg-no-repeat flex flex-col justify-end gap-10"
        style={{ backgroundImage: "url('/about-head.png')" }}
      >
        <div className="self-stretch h-[750px] px-12 pt-12 pb-16 inline-flex flex-col justify-end items-start gap-10">
    <div className="self-stretch inline-flex justify-between items-end">
        <div className="w-[523px] justify-start text-slate-500 text-9xl font-normal font-['Geist'] leading-[114px]">Company Profile</div>
        <div className="w-96 justify-start text-zinc-700 text-lg font-normal font-['Geist'] leading-normal">Empowering communities and enriching lives through impactful initiatives in healthcare, education, and well-being. We strive to ensure access to quality care, support learning, and create sustainable change for a brighter, more inclusive future lifelong.</div>
    </div>
</div>
      </section>

      {/* Vision & Mission Section */}
    {/* <section className="bg-orange-50 px-12 py-28 flex flex-col gap-32 items-center"> */}
      <div className="self-stretch h-[1240px] py-20 bg-orange-50 inline-flex flex-col justify-center items-center">
    <div className="self-stretch flex-1 inline-flex justify-center items-start overflow-hidden">
        <div className="flex-1 self-stretch px-16 inline-flex flex-col justify-center items-start gap-8">
            <div className="self-stretch flex-1 flex flex-col justify-center items-start gap-14">
                <div className="justify-start text-slate-500 text-6xl font-normal font-['Geist'] leading-[53.20px]">Our Vision</div>
                <div className="self-stretch justify-start text-zinc-700 text-lg font-normal font-['Inter']">To be a transformative force across industries and borders delivering world-class solutions in healthcare, pharmaceuticals, technology, hospitality, and wellness while staying rooted in our mission to uplift communities, empower people, and inspire a future of inclusive, purpose-driven growth. By 2030, we aim to build a network of over 200 Cure+ Hospitals, bringing accessible, affordable, and quality healthcare to rural and underserved regions across Karnataka, Goa and beyond.</div>
            </div>
        </div>
        <img className="self-stretch h-[540px]" src="/about/bulb.png" />
    </div>
    <div className="self-stretch flex-1 inline-flex justify-center items-start overflow-hidden">
        <img className="self-stretch h-[540px]" src="/about/mission.png" />
        <div className="flex-1 self-stretch px-16 inline-flex flex-col justify-center items-start gap-8">
            <div className="self-stretch flex-1 flex flex-col justify-center items-start gap-14">
                <div className="self-stretch justify-start text-slate-500 text-6xl font-normal font-['Geist'] leading-[53.20px]">Our Mission</div>
                <div className="self-stretch justify-start text-zinc-700 text-lg font-normal font-['Inter']">To create integrated, impactful businesses that solve real-world problems whether it’s through delivering compassionate healthcare, advancing accessible medicines, building technology-driven efficiencies, offering meaningful hospitality, or promoting community wellness. Every Sudhanand initiative is guided by innovation, integrity, and a commitment to social good.</div>
            </div>
        </div>
    </div>
</div>

      {/* Founders Section */}
      <section className="bg-orange-50 px-12 py-28 flex flex-col gap-32 items-center">
        {/* Dr. Arjun */}
        <div className="self-stretch px-16 pt-28 pb-10 inline-flex justify-center items-center gap-16">
    <div className="w-[544px] self-stretch inline-flex flex-col justify-center items-start gap-12">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-center text-zinc-700 text-2xl font-medium font-['Inter'] leading-7">Founder</div>
            <div className="self-stretch justify-center text-black text-4xl font-bold font-['Inter'] leading-10">Dr. ARJUN SACHIDANAND</div>
            <div className="self-stretch justify-center text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed">Dr. Arjun is a visionary leader with a passion for healthcare and community service. He has dedicated his career to improving healthcare access and quality for underserved populations. With a background in medicine and public health, Dr. Arjun brings a unique perspective to the management team, ensuring that patient care remains at the forefront of all initiatives.</div>
        </div>
    </div>
    <div className="inline-flex flex-col justify-start items-start gap-2">
        <img className="w-[484px] h-96 rounded-2xl" src="/about/arjunsir.png" />
    </div>
</div>

<div className="self-stretch px-16 py-10 inline-flex justify-center items-center gap-16">
    <div className="inline-flex flex-col justify-start items-start gap-2">
        <img className="w-[484px] h-96 rounded-2xl" src="/about/sinimam.png" />
    </div>
    <div className="w-[544px] self-stretch inline-flex flex-col justify-center items-start gap-12">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-center text-zinc-700 text-2xl font-medium font-['Inter'] leading-7">Managing Director</div>
            <div className="self-stretch justify-center text-black text-4xl font-bold font-['Inter'] leading-10"> Dr. SINI ARJUN  </div>
            <div className="self-stretch justify-center text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed">Dr. Sini is an expert in healthcare management and patient care, ensuring quality services across all facilities. With years of experience in clinical practice and administration, she is committed to maintaining high standards of care and implementing best practices in healthcare delivery. Dr. Sini is also a strong advocate for patient rights and community health initiatives.</div>
        </div>
    </div>
</div>


        <div className="self-stretch px-16 py-10 inline-flex justify-center items-center gap-16">
    <div className="w-[544px] self-stretch inline-flex flex-col justify-center items-start gap-12">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-center text-zinc-700 text-2xl font-medium font-['Inter'] leading-7">Chief Operating Officer</div>
            <div className="self-stretch justify-center text-black text-4xl font-bold font-['Inter'] leading-10">Capt. Raghu Das</div>
            <div className="self-stretch justify-center text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed">Capt. Raghu is a strategic planner with a focus on operational excellence and efficiency. His military background has instilled in him a strong sense of discipline and leadership, which he applies to managing the day-to-day operations of the organization. Capt. Raghu is dedicated to optimizing processes and ensuring that all teams work cohesively towards common goals.</div>
        </div>
    </div>
    <div className="w-[484px] aspect-[4/3] rounded-2xl overflow-hidden">
  <img
    src="/about/capt.png"
    alt="About"
    className="w-full h-full object-cover object-[center_30%]"
  />
</div>
</div>
<div className="self-stretch px-16 py-10 inline-flex justify-center items-center gap-16">
    <div className="inline-flex flex-col justify-start items-start gap-2">
        <img className="w-[484px] h-96 rounded-2xl" src="/about/vijay.png" />
    </div>
    <div className="w-[544px] self-stretch inline-flex flex-col justify-center items-start gap-12">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-center text-zinc-700 text-2xl font-medium font-['Inter'] leading-7">Chief Administrative Officer</div>
            <div className="self-stretch justify-center text-black text-4xl font-bold font-['Inter'] leading-10">Vijay Asrani</div>
            <div className="self-stretch justify-center text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed">As Chief Administrative Officer at Sudhanand Group, Vijay Asrani oversees financial controls, compliance, and internal audits across all verticals. He ensures effective budgeting, reporting, and cost management while maintaining financial discipline. With deep expertise in corporate finance, he supports strategic growth and decision-making, playing a key role in the group’s stability, transparency, and long-term success.</div>
        </div>
    </div>
</div>
<div className="self-stretch px-16 py-10 inline-flex justify-center items-center gap-16">
    <div className="w-[544px] self-stretch inline-flex flex-col justify-center items-start gap-12">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-center text-zinc-700 text-2xl font-medium font-['Inter'] leading-7">VP -New Initiatives & Investments</div>
            <div className="self-stretch justify-center text-black text-4xl font-bold font-['Inter'] leading-10">Mr. Abhinandan S. Rao</div>
            <div className="self-stretch justify-center text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed">Abhinandan is an innovative thinker driving new projects and investments for growth. With a keen eye for market trends and opportunities, he is responsible for identifying and developing new initiatives that align with the organization’s mission. Abhinandan’s strategic approach to investments ensures that resources are allocated effectively to maximize impact.</div>
        </div>
    </div>
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-2">
        <img className="w-[484px] h-96 rounded-2xl" src="/about/abhi.png" />
    </div>
</div>
<div className="self-stretch px-16 py-10 inline-flex justify-center items-center gap-16">
    <div className="inline-flex flex-col justify-start items-start gap-2">
        <img className="w-[484px] h-96 rounded-2xl" src="/about/srinivas.png" />
    </div>
    <div className="w-[544px] self-stretch inline-flex flex-col justify-center items-start gap-12">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-center text-zinc-700 text-2xl font-medium font-['Inter'] leading-7">Senior Operations Manager</div>
            <div className="self-stretch justify-center text-black text-4xl font-bold font-['Inter'] leading-10">Mr. Srinivasa C</div>
            <div className="self-stretch justify-center text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed">Srinivas is a dedicated manager focused on operational efficiency and patient satisfaction. He works closely with clinical and administrative teams to streamline processes and enhance the patient experience. Srinivas is passionate about continuous improvement and regularly seeks feedback from staff and patients to identify areas for enhancement.</div>
        </div>
    </div>
</div>
<div className="self-stretch px-16 pt-10 pb-28 inline-flex justify-center items-center gap-16">
    <div className="w-[544px] self-stretch inline-flex flex-col justify-center items-start gap-12">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-center text-zinc-700 text-2xl font-medium font-['Inter'] leading-7">VP - Internal Audit & Finance</div>
            <div className="self-stretch justify-center text-black text-4xl font-bold font-['Inter'] leading-10">Mr. Keshav Murthy</div>
            <div className="self-stretch justify-center text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed">Keshavmurthy is a financial strategist ensuring fiscal responsibility and transparency. He oversees the organization’s financial operations, including budgeting, auditing, and compliance. With a strong background in finance and accounting, Keshavmurthy is committed to maintaining the highest standards of financial integrity and accountability.</div>
        </div>
    </div>
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-2">
        <img className="w-[484px] h-96 rounded-2xl" src="/about/keshav.png" />
    </div>
</div>

      </section>

<section className="w-full bg-orange-50 overflow-hidden py-8">
  <style>{`
    @keyframes scrollTrack {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
  `}</style>

  <div className="relative overflow-hidden w-full">
    <div
      className="flex gap-4"
      style={{
        animation: 'scrollTrack 20s linear infinite',
        width: 'max-content',
      }}
    >
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className="inline-flex justify-start items-start gap-4 flex-shrink-0"
          style={{ width: '2603px' }} // Total width of all elements
        >
          {/* 1. Replaced placeholder with Pic 5 */}
          <img
            className="w-[640px] h-[625px] object-cover"
            src="/about/Rectangle 52.png"
            alt="Pic 5"
          />

          {/* 2. Pic 1 & Pic 2 */}
          <div className="w-[630px] h-[625px] flex flex-col justify-between gap-4">
            <img
              src="/about/Rectangle 54.png"
              alt="Pic 1"
              className="w-full h-[308px] object-cover"
            />
            <img
              src="/about/Rectangle 55.png"
              alt="Pic 2"
              className="w-full h-[308px] object-cover"
            />
          </div>

          {/* 3. Pic 3 */}
          <img
            className="w-[361px] h-[625px] object-cover"
            src="/about/Rectangle 57.png"
            alt="Pic 3"
          />

          {/* 4. Pic 4 */}
          <img
            className="w-[972px] h-[625px] object-cover"
            src="/about/Rectangle 58.png"
            alt="Pic 4"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}