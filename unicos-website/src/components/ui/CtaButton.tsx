'use client';

import * as React from 'react';
import { CTA_FOCUS, CTA_TRANSITION } from '@/components/ui/ctaMotion';

export type CtaButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  /** Ant tamsaus fono: rėmelis ir tekstas #EFE8DB */
  | 'outlineLight'
  /** Kremo užpildas + bordo tekstas (pvz. ant maroon juostos) */
  | 'lightFill'
  /** Formų šviesus mygtukas ant žalias/tamsaus (#EFE8DB fonas, tamsus tekstas) */
  | 'lightNeutral';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: CtaButtonVariant;
};

const base =
  'relative inline-flex w-fit max-w-full shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-[var(--btn-radius)] ' +
  'min-h-[var(--btn-height)] px-[var(--btn-padding-x)] [font-size:var(--btn-static-font-size)] [letter-spacing:var(--btn-letter-spacing)] ' +
  '[line-height:var(--btn-static-line-height)] font-medium normal-case [font-family:var(--font-body)] ' +
  `${CTA_TRANSITION} ${CTA_FOCUS} disabled:cursor-not-allowed disabled:opacity-65 active:translate-y-px`;

const variantClass: Record<CtaButtonVariant, string> = {
  primary:
    'border-0 bg-[var(--color-maroon)] text-[var(--color-nougat)] hover:bg-[var(--color-maroon-hover)]',
  secondary:
    'border-0 bg-[var(--color-green)] text-[var(--color-nougat)] hover:bg-[var(--color-green-hover)]',
  outline:
    'border border-[var(--color-maroon)] bg-transparent text-[var(--color-maroon)] hover:bg-[var(--color-maroon)] hover:text-[var(--color-nougat)]',
  outlineLight:
    'border border-solid border-[#EFE8DB] bg-transparent text-[#EFE8DB] hover:bg-[#EFE8DB]/10',
  lightFill: 'border-0 bg-[#EFE8DB] text-[var(--color-maroon)] hover:bg-white',
  lightNeutral:
    'border border-[#EFE8DB]/22 bg-[#EFE8DB] text-[#1A1010] hover:bg-[#E6DDD0]',
};

export function CtaButton({ variant = 'primary', className = '', type = 'button', ...rest }: Props) {
  const v = variantClass[variant] ?? variantClass.primary;
  return <button type={type} className={`${base} ${v} ${className}`.trim()} {...rest} />;
}
