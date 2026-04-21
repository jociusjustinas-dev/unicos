'use client';

import Link from 'next/link';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { CtaLink } from '@/components/ui/CtaLink';
import {
  SfCalendar,
  SfClock,
  SfMapPin,
  SfCheck,
  SfArrowRight,
  SfCreditCard,
  SfAward,
  SfPhone,
  SfMessage,
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

const PAGE_SHELL =
  'mx-auto w-full max-w-[1800px] px-16 max-[767px]:px-6 max-[479px]:px-4';

function Container({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>;
}

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

      <div className="pt-28 max-[991px]:pt-24 md:pt-32">
        <div className={PAGE_SHELL}>
          <div className="grid min-h-0 grid-cols-1 items-start gap-y-10 md:grid-cols-2 md:gap-x-16 md:gap-y-0 lg:gap-x-24">
            {/* Kairė: hero (#EFE8DB), lipnus md+ — ribojamas viewport aukščiui, kad blokas visada tilptų po headeriu */}
            <aside className="relative min-h-0 w-full self-start bg-[#EFE8DB] text-[#1A1010] md:sticky md:top-28 md:z-[1] md:max-h-[calc(100svh-7rem)] md:overflow-y-auto md:overscroll-y-contain [scrollbar-gutter:stable]">
              <div className="flex flex-col gap-6 py-[clamp(2rem,5dvh,4.5rem)] md:py-[clamp(2.5rem,6dvh,5rem)] md:pr-1">
                  <nav className="mb-0" aria-label="Breadcrumb">
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

                  <div className="flex min-w-0 flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border-[1px] border-solid border-[#1A1010]/18 bg-[#EFE8DB]/80 px-2 py-1 uppercase text-[#1A1010]"
                          style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, lineHeight: '12px', ...R0 }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {event.statusLine ? (
                      <span
                        className="shrink-0 whitespace-nowrap uppercase text-[#64151F]"
                        style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 600, lineHeight: '12px' }}
                      >
                        {event.statusLine}
                      </span>
                    ) : null}
                  </div>

                  <h1
                    className="m-0 text-[36px] leading-[1.05] text-[#64151F] md:text-[56px]"
                    style={{ ...HEADING, fontWeight: 300 }}
                  >
                    <NeostrataHeroHeading title={event.title} />
                  </h1>

                  <p className="m-0 max-w-[52ch] text-[#1A1010]" style={{ ...BODY, fontSize: '17px', lineHeight: 1.55 }}>
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

                  <div className="flex flex-col gap-3 border-t-[1px] border-solid border-[#1A1010]/10 pt-4 sm:flex-row sm:items-center sm:gap-4">
                    <div
                      className="h-14 w-14 shrink-0 overflow-hidden border-[1px] border-solid border-[#1A1010]/12 bg-[#EFE8DB]/80"
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

                  <div className="border-t-[1px] border-solid border-[#1A1010]/10 pt-4">
                    <CtaLink
                      href={event.href}
                      variant="primary"
                      labelMode="static"
                      className="min-h-[52px] self-start rounded-none px-8"
                      style={{ ...BODY, ...R0 }}
                    >
                      Registruotis — {event.price}
                    </CtaLink>
                  </div>

                  <p className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.45 }}>
                    Vieta garantuojama tik po apmokėjimo.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      className="h-[52px] border border-solid border-[#64151F] bg-transparent px-6 text-[#64151F] transition-colors hover:bg-[#64151F]/[0.06]"
                      style={{ ...BODY, fontSize: '15px', fontWeight: 500, ...R0 }}
                    >
                      Gauti priminimą
                    </button>
                    <p className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '12px', lineHeight: 1.45 }}>
                      Atsiųsime el. paštu.
                    </p>
                  </div>
                </div>
            </aside>

            {/* Dešinė: likęs turinys */}
            <div className="min-h-0 min-w-0 bg-[#EFE8DB] text-left">
              <div className="relative aspect-[16/10] w-full overflow-hidden max-[767px]:aspect-[5/4]" style={R0}>
                <img
                  src={event.imageSrc}
                  alt=""
                  className="h-full w-full object-cover"
                  sizes="(max-width: 767px) 100vw, 50vw"
                  loading="eager"
                />
              </div>

            <section className="py-16 max-[767px]:py-12">
              <Container>
                <div className="max-w-[720px] text-left">
                  <h2 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
                    Apie seminarą.
                  </h2>
                  <p className="m-0 mt-5 text-[#1A1010]/82" style={{ ...BODY, fontSize: '17px', lineHeight: 1.65 }}>
                    Šešių valandų praktinis seminaras, skirtas dermatologams ir kosmetologams, norintiems gilinti žinias apie cheminius pilingus su Neostrata produktais. Dirbsite su realiomis priemonėmis, analizuosite odos tipus ir mokysitės parinkti tinkamą pilingą kiekvienam pacientui. Seminarą veda Dr. Rūta Gancevičienė — dermatovenerologė su tarptautine klinikine patirtimi.
                  </p>
                </div>
              </Container>
            </section>

            <section className="py-16 max-[767px]:py-12">
              <Container>
                <div className="max-w-[900px] text-left">
                  <h2 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
                    Ką išmoksite?
                  </h2>
                  <div className="mt-8">
                    {[
                      'Glikolio, polihidroksirūgščių ir retinoidų rūgščių veikimo mechanizmai.',
                      'Odos tipo ir būklės vertinimas prieš pilingą.',
                      'Tinkamo pilingo parinkimas pagal paciento poreikius ir jautrumą.',
                      'Praktinis darbas: pilingo atlikimas ant modelio žingsnis po žingsnio.',
                      'Postprocedūrinė priežiūra ir namų priežiūros rekomendacijos pacientui.',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 border-b border-solid border-[#1A1010]/10 py-4">
                        <span className="mt-1 shrink-0 text-[#64151F]">
                          <SfCheck size={18} strokeWidth={2.5} aria-hidden />
                        </span>
                        <p className="m-0 text-[#1A1010]/85" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55 }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </section>

            <section className="py-16 max-[767px]:py-12">
              <Container>
                <h2 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
                  Kam skirtas šis seminaras?
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-4 min-[992px]:grid-cols-3">
                  {[
                    { title: 'Dermatovenerologams', body: 'Norite praplėsti procedūrų arsenalą mokslu pagrįstais pilingais.', Icon: SfFaceSmile },
                    { title: 'Kosmetologams', body: 'Dirbate su odos priežiūra ir norite gilesnio supratimo apie cheminius pilingus.', Icon: SfLayers },
                    { title: 'Estetinės medicinos specialistams', body: 'Ieškote papildomų neinvazinių procedūrų savo klinikai.', Icon: SfActivity },
                  ].map(({ title, body, Icon }) => (
                    <div key={title} className="border border-solid border-[#1A1010]/15 bg-[#EFE8DB] p-8" style={R0}>
                      <div
                        className="mb-5 flex h-10 w-10 items-center justify-center border border-solid border-[#64151F] bg-[rgba(100,21,31,0.06)]"
                        style={R0}
                      >
                        <Icon size={20} className="text-[#64151F]" strokeWidth={1.5} aria-hidden />
                      </div>
                      <h3 className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '21px', lineHeight: 1.25, fontWeight: 500 }}>
                        {title}
                      </h3>
                      <p className="m-0 mt-3 text-[#1A1010]/75" style={{ ...BODY, fontSize: '15px', lineHeight: 1.6 }}>
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
              </Container>
            </section>

            <section className="border-y border-solid border-[#1A1010]/10 bg-[#3B443A] py-16 text-left text-[#EFE8DB] max-[767px]:py-12">
              <Container>
                <div className="max-w-[900px]">
                  <h2 className="m-0 text-[#EFE8DB]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
                    Lektorė.
                  </h2>
                  <div className="mt-6 h-20 w-20 bg-[#EFE8DB]/20" style={R0} />
                  <h3 className="m-0 mt-5 text-[#EFE8DB]" style={{ ...HEADING, fontSize: '31px', lineHeight: 1.1, fontWeight: 400 }}>
                    Dr. Rūta Gancevičienė
                  </h3>
                  <p className="m-0 mt-2 text-[#EFE8DB]/60" style={{ ...BODY, fontSize: '16px', lineHeight: 1.45 }}>
                    Dermatovenerologė
                  </p>
                  <p className="m-0 mt-5 max-w-[70ch] text-[#EFE8DB]/80" style={{ ...BODY, fontSize: '16px', lineHeight: 1.65 }}>
                    Tarptautinę patirtį turinti dermatovenerologė, Neostrata klinikinių protokolų ekspertė. Reguliariai veda profesionalius seminarus Lietuvoje ir užsienyje. Mokslinių publikacijų autorė dermatologijos srityje.
                  </p>
                </div>
              </Container>
            </section>

            <section className="py-16 max-[767px]:py-12">
              <Container>
                <div className="max-w-[720px] text-left">
                  <h2 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
                    Seminaro programa.
                  </h2>
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
                </div>
              </Container>
            </section>

            <section className="py-16 max-[767px]:py-12">
              <Container>
                <h2 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
                  Praktinė informacija.
                </h2>
                <div className="mt-8 grid max-w-[1000px] grid-cols-1 gap-4 min-[768px]:grid-cols-2">
                  {[
                    [<SfMapPin key="map" className="mr-2 inline -mt-1" size={18} strokeWidth={2} />, 'Vieta', 'Vilnius, UNICOS Akademija'],
                    [<SfCalendar key="cal" className="mr-2 inline -mt-1" size={18} strokeWidth={2} />, 'Data ir laikas', '2026 m. spalio 24 d., 10:00–16:00.'],
                    [<SfCreditCard key="card" className="mr-2 inline -mt-1" size={18} strokeWidth={2} />, 'Kaina', '49 € (su PVM). Partneriams — specialios sąlygos.'],
                    [<SfAward key="award" className="mr-2 inline -mt-1" size={18} strokeWidth={2} />, 'Sertifikatas', 'Tarptautinis Neostrata sertifikatas, patvirtinantis kompetenciją atlikti profesinius pilingus.'],
                  ].map(([icon, title, body]) => (
                    <div key={title as string} className="border border-solid border-[#1A1010]/15 bg-[#EFE8DB] p-6" style={R0}>
                      <h3 className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '17px', lineHeight: 1.3, fontWeight: 600 }}>
                        {icon as React.ReactNode}
                        {title as string}
                      </h3>
                      <p className="m-0 mt-2 text-[#1A1010]/78" style={{ ...BODY, fontSize: '15px', lineHeight: 1.6 }}>
                        {body as string}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 max-w-[1000px] border border-solid border-[#1A1010]/15 bg-[#EFE8DB]" style={R0}>
                  <details>
                    <summary className="cursor-pointer list-none px-6 py-4 text-[#64151F]" style={{ ...BODY, fontSize: '16px', fontWeight: 600 }}>
                      Registracijos sąlygos.
                    </summary>
                    <div className="border-t border-solid border-[#1A1010]/10 px-6 py-4">
                      <p className="m-0 text-[#1A1010]/78" style={{ ...BODY, fontSize: '15px', lineHeight: 1.65 }}>
                        Vieta garantuojama tik po apmokėjimo. Atšaukus registraciją likus 3 ir daugiau darbo dienų — grąžiname pilną sumą. Atšaukus vėliau — suma negrąžinama, tačiau galite perleisti vietą kolegai. Dalyvių skaičius ribotas — registruokitės iš anksto.
                      </p>
                    </div>
                  </details>
                </div>
              </Container>
            </section>

            <section className="py-16 max-[767px]:py-12">
              <Container>
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <h2 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
                    Kiti artimiausi renginiai.
                  </h2>
                  <Link href="/akademija" className="inline-flex items-center gap-1 text-[#64151F] underline underline-offset-2" style={{ ...BODY, fontSize: '15px', fontWeight: 500 }}>
                    Visi renginiai <SfArrowRight size={14} strokeWidth={2.5} aria-hidden />
                  </Link>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-4 min-[992px]:grid-cols-2">
                  {[
                    {
                      badge: 'KOSMETOLOGIJA',
                      title: 'Guinot aparatinės procedūros: Hydradermie',
                      location: 'Kaunas',
                      price: 'Nemokama',
                      priceColor: '#3B443A',
                      date: 'Lapkričio 05',
                    },
                    {
                      badge: 'ESTETINĖ MEDICINA',
                      title: 'Fillmed mezoterapijos protokolai',
                      location: 'Vilnius',
                      price: '79 €',
                      priceColor: '#64151F',
                      date: 'Gruodžio 03',
                    },
                  ].map((card) => (
                    <article key={card.title} className="border border-solid border-[#1A1010]/15 bg-[#EFE8DB] p-6" style={R0}>
                      <div className="mb-4 flex flex-wrap gap-2">
                        <span
                          className="border border-solid border-[#64151F] bg-[#64151F] px-2 py-1 text-[#EFE8DB]"
                          style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, ...R0 }}
                        >
                          {card.badge}
                        </span>
                        <span
                          className="border border-solid border-[#64151F] px-2 py-1 text-[#64151F]"
                          style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, ...R0 }}
                        >
                          Gyvai
                        </span>
                      </div>
                      <h3 className="m-0 text-[#1A1010]" style={{ ...HEADING, fontSize: '28px', lineHeight: 1.15, fontWeight: 400 }}>
                        {card.title}
                      </h3>
                      <p className="m-0 mt-3 text-[#1A1010]/74" style={{ ...BODY, fontSize: '15px' }}>
                        {card.location}
                      </p>
                      <p className="m-0 mt-2" style={{ ...BODY, fontSize: '18px', fontWeight: 600, color: card.priceColor }}>
                        {card.price}
                      </p>
                      <p className="m-0 mt-2 text-[#1A1010]/74" style={{ ...BODY, fontSize: '15px' }}>
                        {card.date}
                      </p>
                      <Link href="/akademija" className="mt-5 inline-flex items-center gap-1 text-[#64151F] underline underline-offset-2" style={{ ...BODY, fontSize: '15px', fontWeight: 500 }}>
                        Plačiau <SfArrowRight size={14} strokeWidth={2.5} aria-hidden />
                      </Link>
                    </article>
                  ))}
                </div>
              </Container>
            </section>

            <section className="bg-[#64151F] py-16 text-left max-[767px]:py-12">
              <Container>
                <div className="max-w-[980px]">
                  <h2 className="m-0 text-[#EFE8DB]" style={{ ...HEADING, fontSize: 'clamp(2rem, 3.4vw, 3rem)', lineHeight: 1.06, fontWeight: 300 }}>
                    Užtikrinkite savo vietą.
                  </h2>
                  <p className="m-0 mt-4 text-[#EFE8DB]/80" style={{ ...BODY, fontSize: '16px', lineHeight: 1.65 }}>
                    Dalyvių skaičius ribotas — registruokitės dabar ir gaukite tarptautinį sertifikatą.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      className="h-12 border-0 bg-[#EFE8DB] px-6 text-[#64151F] transition-colors hover:bg-white"
                      style={{ ...BODY, fontSize: '15px', fontWeight: 600, ...R0 }}
                    >
                      Registruotis
                    </button>
                    <span className="text-[#EFE8DB]/60" style={{ ...BODY, fontSize: '15px' }}>
                      49 €
                    </span>
                    <span className="uppercase text-[#EFE8DB]/60" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600 }}>
                      Liko 4 vietos
                    </span>
                    <button
                      type="button"
                      className="h-12 border border-solid border-[#EFE8DB] bg-transparent px-6 text-[#EFE8DB] transition-colors hover:bg-[#EFE8DB]/10"
                      style={{ ...BODY, fontSize: '15px', fontWeight: 500, ...R0 }}
                    >
                      Gauti priminimą
                    </button>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[#EFE8DB]/60" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5 }}>
                    <span className="inline-flex items-center gap-1.5">
                      <SfPhone size={16} aria-hidden /> +370 600 00000
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <SfMessage size={16} aria-hidden /> Live Chat
                    </span>
                  </div>
                </div>
              </Container>
            </section>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
