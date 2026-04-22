'use client';

import * as React from 'react';
import { CtaLink } from '@/components/ui/CtaLink';
import { usePreloaderEntrance } from '@/hooks/usePreloaderEntrance';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export function PrekiuZenklaiHeroSection() {
  const blockRef = React.useRef<HTMLDivElement>(null);
  const revealTimersRef = React.useRef<number[]>([]);
  const revealedRef = React.useRef(false);

  const [labelVisible, setLabelVisible] = React.useState(false);
  const [headingVisible, setHeadingVisible] = React.useState(false);
  const [bodyVisible, setBodyVisible] = React.useState(false);
  const [buttonsVisible, setButtonsVisible] = React.useState(false);

  const runRevealOnce = React.useCallback(() => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    const timers = revealTimersRef.current;
    setLabelVisible(true);
    timers.push(window.setTimeout(() => setHeadingVisible(true), 90));
    timers.push(window.setTimeout(() => setBodyVisible(true), 180));
    timers.push(window.setTimeout(() => setButtonsVisible(true), 280));
  }, []);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLabelVisible(true);
      setHeadingVisible(true);
      setBodyVisible(true);
      setButtonsVisible(true);
      return;
    }

    const clearRevealTimers = () => {
      revealTimersRef.current.forEach((id) => window.clearTimeout(id));
      revealTimersRef.current = [];
    };

    const el = blockRef.current;
    let obs: IntersectionObserver | null = null;
    if (el) {
      obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            runRevealOnce();
            obs?.disconnect();
          }
        },
        { threshold: 0, rootMargin: '0px 0px 0px 0px' }
      );
      obs.observe(el);
    }

    return () => {
      obs?.disconnect();
      clearRevealTimers();
    };
  }, [runRevealOnce]);

  usePreloaderEntrance(runRevealOnce, 2000);

  const reveal = (visible: boolean) =>
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 motion-reduce:opacity-100 motion-reduce:translate-y-0';

  return (
    <section className="relative z-[2] w-full bg-[#EFE8DB] pb-16 text-[#1A1010] max-[767px]:pb-12">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        {/**
         * Dviejų stulpelių išdėstymas desktop'e: kairėje — eyebrow + H1 + aprašymas;
         * dešinėje — du CTA su `justify-between` (aukščiu tempiasi kartu su tekstu).
         * Mobile / tablet — stack, kairinis lygiavimas.
         */}
        <div
          ref={blockRef}
          className="grid grid-cols-1 gap-12 pt-44 max-[767px]:pt-32 max-[479px]:pt-28 min-[768px]:grid-cols-[minmax(0,1fr)_auto] min-[768px]:items-stretch min-[768px]:gap-x-12 min-[992px]:gap-x-16"
        >
          {/* LEFT: eyebrow + heading + paragraph */}
          <div className="flex max-w-[760px] flex-col text-left">
            <div className={`transition-all duration-700 ease-out ${reveal(labelVisible)}`}>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
                <span
                  className="uppercase text-[#64151F]"
                  style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
                >
                  Prekių ženklai
                </span>
              </div>
            </div>

            <div className="mt-8 overflow-hidden pb-1 max-[767px]:mt-6">
              <h1
                className={`m-0 text-[#64151F] transition-all duration-700 ease-out motion-reduce:translate-y-0 ${
                  headingVisible ? 'translate-y-0' : 'translate-y-[110%]'
                }`}
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                  lineHeight: 1.05,
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                }}
              >
                <span className="font-light">Tik tai, kuo </span>
                <span className="font-medium">patys tikime.</span>
              </h1>
            </div>

            <p
              className={`m-0 mt-6 max-w-[52ch] text-[#1A1010]/78 transition-all duration-700 ease-out ${reveal(bodyVisible)}`}
              style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}
            >
              Profesionalūs kosmetikos prekių ženklai, oficialiai atstovaujami Lietuvoje. Guinot, Neostrata, Fillmed, Anna
              Lotan ir kiti — su mokymais, protokolais ir asmeniniu palaikymu.
            </p>
          </div>

          {/* RIGHT: dviejų CTA blokų stulpelis su `justify-between`. */}
          <div
            className={`flex w-full max-w-[280px] flex-col gap-8 transition-all duration-700 ease-out max-[767px]:mt-2 min-[768px]:max-w-[260px] min-[768px]:justify-between min-[768px]:gap-4 ${reveal(
              buttonsVisible
            )}`}
          >
            <div className="flex flex-col items-start gap-2.5">
              <CtaLink href="/tapkite-partneriu" variant="primary" className="w-full min-w-[240px] justify-center">
                Tapti partneriu
              </CtaLink>
              <span
                className="uppercase text-[#1A1010]/52"
                style={{ fontSize: '10px', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
              >
                Patvirtinimas per 24 val.
              </span>
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <CtaLink href="/kontaktai" variant="outline" className="w-full min-w-[240px] justify-center">
                Gauti konsultaciją
              </CtaLink>
              <span
                className="uppercase text-[#1A1010]/52"
                style={{ fontSize: '10px', lineHeight: '1.1', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
              >
                Padėsime išsirinkti.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrekiuZenklaiHeroSection;
