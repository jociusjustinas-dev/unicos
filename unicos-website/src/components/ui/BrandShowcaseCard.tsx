'use client';

import * as React from 'react';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export function BrandShowcaseCard({
  title,
  description,
  imageSrc,
  imageAlt,
  logoSvg,
  badge,
  ctaHref,
  ctaLabel,
  meta,
  className = '',
  imageClassName = 'h-[220px]',
  dataBrandCard = false,
  tone = 'maroon',
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  logoSvg?: string;
  badge?: string;
  ctaHref?: string;
  ctaLabel?: string;
  meta?: React.ReactNode;
  className?: string;
  imageClassName?: string;
  dataBrandCard?: boolean;
  tone?: 'maroon' | 'green';
}) {
  const isGreen = tone === 'green';
  const cardClass = isGreen
    ? 'border-[#3B443A]/16 bg-[#E8EDE9]/70 hover:border-[#3B443A]/35'
    : 'border-[#1A1010]/10 bg-white/40 hover:border-[#64151F]/20';
  const titleClass = isGreen ? 'text-[#3B443A]' : 'text-[#1A1010]';
  const badgeClass = isGreen
    ? 'border-[#3B443A]/25 bg-[#3B443A] text-[#EFE8DB]'
    : 'border-[#64151F]/25 bg-[#64151F] text-[#EFE8DB]';

  return (
    <article
      data-brand-card={dataBrandCard || undefined}
      className={`group/card flex flex-col border text-[#1A1010] transition-[transform,border-color] duration-500 ease-in-out hover:-translate-y-[1px] ${cardClass} ${className}`}
      style={{ borderRadius: '0px' }}
    >
      <div className={`relative w-full overflow-hidden border-b border-[#1A1010]/10 ${imageClassName}`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full scale-100 object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.45,1)] group-hover/card:scale-[1.055]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,16,16,0.04),rgba(26,16,16,0.36))] transition-[opacity,background] duration-[900ms] ease-[cubic-bezier(0.22,1,0.45,1)] group-hover/card:opacity-[0.88] group-hover/card:bg-[linear-gradient(180deg,rgba(26,16,16,0.02),rgba(26,16,16,0.28))]"
          aria-hidden
        />
        {badge ? (
          <div
            className={`absolute left-4 top-4 inline-flex w-fit border px-2.5 py-1.5 uppercase ${badgeClass}`}
            style={{ ...BODY, fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', borderRadius: '0px' }}
          >
            {badge}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 p-6 max-[767px]:p-5">
        <div className="flex min-h-8 items-center">
          {logoSvg ? (
            <img src={logoSvg} alt={title} loading="lazy" className="h-6 w-auto max-w-[170px] object-contain object-left" />
          ) : (
            <h3 className={`m-0 ${titleClass}`} style={{ ...BODY, fontSize: '22px', lineHeight: 1.2, fontWeight: 500 }}>
              {title}
            </h3>
          )}
        </div>
        <p className="m-0 text-[#1A1010]/78" style={{ ...BODY, fontSize: '15px', lineHeight: 1.5, fontWeight: 400 }}>
          {description}
        </p>

        {meta}

        {ctaHref && ctaLabel ? (
          <CtaLink href={ctaHref} variant="primary" className="mt-1 w-full justify-center sm:w-auto">
            {ctaLabel}
          </CtaLink>
        ) : null}
      </div>
    </article>
  );
}

export default BrandShowcaseCard;
