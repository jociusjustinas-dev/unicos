'use client';

import * as React from 'react';
import Link from 'next/link';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { PlatformSplitSection } from '@/components/sections/PlatformSplitSection';
import { UnicosWhySection, type UnicosWhyBubble } from '@/components/sections/UnicosWhySection';
import { ValueFeaturesSection } from '@/components/sections/ValueFeaturesSection';
import { BrandStatsMarqueeSection, type BrandStatsMarqueeItem } from '@/components/sections/BrandStatsMarqueeSection';
import { ResponsibleBeautySection } from '@/components/sections/ResponsibleBeautySection';
import { HOME_PAGE_VALUE_FEATURE_IMAGES } from '@/config/homePageImages';
import {
  SfClock,
  SfActivity,
  SfLayers,
  SfAward,
  SfArrowRight,
  SfFaceSmile,
  SfShield,
  SfCheck,
} from '@/components/icons/feather';

const BODY = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
} as const;

const HEADING = {
  fontFamily: "'Quiche Sans', Georgia, serif",
} as const;

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[1440px] px-8 max-[767px]:px-6 max-[479px]:px-4">{children}</div>;
}

function SectionTitle({ title, subtitle, align = 'center' }: { title: string; subtitle?: string; align?: 'center' | 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-[920px] text-center' : 'max-w-[920px] text-left'}>
      <h2 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(2rem, 3.4vw, 3rem)', lineHeight: 1.06, fontWeight: 300 }}>
        {title}
      </h2>
      {subtitle ? (
        <p className="m-0 mt-4 text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.6 }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function PartnerystePage() {
  return (
    <main className="bg-[#EFE8DB] text-[#1A1010]">
      <NavigationBarSection forceLightSurface />
      <section className="pt-40 pb-24 max-[767px]:pt-28 max-[767px]:pb-16 max-[479px]:pt-24">
        <Container>
          <div className="mx-auto flex max-w-[920px] flex-col items-center text-center">
            <span className="inline-flex border border-solid border-[#64151F] bg-[#64151F] px-2 py-1 text-[#EFE8DB]" style={{ ...BODY, fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', borderRadius: '0px' }}>
              PARTNERYSTE
            </span>
            <h1 className="m-0 mt-6 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', lineHeight: 1.02, fontWeight: 300 }}>
              Augkime kartu.
            </h1>
            <p className="m-0 mt-5 max-w-[760px] text-[#1A1010]/80" style={{ ...BODY, fontSize: '17px', lineHeight: 1.65 }}>
              UNICOS partneryste - tai ne tik produktu tiekimas. Tai asmeninis palaikymas, zinios ir irankiai, padedantys Jusu verslui klesteti kiekviena diena.
            </p>

            <div className="mt-8 flex flex-wrap items-start justify-center gap-3">
              <div className="flex flex-col items-center">
                <button className="h-[52px] border-0 bg-[#64151F] px-6 text-[#EFE8DB]" style={{ ...BODY, borderRadius: '0px', fontSize: '15px', fontWeight: 500 }}>
                  Tapti partneriu
                </button>
                <span className="mt-2 text-[#1A1010]/58" style={{ ...BODY, fontSize: '12px' }}>
                  Patvirtinimas per 24 val.
                </span>
              </div>
              <div className="flex flex-col items-center">
                <button className="h-[52px] border border-solid border-[#64151F] bg-transparent px-6 text-[#64151F]" style={{ ...BODY, borderRadius: '0px', fontSize: '15px', fontWeight: 500 }}>
                  Gauti konsultacija
                </button>
                <span className="mt-2 text-[#1A1010]/58" style={{ ...BODY, fontSize: '12px' }}>
                  15 min. poreikiu analize.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <UnicosWhySection
        heading="Ką reiškia būti UNICOS partneriu?"
        subheading="Tai daugiau nei tiekėjo ir pirkėjo santykis. Tai sistema, sukurta Jūsų augimui."
        showHighlights={false}
      />

      <ValueFeaturesSection
        eyebrow={null}
        heading={
          <>
            <span className="font-light">Kas gali tapti </span>
            <span className="font-medium">partneriu?</span>
          </>
        }
        intro="UNICOS skirtas profesionalams, dirbantiems grožio ir sveikatos srityje."
        tabs={[
          {
            label: 'Kosmetologijos kabinetai ir klinikos',
            heading: 'Kosmetologijos kabinetai ir klinikos',
            body: 'Odos priežiūros procedūros ir namų priežiūros rekomendacijos.',
            image: HOME_PAGE_VALUE_FEATURE_IMAGES[0],
            cta: 'Raskite savo sprendimą',
          },
          {
            label: 'Grožio salonai ir kirpyklos',
            heading: 'Grožio salonai ir kirpyklos',
            body: 'Profesionalių plaukų ir odos produktų pardavimas ir naudojimas.',
            image: HOME_PAGE_VALUE_FEATURE_IMAGES[1],
            cta: 'Raskite savo sprendimą',
          },
          {
            label: 'Estetinės dermatologijos klinikos',
            heading: 'Estetinės dermatologijos klinikos',
            body: 'Injekcijų, lazerinės ir aparatinė procedūros.',
            image: HOME_PAGE_VALUE_FEATURE_IMAGES[2],
            cta: 'Raskite savo sprendimą',
          },
          {
            label: 'Dermakosmetikos konsultantai ir vaistinės',
            heading: 'Dermakosmetikos konsultantai ir vaistinės',
            body: 'Profesionalus produktų rekomendavimas klientams.',
            image: HOME_PAGE_VALUE_FEATURE_IMAGES[3],
            cta: 'Raskite savo sprendimą',
          },
        ]}
      />

      <BrandStatsMarqueeSection
        theme="light"
        items={[
          { value: '500+', label: 'partnerių', description: 'Augančių su mumis' },
          { value: '25 metai', label: '', description: 'Patirties rinkoje' },
          { value: '12 prekių ženklų', label: '', description: 'Atrinktų profesionalams' },
          { value: '24h pristatymas', label: '', description: 'Visoje Lietuvoje' },
        ]}
      />

      <PlatformSplitSection
        eyebrow={null}
        heading={
          <>
            <span className="font-light">UNICOS platforma - </span>
            <span className="font-medium">daugiau laiko Jums.</span>
          </>
        }
        bodyText="Sukūrėme įrankį, kuris paverčia užsakymus malonumu."
        surfaceClassName="bg-white"
        accent="maroon"
        theme="light"
        ctaLabel="Tapti partneriu ir gauti prieigą"
        ctaHref="#tapti-partneriu"
        features={[
          {
            Icon: SfClock,
            title: 'Užsakymai bet kuriuo paros metu',
            body: 'be skambučių ir laukimo.',
          },
          {
            Icon: SfActivity,
            title: 'Likučių stebėjimas realiu laiku',
            body: 'visada žinote, kas sandėlyje.',
          },
          {
            Icon: SfLayers,
            title: 'Patogi užsakymų istorija',
            body: 'pakartokite mėgstamą krepšelį vienu paspaudimu.',
          },
          {
            Icon: SfAward,
            title: 'Asmeninės kainos ir akcijos',
            body: 'viskas matoma iš karto.',
          },
        ]}
      />

      <ResponsibleBeautySection
        eyebrowLabel={null}
        heading={
          <>
            <span className="font-light">Lojalumo </span>
            <span className="font-medium">programa.</span>
          </>
        }
        subheading="Kuo ilgiau dirbame kartu - tuo daugiau naudos Jūsų verslui."
        surfaceClassName="bg-white"
        accent="maroon"
        cards={[
          { title: 'Augančios nuolaidos', description: 'Partnerio kainodara gerėja su kiekvienu ketvirčiu.', Icon: SfActivity },
          { title: 'Pirmenybė naujienoms', description: 'Pirmieji sužinote apie naujus produktus ir mokymus.', Icon: SfCheck },
          { title: 'Asmeniniai pasiūlymai', description: 'Vadybininkas paruošia akcijas, pritaikytas Jūsų poreikiams.', Icon: SfAward },
        ]}
        showGuidanceRow={true}
        guidanceStrip={{
          title: 'Norite sužinoti daugiau?',
          subtitle: 'Visada mielai papasakosime apie lojalumo programą.',
          portraitSrc: 'https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-3.webp',
          portraitAlt: 'Konsultantas',
          cta: {
            href: '/kontaktai',
            label: 'Sužinoti daugiau apie lojalumą',
          },
        }}
      />

      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
