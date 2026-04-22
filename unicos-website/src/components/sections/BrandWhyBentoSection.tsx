'use client';

import * as React from 'react';
import { SfActivity, SfAward, SfClock, SfLayers } from '@/components/icons/feather';
import type { PrekiuZenklaiBrandTextCard } from '@/config/prekiuZenklaiBrandLanding';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const CARD_ICONS = [SfLayers, SfClock, SfAward, SfActivity] as const;

type Tone = 'maroon' | 'cream';

type Props = {
  heading: React.ReactNode;
  cards: readonly PrekiuZenklaiBrandTextCard[];
  tallImageSrc: string;
  tallImageAlt: string;
  smallImageSrc: string;
  smallImageAlt: string;
  topRightImageSrc: string;
  topRightImageAlt: string;
};

function BentoFigure({
  src,
  alt,
  className = '',
  minHeightClass = 'min-h-[200px]',
}: {
  src: string;
  alt: string;
  className?: string;
  minHeightClass?: string;
}) {
  return (
    <figure
      className={`relative m-0 overflow-hidden border border-[#1A1010]/10 ${minHeightClass} ${className}`.trim()}
      style={{ borderRadius: '0px' }}
    >
      <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-[rgba(26,16,16,0.08)]" aria-hidden />
    </figure>
  );
}

function BentoTile({
  card,
  index,
  tone,
  className = '',
}: {
  card: PrekiuZenklaiBrandTextCard;
  index: number;
  tone: Tone;
  className?: string;
}) {
  const Icon = CARD_ICONS[index % CARD_ICONS.length]!;
  const isMaroon = tone === 'maroon';

  const shell = isMaroon
    ? 'border-[#EFE8DB]/30 bg-[#EFE8DB]/[0.1] text-[#EFE8DB]'
    : 'border-[#3B443A]/20 bg-[rgba(59,68,58,0.1)] text-[#3B443A]';

  const surface = isMaroon ? 'border-[#1A1010]/12 bg-[#64151F]' : 'border-[#1A1010]/10 bg-[#EFE8DB]';

  const titleC = isMaroon ? 'text-[#EFE8DB]' : 'text-[#1A1010]';
  const bodyC = isMaroon ? 'text-[#EFE8DB]/82' : 'text-[#1A1010]/65';

  return (
    <div
      className={`flex min-h-0 flex-col items-start justify-between gap-6 border p-6 max-[767px]:p-5 ${surface} ${className}`.trim()}
      style={{ borderRadius: '0px' }}
    >
      <div
        className={`grid h-14 w-14 shrink-0 place-items-center overflow-visible border p-2 max-[767px]:h-12 max-[767px]:w-12 max-[767px]:p-1.5 ${shell}`}
        style={{ borderRadius: '0px' }}
      >
        <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center overflow-visible">
          <Icon size={22} strokeWidth={1.75} className="overflow-visible" aria-hidden />
        </span>
      </div>
      <div className="flex min-w-0 flex-col gap-1.5">
        <h3 className={`m-0 ${titleC}`} style={{ ...BODY, fontSize: '15px', lineHeight: '1.35', fontWeight: 500 }}>
          {card.title}
        </h3>
        <p className={`m-0 text-sm leading-5 ${bodyC}`} style={{ ...BODY, fontWeight: 400 }}>
          {card.description}
        </p>
      </div>
    </div>
  );
}

export function BrandWhyBentoSection({
  heading,
  cards,
  tallImageSrc,
  tallImageAlt,
  smallImageSrc,
  smallImageAlt,
  topRightImageSrc,
  topRightImageAlt,
}: Props) {
  const quad = cards.slice(0, 4);
  const [a, b, c, d] = quad;
  if (quad.length < 4 || !a || !b || !c || !d) return null;

  const tone = (i: number): Tone => (i % 2 === 0 ? 'maroon' : 'cream');

  return (
    <section className="relative z-[2] bg-[#EFE8DB] py-20 text-[#1A1010] max-[767px]:py-14" style={BODY}>
      <div className="relative z-[2] mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
        <div className="flex flex-col gap-12 max-[767px]:gap-10">
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

          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 lg:auto-rows-[minmax(200px,auto)]">
            <BentoTile card={a} index={0} tone={tone(0)} className="lg:col-start-1 lg:row-start-1" />

            <figure
              className="relative m-0 min-h-[280px] overflow-hidden border border-[#1A1010]/10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-0"
              style={{ borderRadius: '0px' }}
            >
              <img src={tallImageSrc} alt={tallImageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-[rgba(26,16,16,0.08)]" aria-hidden />
            </figure>

            <BentoTile card={b} index={1} tone={tone(1)} className="lg:col-start-3 lg:row-start-1" />

            <BentoFigure
              src={topRightImageSrc}
              alt={topRightImageAlt}
              className="min-h-[220px] w-full lg:col-start-4 lg:row-start-1 lg:min-h-[240px]"
            />

            <BentoFigure src={smallImageSrc} alt={smallImageAlt} className="lg:col-start-1 lg:row-start-2 min-h-[200px]" />

            <BentoTile card={c} index={2} tone={tone(2)} className="lg:col-start-3 lg:row-start-2" />
            <BentoTile card={d} index={3} tone={tone(3)} className="lg:col-start-4 lg:row-start-2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandWhyBentoSection;
