import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Technology Frontier | Sudhanand Group',
  description: 'Where ideas drive change',
};

export default function TechnologyPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative self-stretch h-96 px-10 lg:px-40 pt-12 pb-10 bg-gradient-to-b from-orange-50/0 to-orange-50 inline-flex flex-col justify-end items-start">
        <div className="absolute inset-0 -z-10">
          {
            <Image src="/tech-head.png" alt="Technology" fill className="object-cover" priority />
            }
        </div>
        <div className="self-stretch inline-flex justify-between items-end">
          <div className="inline-flex flex-col justify-start items-start">
            <h1 className="text-orange-950 text-4xl md:text-6xl font-semibold font-['Geist'] leading-[69.76px]">
              Technology Frontier
            </h1>
            <p className="w-[502px] text-black text-2xl md:text-4xl font-medium font-['Geist'] leading-10">
              Where ideas drive change
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="self-stretch px-10 lg:px-40 py-10 bg-orange-50 inline-flex flex-col justify-start items-center gap-2.5">
        <div className="w-full max-w-[1180px] inline-flex justify-between items-start">
          <div className="w-52 inline-flex flex-col justify-start items-start gap-14">
            <span className="text-orange-950 text-6xl md:text-9xl font-normal font-['Geist'] leading-[114px]">15+</span>
            <span className="text-orange-950 text-2xl font-normal font-['Geist'] leading-relaxed">Hospitals</span>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-14">
            <span className="text-orange-950 text-6xl md:text-9xl font-normal font-['Geist'] leading-[114px]">5L+</span>
            <span className="text-orange-950 text-2xl font-normal font-['Geist'] leading-relaxed">Patients served</span>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-14">
            <span className="text-orange-950 text-6xl md:text-9xl font-normal font-['Geist'] leading-[114px]">100+</span>
            <span className="text-orange-950 text-2xl font-normal font-['Geist'] leading-relaxed">Professionals across teams</span>
          </div>
        </div>
      </div>

      {/* Ventures Section */}
      <div
        className="relative self-stretch px-10 lg:px-36 pt-20 lg:pt-40 pb-40 lg:pb-56 bg-stone-950 inline-flex flex-col justify-center items-center gap-56 overflow-hidden"
        style={{
          backgroundImage: "url('/red.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Reflection effect */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100px",
            backgroundImage: "url('/red.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scaleY(-1)",
            opacity: 0.2,
            filter: "blur(4px)",
          }}
        ></div>
        <div className="w-full max-w-[1180px] border-b border-white/50 flex flex-col justify-start items-start gap-9">
          {/* Venture 1 */}
          <div className="self-stretch py-12 border-t border-white/50 inline-flex justify-between items-center">
            <span className="text-white text-8xl lg:text-[300px] font-extralight font-['Geist'] leading-[327px]">
              1.
            </span>
            <div className="w-[640px] self-stretch inline-flex flex-col justify-center items-start gap-14">
              <div className="self-stretch inline-flex justify-start items-end gap-2.5">
                <Link
                  href="/ventures/technology/sudhanand-business-solutions"
                  className="group flex-1 flex items-center gap-3"
                >
                  <h2 className="text-white text-3xl font-normal font-['Geist'] capitalize leading-loose group-hover:text-white group-hover:underline transition-all">
                    Sudhanand Business Solutions Pvt. Ltd.
                  </h2>
                  <Image
                    src="/link.png"
                    alt="View details"
                    width={24}
                    height={24}
                    className="opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6"
                  />
                </Link>
              </div>
              <p className="text-white text-lg font-medium font-['Geist'] leading-normal">
                Sudhanand Business Solutions Pvt. Ltd., is a growing IT and ITES company with presence in India and the USA. Since 2019, SBPL has built a strong reputation, growing from 4 employees to over 100 professionals. Our IT wing, launched in 2022, specializes in Software Testing and Data Science using Agile, Selenium, Jira, and RPA. In ITES, SBPL supports pre-underwriting, claims, bookrolls & policy binding, data science, and accounting, serving top home insurance providers like Cabrillo Coastal General Insurance LLC in the USA.
              </p>
            </div>
          </div>

          {/* Venture 2 */}
          <div className="self-stretch py-12 border-t border-white/50 inline-flex justify-between items-center">
            <span className="text-white text-8xl lg:text-[300px] font-extralight font-['Geist'] leading-[327px]">
              2.
            </span>
            <div className="w-[640px] self-stretch inline-flex flex-col justify-center items-start gap-14">
              <div className="self-stretch inline-flex justify-start items-end gap-2.5">
                <Link
                  href="/ventures/technology/tiameds-technologies"
                  className="group flex-1 flex items-center gap-3"
                >
                  <h2 className="text-white text-3xl font-normal font-['Geist'] capitalize leading-loose group-hover:text-white group-hover:underline transition-all">
                    TiaMeds Technologies Pvt. Ltd.
                  </h2>
                  <Image
                    src="/link.png"
                    alt="View details"
                    width={24}
                    height={24}
                    className="opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6"
                  />
                </Link>
              </div>
              <p className="text-white text-lg font-normal font-['Geist'] leading-normal">
                TiaMeds Technologies Pvt. Ltd., founded in early 2024, is the tech arm of the Sudhanand Group, focused on developing cutting-edge, in-house software solutions for the healthcare and pharma sectors. With expertise in development, testing, data science, BI, analytics, and digital marketing, our team delivers end-to-end products built for impact. While healthcare is our current focus, our tech capabilities are industry-agnostic, ready to drive innovation across sectors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer Section */}
            <div className="relative h-[625px]">
              <Image
                src="/tech-div.png"
                alt="Healthcare team"
                fill
                className="object-cover"
              />
            </div>

      <Footer />
    </div>
  );
}
