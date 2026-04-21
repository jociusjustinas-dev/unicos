'use client';

import * as React from 'react';
import { SfActivity, SfAward, SfClock, SfLayers } from '@/components/icons/feather';
import type { PrekiuZenklaiBrandTextCard } from '@/config/prekiuZenklaiBrandLanding';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const CARD_ICONS = [SfLayers, SfClock, SfAward, SfActivity] as const;

type Props = {
  heading: React.ReactNode;
  cards: readonly PrekiuZenklaiBrandTextCard[];
  tallImageSrc: string;
  tallImageAlt: string;
  bandImageSrc: string;
  bandImageAlt: string;
};

function BentoTile({ card, index, className = '' }: { card: PrekiuZenklaiBrandTextCard; index: number; className?: string }) {
  const Icon = CARD_ICONS[index % CARD_ICONS.length]!;
  return (
    <div
      className={`flex flex-row items-center gap-4 border border-[#1A1010]/10 bg-[#EFE8DB] p-6 max-[767px]:gap-3 max-[767px]:p-5 ${className}`.trim()}
      style={{ borderRadius: '0px' }}
    >
      <div
        className="grid h-14 w-14 shrink-0 place-items-center overflow-visible border border-[#3B443A]/20 bg-[rgba(59,68,58,0.1)] p-2 text-[#3B443A] max-[767px]:h-12 max-[767px]:w-12 max-[767px]:p-1.5"
        style={{ borderRadius: '0px' }}
      >
        <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center overflow-visible">
          <Icon size={22} strokeWidth={1.75} className="overflow-visible" aria-hidden />
        </span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <h3 className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '15px', lineHeight: '1.35', fontWeight: 500 }}>
          {card.title}
        </h3>
        <p className="m-0 text-sm leading-5 text-[#1A1010]/65" style={{ ...BODY, fontWeight: 400 }}>
          {card.description}
        </p>
      </div>
    </div>
  );
}

export function BrandWhyBentoSection({ heading, cards, tallImageSrc, tallImageAlt, bandImageSrc, bandImageAlt }: Props) {
  const quad = cards.slice(0, 4);
  const [a, b, c, d] = quad;
  if (quad.length < 4 || !a || !b || !c || !d) return null;

  return (
    <section className="relative z-[2] bg-white py-20 text-[#1A1010] max-[767px]:py-14" style={BODY}>
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 max-[767px]:gap-10">
          <h2
            className="m-0 text-center tracking-[-0.02em] text-[#64151F]"
            style={{
              fontFamily: "'Quiche Sans', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: 1.06,
              fontWeight: 300,
            }}
          >
            {heading}
          </h2>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto] lg:gap-4">
            <figure
              className="relative m-0 min-h-[280px] overflow-hidden border border-[#1A1010]/10 lg:row-span-3 lg:min-h-[420px]"
              style={{ borderRadius: '0px' }}
            >
              <img src={tallImageSrc} alt={tallImageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-[rgba(26,16,16,0.1)]" aria-hidden />
            </figure>

            <BentoTile card={a} index={0} className="lg:col-start-2 lg:row-start-1" />
            <BentoTile card={b} index={1} className="lg:col-start-3 lg:row-start-1" />

            <figure
              className="relative m-0 min-h-[200px] overflow-hidden border border-[#1A1010]/10 lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:min-h-[240px]"
              style={{ borderRadius: '0px' }}
            >
              <img src={bandImageSrc} alt={bandImageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-[rgba(26,16,16,0.1)]" aria-hidden />
            </figure>

            <BentoTile card={c} index={2} className="lg:col-start-2 lg:row-start-3" />
            <BentoTile card={d} index={3} className="lg:col-start-3 lg:row-start-3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandWhyBentoSection;
