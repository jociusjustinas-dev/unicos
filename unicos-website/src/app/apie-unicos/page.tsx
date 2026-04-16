'use client';

import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { ApieUnicosHeroSection } from '@/components/sections/ApieUnicosHeroSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { FooterSection } from '@/components/sections/FooterSection';

export default function ApieUnicosPage() {
  return (
    <main className="bg-[#ECE2D3]">
      <NavigationBarSection forceLightSurface />
      <ApieUnicosHeroSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
