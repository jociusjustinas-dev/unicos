'use client';

import Link from 'next/link';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { AkademijaDetailH2 } from '@/components/sections/akademija/AkademijaDetailH2';
import { AkademijaDetailSection } from '@/components/sections/akademija/AkademijaDetailSection';
import { AkademijaMaroonEventCtaBand } from '@/components/sections/akademija/AkademijaMaroonEventCtaBand';
import { AkademijaRelatedEventsSection } from '@/components/sections/akademija/AkademijaRelatedEventsSection';
import { CtaLink } from '@/components/ui/CtaLink';
import { PAGE_SHELL_CLASS } from '@/config/pageShell';
import {
  SfClock,
  SfMapPin,
  SfCheckboxCheck,
  SfAward,
  SfFaceSmile,
  SfLayers,
  SfActivity,
} from '@/components/icons/feather';
import { AKADEMIJA_EVENTS, type AkademijaEvent } from '@/config/akademijaPage';

const BODY = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
} as const;

const HEADING = {
  fontFamily: "'Quiche Sans', Georgia, serif",
} as const;

const R0 = { borderRadius: '0px' } as const;

const NEOSTRATA_EVENT: AkademijaEvent = (() => {
  const e = AKADEMIJA_EVENTS.find((x) => x.id === 'evt-1');
  if (!e) throw new Error('Akademija: evt-1 (Neostrata) nerastas konfigūracijoje');
  return e;
})();

function NeostrataHeroHeading({ title }: { title: string }) {
  const parts = title.trim().split(/\s+/);
  if (parts.length >= 4 && parts[0].toLowerCase() === 'neostrata' && parts[parts.length - 1].toLowerCase().includes('meistrišk')) {
    const lead = `${parts[0]} `;
    const mid = `${parts.slice(1, -1).join(' ')} `;
    const tail = parts[parts.length - 1];
    return (
      <>
        <span className="font-medium">{lead}</span>
        <span className="font-light">{mid}</span>
        <span className="font-medium">{tail}</span>.
      </>
    );
  }
  return (
    <>
      {title}.
    </>
  );
}

export default function NeostrataPilingaiPage() {
  const event = NEOSTRATA_EVENT;

  return (
    <main className="bg-[#EFE8DB] text-[#1A1010]">
      <NavigationBarSection forceLightSurface />

      {/* md:pt-32 sutampa su nav; kairė be vidinio scroll — tik puslapio scroll */}
      <div className="pt-24 md:pt-32">
        <div className={PAGE_SHELL_CLASS}>
          <nav className="mb-6 md:mb-8" aria-label="Breadcrumb">
            <ol className="m-0 flex list-none flex-wrap items-center gap-3 p-0">
              <li>
                <Link
                  href="/akademija"
                  className="uppercase text-[#64151F] transition-opacity hover:opacity-80"
                  style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
                >
                  Akademija
                </Link>
              </li>
              <li className="text-[#1A1010]/45" style={{ ...BODY, fontSize: '11px', fontWeight: 400 }}>
                /
              </li>
              <li>
                <span
                  className="uppercase text-[#64151F]"
                  style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}
                  aria-current="page"
                >
                  Neostrata pilingai
                </span>
              </li>
            </ol>
          </nav>

          <div className="grid min-h-0 grid-cols-1 items-start gap-y-10 md:grid-cols-2 md:items-start md:gap-x-16 md:gap-y-0 lg:gap-x-24">
            {/* Kairė: lipnus hero; turinys vertikaliai centruotas kremo plokštumoje */}
            <aside
              className="relative w-full self-start bg-[var(--color-cream-panel)] text-[#1A1010] md:sticky md:z-[1] md:top-[var(--site-sticky-top,8rem)] md:transition-[top] md:duration-500 md:ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <div className="flex min-h-[min(520px,calc(100svh-7rem))] flex-col justify-center gap-3 px-6 py-8 md:min-h-[min(580px,calc(100vh-9rem))] md:gap-4 md:px-12 md:py-12">
                  <div className="flex min-w-0 flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border-[1px] border-solid border-[#1A1010]/18 bg-white/20 px-2 py-1 uppercase text-[#1A1010]"
                          style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, lineHeight: '12px', ...R0 }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {event.statusLine ? (
                      <span
                        className="shrink-0 whitespace-nowrap border border-solid border-[#64151F] bg-[#64151F] px-2 py-1 uppercase text-[#EFE8DB]"
                        style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 600, lineHeight: '12px', ...R0 }}
                      >
                        {event.statusLine}
                      </span>
                    ) : null}
                  </div>

                  <h1
                    className="m-0 text-[26px] leading-[1.08] text-[#64151F] md:text-[36px] lg:text-[42px]"
                    style={{ ...HEADING, fontWeight: 300 }}
                  >
                    <NeostrataHeroHeading title={event.title} />
                  </h1>

                  <p className="m-0 max-w-[52ch] text-[#1A1010]" style={{ ...BODY, fontSize: '16px', lineHeight: 1.5 }}>
                    Išmokite atlikti profesionalius cheminius pilingus saugiai ir efektyviai. Praktinis seminaras su tarptautiniu sertifikatu.
                  </p>

                  <div className="flex flex-col items-start gap-2.5 text-[#1A1010]/82" style={{ ...BODY, fontSize: '14px', lineHeight: 1.45 }}>
                    <span className="inline-flex max-w-full items-center gap-2">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                        <SfClock className="block shrink-0 text-[#1A1010]/55 !overflow-visible" size={16} strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="min-w-0 break-words">{event.datetime}</span>
                    </span>
                    <span className="inline-flex max-w-full items-center gap-2">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                        <SfMapPin className="block shrink-0 text-[#1A1010]/55 !overflow-visible" size={16} strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="min-w-0 break-words">{event.rowLeft}</span>
                    </span>
                    <span className="inline-flex max-w-full items-center gap-2">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                        <SfAward className="block shrink-0 text-[#1A1010]/55 !overflow-visible" size={16} strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="min-w-0 break-words">{event.rowRight}</span>
                    </span>
                  </div>

                  <div className="flex flex-col gap-2.5 border-t-[1px] border-solid border-[#1A1010]/10 pt-3 sm:flex-row sm:items-center sm:gap-3">
                    <div
                      className="h-14 w-14 shrink-0 overflow-hidden border-[1px] border-solid border-[#1A1010]/12 bg-white/20"
                      style={R0}
                      aria-hidden
                    >
                      {event.speakerAvatar ? (
                        <img src={event.speakerAvatar} alt="" className="h-full w-full object-cover" loading="lazy" />
                      ) : null}
                    </div>
                    <div className="flex min-w-0 flex-col gap-1">
                      <span className="text-[#1A1010]" style={{ ...BODY, fontSize: '15px', fontWeight: 500, lineHeight: 1.4 }}>
                        {event.speaker}
                      </span>
                      <span className="text-[#1A1010]/60" style={{ ...BODY, fontSize: '14px', fontWeight: 400, lineHeight: 1.4 }}>
                        {event.speakerRole}
                      </span>
                    </div>
                  </div>

                  <div className="border-t-[1px] border-solid border-[#1A1010]/10 pt-3">
                    <div className="flex w-full max-w-[640px] flex-col items-stretch justify-start gap-6 sm:flex-row sm:items-start sm:gap-8">
                      <div className="flex flex-col items-start gap-2.5 sm:items-start">
                        <CtaLink
                          href={event.href}
                          variant="primary"
                          labelMode="static"
                          className="min-h-[var(--btn-height)] min-w-[240px] justify-center rounded-none px-8"
                          style={{ ...BODY, ...R0 }}
                        >
                          Registruotis — {event.price}
                        </CtaLink>
                        <span
                          className="uppercase text-[#1A1010]/62"
                          style={{ fontSize: '10px', letterSpacing: '0.12em', ...BODY, fontWeight: 500, lineHeight: 1.45 }}
                        >
                          Vieta garantuojama tik po apmokėjimo.
                        </span>
                      </div>
                      <div className="flex flex-col items-start gap-2.5 sm:items-start">
                        <CtaLink
                          href="/kontaktai"
                          variant="outline"
                          labelMode="static"
                          className="min-h-[var(--btn-height)] min-w-[240px] justify-center rounded-none px-6"
                          style={{ ...BODY, ...R0 }}
                        >
                          Gauti priminimą
                        </CtaLink>
                        <span
                          className="uppercase text-[#1A1010]/62"
                          style={{ fontSize: '10px', letterSpacing: '0.12em', ...BODY, fontWeight: 500, lineHeight: 1.45 }}
                        >
                          Atsiųsime el. paštu.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
            </aside>

            {/* Dešinė: hero nuotrauka kortelėje; žemiau — likęs turinys */}
            <div className="min-h-0 min-w-0 bg-[#EFE8DB] text-left">
              <div
                className="border border-solid border-[#64151F] bg-[#EAE3D6] p-3 shadow-[0_1px_0_rgba(26,16,16,0.04)] md:p-4"
                style={{ borderRadius: '8px' }}
              >
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden max-[767px]:aspect-[5/4]"
                  style={{ borderRadius: '6px' }}
                >
                  <img
                    src={event.imageSrc}
                    alt=""
                    className="h-full w-full object-cover"
                    sizes="(max-width: 767px) 100vw, 50vw"
                    loading="eager"
                  />
                </div>
              </div>

            <AkademijaDetailSection>
              <AkademijaDetailH2>Apie seminarą.</AkademijaDetailH2>
              <p className="m-0 mt-5 text-[#1A1010]/82" style={{ ...BODY, fontSize: '17px', lineHeight: 1.65 }}>
                Šešių valandų praktinis seminaras, skirtas dermatologams ir kosmetologams, norintiems gilinti žinias apie cheminius pilingus su Neostrata produktais. Dirbsite su realiomis priemonėmis, analizuosite odos tipus ir mokysitės parinkti tinkamą pilingą kiekvienam pacientui. Seminarą veda Dr. Rūta Gancevičienė — dermatovenerologė su tarptautine klinikine patirtimi.
              </p>
            </AkademijaDetailSection>

            <AkademijaDetailSection maxWidthClass="max-w-[900px]">
              <AkademijaDetailH2>Ką išmoksite?</AkademijaDetailH2>
              <div className="mt-8">
                {[
                  'Glikolio, polihidroksirūgščių ir retinoidų rūgščių veikimo mechanizmai.',
                  'Odos tipo ir būklės vertinimas prieš pilingą.',
                  'Tinkamo pilingo parinkimas pagal paciento poreikius ir jautrumą.',
                  'Praktinis darbas: pilingo atlikimas ant modelio žingsnis po žingsnio.',
                  'Postprocedūrinė priežiūra ir namų priežiūros rekomendacijos pacientui.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-solid border-[#1A1010]/10 py-4">
                    <SfCheckboxCheck size={18} className="mt-[3px] shrink-0 text-[#64151F]" aria-hidden />
                    <p className="m-0 min-w-0 flex-1 text-[#1A1010]/85" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </AkademijaDetailSection>

            <AkademijaDetailSection maxWidthClass="max-w-none">
              <AkademijaDetailH2>Kam skirtas šis seminaras?</AkademijaDetailH2>
              <div className="mt-8 flex max-w-[900px] flex-col gap-4">
                {[
                  { title: 'Dermatovenerologams', body: 'Norite praplėsti procedūrų arsenalą mokslu pagrįstais pilingais.', Icon: SfFaceSmile },
                  { title: 'Kosmetologams', body: 'Dirbate su odos priežiūra ir norite gilesnio supratimo apie cheminius pilingus.', Icon: SfLayers },
                  { title: 'Estetinės medicinos specialistams', body: 'Ieškote papildomų neinvazinių procedūrų savo klinikai.', Icon: SfActivity },
                ].map(({ title, body, Icon }) => (
                  <div key={title} className="border border-solid border-[#1A1010]/15 bg-[#EFE8DB] p-6 max-[479px]:p-5" style={R0}>
                    <div
                      className="mb-5 flex h-10 w-10 items-center justify-center border border-solid border-[#64151F] bg-[rgba(100,21,31,0.06)]"
                      style={R0}
                    >
                      <Icon size={20} className="text-[#64151F]" strokeWidth={1.5} aria-hidden />
                    </div>
                    <h3
                      className="m-0 text-[#64151F]"
                      style={{
                        ...HEADING,
                        fontSize: 'clamp(16px, 1.85vw, 19px)',
                        lineHeight: 1.28,
                        fontWeight: 400,
                      }}
                    >
                      {title}
                    </h3>
                    <p className="m-0 mt-3 text-[#1A1010]/75" style={{ ...BODY, fontSize: '15px', lineHeight: 1.6 }}>
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </AkademijaDetailSection>

            <AkademijaDetailSection>
              <AkademijaDetailH2>Seminaro programa.</AkademijaDetailH2>
              <div className="mt-8">
                {[
                  ['10:00–10:30', 'Registracija ir pažintis.'],
                  ['10:30–12:00', 'Teorinė dalis: rūgščių klasifikacija, veikimo mechanizmai, indikacijos ir kontraindikacijos.'],
                  ['12:00–12:30', 'Pertrauka.'],
                  ['12:30–14:00', 'Praktinė dalis I: odos vertinimas ir pilingo parinkimas.'],
                  ['14:00–14:30', 'Pietų pertrauka.'],
                  ['14:30–15:30', 'Praktinė dalis II: pilingo atlikimas ant modelio su supervizija.'],
                  ['15:30–16:00', 'Klausimų sesija ir sertifikatų įteikimas.'],
                ].map(([time, text]) => (
                  <div
                    key={time}
                    className="grid grid-cols-[132px_minmax(0,1fr)] gap-4 border-b border-solid border-[#1A1010]/10 py-4 max-[639px]:grid-cols-1 max-[639px]:gap-1"
                  >
                    <p className="m-0 text-[#64151F]" style={{ ...BODY, fontSize: '16px', fontWeight: 700, lineHeight: 1.5 }}>
                      {time}
                    </p>
                    <p className="m-0 text-[#1A1010]/84" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55 }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </AkademijaDetailSection>
            </div>
          </div>
        </div>
      </div>

      <AkademijaMaroonEventCtaBand
        ariaLabelledBy="neostrata-cta-heading"
        title="Užtikrinkite savo vietą"
        description="Dalyvių skaičius ribotas — registruokitės dabar ir gaukite tarptautinį sertifikatą."
        registerHref={event.href}
        registerLabel={`Registruotis — ${event.price}`}
      />

      <AkademijaRelatedEventsSection
        excludeEventId="evt-1"
        headingId="neostrata-kiti-renginiai-heading"
        title="Kiti artimiausi renginiai"
        viewAllHref="/akademija"
        viewAllLabel="Visi renginiai"
      />

      <FooterSection />
    </main>
  );
}
