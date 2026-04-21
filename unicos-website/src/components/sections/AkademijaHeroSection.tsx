'use client';

import * as React from 'react';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export function AkademijaHeroSection() {
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

    const onPreloaderDone = () => runRevealOnce();
    window.addEventListener('preloader:done', onPreloaderDone);

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
      window.removeEventListener('preloader:done', onPreloaderDone);
      obs?.disconnect();
      clearRevealTimers();
    };
  }, [runRevealOnce]);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const id = window.setTimeout(() => runRevealOnce(), 2000);
    return () => window.clearTimeout(id);
  }, [runRevealOnce]);

  const reveal = (visible: boolean) =>
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 motion-reduce:opacity-100 motion-reduce:translate-y-0';

  return (
    <section className="relative z-[2] w-full bg-[#EFE8DB] pb-16 text-[#1A1010] max-[767px]:pb-12">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={blockRef}
          className="mx-auto flex max-w-[920px] flex-col items-center pt-44 text-center max-[767px]:pt-32 max-[479px]:pt-28"
        >
          <div className={`transition-all duration-700 ease-out ${reveal(labelVisible)}`}>
            <div className="flex items-center justify-center gap-2">
              <span className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
              <span
                className="uppercase text-[#64151F]"
                style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
              >
                Akademija
              </span>
            </div>
          </div>

          <div className="mt-8 max-w-[min(100%,52rem)] overflow-hidden pb-1 max-[767px]:mt-6">
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
              <span className="font-light">Žinios, kurios </span>
              <span className="font-medium">keičia praktiką.</span>
            </h1>
          </div>

          <p
            className={`m-0 mt-6 max-w-[52ch] text-[#1A1010]/78 transition-all duration-700 ease-out ${reveal(bodyVisible)}`}
            style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}
          >
            Praktiniai seminarai, tarptautiniai lektoriai ir sertifikatai — visa tai vienoje vietoje. Mokytis čia reiškia augti profesionaliai ir užtikrintai.
          </p>

          <div
            className={`mt-10 flex w-full max-w-[520px] flex-col items-stretch gap-8 transition-all duration-700 ease-out max-[479px]:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-start sm:justify-center ${reveal(
              buttonsVisible
            )}`}
          >
            <div className="flex flex-col items-center gap-2.5 sm:items-start">
              <CtaLink href="#mokymu-kalendorius" variant="primary" className="min-w-[240px] justify-center">
                Peržiūrėti artimiausius mokymus
              </CtaLink>
              <span
                className="uppercase text-[#1A1010]/52"
                style={{ fontSize: '10px', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
              >
                Registracija atvira
              </span>
            </div>
            <div className="flex flex-col items-center gap-2.5 sm:items-start">
              <CtaLink href="/tapkite-partneriu" variant="outline" className="min-w-[240px] justify-center">
                Tapti partneriu
              </CtaLink>
              <span
                className="text-center uppercase text-[#1A1010]/52 sm:text-left"
                style={{ fontSize: '10px', lineHeight: '1.1', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
              >
                Partneriams išskirtinės sąlygos.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AkademijaHeroSection;
