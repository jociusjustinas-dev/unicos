'use client';

import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { ApieUnicosHeroSection } from '@/components/sections/ApieUnicosHeroSection';
import { UnicosWhySection } from '@/components/sections/UnicosWhySection';
import { CtaSection } from '@/components/sections/CtaSection';
import { FooterSection } from '@/components/sections/FooterSection';

export default function ApieUnicosPage() {
  return (
    <main className="bg-[#ECE2D3]">
      <NavigationBarSection forceLightSurface />
      <ApieUnicosHeroSection />
      <UnicosWhySection
        heading={<span className="font-medium">Kuo tikime.</span>}
        subheading="Trys principai, kuriais grindžiame kiekvieną sprendimą."
        showHighlights={false}
      />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
