import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Ventures | Sudhanand Group',
  description: 'Innovative healthcare solutions and services',
};

export default function HealthcareVenturesPage() {
  return (
    <div className="flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[384px] px-10 lg:px-40 pt-12 pb-10 bg-gradient-to-b from-orange-50/0 to-orange-50 flex flex-col justify-end">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/healthhead.png"
            alt="Healthcare services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full max-w-[1180px] mx-auto relative z-10">
          <h1 className="text-slate-500 text-4xl md:text-6xl font-semibold leading-[1.1]">
            Healthcare Services
          </h1>
          <p className="text-black text-2xl md:text-4xl font-medium mt-4 max-w-[502px]">
            It's all about caring for people
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="self-stretch px-40 py-10 bg-orange-50 inline-flex flex-col justify-start items-center gap-2.5">
    <div className="w-full max-w-[1180px] inline-flex justify-between items-start">
        <div className="w-52 inline-flex flex-col justify-start items-start gap-14">
            <div className="self-stretch justify-start text-slate-500 text-9xl font-normal font-['Geist'] leading-[114px]">15+</div>
            <div className="self-stretch justify-start text-slate-500 text-2xl font-normal font-['Geist'] leading-relaxed">Hospitals</div>
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-14">
            <div className="justify-start text-slate-500 text-9xl font-normal font-['Geist'] leading-[114px]">5l+</div>
            <div className="justify-start text-slate-500 text-2xl font-normal font-['Geist'] leading-relaxed">Patients served</div>
        </div>
        <div className="w-64 inline-flex flex-col justify-start items-start gap-14">
            <div className="self-stretch justify-start text-slate-500 text-9xl font-normal font-['Geist'] leading-[114px]">15+</div>
            <div className="self-stretch h-8 justify-start text-slate-500 text-2xl font-normal font-['Geist'] leading-relaxed">Years in service</div>
        </div>
    </div>
</div>

     {/* Ventures Section */}
{/* Ventures Section */}
<div className="self-stretch px-28 pt-40 pb-56 bg-orange-50 inline-flex flex-col justify-center items-center gap-56">
    <div className="w-[1040px] pb-10 border-b-[0.50px] border-black inline-flex justify-between items-start">
        <div className="w-[480px] pt-8 border-t-[0.50px] border-black flex justify-start items-center gap-64">
            <div className="flex-1 inline-flex flex-col justify-center items-start gap-14">
                <img className="w-52 h-24" src="/hospitality-page/cureplus.png" />
                <div className="self-stretch flex flex-col justify-start items-start gap-8">
                    <div className="self-stretch inline-flex justify-start items-start gap-6">
                        <a href="https://www.sudhanandbusinesssolutions.com/" className="flex-1 flex justify-start items-end gap-2.5 hover:underline">
                            <div className="flex-1 justify-start text-slate-500 text-3xl font-normal font-['Geist'] capitalize leading-loose">Sudhanand Healthcare Solutions Pvt. Ltd.</div>
                        </a>
                        <a href="https://www.sudhanandbusinesssolutions.com/" className="w-6 h-6">
                            <img src="/link-icon.png" alt="Link" className="w-full h-full" />
                        </a>
                    </div>
                    <div className="self-stretch justify-start text-black text-base font-normal font-['Geist'] leading-snug">Cureplus Hospitals is a growing network across Mysore, Chamarajanagar & Kodagu, led by the 40-bed NABH-accredited Cureplus Disha Hospital in Mysuru. The network includes 20-bed hospitals in T. Narasipura, Hassan, Bherya, H.D. Kote, Halli Mysuru, Hosur, Ramapura & Terakanambi, plus facilities in Santhemarahalli, Kushalnagar & Bettadapura. Offering affordable, quality care with modern diagnostics, Cureplus combines clinical excellence with compassion across urban & rural communities.</div>
                </div>
            </div>
        </div>
        <div className="w-[480px] pt-8 border-t-[0.50px] border-black flex justify-start items-center gap-64">
            <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-14">
                <img className="w-24 h-24" src="/hospitality-page/SUDHANAND PHARMACIES 1.png" />
                <div className="self-stretch flex flex-col justify-start items-start gap-8">
                    <div className="self-stretch inline-flex justify-between items-start">
                        <a href="https://www.sudhanandpharmacies.com/" className="w-80 flex justify-start items-end gap-2.5 hover:underline">
                            <div className="flex-1 justify-start text-slate-500 text-3xl font-normal font-['Geist'] capitalize leading-loose">Sudhanand Pharmacies Pvt. Ltd.</div>
                        </a>
                        <a href="https://www.sudhanandpharmacies.com/" className="w-6 h-6">
                            <img src="/link-icon.png" alt="Link" className="w-full h-full" />
                        </a>
                    </div>
                    <div className="self-stretch justify-start text-black text-base font-normal font-['Geist'] leading-snug">Sudhanand Pharmacies Pvt. Ltd. (SPPL), founded in 2023, is the pharmaceutical arm of the Sudhanand Group, committed to delivering high-quality, effective, and affordable medicines. Currently offering 31 products across key therapeutic areas, SPPL continues to expand its portfolio with more in development. Our focus is on balancing efficacy and affordability to make reliable healthcare accessible to all, reinforcing our mission to become a trusted name in the pharmaceutical industry.</div>
                </div>
            </div>
        </div>
    </div>
</div>


      {/* Spacer Section */}
      <div className="relative h-[625px]">
        <Image
          src="/health div.png"
          alt="Healthcare team"
          fill
          className="object-cover"
        />
      </div>
      
      <Footer />
    </div>
  );
}