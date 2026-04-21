'use client';

import { AKADEMIJA_WHY_CARDS } from '@/config/akademijaPage';
import { ResponsibleBeautySection } from '@/components/sections/ResponsibleBeautySection';

export function AkademijaWhySection() {
  return (
    <ResponsibleBeautySection
      eyebrowLabel={null}
      heading={
        <>
          <span className="font-light">Kodėl verta mokytis </span>
          <span className="font-medium">su mumis?</span>
        </>
      }
      subheading={null}
      cards={AKADEMIJA_WHY_CARDS}
      surfaceClassName="bg-white"
      accent="green"
      showGuidanceRow={false}
    />
  );
}

export default AkademijaWhySection;
