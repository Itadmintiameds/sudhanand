import Image from '@/app/components/site/Img';
import React from 'react';

/**
 * A strip of photos scrolling on a loop, alternating wide and narrow frames.
 * Like ChipRow, the set is rendered twice so the -50% keyframe lands seamlessly.
 */
export default function PhotoMarquee({
  images,
  duration = 50,
}: Readonly<{ images: string[]; duration?: number }>) {
  return (
    <div className="marquee-host">
      <div
        className="marquee"
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-stretch gap-3 pr-3 shrink-0">
            {images.map((src, i) => (
              <span
                key={`${copy}-${src}`}
                className={`relative block rounded-[var(--radius-lg)] overflow-hidden shrink-0 ${
                  i % 2 === 0
                    ? 'w-[56vw] md:w-[22rem] h-[34vw] md:h-[14rem]'
                    : 'w-[38vw] md:w-[14rem] h-[34vw] md:h-[14rem]'
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 56vw, 22rem"
                  className="object-cover"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
