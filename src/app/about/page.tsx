import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <Header />

      {/* Hero Section */}
      <section
        className="h-[770px] px-12 pt-12 pb-16 bg-cover bg-center bg-no-repeat flex flex-col justify-end gap-10
          max-sm:h-auto max-sm:px-4 max-sm:pt-8 max-sm:pb-8"
        style={{ backgroundImage: "url('/about-head.png')" }}
      >
        <div className="self-stretch h-[750px] px-12 pt-12 pb-16 flex flex-col justify-end items-start gap-10
          max-sm:h-auto max-sm:px-0 max-sm:pt-0 max-sm:pb-0 max-sm:items-center max-sm:gap-6"
        >
          <div className="self-stretch flex justify-between items-end
            max-sm:flex-col max-sm:items-center max-sm:gap-4"
          >
            <div className="w-[523px] text-slate-500 text-9xl font-normal font-['Geist'] leading-[114px]
              max-sm:w-full max-sm:text-4xl max-sm:leading-tight max-sm:text-center"
            >
              Company Profile
            </div>
            <div className="w-96 text-zinc-700 text-lg font-normal font-['Geist'] leading-normal
              max-sm:w-full max-sm:text-base max-sm:mt-4 max-sm:text-center"
            >
              Empowering communities and enriching lives through impactful initiatives in healthcare, education, and well-being. We strive to ensure access to quality care, support learning, and create sustainable change for a brighter, more inclusive future lifelong.
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <div className="w-full py-20 bg-orange-50 flex flex-col items-center
        max-sm:py-10 max-sm:px-2"
      >
        {/* Vision */}
        <div className="w-full flex justify-center items-start gap-8
          max-sm:flex-col max-sm:items-center max-sm:gap-6"
        >
          <div className="flex-1 px-16 flex flex-col justify-center items-start gap-8
            max-sm:px-0 max-sm:items-center max-sm:text-center"
          >
            <div className="text-slate-500 text-6xl font-normal font-['Geist'] leading-[53.20px]
              max-sm:text-2xl"
            >
              Our Vision
            </div>
            <div className="text-zinc-700 text-lg font-normal font-['Inter']
              max-sm:text-base"
            >
              To be a transformative force across industries and borders delivering world-class solutions in healthcare, pharmaceuticals, technology, hospitality, and wellness while staying rooted in our mission to uplift communities, empower people, and inspire a future of inclusive, purpose-driven growth. By 2030, we aim to build a network of over 200 Cure+ Hospitals, bringing accessible, affordable, and quality healthcare to rural and underserved regions across Karnataka, Goa and beyond.
            </div>
          </div>
          <img
            className="h-[540px] w-auto max-sm:h-40 max-sm:w-full max-sm:object-contain"
            src="/about/bulb.png"
            alt="Vision"
          />
        </div>
        {/* Mission */}
        <div className="w-full flex justify-center items-start gap-8 mt-8
          max-sm:flex-col-reverse max-sm:items-center max-sm:gap-6"
        >
          <img
            className="h-[540px] w-auto max-sm:h-40 max-sm:w-full max-sm:object-contain"
            src="/about/mission.png"
            alt="Mission"
          />
          <div className="flex-1 px-16 flex flex-col justify-center items-start gap-8
            max-sm:px-0 max-sm:items-center max-sm:text-center"
          >
            <div className="text-slate-500 text-6xl font-normal font-['Geist'] leading-[53.20px]
              max-sm:text-2xl"
            >
              Our Mission
            </div>
            <div className="text-zinc-700 text-lg font-normal font-['Inter']
              max-sm:text-base"
            >
              To create integrated, impactful businesses that solve real-world problems whether it’s through delivering compassionate healthcare, advancing accessible medicines, building technology-driven efficiencies, offering meaningful hospitality, or promoting community wellness. Every Sudhanand initiative is guided by innovation, integrity, and a commitment to social good.
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <section className="bg-orange-50 px-12 py-28 flex flex-col gap-32 items-center
        max-sm:px-2 max-sm:py-10 max-sm:gap-12"
      >
        {/* Founder - Dr. Arjun */}
        <div className="flex justify-center items-center gap-16 px-16 pt-28 pb-10
          max-sm:flex-col max-sm:gap-6 max-sm:px-0 max-sm:pt-6 max-sm:pb-6 max-sm:w-full"
        >
          {/* Text */}
          <div className="w-[544px] flex flex-col justify-center items-start gap-6
            max-sm:w-full max-sm:items-center max-sm:text-center"
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
            max-sm:w-full max-sm:h-48"
          >
            <img
              src="/about/arjunsir.png"
              alt="Dr. Arjun Sachidanand"
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
            max-sm:w-full max-sm:h-48"
          >
            <img
              src="/about/sinimam.png"
              alt="Dr. Sini Arjun"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="w-[544px] flex flex-col justify-center items-start gap-6
            max-sm:w-full max-sm:items-center max-sm:text-center"
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
            max-sm:w-full max-sm:items-center max-sm:text-center"
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
            max-sm:w-full max-sm:h-48"
          >
            <img
              src="/about/capt.png"
              alt="Capt. Raghu Das"
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
            max-sm:w-full max-sm:h-48"
          >
            <img
              src="/about/vijay.png"
              alt="Vijay Asrani"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="w-[544px] flex flex-col justify-center items-start gap-6
            max-sm:w-full max-sm:items-center max-sm:text-center"
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
              As Chief Administrative Officer at Sudhanand Group, Vijay Asrani oversees financial controls, compliance, and internal audits across all verticals. He ensures effective budgeting, reporting, and cost management while maintaining financial discipline. With deep expertise in corporate finance, he supports strategic growth and decision-making, playing a key role in the group’s stability, transparency, and long-term success.
            </div>
          </div>
        </div>
        {/* VP - New Initiatives & Investments - Abhinandan S. Rao */}
        <div className="flex justify-center items-center gap-16 px-16 py-10
          max-sm:flex-col max-sm:gap-6 max-sm:px-0 max-sm:py-6 max-sm:w-full"
        >
          {/* Text */}
          <div className="w-[544px] flex flex-col justify-center items-start gap-6
            max-sm:w-full max-sm:items-center max-sm:text-center"
          >
            <div className="text-zinc-700 text-2xl font-medium font-['Inter'] leading-7
              max-sm:text-lg"
            >
              VP -New Initiatives & Investments
            </div>
            <div className="text-black text-4xl font-bold font-['Inter'] leading-10
              max-sm:text-2xl"
            >
              Mr. Abhinandan S. Rao
            </div>
            <div className="text-zinc-700 text-lg font-medium font-['Inter'] leading-relaxed
              max-sm:text-base"
            >
              Abhinandan is an innovative thinker driving new projects and investments for growth. With a keen eye for market trends and opportunities, he is responsible for identifying and developing new initiatives that align with the organization’s mission. Abhinandan’s strategic approach to investments ensures that resources are allocated effectively to maximize impact.
            </div>
          </div>
          {/* Image */}
          <div className="w-[484px] h-96 rounded-2xl overflow-hidden
            max-sm:w-full max-sm:h-48"
          >
            <img
              src="/about/abhi.png"
              alt="Abhinandan S. Rao"
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
            max-sm:w-full max-sm:h-48"
          >
            <img
              src="/about/srinivas.png"
              alt="Srinivasa C"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="w-[544px] flex flex-col justify-center items-start gap-6
            max-sm:w-full max-sm:items-center max-sm:text-center"
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
            max-sm:w-full max-sm:items-center max-sm:text-center"
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
              Keshavmurthy is a financial strategist ensuring fiscal responsibility and transparency. He oversees the organization’s financial operations, including budgeting, auditing, and compliance. With a strong background in finance and accounting, Keshavmurthy is committed to maintaining the highest standards of financial integrity and accountability.
            </div>
          </div>
          {/* Image */}
          <div className="w-[484px] h-96 rounded-2xl overflow-hidden
            max-sm:w-full max-sm:h-48"
          >
            <img
              src="/about/keshav.png"
              alt="Keshav Murthy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Scrolling Images Section */}
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
                style={{ width: '2603px' }}
              >
                <img
                  className="w-[640px] h-[625px] object-cover max-sm:w-40 max-sm:h-24"
                  src="/about/Rectangle 52.png"
                  alt="Pic 5"
                />
                <div className="w-[630px] h-[625px] flex flex-col justify-between gap-4 max-sm:w-24 max-sm:h-24">
                  <img
                    src="/about/Rectangle 54.png"
                    alt="Pic 1"
                    className="w-full h-[308px] object-cover max-sm:h-12"
                  />
                  <img
                    src="/about/Rectangle 55.png"
                    alt="Pic 2"
                    className="w-full h-[308px] object-cover max-sm:h-12"
                  />
                </div>
                <img
                  className="w-[361px] h-[625px] object-cover max-sm:w-20 max-sm:h-24"
                  src="/about/Rectangle 57.png"
                  alt="Pic 3"
                />
                <img
                  className="w-[972px] h-[625px] object-cover max-sm:w-40 max-sm:h-24"
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
