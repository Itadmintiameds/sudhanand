'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Job Type definition
type Job = {
  id: number;
  title: string;
  location: string;
  exp: string;
  category: string;
  applyUrl: string;
  description?: string;
  onsite?: boolean;
  fullTime?: boolean;
};

// Data for the new "Diverse Industries" section
const industries = [
  { name: 'Healthcare', image: '/career/Rectangle 61 (1).png' },
  { name: 'Pharma', image: '/career/Rectangle 62 (1).png' },
  { name: 'Hospitality', image: '/career/Rectangle 64 (1).png' },
  { name: 'Technology', image: '/career/Rectangle 65 (1).png' },
  { name: 'Sports', image: '/career/Rectangle 63 (1).png' },
];

function parseJobsFromCSV(csvText: string): Job[] {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map(h => h.trim());
  const jobs: Job[] = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    const values = lines[i].split(',');
    
    // Corrected line: Replaced 'any' with a specific index signature type
    const jobObject: { [key: string]: string | number | boolean } = {};
    
    headers.forEach((header, index) => {
      const value = values[index] ? values[index].trim() : '';
      if (header === 'id') {
        jobObject[header] = parseInt(value, 10);
      } else if (header === 'onsite' || header === 'fullTime') {
        jobObject[header] = value.toLowerCase() === 'true';
      } else {
        jobObject[header] = value;
      }
    });
    
    if (jobObject.id && jobObject.title) {
      jobs.push(jobObject as Job);
    }
  }
  return jobs;
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('View all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-LW4hTDmhoBa_90tdx8HkGIsiZQc7_NSDBJm_CEKL2WdIxgEiERzDzdFCmJK6Drpp8LXEFdRgg_Ef/pub?gid=0&single=true&output=csv';
    const fetchJobs = async () => {
      try {
        const res = await fetch(sheetURL);
        const csvText = await res.text();
        const parsedJobs = parseJobsFromCSV(csvText);
        setJobs(parsedJobs);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const categories = ['View all', ...Array.from(new Set(jobs.map((j) => j.category)))];
  const filteredJobs =
    selectedCategory === 'View all' ? jobs : jobs.filter((job) => job.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] lg:h-[750px] bg-gradient-to-b from-orange-50/0 to-orange-50">
        <div className="absolute inset-0 z-0">
          <Image src="/career/Header section.png" alt="Careers Hero Background" fill className="object-cover opacity-30" quality={80} priority />
        </div>
        <div className="relative z-10 h-full p-8 md:p-16 lg:px-20 lg:pb-16 flex flex-col justify-end">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h1 className="text-slate-500 text-7xl lg:text-9xl font-normal font-['Geist'] leading-none">
              Join Us
            </h1>
            <p className="text-zinc-700 text-lg font-medium font-['Geist'] leading-normal max-w-md">
              Build your career with one of India’s fastest-growing, diversified groups across healthcare, hospitality, sports, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* --- NEW "Be Part Of Diverse Industries" Section --- */}
      <section className="w-full px-4 md:px-20 py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-8">
            Be Part Of Diverse Industries
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="relative h-96 rounded-lg overflow-hidden group">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white text-xl font-semibold">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Jobs Section */}
      <section className="w-full px-4 md:px-20 py-12 md:py-16 bg-orange-50">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-2">Open Positions</h2>
        <p className="text-zinc-600 text-base md:text-lg max-w-3xl mb-8">
          We are always seeking passionate individuals to grow alongside us across multiple domains.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`rounded-full px-5 py-2 text-sm md:text-base border transition-colors duration-200 font-medium ${selectedCategory === category ? 'bg-orange-500 text-white border-orange-500 shadow-md' : 'bg-white text-gray-700 border-gray-300 hover:bg-orange-100 hover:border-orange-200'}`} aria-pressed={selectedCategory === category}>
              {category}
            </button>
          ))}
        </div>

        {/* Job Cards Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="h-12 w-12 border-4 border-orange-300 border-t-orange-500 animate-spin rounded-full" />
          </div>
        ) : filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-neutral-900">{job.title}</h3>
                    <span className="flex-shrink-0 text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">{job.category}</span>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">{job.exp ?? ''}</p>
                  <p className="mt-1 text-gray-500 text-sm">{job.location ?? ''}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {job.onsite && <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md font-medium">Onsite</span>}
                    {job.fullTime && <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md font-medium">Full-time</span>}
                  </div>
                </div>
                <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="mt-6 self-start rounded-lg bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 text-sm font-medium transition-colors duration-200 inline-block text-center">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 px-6 text-center bg-white rounded-xl border border-gray-200">
            <svg className="mx-auto w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" /></svg>
            <h4 className="text-lg font-semibold text-gray-900">No Open Positions</h4>
            <p className="text-gray-600 mt-2">There are currently no open positions in this category. Please check back later.</p>
          </div>
        )}
      </section>

      {/* Scrolling Image Section */}
      <section className="w-full bg-orange-50 overflow-hidden py-8">
        <div className="relative w-full overflow-hidden">
          <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .scrolling-wrapper { display: flex; width: max-content; animation: scroll 30s linear infinite; } @media (max-width: 640px) { .scrolling-wrapper { animation-duration: 100s; } .image-set { gap: 8px; padding: 0 4px; } .mobile-large-img { width: 160px; height: 160px; } .mobile-img-column { width: 160px; gap: 8px; } .mobile-small-img { width: 160px; height: 76px; } }`}</style>
          <div className="scrolling-wrapper">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="image-set flex items-start gap-4 mx-2">
                <div className="mobile-large-img w-[640px] h-[625px] relative"><Image src="/career/Rectangle 52 (1).png" alt="Hospital facility" fill className="object-cover"/></div>
                <div className="mobile-img-column flex flex-col gap-4"><div className="mobile-small-img w-[630px] h-[308px] relative"><Image src="/career/Rectangle 54 (1).png" alt="Medical team" fill className="object-cover"/></div><div className="mobile-small-img w-[630px] h-[308px] relative"><Image src="/career/Rectangle 55 (2).png" alt="Patient care" fill className="object-cover"/></div></div>
                <div className="mobile-large-img w-[361px] h-[625px] relative"><Image src="/career/Rectangle 57.png" alt="Hospital building" fill className="object-cover"/></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
