/**
 * Cuts each page-hero photo down to its subject and writes it to public/hero.
 *
 * The originals were exported with a pale cream fade baked into their bottom
 * quarter and a lot of empty ground around the subject (blinds above the
 * people, a building above the crowd). Showing them as-is, in a wide shallow
 * panel, leaves either that haze or the wrong part of the picture on screen.
 * So each photo is cropped here to the band that holds the subject and stops
 * above the fade. The originals are left untouched.
 *
 * Re-run after changing a crop:  node scripts/crop-heroes.mjs
 * (`npm run dev` / `build` pick the new files up through the image optimiser.)
 *
 * `top` / `bottom` are fractions of the source height. The full width is
 * always kept — the panel is far wider than tall, so the crop's job is to
 * choose the vertical band; sideways framing is set per page with the
 * `position` prop (see PageHero).
 */

import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC = path.resolve('public');
const OUT = path.join(PUBLIC, 'hero');
const WIDTH = 1920; // the largest width the image loader serves

const HEROES = [
  // Three people talking by a window — heads start ~42%, the fade starts ~70%
  { out: 'partners', src: 'partnerhead.png', top: 0.34, bottom: 0.72 },
  // The stack of hands, notebook and laptop — all between ~25% and ~65%
  { out: 'careers', src: 'career/Header section.png', top: 0.24, bottom: 0.66 },
  // The team photo — heads start ~36%, legs fade out from ~70%; skips the wall above
  { out: 'about', src: 'about-head.png', top: 0.3, bottom: 0.7 },
  // Meeting room with the yellow chairs, down to where the fade begins
  { out: 'ventures', src: 'venture.png', top: 0, bottom: 0.68 },
  { out: 'technology', src: 'tech-head.png', top: 0, bottom: 0.72 },
  { out: 'healthcare', src: 'healthhead.png', top: 0, bottom: 0.76 },
  // Place settings on the long table
  { out: 'hospitality', src: 'hospi-head.png', top: 0, bottom: 0.66 },
  // Track lanes, from just under the white haze at the horizon
  { out: 'sports', src: 'sports-head.png', top: 0.1, bottom: 0.72 },
  // Two hands reaching, with the bangle above them
  { out: 'charitable-trust', src: 'trust-header.png', top: 0.08, bottom: 0.74 },
  // The facade with the sign and logo; this one has no fade, just a dark base
  { out: 'real-estate', src: 'real-estate/hero.jpg', top: 0.12, bottom: 0.6 },
];

await mkdir(OUT, { recursive: true });

async function cropHero(h) {
  const file = path.join(PUBLIC, h.src);
  const { width, height } = await sharp(file).metadata();
  const top = Math.round(height * h.top);
  const crop = { left: 0, top, width, height: Math.round(height * h.bottom) - top };

  const dest = path.join(OUT, `${h.out}.jpg`);
  await sharp(file)
    .flatten({ background: '#ffffff' }) // some sources carry an (unused) alpha channel
    .extract(crop)
    .resize({ width: Math.min(WIDTH, width), withoutEnlargement: true })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(dest);

  const m = await sharp(dest).metadata();
  return `[hero] ${h.out.padEnd(17)} ${m.width}×${m.height}  (aspect ${(m.width / m.height).toFixed(2)})`;
}

// Independent files, so crop them side by side; report in list order
const report = await Promise.all(HEROES.map(cropHero));
console.log(report.join('\n'));
