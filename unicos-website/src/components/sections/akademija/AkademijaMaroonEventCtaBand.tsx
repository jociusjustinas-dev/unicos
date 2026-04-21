'use client';

import { PAGE_SHELL_CLASS } from '@/config/pageShell';
import { CtaLink } from '@/components/ui/CtaLink';
import { AKADEMIJA_DETAIL_BODY, AKADEMIJA_DETAIL_HEADING } from '@/components/sections/akademija/akademijaDetailTypography';

const R0 = { borderRadius: '0px' } as const;

type Props = {
  ariaLabelledBy: string;
  title: string;
  description: string;
  registerHref: string;
  /** Pilnas mygtuko tekstas, pvz. „Registruotis — 49 €“. */
  registerLabel: string;
  reminderHref?: string;
  reminderLabel?: string;
};

/** Pilno pločio bordo CTA juosta (kremo + outline ant tamsaus) — kaip Neostrata apačioje. */
export function AkademijaMaroonEventCtaBand({
  ariaLabelledBy,
  title,
  description,
  registerHref,
  registerLabel,
  reminderHref = '/kontaktai',
  reminderLabel = 'Gauti priminimą',
}: Props) {
  return (
    <section
      className="w-full bg-[#64151F] py-16 text-center text-[#EFE8DB] max-[767px]:py-12"
      aria-labelledby={ariaLabelledBy}
    >
      <div className={PAGE_SHELL_CLASS}>
        <div className="mx-auto w-full max-w-[48rem]">
          <h2
            id={ariaLabelledBy}
            className="m-0 text-[#EFE8DB]"
            style={{
              ...AKADEMIJA_DETAIL_HEADING,
              fontSize: 'clamp(2rem, 3.4vw, 3rem)',
              lineHeight: 1.06,
              fontWeight: 300,
            }}
          >
            {title}
          </h2>
          <p className="m-0 mt-4 text-[#EFE8DB]/80" style={{ ...AKADEMIJA_DETAIL_BODY, fontSize: '16px', lineHeight: 1.65 }}>
            {description}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <CtaLink
              href={registerHref}
              variant="lightFill"
              labelMode="static"
              className="justify-center px-8"
              style={{ ...AKADEMIJA_DETAIL_BODY, fontWeight: 600, ...R0 }}
            >
              {registerLabel}
            </CtaLink>
            <CtaLink
              href={reminderHref}
              variant="outlineLight"
              labelMode="static"
              className="justify-center px-6"
              style={{ ...AKADEMIJA_DETAIL_BODY, ...R0 }}
            >
              {reminderLabel}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
