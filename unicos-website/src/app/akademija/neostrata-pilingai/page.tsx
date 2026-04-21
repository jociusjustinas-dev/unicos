'use client';

import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { NeostrataPilingaiCmsPageSection } from '@/components/sections/NeostrataPilingaiCmsPageSection';

export default function NeostrataPilingaiPage() {
  return (
    <main className="bg-[#EFE8DB] text-[#1A1010]">
      <NavigationBarSection forceLightSurface />
      <NeostrataPilingaiCmsPageSection />
      <FooterSection />
    </main>
  );
}
