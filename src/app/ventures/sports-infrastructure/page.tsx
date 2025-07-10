import { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sports Infrastructure | Sudhanand Group',
  description: 'Experience the thrill of the game',
};

export default function SportsInfrastructurePage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative self-stretch h-96 px-10 lg:px-40 pt-12 pb-10 bg-gradient-to-b from-orange-50/0 to-orange-50 inline-flex flex-col justify-end items-start">
        <div className="absolute inset-0 -z-10">
          {<Image src="/sports-head.png" alt="Sports Infrastructure" fill className="object-cover" priority />}
        </div>
        <div className="self-stretch inline-flex justify-between items-end">
          <div className="inline-flex flex-col justify-start items-start">
            <h1 className="text-slate-500
text-6xl
font-semibold
font-['Geist']
leading-[69.76px]">
              Sports Infrastructure
            </h1>
            <p className="justify-start text-black text-2xl md:text-4xl font-medium font-['Geist'] leading-10">
              Experience the Thrill of the Game
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
leading-[114px]">20+</span>
            <span className="text-slate-500
text-2xl
font-normal
font-['Geist']
leading-relaxed">Sports activities</span>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-14">
            <span className="text-slate-500
text-9xl
font-normal
font-['Geist']
leading-[114px]">10m+</span>
            <span className="text-slate-500
text-2xl
font-normal
font-['Geist']
leading-relaxed">Satisfied customers</span>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-14">
            <span className="text-slate-500
text-9xl
font-normal
font-['Geist']
leading-[114px]">80+</span>
            <span className="text-slate-500
text-2xl
font-normal
font-['Geist']
leading-relaxed">Expert sport trainers</span>
          </div>
        </div>
      </div>

      <div className="self-stretch px-36 pt-40 pb-56 bg-orange-50 inline-flex flex-col justify-center items-center gap-56">
        <div className="w-[980px] max-w-[1180px] border-b-[0.50px] border-black flex flex-col justify-start items-start gap-9">
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="self-stretch py-12 border-t-[0.50px] border-black inline-flex justify-start items-start gap-6">
              <div className="inline-flex flex-col justify-center items-center gap-6">
                <img className="w-72 h-80" src="/sports-page/ARC 1.png" />
                <div className="inline-flex justify-start items-center gap-5">
                  <a 
                    href="https://www.arcsportzone.com/" 
                    className="justify-start text-slate-500 text-6xl font-normal font-['Geist'] capitalize leading-[53.20px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ARC Sportzone
                  </a>
                  <a 
                    href="https://www.arcsportzone.com/" 
                    className="w-6 h-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/link-icon.png" alt="Link to ARC Sportzone" className="w-full h-full" />
                  </a>
                </div>
              </div>
              <div className="flex-1 self-stretch inline-flex flex-col justify-center items-start gap-14">
                <div className="self-stretch justify-start text-black text-lg font-medium font-['Geist'] leading-normal">
                  ARC SportZone is Mysore's premier destination for sports, fitness, and community. More than just a sports club, we offer world-class facilities for basketball, football, badminton, tennis, cricket, and more. With expert coaches and programs focused on skill development, teamwork, endurance, and sportsmanship, we cater to all ages and skill levels. Recognized as the best in Mysore, ARC SportZone is where goals are set, friendships are made, and victories are celebrated.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer Section */}
            <div className="relative h-[625px]">
              <Image
                src="/sports-div.png"
                alt="Healthcare team"
                fill
                className="object-cover"
              />
            </div>

      <Footer />
    </div>
  );
}
