'use client';

import * as React from 'react';

function MarqueeSep() {
  return (
    <span
      className="h-3 w-3 shrink-0 rounded-full bg-[#64151F]/35 max-[767px]:h-2.5 max-[767px]:w-2.5"
      aria-hidden
    />
  );
}

function MarqueeUnit() {
  const itemClass =
    'whitespace-nowrap font-light tracking-[-0.035em] leading-[1.05] text-[clamp(2.25rem,6.5vw,4.5rem)] text-[#64151F]';
  const font = { fontFamily: "'Quiche Sans', Georgia, serif" };

  return (
    <div className="flex items-center gap-10 md:gap-14 lg:gap-16 flex-none text-[#64151F] pr-10 md:pr-16">
      <span className={itemClass} style={font}>
        500+ partnerių
      </span>
      <MarqueeSep />
      <span className={itemClass} style={font}>
        12 prekių ženklų
      </span>
      <MarqueeSep />
      <span className={itemClass} style={font}>
        25+ m. patirties
      </span>
      <MarqueeSep />
    </div>
  );
}

export function IntroTextSection() {
  return (
    <div className="bg-[#EFE8DB]">
      <section className="relative z-[2] bg-[#EFE8DB] pt-16 pb-20 max-[767px]:pt-12 max-[767px]:pb-14 md:pt-20 overflow-hidden">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-[2] bg-gradient-to-r from-[#EFE8DB] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-[2] bg-gradient-to-l from-[#EFE8DB] to-transparent" />

          <div className="intro-marquee-track flex w-max items-center py-8 max-[767px]:py-7">
            <MarqueeUnit />
            <MarqueeUnit />
            <MarqueeUnit />
          </div>
        </div>
      </section>

      <style jsx>{`
        .intro-marquee-track {
          width: max-content;
          animation: intro-marquee 42s linear infinite;
        }
        .intro-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes intro-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
      `}</style>
    </div>
  );
}

export default IntroTextSection;
