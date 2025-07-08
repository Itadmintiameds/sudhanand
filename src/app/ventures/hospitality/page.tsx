import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Warm Hospitality | Sudhanand Group',
  description: 'Welcome to a world of comfort and care',
};

export default function HospitalityPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative self-stretch h-96 px-10 lg:px-40 pt-12 pb-10 bg-gradient-to-b from-orange-50/0 to-orange-50 inline-flex flex-col justify-end items-start">
        <div className="absolute inset-0 -z-10">
          {<Image src="/hospi-head.png" alt="Technology" fill className="object-cover" priority />}
        </div>
        <div className="self-stretch inline-flex justify-between items-end">
          <div className="inline-flex flex-col justify-start items-start">
            <h1 className="text-slate-500
text-6xl
font-semibold
font-['Geist']
leading-[69.76px]">
              Warm Hospitality
            </h1>
            <p className="justify-start text-black text-2xl md:text-4xl font-medium font-['Geist'] leading-10">
              Welcome to a World of Comfort and Care
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="self-stretch px-10 lg:px-40 py-10 bg-orange-50 inline-flex flex-col justify-start items-center gap-2.5">
        <div className="w-full max-w-[1180px] inline-flex justify-between items-start">
          <div className="w-52 inline-flex flex-col justify-start items-start gap-14">
            <span className="text-slate-500
text-9xl
font-normal
font-['Geist']
leading-[114px]">2+</span>
            <span className="text-blue-950 text-2xl font-normal font-['Geist'] leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">Stays and expanding</span>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-14">
            <span className="text-slate-500
text-9xl
font-normal
font-['Geist']
leading-[114px]">1L+</span>
            <span className="text-blue-950 text-2xl font-normal font-['Geist'] leading-relaxed">Satisfied customers</span>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-14">
            <span className="text-slate-500
text-9xl
font-normal
font-['Geist']
leading-[114px]">80+</span>
            <span className="text-blue-950 text-2xl font-normal font-['Geist'] leading-relaxed">Exceptional Hospitality Team</span>
          </div>
        </div>
      </div>

      {/* Venture Section */}

      <div className="self-stretch px-36 py-40 bg-orange-50 inline-flex flex-col justify-center items-center gap-56">
    <div className="w-[1040px] pb-10 border-b-[0.50px] border-black inline-flex justify-between items-start">
        <div className="w-[480px] pt-8 border-t-[0.50px] border-black flex justify-start items-center gap-64">
            <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start gap-14">
                <img className="w-20 h-24" src="/hospitality-page2/NOVA CANDOLIM BY SUDHANAND 2.png" />
                <div className="self-stretch flex flex-col justify-start items-start gap-8">
                    <div className="self-stretch inline-flex justify-start items-start gap-6">
                        <div className="flex-1 flex justify-start items-end gap-2.5">
                            <div className="w-80 justify-start text-slate-500 text-3xl font-normal font-['Geist'] capitalize leading-loose">Sudhanand Candolim In Goa</div>
                        </div>
                        <div className="w-6 h-6">
                          <img src="/link-icon.png" alt="Link" className="w-full h-full" />
                          </div>
                    </div>
                    <div className="self-stretch justify-start text-black text-base font-normal font-['Geist'] leading-snug">Nova Candolim by Sudhanand is a boutique hotel in North Goa, ideally located on Candolim Main Road near Fort Aguada and Baga Beach, with Candolim Beach just a short walk away. Our stylish, air-conditioned rooms offer cozy luxury with modern comforts. Guests can enjoy delicious meals at our pool-view restaurant, unwind at the vibrant outdoor restobar, or relax at our top-floor spa. Perfect for couples, families, or solo travelers, we offer a truly memorable Goan escape.</div>
                </div>
            </div>
        </div>
        <div className="w-[480px] pt-16 border-t-[0.50px] border-black flex justify-start items-start gap-64">
            <div className="flex-1 inline-flex flex-col justify-center items-start gap-14">
                <img className="w-80 h-16" src="/hospitality-page2/FOUR SEASONS 2.png" />
                <div className="self-stretch flex flex-col justify-start items-start gap-8">
                    <div className="self-stretch inline-flex justify-start items-start gap-6">
                        <div className="flex-1 flex justify-start items-end gap-2.5">
                            <div className="w-80 justify-start text-slate-500 text-3xl font-normal font-['Geist'] capitalize leading-loose">Sudhanand Four Seasons in Mysore</div>
                        </div>
                        <div className="w-6 h-6">
                          <img src="/link-icon.png" alt="Link" className="w-full h-full" />
                          </div>
                    </div>
                    <div className="self-stretch justify-start text-black text-base font-normal font-['Geist'] leading-snug">Sudhanand Four Seasons is a deluxe boutique hotel in Mysore, offering luxury, comfort, and exceptional service. Located near Mysore Palace and Forum Mall, it’s ideal for both leisure and business travelers. Our stylish rooms provide a serene environment for a peaceful stay. We offer top amenities, including complimentary Wi-Fi, 24/7 room service, and in-house dining, ensuring the highest standards of hospitality for relaxation or exploration.</div>
                </div>
            </div>
        </div>
    </div>
</div>

      {/* Spacer Section */}
                  <div className="relative h-[625px]">
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
