'use client';

import React, { useEffect, useState } from 'react';
import { FadeIn } from './Reveal';

type Video = {
  id: string;
  title: string;
  channel: string;
  /** Poster resolution — YouTube only generates maxres for some uploads. */
  hq?: boolean;
};

const videos: Video[] = [
  { id: 'zCQITOk6wGk', title: 'Dr. Arjun Sachidanand Shares the Vision Behind CurePlus Hospitals', channel: 'CurePlus Hospitals', hq: true },
  { id: '66hqcMiY02c', title: 'Dr. Madhu Srinivasarangan Reflects on the Legacy of CurePlus Hospitals', channel: 'CurePlus Hospitals' },
  { id: '1-fp_vfKXB0', title: 'A Special Message from Dr. Archana Sachidanand', channel: 'CurePlus Hospitals', hq: true },
  { id: 'agamaXEvYKU', title: 'Dr. Sini Arjun Shares the Journey of CurePlus Hospitals', channel: 'CurePlus Hospitals' },
  { id: '985m3CzDYHs', title: 'Hepatitis B Vaccination Camp at Bylakuppe — CurePlus Kaveri Hospital Community Initiative', channel: 'CurePlus Hospitals' },
  { id: 'kAZfb9AMe7U', title: 'Free Gynecology & General Health Camp — CurePlus Hospital, Udayagiri, Mysuru', channel: 'CurePlus Hospitals' },
  { id: 'hq7e4oWs0HM', title: 'CurePlus Hospitals — Advanced Healthcare Across 18+ Locations in Karnataka', channel: 'CurePlus Hospitals' },
];

const poster = (v: Video) =>
  `https://i.ytimg.com/vi/${v.id}/${v.hq ? 'hqdefault' : 'maxresdefault'}.jpg`;

/**
 * Photos are plain <img>: they are remote YouTube posters, which the site's
 * pre-rendered-WebP image loader (static export) has nothing to do with.
 */
const Poster = ({ video, className = '' }: Readonly<{ video: Video; className?: string }>) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={poster(video)}
    alt=""
    loading="lazy"
    decoding="async"
    className={`absolute inset-0 h-full w-full object-cover ${className}`}
  />
);

/**
 * One large player plus a playlist. The player is click-to-load — the poster
 * and play button stand in until asked, so seven videos cost seven small
 * thumbnails rather than seven embedded players.
 */
export default function VideosSection() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [wide, setWide] = useState(false);
  const current = videos[active];

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const select = (i: number) => {
    setActive(i);
    setPlaying(true);
  };

  return (
    <section
      aria-labelledby="videos-title"
      className="relative mt-4 md:mt-6 mx-[var(--gutter)] rounded-[var(--radius-lg)] bg-ink overflow-hidden on-ink"
    >
      <div className="relative z-[1] px-5 md:px-10 py-8 md:py-10">
        <FadeIn>
          <p className="t-h6 t-h6--rule text-paper/70">Videos</p>
          <h2 id="videos-title" className="t-h2 mt-2 max-w-3xl text-paper">
            Businesses that work for a better tomorrow
          </h2>
          <p className="t-lead mt-3 max-w-2xl text-paper/75">
            Sudhanand Group builds sustainable, impactful ventures that empower
            communities and drive progress for a healthier, smarter future.
          </p>
        </FadeIn>

        {/* minmax(0, 1fr), not the default `auto` track: the playlist rail is
            ~3000px of thumbnails, and an auto column grew to fit it — pushing
            the player and title past the screen edge on phones. */}
        <div className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-4 md:mt-6 md:gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-8">
          {/* Player */}
          <div className="min-w-0">
            <div className="relative aspect-video overflow-hidden rounded-[1.25rem] bg-black">
              {playing ? (
                <iframe
                  key={current.id}
                  src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0`}
                  title={current.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label={`Play video: ${current.title}`}
                  className="group absolute inset-0 block h-full w-full"
                >
                  <Poster
                    video={current}
                    className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red text-white transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
                    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
                      <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
            <h3 className="t-h5 mt-3 text-paper md:mt-4">{current.title}</h3>
            <p className="t-h6 mt-1 text-paper/60">{current.channel}</p>
          </div>

          {/* Playlist — a swipe rail on phones and tablets (bleeding to the
              panel edges so it reads as scrollable), a scrolling list beside
              the player on desktop. */}
          <div className="relative min-w-0">
            <ul
              // Only the desktop list scrolls vertically and needs Lenis out of
              // the way; the sideways rail should leave the page's wheel alone.
              data-lenis-prevent={wide ? true : undefined}
              className="-mx-5 flex snap-x gap-2.5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:-mx-10 md:px-10 [&::-webkit-scrollbar]:hidden lg:absolute lg:inset-0 lg:mx-0 lg:snap-none lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:px-0 lg:pb-0 lg:pr-1 lg:[scrollbar-width:thin]"
            >
              {videos.map((v, i) => {
                const on = i === active;
                return (
                  <li key={v.id} className="w-44 shrink-0 snap-start sm:w-52 lg:w-auto">
                    <button
                      type="button"
                      onClick={() => select(i)}
                      aria-current={on ? 'true' : undefined}
                      className={`flex w-full flex-col gap-2 rounded-[1rem] p-1.5 text-left transition-colors duration-300 lg:flex-row lg:items-center lg:gap-3 lg:p-2 ${
                        on ? 'bg-paper/15' : 'active:bg-paper/10 lg:hover:bg-paper/10'
                      }`}
                    >
                      <span className="relative block aspect-video w-full shrink-0 overflow-hidden rounded-[0.75rem] bg-black lg:w-36">
                        <Poster video={v} />
                        {on && (
                          <span className="absolute inset-0 flex items-center justify-center bg-ink/60 t-h6 text-white">
                            Now playing
                          </span>
                        )}
                      </span>
                      <span className="line-clamp-2 text-[0.8125rem] font-medium leading-snug text-paper/90 lg:line-clamp-3 lg:text-sm">
                        {v.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
