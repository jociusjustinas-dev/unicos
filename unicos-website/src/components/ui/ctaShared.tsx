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
  'group relative inline-flex w-fit max-w-full shrink-0 items-center justify-center overflow-hidden ' +
  'min-h-[var(--btn-height)] px-[var(--btn-padding-x)] ' +
  `${CTA_TRANSITION} ${CTA_FOCUS}`;

export function CtaBackground({ variant }: { variant: CtaSurfaceVariant }) {
  switch (variant) {
    case 'primary':
      return (
        <div className="pointer-events-none absolute inset-0 bg-[var(--color-maroon)] transition-[background-color,filter] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[var(--color-maroon-hover-bright)]" />
      );
    case 'secondary':
      return (
        <div className="pointer-events-none absolute inset-0 bg-[var(--color-green)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[var(--color-green-hover)]" />
      );
    case 'glass':
      return (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[#EFE8DB]/25 bg-[#EFE8DB]/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:border-[#EFE8DB]/45 group-hover:bg-[#EFE8DB]/[0.26] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
          aria-hidden
        />
      );
    case 'lightFill':
      return (
        <div className="pointer-events-none absolute inset-0 bg-[#EFE8DB] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-white" />
      );
    case 'outlineLight':
      return (
        <div className="pointer-events-none absolute inset-0 border border-solid border-[#EFE8DB] bg-transparent transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[#EFE8DB]/10" />
      );
    case 'lightNeutral':
      return (
        <div className="pointer-events-none absolute inset-0 border border-[#EFE8DB]/22 bg-[#EFE8DB] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[#E6DDD0]" />
      );
    case 'outline':
    default:
      return (
        <div className="pointer-events-none absolute inset-0 border border-[var(--color-maroon)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[var(--color-maroon)]" />
      );
  }
}

export function ctaSlideInnerClass(v: CtaSurfaceVariant, labelClassName: string) {
  const motion =
    'text-[length:var(--btn-font-size)] font-medium normal-case [letter-spacing:var(--btn-letter-spacing)] transition-transform duration-300 ease-[var(--btn-ease)] group-hover:-translate-y-[1.5em]';
  const color =
    v === 'outline' || v === 'lightFill'
      ? 'text-[var(--color-maroon)]'
      : v === 'outlineLight'
        ? 'text-[#EFE8DB]'
        : v === 'glass'
          ? 'text-[#EFE8DB]'
          : v === 'lightNeutral'
            ? 'text-[#1A1010]'
            : 'text-[var(--color-nougat)]';
  return `${color} ${motion} ${labelClassName}`.trim();
}

export function ctaSlideShadowFor(v: CtaSurfaceVariant) {
  if (v === 'glass') return '0 1.5em 0 #EFE8DB';
  if (v === 'outline' || v === 'lightFill') return '0 1.5em 0 var(--color-maroon)';
  if (v === 'outlineLight') return '0 1.5em 0 #EFE8DB';
  if (v === 'lightNeutral') return '0 1.5em 0 #1A1010';
  return '0 1.5em 0 var(--color-nougat)';
}

export function ctaStaticLabelClass(v: CtaSurfaceVariant) {
  const base =
    'relative z-[1] text-center font-medium normal-case [font-size:var(--btn-font-size)] [font-weight:var(--btn-font-weight)] [letter-spacing:var(--btn-letter-spacing)] [line-height:var(--btn-static-line-height)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]';
  switch (v) {
    case 'glass':
      return `${base} text-[#EFE8DB]`;
    case 'outline':
      return `${base} text-[var(--color-maroon)] group-hover:text-[var(--color-nougat)]`;
    case 'lightFill':
      return `${base} text-[var(--color-maroon)]`;
    case 'outlineLight':
      return `${base} text-[#EFE8DB]`;
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

export function CtaFace({ variant, labelMode, labelClassName = '', slideWrapperClassName = '', children }: CtaFaceProps) {
  const v = variant;
  const slideInner = ctaSlideInnerClass(v, labelClassName);
  const slideShadow = ctaSlideShadowFor(v);

  if (labelMode === 'slide') {
    return (
      <div
        className={`relative z-[1] flex min-h-0 items-center justify-center overflow-hidden text-center pointer-events-none [height:var(--btn-label-track-height)] ${slideWrapperClassName}`.trim()}
      >
        <div
          className={slideInner}
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--btn-font-weight)',
            textShadow: slideShadow,
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <span className={ctaStaticLabelClass(v)} style={{ fontFamily: 'var(--font-body)' }}>
      {children}
    </span>
  );
}
