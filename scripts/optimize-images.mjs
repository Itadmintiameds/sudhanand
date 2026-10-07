/**
 * Pre-renders every PNG/JPEG in /public as WebP at each loader width, into
 * public/_img. Runs before `dev` and `build`; incremental, so only new or
 * changed images are processed. See src/lib/image-loader.mjs.
 */

import { mkdir, readdir, stat } from 'node:fs/promises';
import { availableParallelism } from 'node:os';
import path from 'node:path';
import sharp from 'sharp';
import {
  OUT_DIR,
  WIDTHS,
  isOptimisable,
  variantPath,
} from '../src/lib/image-loader.mjs';

const PUBLIC = path.resolve('public');
const QUALITY = 74;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (full !== path.join(PUBLIC, OUT_DIR)) yield* walk(full);
    } else {
      yield full;
    }
  }
}

const mtime = (file) => stat(file).then((s) => s.mtimeMs, () => 0);

async function optimise(file, src) {
  const sourceTime = await mtime(file);
  const targets = WIDTHS.map((w) => ({ w, out: path.join(PUBLIC, variantPath(src, w)) }));
  const stale = [];
  for (const t of targets) if ((await mtime(t.out)) < sourceTime) stale.push(t);
  if (stale.length === 0) return false;

  // Decode once at the largest size, then derive every width from that buffer
  const { data, info } = await sharp(file)
    .rotate()
    .resize({ width: WIDTHS[WIDTHS.length - 1], withoutEnlargement: true })
    .raw()
    .toBuffer({ resolveWithObject: true });

  await mkdir(path.dirname(stale[0].out), { recursive: true });
  await Promise.all(
    stale.map(({ w, out }) =>
      sharp(data, { raw: info })
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 4 })
        .toFile(out)
    )
  );
  return true;
}

const started = performance.now();
const jobs = [];
const seen = new Map();

for await (const file of walk(PUBLIC)) {
  const src = '/' + path.relative(PUBLIC, file).split(path.sep).join('/');
  if (!isOptimisable(src)) continue;

  // Slugging can fold two filenames together — fail loudly rather than serve
  // one image in place of another.
  const key = variantPath(src, WIDTHS[0]).toLowerCase();
  if (seen.has(key)) {
    throw new Error(`"${src}" and "${seen.get(key)}" map to the same output — rename one.`);
  }
  seen.set(key, src);
  jobs.push({ file, src });
}

let done = 0;
let next = 0;
const worker = async () => {
  while (next < jobs.length) {
    const { file, src } = jobs[next++];
    if (await optimise(file, src)) done++;
  }
};
await Promise.all(
  Array.from({ length: Math.max(1, Math.min(4, availableParallelism() - 1)) }, worker)
);

const secs = ((performance.now() - started) / 1000).toFixed(1);
console.log(`[images] ${done} optimised, ${jobs.length - done} up to date (${secs}s)`);
