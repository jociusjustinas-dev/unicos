'use client';

import Link from 'next/link';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
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

const BODY = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
} as const;

const HEADING = {
  fontFamily: "'Quiche Sans', Georgia, serif",
} as const;

const R0 = { borderRadius: '0px' } as const;

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-8 max-[767px]:px-6 max-[479px]:px-4">
      {children}
    </div>
  );
}

export default function NeostrataPilingaiPage() {
  return (
    <main className="bg-[#EFE8DB] text-[#1A1010]">
      <NavigationBarSection forceLightSurface />

      <div className="pt-28 max-[991px]:pt-24 lg:pt-32">
        <div className="grid min-h-0 grid-cols-1 lg:grid-cols-2">
          {/* Kairė: hero — tamsus fonas, lipnus desktop'e */}
          <aside className="relative border-[#1A1010]/10 bg-[#3B443A] text-[#EFE8DB] lg:border-r lg:border-solid">
            <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
              <div className="flex flex-col gap-6 px-6 py-10 max-[991px]:pb-8 max-[991px]:pt-6 lg:px-8 lg:py-12">
                <p className="m-0 uppercase text-[#EFE8DB]/60" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                  AKADEMIJA / NEOSTRATA RŪGŠTINIŲ PILINGŲ MEISTRIŠKUMAS
                </p>

                <div className="flex flex-wrap gap-2">
                  <span
                    className="border border-solid border-[#64151F] bg-[#64151F] px-2 py-1 text-[#EFE8DB]"
                    style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, ...R0 }}
                  >
                    DERMATOLOGIJA
                  </span>
                  <span
                    className="border border-solid border-[#EFE8DB]/50 px-2 py-1 text-[#EFE8DB]"
                    style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, ...R0 }}
                  >
                    Gyvai
                  </span>
                  <span
                    className="border border-solid border-[#EFE8DB]/50 px-2 py-1 text-[#EFE8DB]"
                    style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, ...R0 }}
                  >
                    LT
                  </span>
                </div>

                <h1
                  className="m-0 text-[#EFE8DB]"
                  style={{ ...HEADING, fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05, fontWeight: 300 }}
                >
                  Neostrata rūgštinių pilingų meistriškumas.
                </h1>

                <p className="m-0 max-w-[52ch] text-[#EFE8DB]/85" style={{ ...BODY, fontSize: '17px', lineHeight: 1.55 }}>
                  Išmokite atlikti profesionalius cheminius pilingus saugiai ir efektyviai. Praktinis seminaras su tarptautiniu sertifikatu.
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#EFE8DB]/88" style={{ ...BODY, fontSize: '15px', lineHeight: 1.5 }}>
                  <span className="flex items-center gap-1.5">
                    <SfCalendar size={16} className="text-[#EFE8DB]" aria-hidden />
                    Spalio 24
                  </span>
                  <span className="flex items-center gap-1.5">
                    <SfClock size={16} className="text-[#EFE8DB]" aria-hidden />
                    10:00–16:00
                  </span>
                  <span className="flex items-center gap-1.5">
                    <SfMapPin size={16} className="text-[#EFE8DB]" aria-hidden />
                    Vilnius, UNICOS Akademija
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    className="h-12 border-0 bg-[#64151F] px-6 text-[#EFE8DB] transition-colors hover:bg-[#4a0f17]"
                    style={{ ...BODY, fontSize: '15px', fontWeight: 500, ...R0 }}
                  >
                    Registruotis
                  </button>
                  <span
                    className="inline-flex h-12 items-center border border-solid border-[#EFE8DB]/35 bg-[#1A1010]/25 px-4 text-[#EFE8DB]"
                    style={{ ...BODY, fontSize: '15px', fontWeight: 500, ...R0 }}
                  >
                    49 €
                  </span>
                </div>
                <p className="m-0 text-[#EFE8DB]/55" style={{ ...BODY, fontSize: '12px', lineHeight: 1.45 }}>
                  Vieta garantuojama tik po apmokėjimo.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    className="h-12 border border-solid border-[#EFE8DB] bg-transparent px-6 text-[#EFE8DB] transition-colors hover:bg-[#EFE8DB]/10"
                    style={{ ...BODY, fontSize: '15px', fontWeight: 500, ...R0 }}
                  >
                    Gauti priminimą
                  </button>
                  <p className="m-0 text-[#EFE8DB]/55" style={{ ...BODY, fontSize: '12px', lineHeight: 1.45 }}>
                    Atsiųsime el. paštu.
                  </p>
                </div>

                <p className="m-0 uppercase text-[#EFE8DB]/80" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600 }}>
                  Liko 4 vietos
                </p>
              </div>
            </div>
          </aside>

          {/* Dešinė: likęs turinys */}
          <div className="min-w-0 bg-[#EFE8DB]">
            <div className="flex flex-col gap-4 border-b border-solid border-[#1A1010]/10 px-6 py-8 max-[991px]:pt-6 lg:px-8 lg:py-10">
              <div className="flex min-h-[220px] items-center justify-center bg-[#3B443A]/12 text-[#1A1010]/55" style={{ ...BODY, ...R0, fontSize: '15px', letterSpacing: '0.06em' }}>
                Neostrata Training
              </div>
              <div className="flex min-h-[100px] items-center justify-center bg-[#64151F]/10 text-[#64151F]" style={{ ...BODY, ...R0, fontSize: '14px', letterSpacing: '0.06em' }}>
                Neostrata Pro System
              </div>
            </div>

            <section className="py-16 max-[767px]:py-12">
              <Container>
                <div className="mx-auto max-w-[720px] text-center">
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
                <div className="mx-auto max-w-[900px]">
                  <h2 className="m-0 text-center text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
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
                <h2 className="m-0 text-center text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
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

            <section className="border-y border-solid border-[#1A1010]/10 bg-[#3B443A] py-16 text-[#EFE8DB] max-[767px]:py-12">
              <Container>
                <div className="mx-auto max-w-[900px]">
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
                <div className="mx-auto max-w-[720px]">
                  <h2 className="m-0 text-center text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
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
                <h2 className="m-0 text-center text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
                  Praktinė informacija.
                </h2>
                <div className="mx-auto mt-8 grid max-w-[1000px] grid-cols-1 gap-4 min-[768px]:grid-cols-2">
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
                <div className="mx-auto mt-6 max-w-[1000px] border border-solid border-[#1A1010]/15 bg-[#EFE8DB]" style={R0}>
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

            <section className="bg-[#64151F] py-16 max-[767px]:py-12">
              <Container>
                <div className="mx-auto max-w-[980px]">
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

      <FooterSection />
    </main>
  );
}
