import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <Header />

      {/* Hero Section */}
      <section
        className="h-[750px] px-12 pt-12 pb-16 bg-cover bg-center bg-no-repeat flex flex-col justify-end gap-10"
        style={{ backgroundImage: "url('/about-head.png')" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <h1 className="md:w-[523px] text-slate-500 text-6xl md:text-9xl font-normal font-['Geist'] leading-[114px]">
            Company Profile
          </h1>
          <p className="md:w-[480px] text-zinc-700 text-base md:text-lg font-normal font-['Geist'] leading-relaxed">
            Empowering communities and enriching lives through impactful initiatives in healthcare,
            education, and beyond. We work to ensure access to quality care, support learning
            opportunities, and promote overall well-being. Our mission is to create sustainable
            change, uplift the underserved, and build a brighter, more inclusive future for all.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-orange-50 py-28 flex flex-col gap-32 items-center">
        {/* Vision */}
        <div className="flex flex-col lg:flex-row w-full max-w-7xl px-12 gap-20 items-center">
          <div className="flex-1 flex flex-col gap-14">
            <h2 className="text-slate-500 text-6xl font-normal font-['Geist'] leading-tight">
              Our Vision
            </h2>
            <p className="text-zinc-700 text-lg font-normal font-['Geist'] leading-relaxed">
              To be a transformative force across industries and borders delivering world-class
              solutions in healthcare, pharmaceuticals, technology, hospitality, and wellness while
              staying rooted in our mission to uplift communities, empower people, and inspire a
              future of inclusive, purpose-driven growth. By 2030, we aim to build a network of over
              200 Cure+ Hospitals, bringing accessible, affordable, and quality healthcare to rural
              and underserved regions across Karnataka, Goa, and beyond.
            </p>
          </div>
          <img
            src="/vision.png"
            alt="Vision"
            className="flex-1 h-[540px] w-full object-cover rounded-2xl"
          />
        </div>

        {/* Mission */}
        <div className="flex flex-col-reverse lg:flex-row w-full max-w-7xl px-12 gap-20 items-center">
          <img
            src="/mission.png"
            alt="Mission"
            className="flex-1 h-[540px] w-full object-cover rounded-2xl"
          />
          <div className="flex-1 flex flex-col gap-14">
            <h2 className="text-slate-500 text-6xl font-normal font-['Geist'] leading-tight">
              Our Mission
            </h2>
            <p className="text-zinc-700 text-lg font-normal font-['Geist'] leading-relaxed">
              To create integrated, impactful businesses that solve real-world problems—whether
              it’s through delivering compassionate healthcare, advancing accessible medicines,
              building technology-driven efficiencies, offering meaningful hospitality, or
              promoting community wellness. Every Sudhanand initiative is guided by innovation,
              integrity, and a commitment to social good.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-white px-12 py-28 flex flex-col gap-32 items-center">
        {/* Dr. Arjun */}
        <div className="flex flex-col md:flex-row w-full max-w-7xl gap-20 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <span className="text-zinc-700 text-2xl font-medium font-['Geist']">Founder</span>
            <h3 className="text-black text-4xl font-bold font-['Geist']">Dr. ARJUN SACHIDANAND</h3>
            <p className="text-zinc-700 text-lg font-medium font-['Geist'] leading-relaxed">
              Dr. Arjun Sachidanand is a 3rd generation Orthopaedic Surgeon from a family of
              doctors and surgeons, skilled in both medical and hospital management. He holds an
              MBBS, MS (Ortho), MBA – Hospital Administration, PGDHHCM degree, and is the Founder
              and Chairman of Sudhanand Health Care Pvt. Ltd., aiming to deliver quality healthcare
              to the downtrodden and poor.
            </p>
          </div>
          <img
            src="/founder1.png"
            alt="Dr. Arjun Sachidanand"
            className="flex-1 h-[432px] w-full object-cover rounded-2xl"
          />
        </div>

        {/* Dr. Sini */}
        <div className="flex flex-col md:flex-row-reverse w-full max-w-7xl gap-20 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <span className="text-zinc-700 text-2xl font-medium font-['Geist']">Founder</span>
            <h3 className="text-black text-4xl font-bold font-['Geist']">Dr. SINI ARJUN</h3>
            <p className="text-zinc-700 text-lg font-medium font-['Geist'] leading-relaxed">
              Dr. Sini Arjun is the Founder Director of Dr. M. D. Sachidananda Murthy Memorial
              Group of Hospitals, focused on delivering affordable, quality healthcare. A successful
              entrepreneur, she leads a hospital business that serves both rural and urban areas.
              Dr. Sini is also on the board of Sumana NGO, providing free education in Mellahalli,
              Mysore district for over a decade.
            </p>
          </div>
          <img
            src="/founder2.png"
            alt="Dr. Sini Arjun"
            className="flex-1 h-[432px] w-full object-cover rounded-2xl"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
