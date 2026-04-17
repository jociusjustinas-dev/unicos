'use client';

import * as React from 'react';
import { gsap } from 'gsap';

export function Preloader() {
  const [visible, setVisible] = React.useState(false);
  const loaderRef = React.useRef<HTMLDivElement>(null);
  const logoRef = React.useRef<HTMLDivElement>(null);
  const starRef = React.useRef<SVGPathElement>(null);

  React.useEffect(() => {
    const key = 'unicos-preloader-seen';
    const hasSeen = window.sessionStorage.getItem(key) === '1';

    if (hasSeen) {
      window.dispatchEvent(new Event('preloader:done'));
      setVisible(false);
      return;
    }

    window.sessionStorage.setItem(key, '1');
    setVisible(true);
  }, []);

  React.useEffect(() => {
    if (!visible) return;

    const loader = loaderRef.current;
    const logo = logoRef.current;
    const star = starRef.current;
    if (!loader || !logo || !star) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const safetyMs = 6500;
    const safetyId = window.setTimeout(() => {
      document.body.style.overflow = originalOverflow || '';
      setVisible(false);
    }, safetyMs);

    gsap.set(logo, { opacity: 0, scale: 0.95 });
    gsap.set(star, { transformOrigin: '50% 50%' });

    const timeline = gsap.timeline();
    timeline
      .to(logo, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      .to(star, {
        rotate: 360,
        duration: 0.95,
        ease: 'none',
      }, '-=0.1')
      .to(loader, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power3.inOut',
        onComplete: () => {
          clearTimeout(safetyId);
          window.dispatchEvent(new Event('preloader:done'));
          setVisible(false);
          document.body.style.overflow = originalOverflow || '';
        },
      });

    return () => {
      clearTimeout(safetyId);
      timeline.kill();
      document.body.style.overflow = originalOverflow || '';
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-[#3B443A] will-change-transform"
      style={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
    >
      <div ref={logoRef} className="w-[84px] max-[767px]:w-[64px]">
        <svg viewBox="0 0 450 433" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-[#EFE8DB]">
          <path d="M234.566 0C264.289 0.787 293.582 7.24995 320.875 19.041C373.253 41.253 414.472 83.644 435.217 136.634C455.752 190.67 454.543 250.569 431.838 303.731C408.974 355.455 366.384 395.892 313.557 416.048C301.58 421.154 243.614 438.079 234.566 429.778L234.636 427.911C237.976 423.762 248.653 422.807 254.282 421.175C309.008 404.877 337.721 343.71 347.799 291.326C365.894 197.225 355.537 28.646 236.106 6.35596C235.106 6.16896 234.726 1.088 234.566 0Z" fill="currentColor"/>
          <path d="M201.363 0.762566C205.272 0.325566 210.381 -0.557401 213.75 1.0216C214.939 3.9196 214.71 2.39957 214.08 5.77557C209.841 8.48657 192.115 11.1656 181.798 16.0196C148.106 31.8786 125.001 66.5576 112.814 101.027C87.2506 173.339 87.9404 278.593 120.023 348.663C133.999 379.176 158.163 408.289 190.076 419.696C198.763 422.801 205.562 422.615 213.69 425.576C215.02 428.162 214.77 428.586 214.35 431.415C204.902 435.906 156.464 423.104 144.687 419.435C118.893 409.764 99.3077 399.72 77.623 382.212C34.5635 347.331 7.13018 296.769 1.34159 241.651C-11.9552 113.954 74.9537 13.4136 201.363 0.762566Z" fill="currentColor"/>
          <path ref={starRef} d="M226.208 118.563C228.078 119.559 229.197 119.618 229.607 122.044C235.236 155.001 239.135 196.535 274.596 211.294C285.064 215.654 295.471 217.019 306.169 220.756C289.853 226.775 279.865 225.784 263.249 237.838C237.145 256.788 234.186 292.295 229.407 322.131L226.948 322.16C224.729 319.198 224.029 304.724 223.429 300.174C219.52 270.253 207.203 239.087 176.45 228.298C170.302 226.139 161.404 224.977 155.905 222.151L155.355 220.132L156.505 218.528C215.241 208.349 220.559 169.856 226.208 118.563Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
}

export default Preloader;
