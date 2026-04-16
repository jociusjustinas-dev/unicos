import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { TapkitePartneriuHeroSection } from '@/components/sections/TapkitePartneriuHeroSection';
import { FooterSection } from '@/components/sections/FooterSection';

export default function TapkitePartneriuPage() {
  return (
    <main className="bg-[#ECE2D3]">
      <NavigationBarSection forceLightSurface logoOnly />
      <TapkitePartneriuHeroSection />
      <FooterSection />
    </main>
  );
}

