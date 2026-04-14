'use client';
import * as React from 'react';

const baseLogoClass =
  'group flex-none flex h-[46px] w-[210px] items-center justify-center text-[rgba(26,16,16,0.55)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#64151F]';

function MaskLogo({ src, width, height }: { src: string; width: number; height: number }) {
  return (
    <span
      className="block bg-current transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: '100%',
        maxHeight: '100%',
        WebkitMaskImage: `url("${src}")`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskImage: `url("${src}")`,
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        maskSize: 'contain',
      }}
      aria-hidden
    />
  );
}

function LogoSet() {
  return (
    <>
      <div className={baseLogoClass}><MaskLogo src="/comfort zone.svg" width={172} height={24} /></div>
      <div className={baseLogoClass}><MaskLogo src="/Guinot logo.svg" width={172} height={42} /></div>
      <div className={baseLogoClass}><MaskLogo src="/Mary Cohr logo.svg" width={172} height={35} /></div>
      <div className={baseLogoClass}><MaskLogo src="/comfort zone.svg" width={172} height={24} /></div>
      <div className={baseLogoClass}><MaskLogo src="/Guinot logo.svg" width={172} height={42} /></div>
      <div className={baseLogoClass}><MaskLogo src="/Mary Cohr logo.svg" width={172} height={35} /></div>
    </>
  );
}

export function LogoCarouselSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const marqueeParallaxRef = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const marquee = marqueeParallaxRef.current;
        if (!section || !marquee) return;

        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = 1 - Math.max(0, Math.min(1, rect.top / vh));
        const y = (1 - progress) * 22;
        marquee.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-[1] bg-[#EFE8DB] mt-0 py-16 max-[767px]:py-12"
      style={{ fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif" }}
    >
      <div
        className={`max-w-[1800px] mx-auto px-16 max-[767px]:px-6 max-[479px]:px-4 sticky top-[86px] max-[991px]:static transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h5
          className="text-center mb-6 max-[767px]:mb-4"
          style={{
            color: '#1A1010',
            fontSize: '12px',
            lineHeight: '14px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Atrinkti prekių ženklai profesionalams
        </h5>

        <div className="max-w-[980px] mx-auto relative overflow-hidden py-4">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-[2] bg-gradient-to-r from-[#EFE8DB] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-[2] bg-gradient-to-l from-[#EFE8DB] to-transparent" />

          <div ref={marqueeParallaxRef} className="will-change-transform">
            <div className="logo-marquee-track flex items-center gap-14 max-[767px]:gap-10">
              <LogoSet />
              <LogoSet />
              <LogoSet />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-marquee-track {
          width: max-content;
          animation: logo-scroll 40s linear infinite;
        }
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}

export default LogoCarouselSection;
