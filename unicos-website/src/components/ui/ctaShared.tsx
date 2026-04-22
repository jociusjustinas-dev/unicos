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

/** Numatyta ir hover teksto spalvos pagal variantą (naudojama slide'e ir kaip atsarginis static'ui). */
function ctaTextColors(v: CtaSurfaceVariant): { base: string; hover: string } {
  switch (v) {
    case 'primary':
      return { base: 'var(--color-nougat)', hover: 'var(--color-nougat)' };
    case 'secondary':
      return { base: 'var(--color-nougat)', hover: 'var(--color-nougat)' };
    case 'outline':
      return { base: 'var(--color-maroon)', hover: '#F1E8DA' };
    case 'glass':
      return { base: '#EFE8DB', hover: '#EFE8DB' };
    case 'lightFill':
      return { base: 'var(--color-maroon)', hover: 'var(--color-maroon)' };
    case 'outlineLight':
      return { base: '#EFE8DB', hover: '#EFE8DB' };
    case 'lightNeutral':
      return { base: '#1A1010', hover: '#1A1010' };
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
 * Halden Miller stiliaus CTA etiketė: mask + dublikatas per `text-shadow`.
 * Hover: tekstas slenka -100% į viršų, o apačioje esantis šešėlis (hover spalva)
 * atsiduria originalo vietoje. Aukštis — lygiai viena eilutė (`--btn-label-line-height`),
 * kad niekas nebūtų kerpama ir nesimatytų tarpų.
 */
export function CtaFace({ variant, labelClassName = '', children }: CtaFaceProps) {
  const { base: baseColor, hover } = ctaTextColors(variant);
  return (
    <span
      className="pointer-events-none relative z-[1] inline-flex items-center justify-center overflow-hidden [height:var(--btn-label-line-height)]"
    >
      <span
        className={`block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform group-hover/cta:-translate-y-full ${labelClassName}`.trim()}
        style={{
          color: baseColor,
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--btn-font-size)',
          fontWeight: 'var(--btn-font-weight)',
          letterSpacing: 'var(--btn-letter-spacing)',
          lineHeight: 'var(--btn-label-line-height)',
          textShadow: `0 var(--btn-label-line-height) 0 ${hover}`,
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </span>
    </span>
  );
}
