'use client';

import * as React from 'react';
import { CTA_FOCUS, CTA_TRANSITION } from '@/components/ui/ctaMotion';

/** Visi interaktyvūs CTA paviršiai (CtaLink / CtaButton) — tie patys variantai. */
export type CtaSurfaceVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'glass'
  | 'lightFill'
  | 'outlineLight'
  | 'lightNeutral';

export const CTA_SHELL_CLASS_BASE =
  'group/cta relative inline-flex w-fit max-w-full shrink-0 items-center justify-center overflow-hidden ' +
  'min-h-[var(--btn-height)] px-[var(--btn-padding-x)] ' +
  `${CTA_TRANSITION} ${CTA_FOCUS}`;

export function CtaBackground({ variant }: { variant: CtaSurfaceVariant }) {
  switch (variant) {
    case 'primary':
      return (
        <div className="pointer-events-none absolute inset-0 bg-[var(--color-maroon)] transition-[background-color,filter] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/cta:bg-[var(--color-maroon-hover-bright)]" />
      );
    case 'secondary':
      return (
        <div className="pointer-events-none absolute inset-0 bg-[var(--color-green)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/cta:bg-[var(--color-green-hover)]" />
      );
    case 'glass':
      return (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[#EFE8DB]/25 bg-[#EFE8DB]/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/cta:border-[#EFE8DB]/45 group-hover/cta:bg-[#EFE8DB]/[0.26] group-hover/cta:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
          aria-hidden
        />
      );
    case 'lightFill':
      return (
        <div className="pointer-events-none absolute inset-0 bg-[#EFE8DB] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/cta:bg-white" />
      );
    case 'outlineLight':
      return (
        <div className="pointer-events-none absolute inset-0 border border-solid border-[#EFE8DB] bg-transparent transition-[background-color,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/cta:border-[#EFE8DB]/80 group-hover/cta:bg-[#EFE8DB]/14" />
      );
    case 'lightNeutral':
      return (
        <div className="pointer-events-none absolute inset-0 border border-[#EFE8DB]/22 bg-[#EFE8DB] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/cta:bg-[#E6DDD0]" />
      );
    case 'outline':
    default:
      return (
        <div className="pointer-events-none absolute inset-0 border border-[var(--color-maroon)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/cta:bg-[var(--color-maroon)]" />
      );
  }
}

export function ctaStaticLabelClass(v: CtaSurfaceVariant) {
  const base =
    'relative z-[1] text-center font-medium normal-case [font-size:var(--btn-font-size)] [font-weight:var(--btn-font-weight)] [letter-spacing:var(--btn-letter-spacing)] [line-height:var(--btn-static-line-height)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]';
  switch (v) {
    case 'glass':
      return `${base} text-[#EFE8DB]`;
    case 'outline':
      return `${base} text-[var(--color-maroon)] group-hover/cta:text-[#F1E8DA]`;
    case 'lightFill':
      return `${base} text-[var(--color-maroon)]`;
    case 'outlineLight':
      return `${base} text-[#EFE8DB] group-hover/cta:text-[#F8F2E8]`;
    case 'lightNeutral':
      return `${base} text-[#1A1010]`;
    default:
      return `${base} text-[var(--color-nougat)]`;
  }
}

export type CtaLabelMode = 'slide' | 'static';

type CtaFaceProps = {
  variant: CtaSurfaceVariant;
  labelMode: CtaLabelMode;
  labelClassName?: string;
  slideWrapperClassName?: string;
  children: React.ReactNode;
};

/**
 * Global CTA hover: kaip Halden Miller — tik fonas / rėmelis keičia spalvą per 0.3s.
 * Tekstas (ir ikona) niekada nejuda: jokios „slide“ / `translateY` / text-shadow dublikatų.
 * `labelMode` paliktas tipui, bet neturi įtakos — visos `CtaLink` / `CtaButton` lygiai vienodos.
 */
export function CtaFace({ variant, labelClassName = '', children }: CtaFaceProps) {
  const staticClass = `${ctaStaticLabelClass(variant)} ${labelClassName}`.trim();
  return (
    <span className={staticClass} style={{ fontFamily: 'var(--font-body)' }}>
      {children}
    </span>
  );
}
