import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    // Static export can't optimise on demand, so images are pre-rendered by
    // scripts/optimize-images.mjs. `custom` makes every image go through the
    // loader that components/site/Img.tsx attaches — a bare next/image throws.
    loader: 'custom',
    // Keep in step with WIDTHS in the loader — it rounds up to the nearest
    // pre-rendered width, so a mismatch only costs a duplicate srcset entry.
    deviceSizes: [640, 1080, 1920],
    imageSizes: [256, 384],
  },
};

export default nextConfig;
