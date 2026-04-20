'use client';

import * as React from 'react';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const HERO_VIDEO_POSTER =
  'https://cdn.prod.website-files.com/68ad5d7e748bdec61171c8d9%2F68b008bdf61a798d3721c7db_Footer-poster-00001.jpg';
const HERO_VIDEO_MP4 =
  'https://cdn.prod.website-files.com/68ad5d7e748bdec61171c8d9%2F68b008bdf61a798d3721c7db_Footer-transcode.mp4';
const HERO_VIDEO_WEBM =
  'https://cdn.prod.website-files.com/68ad5d7e748bdec61171c8d9%2F68b008bdf61a798d3721c7db_Footer-transcode.webm';

export function PrekiuZenklaiHeroSection() {
  const blockRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const [labelVisible, setLabelVisible] = React.useState(false);
  const [headingVisible, setHeadingVisible] = React.useState(false);
  const [bodyVisible, setBodyVisible] = React.useState(false);
  const [buttonsVisible, setButtonsVisible] = React.useState(false);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const applyRate = () => {
      video.playbackRate = 0.5;
    };
    applyRate();
    video.addEventListener('loadedmetadata', applyRate);
    return () => video.removeEventListener('loadedmetadata', applyRate);
  }, []);

  React.useEffect(() => {
    const el = blockRef.current;
    if (!el) return;
    const timers: number[] = [];
    const clearTimers = () => {
      timers.forEach((id) => window.clearTimeout(id));
    };

    const runReveal = () => {
      setLabelVisible(true);
      timers.push(window.setTimeout(() => setHeadingVisible(true), 90));
      timers.push(window.setTimeout(() => setBodyVisible(true), 180));
      timers.push(window.setTimeout(() => setButtonsVisible(true), 280));
    };

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLabelVisible(true);
      setHeadingVisible(true);
      setBodyVisible(true);
      setButtonsVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runReveal();
          obs.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    );
    obs.observe(el);
    return () => {
      clearTimers();
      obs.disconnect();
    };
  }, []);

  const reveal = (visible: boolean) =>
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 motion-reduce:opacity-100 motion-reduce:translate-y-0';

  return (
    <section className="relative z-[2] w-full bg-[#1A1010] pb-0 text-[#EFE8DB]">
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div
          ref={blockRef}
          className="mx-auto flex max-w-[920px] flex-col items-center pb-16 pt-32 text-center max-[767px]:pb-12 max-[767px]:pt-28 max-[479px]:pb-10 max-[479px]:pt-24"
        >
          <div className={`transition-all duration-700 ease-out ${reveal(labelVisible)}`}>
            <div
              className="inline-flex border border-[#EFE8DB]/22 px-4 py-1.5"
              style={{ borderRadius: '100vw' }}
            >
              <span
                className="uppercase text-[#EFE8DB]/88"
                style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
              >
                Prekių ženklai
              </span>
            </div>
          </div>

          <div className="mt-8 max-w-[min(100%,52rem)] overflow-hidden pb-1 max-[767px]:mt-6">
            <h1
              className={`m-0 text-[#EFE8DB] transition-all duration-700 ease-out motion-reduce:translate-y-0 ${
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
            className={`m-0 mt-6 max-w-[52ch] text-[#EFE8DB]/78 transition-all duration-700 ease-out ${reveal(bodyVisible)}`}
            style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}
          >
            Profesionalūs kosmetikos prekių ženklai, oficialiai atstovaujami Lietuvoje. Guinot, Neostrata, Fillmed, Anna
            Lotan ir kiti — su mokymais, protokolais ir asmeniniu palaikymu.
          </p>

          <div
            className={`mt-10 flex w-full max-w-[520px] flex-col items-stretch gap-8 transition-all duration-700 ease-out max-[479px]:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-start sm:justify-center ${reveal(
              buttonsVisible
            )}`}
          >
            <div className="flex flex-col items-center gap-2.5 sm:items-start">
              <CtaLink href="/tapkite-partneriu" variant="primary" className="min-w-[240px] justify-center">
                Tapti partneriu
              </CtaLink>
              <span
                className="uppercase text-[#EFE8DB]/45"
                style={{ fontSize: '10px', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
              >
                Patvirtinimas per 24 val.
              </span>
            </div>
            <div className="flex flex-col items-center gap-2.5 sm:items-start">
              <CtaLink href="/kontaktai" variant="glass" className="min-w-[240px] justify-center">
                Gauti konsultaciją
              </CtaLink>
              <span
                className="text-center uppercase text-[#EFE8DB]/45 sm:text-left"
                style={{ fontSize: '10px', lineHeight: '1.1', letterSpacing: '0.12em', ...BODY, fontWeight: 500 }}
              >
                Padėsime išsirinkti.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[1] w-full px-4 pb-0 pt-2 max-[479px]:px-3 sm:px-6 lg:px-10">
        <div
          className="relative mx-auto w-full max-w-[1800px] overflow-hidden shadow-[0_-24px_48px_rgba(26,16,16,0.35)]"
          style={{ borderRadius: 'clamp(12px, 2vw, 20px) clamp(12px, 2vw, 20px) 0 0' }}
        >
          <div className="relative aspect-[21/9] min-h-[200px] w-full max-[991px]:aspect-video max-[479px]:min-h-[180px]">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              style={{ backgroundImage: `url("${HERO_VIDEO_POSTER}")` }}
            >
              <source src={HERO_VIDEO_MP4} type="video/mp4" />
              <source src={HERO_VIDEO_WEBM} type="video/webm" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-[#1A1010]/20" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrekiuZenklaiHeroSection;
