'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import React, { createContext, useContext, useState } from 'react';
import PageTransition from './PageTransition';
import Preloader from './Preloader';
import RoutePrefetch from './RoutePrefetch';
import SmoothScroll from './SmoothScroll';
import { EnquiryProvider } from './Enquiry';

/**
 * True once the loader has cleared. The hero gates its entrance on this so
 * the first frame isn't spent animating behind the curtain.
 */
const ReadyCtx = createContext(false);
export const useAppReady = () => useContext(ReadyCtx);

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  return (
    // Components use the slim `m` element; `strict` throws if a full `motion`
    // element sneaks back in and drags the whole feature bundle with it.
    <LazyMotion features={domAnimation} strict>
      <ReadyCtx.Provider value={ready}>
        <EnquiryProvider>
          <SmoothScroll />
          <RoutePrefetch />
          <Preloader onDone={() => setReady(true)} />
          <PageTransition>{children}</PageTransition>
        </EnquiryProvider>
      </ReadyCtx.Provider>
    </LazyMotion>
  );
}
