'use client';

import * as React from 'react';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { SfEnvelope, SfMapPin, SfPhone } from '@/components/icons/feather';
import { KontaktaiFormSection } from '@/components/sections/KontaktaiFormSection';
import { KontaktaiCtaSection } from '@/components/sections/KontaktaiCtaSection';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export default function KontaktaiPage() {
  return (
    <main className="bg-[#ECE2D3]">
      <NavigationBarSection forceLightSurface />

      <section className="relative z-[2] overflow-x-clip border-b border-[#1A1010]/10 pt-40 pb-20 max-[767px]:pt-28 max-[767px]:pb-14">
        <div className="mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
          <div className="flex flex-col gap-12 max-[767px]:gap-10">
            <div className="mx-auto flex w-full max-w-[980px] flex-col items-center gap-7 text-center max-[767px]:items-start max-[767px]:text-left">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
                <span
                  className="uppercase text-[#64151F]"
                  style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
                >
                  Kontaktai
                </span>
              </div>

              <h1
                className="m-0 max-w-[16ch] tracking-[-0.03em] text-[#64151F]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                  lineHeight: 1.05,
                  fontWeight: 300,
                }}
              >
                <span className="font-light">Visada </span>
                <span className="font-medium">esame šalia.</span>
              </h1>

              <p className="m-0 max-w-[62ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
                Nesvarbu, ar turite klausimą, ar norite pradėti partnerystę — parašykite, paskambinkite ar tiesiog užsukite. Atsakome greitai ir be biurokratijos.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 min-[992px]:grid-cols-3">
              <article className="border border-[#1A1010]/12 bg-[#EFE8DB] p-7" style={{ borderRadius: '0px' }}>
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center border border-[#64151F]/20 bg-[rgba(100,21,31,0.08)] text-[#64151F]" style={{ borderRadius: '0px' }}>
                  <SfPhone size={17} className="text-current" aria-hidden />
                </div>
                <p className="m-0 uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                  Telefonas
                </p>
                <a
                  href="tel:+37052705712"
                  className="mt-3 inline-flex no-underline text-[#1A1010] transition-opacity duration-200 hover:opacity-60"
                  style={{ ...BODY, fontSize: '20px', lineHeight: 1.2, fontWeight: 500 }}
                >
                  (+370 5) 270 57 12
                </a>
                <p className="mt-3 mb-0 text-[#1A1010]/62" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5, fontWeight: 400 }}>
                  B2B linija, darbo dienomis 8:00-17:00. Greičiausias būdas gauti atsakymą skubiu klausimu.
                </p>
              </article>

              <article className="border border-[#1A1010]/12 bg-[#EFE8DB] p-7" style={{ borderRadius: '0px' }}>
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center border border-[#64151F]/20 bg-[rgba(100,21,31,0.08)] text-[#64151F]" style={{ borderRadius: '0px' }}>
                  <SfEnvelope size={17} className="text-current" aria-hidden />
                </div>
                <p className="m-0 uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                  El. paštas
                </p>
                <a
                  href="mailto:info@unicos.lt"
                  className="mt-3 inline-flex no-underline text-[#1A1010] transition-opacity duration-200 hover:opacity-60"
                  style={{ ...BODY, fontSize: '20px', lineHeight: 1.2, fontWeight: 500 }}
                >
                  info@unicos.lt
                </a>
                <p className="mt-3 mb-0 text-[#1A1010]/62" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5, fontWeight: 400 }}>
                  Atsakome per 24 val. Rašykite bet kuriuo metu.
                </p>
              </article>

              <article className="border border-[#1A1010]/12 bg-[#EFE8DB] p-7" style={{ borderRadius: '0px' }}>
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center border border-[#64151F]/20 bg-[rgba(100,21,31,0.08)] text-[#64151F]" style={{ borderRadius: '0px' }}>
                  <SfMapPin size={17} className="text-current" aria-hidden />
                </div>
                <p className="m-0 uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                  Adresas
                </p>
                <a
                  href="https://maps.google.com/?q=Metalo+g.+13a,+Vilnius"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex no-underline text-[#1A1010] transition-opacity duration-200 hover:opacity-60"
                  style={{ ...BODY, fontSize: '20px', lineHeight: 1.2, fontWeight: 500 }}
                >
                  Metalo g. 13a, LT - 02190, Vilnius
                </a>
                <p className="mt-3 mb-0 text-[#1A1010]/62" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5, fontWeight: 400 }}>
                  Aplankymas tik iš anksto susitarus su vadybininku.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <KontaktaiFormSection />
      <KontaktaiCtaSection />

      <FooterSection />
    </main>
  );
}
