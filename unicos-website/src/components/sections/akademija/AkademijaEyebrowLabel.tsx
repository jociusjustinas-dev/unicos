'use client';

import { AKADEMIJA_DETAIL_BODY } from '@/components/sections/akademija/akademijaDetailTypography';

type Props = {
  label?: string;
  className?: string;
};

/** Mažas kvadratas + uppercase etiketė — kaip „Kalendorius“ ant Akademijos / renginio puslapių. */
export function AkademijaEyebrowLabel({ label = 'Kalendorius', className = '' }: Props) {
  return (
    <div className={`flex items-center gap-2 ${className}`.trim()}>
      <span className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
      <span
        className="uppercase text-[#64151F]"
        style={{ ...AKADEMIJA_DETAIL_BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
      >
        {label}
      </span>
    </div>
  );
}
