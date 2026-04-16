'use client';

import * as React from 'react';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { CtaLink } from '@/components/ui/CtaLink';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

export default function KontaktaiPage() {
  return (
    <main className="bg-[#ECE2D3]">
      <NavigationBarSection />

      <section className="relative z-[2] overflow-x-clip border-b border-[#1A1010]/10 pt-32 pb-20 max-[767px]:pt-24 max-[767px]:pb-14">
        <div className="mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4">
          <div className="grid grid-cols-1 gap-10 min-[992px]:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] min-[992px]:gap-14">
            <div className="flex flex-col gap-7">
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
                className="m-0 max-w-[16ch] tracking-[-0.03em] text-[#1A1010]"
                style={{
                  fontFamily: "'Quiche Sans', Georgia, serif",
                  fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                  lineHeight: 1.05,
                  fontWeight: 300,
                }}
              >
                Susisiekime ir raskime geriausią sprendimą Jūsų verslui.
              </h1>

              <p className="m-0 max-w-[56ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55, fontWeight: 400 }}>
                Parašykite mums dėl partnerystės, mokymų, prekių ženklų ar individualios konsultacijos. UNICOS komanda atsakys ir padės pasirinkti tinkamiausią kryptį.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <CtaLink href="mailto:info@unicos.lt" variant="primary">
                  info@unicos.lt
                </CtaLink>
                <CtaLink href="tel:+37060000000" variant="secondary">
                  +370 600 00 000
                </CtaLink>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 min-[768px]:grid-cols-2">
              <article className="border border-[#1A1010]/12 bg-[#EFE8DB] p-7" style={{ borderRadius: '0px' }}>
                <p className="m-0 uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                  El. paštas
                </p>
                <p className="mt-3 mb-0 text-[#1A1010]" style={{ ...BODY, fontSize: '20px', lineHeight: 1.2, fontWeight: 500 }}>
                  info@unicos.lt
                </p>
                <p className="mt-3 mb-0 text-[#1A1010]/62" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5, fontWeight: 400 }}>
                  Atsakome darbo dienomis 9:00-18:00.
                </p>
              </article>

              <article className="border border-[#1A1010]/12 bg-[#EFE8DB] p-7" style={{ borderRadius: '0px' }}>
                <p className="m-0 uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                  Telefonas
                </p>
                <p className="mt-3 mb-0 text-[#1A1010]" style={{ ...BODY, fontSize: '20px', lineHeight: 1.2, fontWeight: 500 }}>
                  +370 600 00 000
                </p>
                <p className="mt-3 mb-0 text-[#1A1010]/62" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5, fontWeight: 400 }}>
                  Konsultuojame dėl partnerystės ir mokymų.
                </p>
              </article>

              <article className="border border-[#1A1010]/12 bg-[#EFE8DB] p-7" style={{ borderRadius: '0px' }}>
                <p className="m-0 uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                  Adresas
                </p>
                <p className="mt-3 mb-0 text-[#1A1010]" style={{ ...BODY, fontSize: '20px', lineHeight: 1.2, fontWeight: 500 }}>
                  Vilnius, Lietuva
                </p>
                <p className="mt-3 mb-0 text-[#1A1010]/62" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5, fontWeight: 400 }}>
                  Apsilankymus deriname iš anksto telefonu arba el. paštu.
                </p>
              </article>

              <article className="border border-[#3B443A]/22 bg-[#3B443A] p-7 text-[#EFE8DB]" style={{ borderRadius: '0px' }}>
                <p className="m-0 uppercase text-[#EFE8DB]/70" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                  Tapkite partneriu
                </p>
                <p className="mt-3 mb-0 max-w-[20ch]" style={{ ...BODY, fontSize: '20px', lineHeight: 1.25, fontWeight: 500 }}>
                  Užpildykite paraišką ir pradėkime bendradarbiavimą.
                </p>
                <div className="mt-5">
                  <CtaLink href="#" variant="secondary">
                    Pildyti paraišką
                  </CtaLink>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
