import {
  Cinzel,
  Dancing_Script,
  Great_Vibes,
  Playfair_Display,
  Space_Mono,
} from 'next/font/google';

// next/font needs each call written out as a literal, so no shared options
// object. `preload: false` keeps these off the critical path: the hero asks for
// each one just before it types with it (see TypeWordmark).
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  preload: false,
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  preload: false,
});
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  preload: false,
});
const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  preload: false,
});
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  preload: false,
});

export type WordmarkFont = {
  name: string;
  /** CSS font-family value */
  family: string;
  weight: number;
  /** letter-spacing, em */
  tracking: number;
  /** extra word-spacing, em — script faces draw a very narrow space */
  space: number;
  /** font-size in cqi (% of the hero's content width) on one line (≥640px) */
  md: number;
  /** font-size in cqi when it breaks onto two lines (<640px) */
  sm: number;
  /** Brand font is already on the page; the rest are fetched on demand. */
  external: boolean;
};

/**
 * Sizes come from measuring each font's real advance widths ("Sudhanand Group"
 * and its longer word "Sudhanand", in em) and fitting them to the container:
 *
 *   Archivo is the reference — it fills ~97% of the width on one line.
 *   Script faces have a small x-height, so they are scaled up (×1.2 / ×1.15)
 *   until their lowercase reads about as large; wide faces (Space Mono, Cinzel,
 *   Playfair) are scaled down so they still fit on one line.
 *
 * Listed in the order they type: brand face first, then a calligraphy hand.
 */
export const WORDMARK_FONTS: WordmarkFont[] = [
  { name: 'Archivo', family: 'var(--font-archivo)', weight: 700, tracking: -0.045, space: 0, md: 12.17, sm: 19.2, external: false },
  { name: 'Great Vibes', family: greatVibes.style.fontFamily, weight: 400, tracking: 0, space: 0.3, md: 13.0, sm: 20.0, external: true },
  { name: 'Space Mono', family: spaceMono.style.fontFamily, weight: 700, tracking: -0.03, space: 0, md: 11.12, sm: 18.5, external: true },
  { name: 'Playfair Display', family: playfair.style.fontFamily, weight: 700, tracking: -0.02, space: 0, md: 11.91, sm: 19.1, external: true },
  { name: 'Dancing Script', family: dancing.style.fontFamily, weight: 700, tracking: 0, space: 0.12, md: 14.0, sm: 22.1, external: true },
  { name: 'Cinzel', family: cinzel.style.fontFamily, weight: 700, tracking: 0.01, space: 0, md: 9.44, sm: 15.0, external: true },
];
