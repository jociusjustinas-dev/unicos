'use client';

import { AKADEMIJA_FAQ_ENTRIES, AKADEMIJA_FAQ_INTRO, AKADEMIJA_MARQUEE_STATS } from '@/config/akademijaPage';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { OdosPartnerSpotlightSection } from '@/components/sections/OdosPartnerSpotlightSection';
import { AkademijaTrainingSection } from '@/components/sections/AkademijaTrainingSection';
import { AkademijaWhySection } from '@/components/sections/AkademijaWhySection';
import { AkademijaFormatsSection } from '@/components/sections/AkademijaFormatsSection';
import {
  BrandStatsMarqueeSection,
  type BrandStatsMarqueeItem,
} from '@/components/sections/BrandStatsMarqueeSection';
import { AkademijaNewsletterSection } from '@/components/sections/AkademijaNewsletterSection';

const SPOTLIGHT_QUOTE =
  '„Su UNICOS pagalba optimizavome produktų krepšelį ir tai tiesiogiai atsispindėjo mūsų klinikos pelningume jau po pirmo ketvirčio. Svarbiausia — oficialus atstovavimas ir struktūruoti protokolai suteikia ramybę kiekvieną dieną.“';

export function AkademijaPage() {
  return (
    <main className="bg-[#ECE2D3]">
      <NavigationBarSection forceLightSurface />

      <AkademijaTrainingSection />
      <AkademijaNewsletterSection />
      <AkademijaWhySection />
      <AkademijaFormatsSection />
      <BrandStatsMarqueeSection items={AKADEMIJA_MARQUEE_STATS as readonly BrandStatsMarqueeItem[]} />

      <OdosPartnerSpotlightSection
        spotlightHeadingId="akademija-spotlight-heading"
        statBadge="+35% pajamų augimas"
        quote={SPOTLIGHT_QUOTE}
        authorName="Dr. Ieva Kazlauskienė"
        authorMeta="Dermatovenerologė, Vilnius"
        portraitSrc="/Female_hands_applying_202604110815.jpeg"
        portraitAlt="Dr. Ieva Kazlauskienė"
        footnote=""
      />

      <FaqSection backgroundClassName="bg-[#EFE8DB]" accent="maroon" faqEntries={AKADEMIJA_FAQ_ENTRIES} faqIntro={AKADEMIJA_FAQ_INTRO} />
      <CtaSection />
      <FooterSection />
    </main>
  );
}

export default AkademijaPage;
