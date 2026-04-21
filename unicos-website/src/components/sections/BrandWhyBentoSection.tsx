'use client';

import * as React from 'react';
import { SfActivity, SfArrowRight, SfAward, SfClock, SfLayers } from '@/components/icons/feather';
import type { PrekiuZenklaiBrandTextCard } from '@/config/prekiuZenklaiBrandLanding';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const CARD_ICONS = [SfLayers, SfClock, SfAward, SfActivity] as const;

type Props = {
  heading: React.ReactNode;
  cards: readonly PrekiuZenklaiBrandTextCard[];
  bandImageSrc: string;
  bandImageAlt: string;
};

function BentoTile({ card, index }: { card: PrekiuZenklaiBrandTextCard; index: number }) {
  const Icon = CARD_ICONS[index % CARD_ICONS.length]!;
  return (
    <div
      className="flex flex-row items-center justify-between gap-4 border border-[rgba(26,16,16,0.12)] bg-[rgba(239,232,219,0.72)] p-6 max-[767px]:gap-3 max-[767px]:p-5"
      style={{ borderRadius: '0px' }}
    >
      <div className="flex min-w-0 flex-1 items-center gap-4 max-[479px]:gap-3">
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
      <SfArrowRight size={18} className="shrink-0 text-[#3B443A]/40" aria-hidden />
    </div>
  );
}

export function BrandWhyBentoSection({ heading, cards, bandImageSrc, bandImageAlt }: Props) {
  const quad = cards.slice(0, 4);
  const [a, b, c, d] = quad;
  if (quad.length < 4 || !a || !b || !c || !d) return null;

  return (
    <section
      className="relative z-[2] bg-[#EFE8DB] py-20 text-[#1A1010] max-[767px]:py-14"
      style={BODY}
    >
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-12 max-[767px]:gap-10">
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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
            <BentoTile card={a} index={0} />
            <BentoTile card={b} index={1} />

            <div
              className="relative min-h-[220px] overflow-hidden border border-[rgba(26,16,16,0.12)] md:col-span-2 md:min-h-[260px]"
              style={{ borderRadius: '0px' }}
            >
              <img src={bandImageSrc} alt={bandImageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-[rgba(26,16,16,0.12)]" aria-hidden />
            </div>

            <BentoTile card={c} index={2} />
            <BentoTile card={d} index={3} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandWhyBentoSection;
