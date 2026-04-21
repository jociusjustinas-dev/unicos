'use client';

import * as React from 'react';
import {
  CTA_SHELL_CLASS_BASE,
  CtaBackground,
  CtaFace,
  type CtaSurfaceVariant,
} from '@/components/ui/ctaShared';

export type CtaVariant = CtaSurfaceVariant;

type Props = React.ComponentPropsWithoutRef<'a'> & {
  variant?: CtaVariant;
  /** Slankiojantis tekstas (kaip header CTA); `static` — be „slide“. */
  labelMode?: 'slide' | 'static';
  labelClassName?: string;
  slideWrapperClassName?: string;
};

export function CtaLink({
  variant = 'primary',
  labelMode = 'slide',
  className = '',
  labelClassName = '',
  slideWrapperClassName = '',
  children,
  ...rest
}: Props) {
  const v = variant;
  const shellClass = `${CTA_SHELL_CLASS_BASE} no-underline rounded-[var(--btn-radius)] ${className}`.trim();

  return (
    <a className={shellClass} {...rest}>
      <CtaBackground variant={v} />
      <CtaFace
        variant={v}
        labelMode={labelMode}
        labelClassName={labelClassName}
        slideWrapperClassName={slideWrapperClassName}
      >
        {children}
      </CtaFace>
    </a>
  );
}
