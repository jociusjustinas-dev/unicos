'use client';

import Link from 'next/link';
import { AKADEMIJA_FORMAT_CHALLENGES } from '@/config/akademijaPage';
import { OdosChallengesSection } from '@/components/sections/OdosChallengesSection';

/** Tas pats išdėstymas kaip „Pažįstama situacija?“ (`OdosChallengesSection`) — tamsus blokas, akordeonas, nuotrauka. */
export function AkademijaFormatsSection() {
  return (
    <OdosChallengesSection
      items={AKADEMIJA_FORMAT_CHALLENGES}
      heading={
        <>
          <span className="font-light">Mokymų </span>
          <span className="font-medium">formatai.</span>
        </>
      }
      imageSrc="/mega-menu/1.jpeg"
      imageAlt="UNICOS akademijos mokymai ir seminarai"
      belowAccordion={
        <Link
          href="/kontaktai"
          className="inline-block text-[15px] font-medium text-[#EFE8DB] underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          Norite uždarųjų mokymų? Susisiekite
        </Link>
      }
    />
  );
}

export default AkademijaFormatsSection;
