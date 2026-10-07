'use client';

import { useEffect, useState, type RefObject } from 'react';

/**
 * True while the element's content is wider than the element — i.e. while it
 * actually scrolls sideways. Re-checks whenever the element is resized (window
 * resize, rotation) or its cards change size, so a slider's arrows can appear
 * only when there is something to scroll to.
 *
 * Starts false, so server HTML and the first paint carry no arrows; on a
 * narrow screen they fade in a moment after mount.
 */
export function useOverflowX(ref: RefObject<HTMLElement | null>) {
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // The 1px slack absorbs sub-pixel rounding at fractional zoom levels
    const check = () => setOverflowing(el.scrollWidth > el.clientWidth + 1);
    check();

    const ro = new ResizeObserver(check);
    ro.observe(el);
    // Cards size themselves (images, wrapping text), which changes scrollWidth
    // without resizing the rail itself
    for (const child of Array.from(el.children)) ro.observe(child);

    return () => ro.disconnect();
  }, [ref]);

  return overflowing;
}
