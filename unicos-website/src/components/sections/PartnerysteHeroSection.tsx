'use client';

import * as React from 'react';
import { CtaLink } from '@/components/ui/CtaLink';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { usePreloaderEntrance } from '@/hooks/usePreloaderEntrance';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

/** Karuselės kadrai — kartojame tą patį rinkinį kaip `/apie-unicos` hero. */
const MARQUEE_ITEMS = [
  { src: '/mega-menu/1.jpeg', alt: 'Partnerių konsultacija', className: 'w-[620px] max-[767px]:w-[300px]' },
  { src: '/mega-menu/2.jpeg', alt: 'Praktiniai mokymai', className: 'w-[420px] max-[767px]:w-[220px]' },
  { src: '/mega-menu/3.jpeg', alt: 'Komandos darbas', className: 'w-[520px] max-[767px]:w-[250px]' },
  { src: '/mega-menu/4.jpeg', alt: 'Produktų pristatymas', className: 'w-[620px] max-[767px]:w-[300px]' },
] as const;

function MarqueeSet() {
  return (
    <div className="flex flex-none items-stretch gap-4 max-[767px]:gap-3">
      {MARQUEE_ITEMS.map((item) => (
        <div
          key={`${item.src}-${item.alt}`}
          className={`relative h-[420px] overflow-hidden border border-[#1A1010]/12 max-[767px]:h-[260px] ${item.className}`}
          style={{ borderRadius: '0px' }}
        >
          <img src={item.src} alt={item.alt} className="h-full w-full object-cover" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export function PartnerysteHeroSection() {
  const [headlineRef, headlineInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  const [marqueeRef, marqueeInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.05, rootMargin: '0px 0px -2% 0px' });
  const [headlineLoaded, setHeadlineLoaded] = React.useState(false);
  const [marqueeLoaded, setMarqueeLoaded] = React.useState(false);

  const runEntrance = React.useCallback(() => {
    setTimeout(() => setHeadlineLoaded(true), 80);
    setTimeout(() => setMarqueeLoaded(true), 260);
  }, []);

  usePreloaderEntrance(runEntrance, 1500);

  const headlineVisible = headlineLoaded || headlineInView;
  const marqueeVisible = marqueeLoaded || marqueeInView;

  return (
    <section className="relative z-[2] overflow-x-clip bg-[#EFE8DB] pt-44 pb-16 max-[767px]:pt-32 max-[767px]:pb-12">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={headlineRef}
          className="mx-auto mb-14 flex w-full max-w-[912px] flex-col items-center gap-6 text-center max-[767px]:mb-10 max-[767px]:gap-4"
          style={{
            opacity: headlineVisible ? 1 : 0,
            filter: headlineVisible ? 'blur(0px)' : 'blur(12px)',
            transform: headlineVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease-out, filter 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
            <span className="uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
              Partnerystė
            </span>
          </div>

          <h1
            className="m-0 max-w-[16ch] text-[#64151F] tracking-[-0.03em]"
            style={{
              fontFamily: "'Quiche Sans', Georgia, serif",
              fontSize: 'clamp(2.4rem, 5.2vw, 4.6rem)',
              lineHeight: 1.05,
              fontWeight: 300,
            }}
          >
            <span className="font-medium">Augkime </span>
            <span className="font-light">kartu.</span>
          </h1>

          <p className="m-0 max-w-[68ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
            UNICOS partnerystė — tai ne tik produktų tiekimas. Tai asmeninis palaikymas, žinios ir įrankiai,
            padedantys Jūsų verslui klestėti kiekvieną dieną.
          </p>

          <div className="flex w-fit max-w-full flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex flex-col items-center gap-2.5">
              <CtaLink href="/tapkite-partneriu" variant="primary">
                Tapti partneriu
              </CtaLink>
              <span className="px-1 uppercase text-[#1A1010]/62" style={{ ...BODY, fontSize: '10px', letterSpacing: '0.12em', fontWeight: 500 }}>
                Patvirtinimas per 24 val.
              </span>
            </div>

            <div className="flex flex-col items-center gap-2.5">
              <CtaLink href="/kontaktai" variant="outline">
                Gauti konsultaciją
              </CtaLink>
              <span className="px-1 uppercase text-[#1A1010]/62" style={{ ...BODY, fontSize: '10px', letterSpacing: '0.12em', fontWeight: 500 }}>
                15 min. poreikių analizė.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={marqueeRef}
        className="relative z-[2] overflow-hidden"
        style={{
          opacity: marqueeVisible ? 1 : 0,
          filter: marqueeVisible ? 'blur(0px)' : 'blur(12px)',
          transition: 'opacity 0.7s ease-out 120ms, filter 0.7s ease-out 120ms',
        }}
      >
        <div className="partneryste-marquee-track flex w-max items-stretch gap-4 max-[767px]:gap-3">
          <MarqueeSet />
          <MarqueeSet />
          <MarqueeSet />
        </div>
      </div>

      <style jsx>{`
        .partneryste-marquee-track {
          animation: partneryste-marquee 40s linear infinite;
        }
        @keyframes partneryste-marquee {
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

export default PartnerysteHeroSection;
