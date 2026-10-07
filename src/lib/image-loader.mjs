/**
 * next/image loader for the static export.
 *
 * `output: 'export'` rules out Next's on-demand image optimiser, so
 * scripts/optimize-images.mjs pre-renders every PNG/JPEG in /public as WebP at
 * each of WIDTHS (into public/_img), and this loader points each srcset entry
 * at the nearest pre-rendered file. Anything else (SVG, external URLs) is
 * served untouched.
 *
 * Plain .mjs so the Node build script can import the same path logic.
 */

export const WIDTHS = [256, 384, 640, 1080, 1920];
export const OUT_DIR = '_img';

const RASTER = /\.(png|jpe?g)$/i;

export const isOptimisable = (src) =>
  src.startsWith('/') && !src.startsWith('//') && RASTER.test(src);

// A plain scan: /^-+|-+$/ backtracks quadratically on a long run of dashes
const trimDashes = (s) => {
  let start = 0;
  let end = s.length;
  while (start < end && s[start] === '-') start++;
  while (end > start && s[end - 1] === '-') end--;
  return s.slice(start, end);
};

/** '/career/Rectangle 52 (1).png', 640 → '/_img/career/Rectangle-52-1-png-640.webp' */
export const variantPath = (src, width) => {
  const w = WIDTHS.find((x) => x >= width) ?? WIDTHS.at(-1);
  // The extension stays in the slug so foo.png and foo.jpg can't collide
  const slug = src
    .split('/')
    .map((seg) => trimDashes(seg.replace(/[^A-Za-z0-9_-]+/g, '-')))
    .join('/');
  return `/${OUT_DIR}${slug}-${w}.webp`;
};

export default function imageLoader({ src, width }) {
  return isOptimisable(src) ? variantPath(src, width) : src;
}
