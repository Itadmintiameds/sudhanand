'use client';

import React from 'react';

// Mostly white and cool/warm greys, with one deep-blue chip in eight for rhythm.
// (This used to cycle blue, red, yellow, pink, green and lilac — a rainbow.)
const TONES = [
  'chip--paper',
  'chip--sky',
  'chip--paper',
  'chip--bone',
  'chip--paper',
  'chip--steel',
  'chip--paper',
  'chip--blue',
];

/**
 * A row of colour-blocked pills scrolling on a loop. The collection is
 * duplicated once so the -50% keyframe lands seamlessly. Pass `tones` to
 * leave out a chip colour that matches the panel the row sits on.
 */
export function ChipRow({
  items,
  reverse = false,
  duration = 44,
  offset = 0,
  tones = TONES,
}: Readonly<{
  items: string[];
  reverse?: boolean;
  duration?: number;
  offset?: number;
  tones?: string[];
}>) {
  return (
    <div className="marquee-host">
      <div
        className={`marquee ${reverse ? 'marquee--reverse' : ''}`}
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-3 pr-3 shrink-0">
            {items.map((item, i) => (
              <span
                key={`${copy}-${item}`}
                className={`chip ${tones[(i + offset) % tones.length]}`}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Two rows travelling in opposite directions. */
export default function ChipMarquee({
  rowOne,
  rowTwo,
  className = '',
}: Readonly<{
  rowOne: string[];
  rowTwo: string[];
  className?: string;
}>) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <ChipRow items={rowOne} duration={46} />
      <ChipRow items={rowTwo} reverse duration={52} offset={2} />
    </div>
  );
}
