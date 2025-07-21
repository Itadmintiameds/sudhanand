import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Warm Hospitality | Sudhanand Group',
  description: 'Welcome to a world of comfort and care',
};

export default function HospitalityPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <div className="relative self-stretch h-72 sm:h-96 px-4 sm:px-10 lg:px-40 pt-8 sm:pt-12 pb-8 sm:pb-10 bg-gradient-to-b from-orange-50/0 to-orange-50 flex flex-col justify-end items-start">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hospi-head.png"
            alt="Technology"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* On mobile: stack vertically and full width */}
        <div className="self-stretch flex flex-col sm:flex-row justify-between items-end w-full max-w-[1180px] mx-auto gap-4 sm:gap-0">
          <div className="inline-flex flex-col justify-start items-start w-full sm:w-auto">
            <h1 className="text-slate-500 text-4xl sm:text-6xl font-semibold font-['Geist'] leading-[1.1]">
              Warm Hospitality
            </h1>
            <p className="text-black text-lg md:text-4xl font-medium font-['Geist'] leading-10 mt-2">
              Welcome to a World of Comfort and Care
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="self-stretch px-4 sm:px-10 lg:px-40 py-8 sm:py-10 bg-orange-50 flex flex-col items-center">
        <div className="w-full max-w-[1180px] flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-0">
          <div className="w-full sm:w-52 flex flex-col justify-start items-start gap-8 sm:gap-14">
            <span className="text-slate-500 text-6xl sm:text-9xl font-normal font-['Geist'] leading-tight">2+</span>
            <span className="text-blue-950 text-xl sm:text-2xl font-normal font-['Geist'] leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
              Stays and expanding
            </span>
          </div>
          <div className="w-full sm:w-auto flex flex-col justify-start items-start gap-8 sm:gap-14">
            <span className="text-slate-500 text-6xl sm:text-9xl font-normal font-['Geist'] leading-tight">1L+</span>
            <span className="text-blue-950 text-xl sm:text-2xl font-normal font-['Geist'] leading-relaxed">
              Satisfied customers
            </span>
          </div>
          <div className="w-full sm:w-auto flex flex-col justify-start items-start gap-8 sm:gap-14">
            <span className="text-slate-500 text-6xl sm:text-9xl font-normal font-['Geist'] leading-tight">80+</span>
            <span className="text-blue-950 text-xl sm:text-2xl font-normal font-['Geist'] leading-relaxed">
              Exceptional Hospitality Team
            </span>
          </div>
        </div>
      </div>

      {/* Venture Section */}
      <div className="self-stretch px-4 sm:px-36 py-20 sm:py-40 bg-orange-50 flex flex-col items-center gap-20 sm:gap-56">
        <div className="w-full max-w-[1040px] pb-8 sm:pb-10 border-b border-black flex flex-col sm:flex-row justify-between items-start gap-10 sm:gap-0">
          {/* Venture 1 */}
          <div className="w-full sm:w-[480px] pt-6 sm:pt-8 border-t border-black flex flex-col items-center sm:items-start gap-8 sm:gap-14">
            <div className="relative w-20 h-24">
              <Image
                src="/hospitality-page2/NOVA CANDOLIM BY SUDHANAND 2.png"
                alt="Sudhanand Candolim In Goa"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 sm:gap-8 max-w-full">
              <div className="flex justify-between items-center gap-4 w-full">
                <a
                  href="https://sudhanandnovacandolim.com/" target="_blank"
                    rel="noopener noreferrer"
                  className="text-slate-500 text-3xl font-normal font-['Geist'] capitalize leading-loose hover:underline flex-1"
                >
                  Sudhanand Candolim In Goa
                </a>
                <a href="https://sudhanandnovacandolim.com/" target="_blank"
                    rel="noopener noreferrer" className="w-6 h-6 flex-shrink-0">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/link-icon.png" 
                      alt="Link" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </a>
              </div>
              <p className="text-black text-base font-normal font-['Geist'] leading-snug">
                Nova Candolim by Sudhanand is a boutique hotel in North Goa, ideally located on Candolim Main Road near Fort Aguada and Baga Beach, with Candolim Beach just a short walk away. Our stylish, air-conditioned rooms offer cozy luxury with modern comforts. Guests can enjoy delicious meals at our pool-view restaurant, unwind at the vibrant outdoor restobar, or relax at our top-floor spa. Perfect for couples, families, or solo travelers, we offer a truly memorable Goan escape.
              </p>
            </div>
          </div>

          {/* Venture 2 */}
          <div className="w-full sm:w-[480px] pt-6 sm:pt-16 border-t border-black flex flex-col items-center sm:items-start gap-8 sm:gap-14">
            <div className="relative w-80 h-16">
              <Image
                src="/hospitality-page2/FOUR SEASONS 2.png"
                alt="Sudhanand Four Seasons in Mysore"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 sm:gap-8 max-w-full">
              <div className="flex justify-between items-center gap-4 w-full">
                <a
                  href="https://sudhanandfourseasons.com/" target="_blank"
                    rel="noopener noreferrer"
                  className="text-slate-500 text-3xl font-normal font-['Geist'] capitalize leading-loose hover:underline flex-1"
                >
                  Sudhanand Four Seasons in Mysore
                </a>
                <a href="https://sudhanandfourseasons.com/" target="_blank"
                    rel="noopener noreferrer" className="w-6 h-6 flex-shrink-0">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/link-icon.png" 
                      alt="Link" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </a>
              </div>
              <p className="text-black text-base font-normal font-['Geist'] leading-snug">
                Sudhanand Four Seasons is a deluxe boutique hotel in Mysore, offering luxury, comfort, and exceptional service. Located near Mysore Palace and Nexus Mall, it&apos;s ideal for both leisure and business travelers. Our stylish rooms provide a serene environment for a peaceful stay. We offer top amenities, including complimentary Wi-Fi, 24/7 room service, and in-house dining, ensuring the highest standards of hospitality for relaxation or exploration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer Section */}
      <div className="relative h-40 sm:h-[625px]">
        <Image
          src="/hospi-div.png"
          alt="Healthcare team"
          fill
          className="object-cover"
        />
      </div>

      <Footer />
    </div>
  );
}