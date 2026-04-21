'use client';

import * as React from 'react';
import {
  CTA_SHELL_CLASS_BASE,
  CtaBackground,
  CtaFace,
  type CtaSurfaceVariant,
} from '@/components/ui/ctaShared';

/** Tie patys variantai kaip `CtaLink` — įskaitant `glass`. */
export type CtaButtonVariant = CtaSurfaceVariant;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: CtaButtonVariant;
  /** Kaip `CtaLink`: numatyta „slide“ (header efektas). */
  labelMode?: 'slide' | 'static';
  labelClassName?: string;
  slideWrapperClassName?: string;
};

export function CtaButton({
  variant = 'primary',
  labelMode = 'slide',
  className = '',
  labelClassName = '',
  slideWrapperClassName = '',
  type = 'button',
  children,
  disabled,
  ...rest
}: Props) {
  const v = variant;
  const shellClass =
    `${CTA_SHELL_CLASS_BASE} cursor-pointer rounded-[var(--btn-radius)] disabled:cursor-not-allowed disabled:opacity-60 ${className}`.trim();

  return (
    <button type={type} className={shellClass} disabled={disabled} {...rest}>
      <CtaBackground variant={v} />
      <CtaFace
        variant={v}
        labelMode={labelMode}
        labelClassName={labelClassName}
        slideWrapperClassName={slideWrapperClassName}
      >
        {children}
      </CtaFace>
    </button>
  );
}
