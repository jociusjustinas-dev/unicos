'use client';

import * as React from 'react';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export type BrandStatsMarqueeItem = {
  value: string;
  /** Tuščia — rodomas tik `value` kaip pagrindinė antraštė (pvz. „Nr. 1“). */
  label?: string;
  description: string;
};

function MarqueeSep() {
  return (
    <span
      className="h-3 w-3 shrink-0 rounded-full max-[767px]:h-2.5 max-[767px]:w-2.5 bg-[#3B443A]/55"
      aria-hidden
    />
  );
}

function MarqueeUnit({ items }: { items: readonly BrandStatsMarqueeItem[] }) {
  const quiche = { fontFamily: "'Quiche Sans', Georgia, serif" };

  return (
    <div className="flex flex-none items-center gap-10 pr-10 md:gap-14 md:pr-16 lg:gap-16 lg:pr-16">
      {items.map((item, i) => (
        <React.Fragment key={`${item.value}-${item.label ?? ''}-${i}`}>
          {i > 0 ? <MarqueeSep /> : null}
          <div className="flex max-w-[min(92vw,340px)] flex-col gap-1.5 md:max-w-[380px]">
            <span
              className="font-light tracking-[-0.035em] text-[clamp(1.85rem,5vw,3.25rem)] leading-[1.05] text-[#3B443A]"
              style={quiche}
            >
              {item.value}
              {item.label?.trim() ? <span className="font-medium"> {item.label}</span> : null}
            </span>
            <span className="text-[#3B443A]/72" style={{ ...BODY, fontSize: '15px', lineHeight: 1.45, fontWeight: 400 }}>
              {item.description}
            </span>
          </div>
        </React.Fragment>
      ))}
      <MarqueeSep />
    </div>
  );
}

export function BrandStatsMarqueeSection({ items }: { items: readonly BrandStatsMarqueeItem[] }) {
  const bgColor = '#FFFFFF';

  return (
    <div style={{ backgroundColor: bgColor }}>
      <section
        className="relative z-[2] overflow-hidden pt-16 pb-20 max-[767px]:pt-12 max-[767px]:pb-14 md:pt-20"
        style={{ backgroundColor: bgColor }}
      >
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-16"
            style={{ background: `linear-gradient(to right, ${bgColor}, transparent)` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-16"
            style={{ background: `linear-gradient(to left, ${bgColor}, transparent)` }}
            aria-hidden
          />

          <div className="brand-stats-marquee-track flex w-max items-center py-8 max-[767px]:py-7">
            <MarqueeUnit items={items} />
            <MarqueeUnit items={items} />
            <MarqueeUnit items={items} />
          </div>
        </div>
      </section>

      <style jsx>{`
        .brand-stats-marquee-track {
          width: max-content;
          animation: brand-stats-marquee 42s linear infinite;
        }
        .brand-stats-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes brand-stats-marquee {
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

export default BrandStatsMarqueeSection;
