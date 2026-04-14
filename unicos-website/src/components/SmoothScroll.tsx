'use client';

import * as React from 'react';
import Lenis from 'lenis';

export function SmoothScroll() {
  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
      autoResize: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    let resizeRaf = 0;
    const scheduleResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => lenis.resize());
    };
    window.addEventListener('load', scheduleResize);
    const ro = new ResizeObserver(() => scheduleResize());
    ro.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(resizeRaf);
      window.removeEventListener('load', scheduleResize);
      ro.disconnect();
      lenis.destroy();
    };
  }, []);

  return null;
}

export default SmoothScroll;
