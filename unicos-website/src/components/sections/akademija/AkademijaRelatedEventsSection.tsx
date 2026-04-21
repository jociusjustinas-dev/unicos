'use client';

import type { ReactNode } from 'react';
import { AKADEMIJA_EVENTS } from '@/config/akademijaPage';
import { PAGE_SHELL_CLASS } from '@/config/pageShell';
import { AkademijaEventCard } from '@/components/sections/AkademijaTrainingSection';
import { CtaLink } from '@/components/ui/CtaLink';
import { AkademijaDetailH2 } from '@/components/sections/akademija/AkademijaDetailH2';
import { AkademijaEyebrowLabel } from '@/components/sections/akademija/AkademijaEyebrowLabel';

const R0 = { borderRadius: '0px' } as const;

type Props = {
  /** Renginiai, išskyrus šį id (dabartinis puslapis). */
  excludeEventId: string;
  headingId: string;
  eyebrowLabel?: string;
  title: ReactNode;
  viewAllHref: string;
  viewAllLabel: string;
};

/** „Kalendorius“ + antraštė + „Visi renginiai“ + kortelių tinklelis — kaip Neostrata apačioje. */
export function AkademijaRelatedEventsSection({
  excludeEventId,
  headingId,
  eyebrowLabel = 'Kalendorius',
  title,
  viewAllHref,
  viewAllLabel,
}: Props) {
  const events = AKADEMIJA_EVENTS.filter((e) => e.id !== excludeEventId);

  return (
    <section
      className="relative z-[1] border-t border-solid border-[#1A1010]/10 bg-[#EFE8DB] py-16 text-[#1A1010] max-[767px]:py-12"
      aria-labelledby={headingId}
    >
      <div className={PAGE_SHELL_CLASS}>
        <AkademijaEyebrowLabel label={eyebrowLabel} className="mb-2" />
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 max-[767px]:mb-8">
          <AkademijaDetailH2 id={headingId}>{title}</AkademijaDetailH2>
          <CtaLink href={viewAllHref} variant="primary" labelMode="static" className="rounded-none" style={R0}>
            {viewAllLabel}
          </CtaLink>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {events.map((e) => (
            <AkademijaEventCard key={e.id} event={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
