'use client';

import type { ReactNode } from 'react';
import { AKADEMIJA_DETAIL_HEADING } from '@/components/sections/akademija/akademijaDetailTypography';

const H2_STYLE = {
  ...AKADEMIJA_DETAIL_HEADING,
  fontSize: 'clamp(1.9rem, 3vw, 2.8rem)',
  lineHeight: 1.08,
  fontWeight: 300,
} as const;

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
};

/** Renginio detalės puslapio antraštės (Apie seminarą, Programa ir kt.). */
export function AkademijaDetailH2({ children, id, className = '' }: Props) {
  return (
    <h2 id={id} className={`m-0 text-[#64151F] ${className}`.trim()} style={H2_STYLE}>
      {children}
    </h2>
  );
}
