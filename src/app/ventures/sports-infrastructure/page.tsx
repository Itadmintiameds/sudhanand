import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Sports Infrastructure | Sudhanand Group',
  description: 'Experience the thrill of the game',
};

export default function SportsInfrastructurePage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative self-stretch h-64 md:h-96 px-5 md:px-10 lg:px-40 pt-12 pb-10 bg-gradient-to-b from-orange-50/0 to-orange-50 inline-flex flex-col justify-end items-start">
        <div className="absolute inset-0 -z-10">
          <Image src="/sports-head.png" alt="Sports Infrastructure" fill className="object-cover" priority />
        </div>
        <div className="self-stretch inline-flex justify-between items-end">
          <div className="inline-flex flex-col justify-start items-start">
            <h1 className="text-slate-500 text-4xl md:text-5xl lg:text-6xl font-semibold font-['Geist'] leading-tight lg:leading-[69.76px]">
              Sports Infrastructure
            </h1>
            <p className="justify-start text-black text-xl md:text-2xl lg:text-4xl font-medium font-['Geist'] leading-tight md:leading-10">
              Experience the Thrill of the Game
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="self-stretch px-5 md:px-10 lg:px-40 py-10 bg-orange-50 inline-flex flex-col justify-start items-center gap-2.5">
        <div className="w-full max-w-[1180px] inline-flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
          <div className="w-full md:w-52 inline-flex flex-col justify-start items-center md:items-start gap-5 md:gap-14">
            <span className="text-slate-500 text-6xl md:text-7xl lg:text-9xl font-normal font-['Geist'] leading-tight lg:leading-[114px]">
              20+
            </span>
            <span className="text-slate-500 text-xl md:text-2xl font-normal font-['Geist'] leading-relaxed text-center md:text-left">
              Sports activities
            </span>
          </div>
          <div className="w-full md:w-auto inline-flex flex-col justify-start items-center md:items-start gap-5 md:gap-14">
            <span className="text-slate-500 text-6xl md:text-7xl lg:text-9xl font-normal font-['Geist'] leading-tight lg:leading-[114px]">
              10m+
            </span>
            <span className="text-slate-500 text-xl md:text-2xl font-normal font-['Geist'] leading-relaxed text-center md:text-left">
              Satisfied customers
            </span>
          </div>
          <div className="w-full md:w-auto inline-flex flex-col justify-start items-center md:items-start gap-5 md:gap-14">
            <span className="text-slate-500 text-6xl md:text-7xl lg:text-9xl font-normal font-['Geist'] leading-tight lg:leading-[114px]">
              80+
            </span>
            <span className="text-slate-500 text-xl md:text-2xl font-normal font-['Geist'] leading-relaxed text-center md:text-left">
              Expert sport trainers
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-5 md:px-10 lg:px-36 pt-20 md:pt-40 pb-20 md:pb-56 bg-orange-50 inline-flex flex-col justify-center items-center gap-10 md:gap-56">
        <div className="w-full max-w-[980px] lg:max-w-[1180px] border-b-[0.50px] border-black flex flex-col justify-start items-start gap-5 md:gap-9">
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="self-stretch py-8 md:py-12 border-t-[0.50px] border-black inline-flex flex-col md:flex-row justify-start items-start gap-6">
              <div className="inline-flex flex-col justify-center items-center gap-4 md:gap-6">
                <Image
                  src="/sports-page/ARC 1.png"
                  alt="ARC Sportzone"
                  width={288}
                  height={320}
                  className="w-full max-w-[300px] md:w-72 h-auto md:h-80"
                />
                <div className="inline-flex justify-start items-center gap-3 md:gap-5">
                  <a
                    href="https://www.arcsportzone.com/"
                    className="justify-start text-slate-500 text-3xl md:text-4xl lg:text-6xl font-normal font-['Geist'] capitalize leading-tight md:leading-[53.20px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ARC Sportzone
                  </a>
                  <a
                    href="https://www.arcsportzone.com/"
                    className="w-5 h-5 md:w-6 md:h-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/link-icon.png"
                      alt="Link to ARC Sportzone"
                      width={24}
                      height={24}
                      className="w-full h-full"
                    />
                  </a>
                </div>
              </div>
              <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start gap-5 md:gap-14">
                <div className="self-stretch justify-start text-black text-sm md:text-base lg:text-lg font-medium font-['Geist'] leading-normal">
                  ARC SportZone is Mysore’s premier destination for sports, fitness, and community. More than just a sports club, we offer world-class facilities for basketball, football, badminton, tennis, cricket, and more. With expert coaches and programs focused on skill development, teamwork, endurance, and sportsmanship, we cater to all ages and skill levels. Recognized as the best in Mysore, ARC SportZone is where goals are set, friendships are made, and victories are celebrated.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer Section */}
      <div className="relative h-64 md:h-[625px]">
        <Image
          src="/sports-div.png"
          alt="Sports team"
          fill
          className="object-cover"
        />
      </div>

      <Footer />
    </div>
  );
}
