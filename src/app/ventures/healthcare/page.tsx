import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Healthcare Ventures | Sudhanand Group',
  description: 'Innovative healthcare solutions and services',
};

export default function HealthcareVenturesPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <div className="relative h-56 sm:h-80 md:h-96 px-4 sm:px-10 md:px-40 pt-8 md:pt-12 pb-8 md:pb-10 bg-gradient-to-b from-orange-50/0 to-orange-50 flex flex-col justify-end">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/healthhead.png"
            alt="Healthcare services"
            fill
            className="object-cover"
            priority
            style={{ objectPosition: 'center' }}
          />
        </div>
        <div className="w-full max-w-[1180px] mx-auto relative z-10">
          <h1 className="text-slate-500 text-2xl sm:text-4xl md:text-6xl font-semibold leading-[1.1]">
            Healthcare Services
          </h1>
          <p className="text-black text-base sm:text-2xl md:text-4xl font-medium mt-2 sm:mt-4 max-w-[502px]">
            It's all about caring for people
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full px-4 sm:px-10 md:px-40 py-8 md:py-10 bg-orange-50 flex flex-col items-center">
        <div className="w-full max-w-[1180px] flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="text-slate-500 text-5xl md:text-9xl font-normal leading-tight">15+</div>
            <div className="text-slate-500 text-lg md:text-2xl font-normal">Hospitals</div>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="text-slate-500 text-5xl md:text-9xl font-normal leading-tight">5l+</div>
            <div className="text-slate-500 text-lg md:text-2xl font-normal">Patients served</div>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="text-slate-500 text-5xl md:text-9xl font-normal leading-tight">15+</div>
            <div className="text-slate-500 text-lg md:text-2xl font-normal">Years in service</div>
          </div>
        </div>
      </div>

      {/* Ventures Section */}
      <div className="w-full px-4 sm:px-10 md:px-28 pt-12 md:pt-40 pb-16 md:pb-56 bg-orange-50 flex flex-col items-center gap-10 md:gap-56">
        <div className="w-full max-w-[1040px] pb-8 md:pb-10 border-b border-black flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
          {/* Venture 1 */}
          <div className="w-full md:w-[480px] pt-4 md:pt-8 border-t border-black flex flex-col items-center md:items-start gap-6 md:gap-14">
            <img className="w-32 h-16 md:w-52 md:h-24 object-contain" src="/hospitality-page/cureplus.png" alt="Cureplus Hospitals" />
            <div className="flex flex-col gap-2 md:gap-8">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-6">
                <a href="https://www.cureplushospitals.com/" className="text-slate-500 text-xl md:text-3xl font-normal capitalize leading-loose hover:underline">
                  Sudhanand Healthcare Solutions Pvt. Ltd.
                </a>
                <a href="https://www.cureplushospitals.com/" className="w-5 h-5 md:w-6 md:h-6">
                  <img src="/link-icon.png" alt="Link" className="w-full h-full" />
                </a>
              </div>
              <div className="text-black text-sm md:text-base font-normal leading-snug">
                Cureplus Hospitals is a growing network across Mysore, Chamarajanagar & Kodagu, led by the 40-bed NABH-accredited Cureplus Disha Hospital in Mysuru. The network includes 20-bed hospitals in T. Narasipura, Hassan, Bherya, H.D. Kote, Halli Mysuru, Hosur, Ramapura & Terakanambi, plus facilities in Santhemarahalli, Kushalnagar & Bettadapura. Offering affordable, quality care with modern diagnostics, Cureplus combines clinical excellence with compassion across urban & rural communities.
              </div>
            </div>
          </div>
          {/* Venture 2 */}
          <div className="w-full md:w-[480px] pt-4 md:pt-8 border-t border-black flex flex-col items-center md:items-start gap-6 md:gap-14">
            <img className="w-16 h-16 md:w-24 md:h-24 object-contain" src="/hospitality-page/SUDHANAND PHARMACIES 1.png" alt="Sudhanand Pharmacies" />
            <div className="flex flex-col gap-2 md:gap-8">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-6">
                <a href="https://www.sudhanandpharmacies.com/" className="text-slate-500 text-xl md:text-3xl font-normal capitalize leading-loose hover:underline">
                  Sudhanand Pharmacies Pvt. Ltd.
                </a>
                <a href="https://www.sudhanandpharmacies.com/" className="w-5 h-5 md:w-6 md:h-6">
                  <img src="/link-icon.png" alt="Link" className="w-full h-full" />
                </a>
              </div>
              <div className="text-black text-sm md:text-base font-normal leading-snug">
                Sudhanand Pharmacies Pvt. Ltd. (SPPL), founded in 2023, is the pharmaceutical arm of the Sudhanand Group, committed to delivering high-quality, effective, and affordable medicines. Currently offering 31 products across key therapeutic areas, SPPL continues to expand its portfolio with more in development. Our focus is on balancing efficacy and affordability to make reliable healthcare accessible to all, reinforcing our mission to become a trusted name in the pharmaceutical industry.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer Section */}
      <div className="relative h-40 md:h-[625px]">
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
