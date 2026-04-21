'use client';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { LogoCarouselSection } from '@/components/sections/LogoCarouselSection';
import { ComparisonHeroSection } from '@/components/sections/ComparisonHeroSection';
import { ValueFeaturesSection } from '@/components/sections/ValueFeaturesSection';
import { IntroTextSection } from '@/components/sections/IntroTextSection';
import { PlatformSplitSection } from '@/components/sections/PlatformSplitSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CmsGridSection } from '@/components/sections/CmsGridSection';
import { UnicosWhySection } from '@/components/sections/UnicosWhySection';
import { BrandPartnerConsultStrip } from '@/components/sections/BrandPartnerConsultStrip';
import { ResponsibleBeautySection } from '@/components/sections/ResponsibleBeautySection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { FooterSection } from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main className="bg-[#ECE2D3]">
      <NavigationBarSection />
      <ComparisonHeroSection />
      <LogoCarouselSection />
      <ValueFeaturesSection />
      <IntroTextSection />
      <UnicosWhySection />
      <ResponsibleBeautySection />
      <BrandPartnerConsultStrip
        strip={{
          title: 'Konsultacija su vadybininku',
          body:
            'Turite klausimų apie partnerystę, prekių ženklus ar pirmus žingsnius? Mūsų vadybininkas atsakys ir padės suplanuoti kelią — nuo pirmo kontakto iki užsakymo.',
          portraitSrc: 'https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-3.webp',
          portraitAlt: 'UNICOS vadybininkas',
          cta: { href: '/kontaktai', label: 'Rašyti vadybininkui' },
        }}
      />
      <PlatformSplitSection />
      <ProcessSection />
      <TestimonialsSection />
      <CmsGridSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
