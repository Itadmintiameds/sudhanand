'use client';

import Image, { type ImageProps } from 'next/image';
import imageLoader from '@/lib/image-loader.mjs';

/**
 * next/image with the pre-rendered WebP loader attached. Use this instead of
 * importing next/image directly — `images.loader: 'custom'` makes a bare
 * next/image throw rather than silently ship the full-size original.
 *
 * The loader is passed as a prop rather than via `images.loaderFile` because
 * Turbopack's dev server ignores loaderFile when rendering on the server.
 */
export default function Img(props: ImageProps) {
  // eslint-disable-next-line jsx-a11y/alt-text -- alt is required by ImageProps and forwarded
  return <Image loader={imageLoader} {...props} />;
}
