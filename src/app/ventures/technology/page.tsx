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
            <h1 className="text-blue-950 text-4xl md:text-6xl font-semibold font-['Geist'] leading-[69.76px]">
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
            <span className="text-blue-950 text-6xl md:text-9xl font-normal font-['Geist'] leading-[114px]">15+</span>
            <span className="text-blue-950 text-2xl font-normal font-['Geist'] leading-relaxed">Hospitals</span>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-14">
            <span className="text-blue-950 text-6xl md:text-9xl font-normal font-['Geist'] leading-[114px]">5L+</span>
            <span className="text-blue-950 text-2xl font-normal font-['Geist'] leading-relaxed">Patients served</span>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-14">
            <span className="text-blue-950 text-6xl md:text-9xl font-normal font-['Geist'] leading-[114px]">100+</span>
            <span className="text-blue-950 text-2xl font-normal font-['Geist'] leading-relaxed">Professionals across teams</span>
          </div>
        </div>
      </div>

      <div className="self-stretch px-36 pt-40 pb-56 bg-orange-50 inline-flex flex-col justify-center items-center gap-56">
    <div className="w-[1040px] pb-10 border-b-[0.50px] border-black inline-flex justify-between items-start">
        <div className="w-[480px] pt-8 border-t-[0.50px] border-black flex justify-start items-center gap-64">
            <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start gap-14">
                <img className="w-28 h-24" src="/technology-page/SBPL 2 2.png" />
                <div className="self-stretch flex flex-col justify-start items-start gap-8">
                    <div className="self-stretch inline-flex justify-start items-start gap-6">
                        <div className="flex-1 flex justify-start items-end gap-2.5">
                            <div className="flex-1 justify-start text-slate-500 text-3xl font-normal font-['Geist'] capitalize leading-loose">Sudhanand Business Solutions Pvt. Ltd.</div>
                        </div>
                        <div className="w-6 h-6">
                          <img src="/technology-page/link-icon.png" alt="Link" className="w-full h-full" />
                          </div>
                    </div>
                    <div className="self-stretch justify-start text-black text-base font-normal font-['Geist'] leading-snug">Sudhanand Business Solutions Pvt. Ltd., is a growing IT and ITES company with presence in India and the USA. Since 2019, SBPL has built a strong reputation, growing from 4 employees to over 100 professionals. Our IT wing, launched in 2022, specializes in Software Testing and Data Science using Agile, Selenium, Jira, and RPA. In ITES, SBPL supports pre-underwriting, claims, bookrolls & policy binding, and accounting, serving top home insurance providers like Cabrillo Coastal General Insurance LLC in the USA.</div>
                </div>
            </div>
        </div>
        <div className="w-[480px] pt-8 border-t-[0.50px] border-black flex justify-start items-center gap-64">
            <div className="flex-1 inline-flex flex-col justify-center items-start gap-14">
                <img className="w-64 h-24" src="/technology-page/tiameds.png" />
                <div className="self-stretch flex flex-col justify-start items-start gap-8">
                    <div className="self-stretch inline-flex justify-start items-start gap-6">
                        <div className="flex-1 flex justify-start items-end gap-2.5">
                            <div className="w-80 justify-start text-slate-500 text-3xl font-normal font-['Geist'] capitalize leading-loose">TiaMeds Technologies Pvt. Ltd.</div>
                        </div>
                          <div className="w-6 h-6">
                          <img src="/technology-page/link-icon.png" alt="Link" className="w-full h-full" />
                          </div>
                        </div>
                    <div className="self-stretch justify-start text-black text-base font-normal font-['Geist'] leading-snug">TiaMeds Technologies Pvt. Ltd., founded in early 2024, is the tech arm of the Sudhanand Group, focused on developing cutting-edge, in-house software solutions for the healthcare and pharma sectors. With expertise in development, testing, data science, BI, analytics, and digital marketing, our team delivers end-to-end products built for impact. While healthcare is our current focus, our tech capabilities are industry-agnostic, ready to drive innovation across sectors.</div>
                </div>
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
