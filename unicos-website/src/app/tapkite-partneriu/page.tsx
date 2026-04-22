import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { TapkitePartneriuHeroSection } from '@/components/sections/TapkitePartneriuHeroSection';
import { ResponsibleBeautySection } from '@/components/sections/ResponsibleBeautySection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { FooterSection } from '@/components/sections/FooterSection';

export default function TapkitePartneriuPage() {
  const benefits = [
    {
      title: 'Asmeninį vadybininką',
      description: 'Kontaktą, kuris pažįsta Jūsų veiklą ir padeda augti.',
    },
    {
      title: 'Didmenines kainas',
      description: 'Skaidrią kainodarą nuo pirmos dienos.',
    },
    {
      title: 'Pristatymą per 24h',
      description: 'Visoje Lietuvoje, užsakymai iki 14:00 siunčiami tą pačią dieną.',
    },
    {
      title: 'Mokymus ir sertifikatus',
      description: 'Praktinius seminarus su tarptautiniais lektoriais.',
    },
    {
      title: 'Savitarnos platformą',
      description: 'Užsakymai, likučiai ir istorija vienoje vietoje.',
    },
    {
      title: 'Startinį paketą',
      description: 'Paruoštą rinkinį nuo 150 € greitam startui.',
    },
  ] as const;

  const steps = [
    {
      number: '1',
      title: 'Užpildote paraišką',
      description: 'Ką tik tai padarėte arba darote dabar.',
    },
    {
      number: '2',
      title: 'Peržiūrime per 1–2 d.d.',
      description: 'Rankinė kvalifikacijos patikra.',
    },
    {
      number: '3',
      title: 'Aktyvuojame prieigą',
      description: 'Sutartis, kainos, platforma.',
    },
    {
      number: '4',
      title: 'Pradedate dirbti',
      description: 'Su vadybininko palydėjimu.',
    },
  ] as const;

  return (
    <main className="bg-[#ECE2D3]">
      <NavigationBarSection logoOnly transparentStatic />
      <TapkitePartneriuHeroSection />
      <ResponsibleBeautySection
        eyebrowLabel={null}
        subheading={null}
        heading={
          <>
            <span className="font-light">Ką gausite tapę </span>
            <span className="font-medium">partneriu?</span>
          </>
        }
        cards={[...benefits]}
      />
      <ProcessSection
        heading={
          <>
            <span className="font-medium text-[#3B443A]">Kaip</span>
            <span className="font-light text-[#3B443A]"> tai veikia?</span>
          </>
        }
        introText={null}
        steps={[...steps]}
        ctaLabel={null}
      />
      <TestimonialsSection />
      <FaqSection />
      <FooterSection variant="greenCompact" />
    </main>
  );
}

