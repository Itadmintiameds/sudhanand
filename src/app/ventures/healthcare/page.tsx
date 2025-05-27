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
          <h1 className="text-orange-950 text-4xl md:text-6xl font-semibold leading-[1.1]">
            Healthcare Services
          </h1>
          <p className="text-black text-2xl md:text-4xl font-medium mt-4 max-w-[502px]">
            It's all about caring for people
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-10 lg:px-40 py-10 bg-orange-50">
        <div className="w-full max-w-[1180px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
          <div className="flex flex-col gap-14 w-full md:w-auto">
            <span className="text-orange-950 text-6xl md:text-[144px] font-normal leading-[114px]">
              15+
            </span>
            <span className="text-orange-950 text-2xl font-normal leading-relaxed">
              Hospitals
            </span>
          </div>
          <div className="flex flex-col gap-14 w-full md:w-auto">
            <span className="text-orange-950 text-6xl md:text-[144px] font-normal leading-[114px]">
              5L+
            </span>
            <span className="text-orange-950 text-2xl font-normal leading-relaxed">
              Patients served
            </span>
          </div>
          <div className="flex flex-col gap-14 w-full md:w-auto">
            <span className="text-orange-950 text-6xl md:text-[144px] font-normal leading-[114px]">
              15+
            </span>
            <span className="text-orange-950 text-2xl font-normal leading-relaxed">
              Years in service
            </span>
          </div>
        </div>
      </div>

     {/* Ventures Section */}
<div
  className="relative px-10 lg:px-36 pt-20 lg:pt-40 pb-40 lg:pb-56 bg-stone-950/50 overflow-hidden"
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
  <div className="w-full max-w-[1180px] mx-auto border-b border-white/50 relative z-10">
    {/* Venture 1 */}
    <div className="flex flex-col lg:flex-row justify-between items-start py-12 border-t border-white/50">
      <span className="text-white text-8xl lg:text-[300px] font-extralight leading-[327px] lg:mr-8">
        1.
      </span>
      <div className="lg:w-[640px] mt-8 lg:mt-0">
        <div className="flex justify-between items-end">
          <Link 
            href="/ventures/healthcare/sudhanand-healthcare" 
            className="group flex items-center gap-3"
          >
            <h2 className="text-white text-3xl font-normal capitalize leading-loose group-hover:text-white group-hover:underline transition-all">
              Sudhanand Healthcare Solutions Pvt. Ltd.
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
        <p className="text-white text-lg font-medium mt-8 leading-normal">
          Cureplus Hospitals is a growing network across Mysore, Chamarajanagar & Kodagu, led by the 40-bed NABH-accredited Cureplus Disha Hospital in Mysuru. The network includes 20-bed hospitals in T. Narasipura, Bherya, H.D. Kote, Halli Mysuru, Hosur, Ramapura & Terakanambi, plus facilities in Santhemarahalli, Kushalnagar & Bettadapura. Offering affordable, quality care with modern diagnostics, Cureplus combines clinical excellence with compassion across urban & rural communities.
        </p>
      </div>
    </div>

    {/* Venture 2 */}
    <div className="flex flex-col lg:flex-row justify-between items-start py-12 border-t border-white/50">
      <span className="text-white text-8xl lg:text-[300px] font-extralight leading-[327px] lg:mr-8">
        2.
      </span>
      <div className="lg:w-[640px] mt-8 lg:mt-0">
        <div className="flex justify-between items-end">
          <Link 
            href="/ventures/healthcare/sudhanand-pharmacies" 
            className="group flex items-center gap-3"
          >
            <h2 className="text-white text-3xl font-normal capitalize leading-loose group-hover:text-white group-hover:underline transition-all">
              Sudhanand Pharmacies Pvt. Ltd.
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
        <p className="text-white text-lg font-normal mt-8 leading-normal">
          Sudhanand Pharmacies Pvt. Ltd. (SPPL), founded in 2023, is the pharmaceutical arm of the Sudhanand Group, committed to delivering high-quality, effective, and affordable medicines. Currently offering 31 products across key therapeutic areas, SPPL continues to expand its portfolio with more in development. Our focus is on balancing efficacy and affordability to make reliable healthcare accessible to all, reinforcing our mission to become a trusted name in the pharmaceutical industry.
        </p>
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
