'use client';

import Link from 'next/link';

const BODY = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
} as const;

const HEADING = {
  fontFamily: "'Quiche Sans', Georgia, serif",
} as const;

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
      <section className="py-24 max-[767px]:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 min-[992px]:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] min-[992px]:items-start">
            <div className="flex flex-col gap-6">
              <p className="m-0 uppercase text-[#1A1010]/65" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                AKADEMIJA / NEOSTRATA RUGSTINIU PILINGU MEISTRISKUMAS
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="border border-solid border-[#64151F] bg-[#64151F] px-2 py-1 text-[#EFE8DB]" style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, borderRadius: '0px' }}>
                  DERMATOLOGIJA
                </span>
                <span className="border border-solid border-[#64151F] px-2 py-1 text-[#64151F]" style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, borderRadius: '0px' }}>
                  Gyvai
                </span>
                <span className="border border-solid border-[#64151F] px-2 py-1 text-[#64151F]" style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, borderRadius: '0px' }}>
                  LT
                </span>
              </div>

              <h1 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', lineHeight: 1.03, fontWeight: 300 }}>
                Neostrata rugstiniu pilingu meistriskumas.
              </h1>

              <p className="m-0 max-w-[62ch] text-[#1A1010]/80" style={{ ...BODY, fontSize: '17px', lineHeight: 1.55 }}>
                Ismokite atlikti profesionalius cheminius pilingus saugiai ir efektyviai. Praktinis seminaras su tarptautiniu sertifikatu.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#1A1010]/82" style={{ ...BODY, fontSize: '15px', lineHeight: 1.5 }}>
                <span>📅 Spalio 24</span>
                <span>🕐 10:00-16:00</span>
                <span>📍 Vilnius, UNICOS Akademija</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="h-12 border-0 bg-[#64151F] px-6 text-[#EFE8DB]" style={{ ...BODY, fontSize: '15px', fontWeight: 500, borderRadius: '0px' }}>
                  Registruotis
                </button>
                <span className="inline-flex h-12 items-center bg-[#3B443A] px-4 text-[#EFE8DB]" style={{ ...BODY, fontSize: '15px', fontWeight: 500, borderRadius: '0px' }}>
                  49 EUR
                </span>
              </div>
              <p className="m-0 text-[#1A1010]/58" style={{ ...BODY, fontSize: '12px', lineHeight: 1.45 }}>
                Vieta garantuojama tik po apmokejimo.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button className="h-12 border border-solid border-[#64151F] bg-transparent px-6 text-[#64151F]" style={{ ...BODY, fontSize: '15px', fontWeight: 500, borderRadius: '0px' }}>
                  Gauti priminima
                </button>
                <p className="m-0 text-[#1A1010]/58" style={{ ...BODY, fontSize: '12px', lineHeight: 1.45 }}>
                  Atsiusime el. pastu.
                </p>
              </div>

              <p className="m-0 uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600 }}>
                Liko 4 vietos
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex min-h-[430px] items-center justify-center bg-[#3B443A] text-[#EFE8DB]" style={{ ...BODY, borderRadius: '0px', fontSize: '15px', letterSpacing: '0.06em' }}>
                Neostrata Training
              </div>
              <div className="flex min-h-[120px] items-center justify-center bg-[#64151F] text-[#EFE8DB]" style={{ ...BODY, borderRadius: '0px', fontSize: '14px', letterSpacing: '0.06em' }}>
                Neostrata Pro System
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
              Apie seminara.
            </h2>
            <p className="m-0 mt-5 text-[#1A1010]/82" style={{ ...BODY, fontSize: '17px', lineHeight: 1.65 }}>
              Sesiu valandu praktinis seminaras, skirtas dermatologams ir kosmetologams, norintiems gilinti zinias apie cheminius pilingus su Neostrata produktais. Dirbsite su realiomis priemonemis, analizuosite odos tipus ir mokysites parinkti tinkama pilinga kiekvienam pacientui. Seminara veda Dr. Ruta Ganceviciene - dermatovenerologe su tarptautine klinikine patirtimi.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <div className="mx-auto max-w-[900px]">
            <h2 className="m-0 text-center text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
              Ka ismoksite?
            </h2>
            <div className="mt-8">
              {[
                'Glikolo, polihidroksi ir retinoidu rugsciu veikimo mechanizmai.',
                'Odos tipo ir bukles vertinimas pries pilinga.',
                'Tinkamo pilingo parinkimas pagal paciento poreikius ir jautruma.',
                'Praktinis darbas: pilingo atlikimas ant modelio zingsnis po zingsnio.',
                'Post-procedurine prieziura ir namu prieziuros rekomendacijos pacientui.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-solid border-[#1A1010]/10 py-4">
                  <span className="mt-[2px] text-[#64151F]" style={{ ...BODY, fontSize: '16px', fontWeight: 700 }}>
                    ✓
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

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <h2 className="m-0 text-center text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
            Kam skirtas sis seminaras?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 min-[992px]:grid-cols-3">
            {[
              ['Dermatovenerologams', 'Norite praplest proceduru arsenala mokslu pagristais pilingais.'],
              ['Kosmetologams', 'Dirbate su odos prieziura ir norite gilesnio supratimo apie cheminius pilingus.'],
              ['Estetines medicinos specialistams', 'Ieskote papildomu neinvaziniu proceduru savo klinikai.'],
            ].map(([title, body]) => (
              <div key={title} className="border border-solid border-[#1A1010]/15 p-8" style={{ borderRadius: '0px' }}>
                <div className="mb-5 flex h-10 w-10 items-center justify-center border border-solid border-[#64151F] bg-[#EFE8DB]" style={{ ...BODY, borderRadius: '999px', fontSize: '12px', color: '#64151F' }}>
                  ●
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

      <section className="bg-[#3B443A] py-24 max-[767px]:py-16">
        <Container>
          <div className="mx-auto max-w-[900px]">
            <h2 className="m-0 text-[#EFE8DB]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
              Lektore.
            </h2>
            <div className="mt-6 h-20 w-20 bg-[#EFE8DB]/20" style={{ borderRadius: '999px' }} />
            <h3 className="m-0 mt-5 text-[#EFE8DB]" style={{ ...HEADING, fontSize: '31px', lineHeight: 1.1, fontWeight: 400 }}>
              Dr. Ruta Ganceviciene
            </h3>
            <p className="m-0 mt-2 text-[#EFE8DB]/60" style={{ ...BODY, fontSize: '16px', lineHeight: 1.45 }}>
              Dermatovenerologe
            </p>
            <p className="m-0 mt-5 max-w-[70ch] text-[#EFE8DB]/80" style={{ ...BODY, fontSize: '16px', lineHeight: 1.65 }}>
              Tarptautine patirti turinti dermatovenerologe, Neostrata klinikiniu protokolu eksperte. Reguliariai veda profesionalius seminarus Lietuvoje ir uzsienyje. Moksliniu publikaciju autore dermatologijos srityje.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="m-0 text-center text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
              Seminaro programa.
            </h2>
            <div className="mt-8">
              {[
                ['10:00-10:30', 'Registracija ir pazintis.'],
                ['10:30-12:00', 'Teorine dalis: rugsciu klasifikacija, veikimo mechanizmai, indikacijos ir kontraindikacijos.'],
                ['12:00-12:30', 'Pertrauka.'],
                ['12:30-14:00', 'Praktine dalis I: odos vertinimas ir pilingo parinkimas.'],
                ['14:00-14:30', 'Pietu pertrauka.'],
                ['14:30-15:30', 'Praktine dalis II: pilingo atlikimas ant modelio su supervizija.'],
                ['15:30-16:00', 'Klausimu sesija ir sertifikatu iteikimas.'],
              ].map(([time, text]) => (
                <div key={time} className="grid grid-cols-[132px_minmax(0,1fr)] gap-4 border-b border-solid border-[#1A1010]/10 py-4 max-[639px]:grid-cols-1 max-[639px]:gap-1">
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

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <h2 className="m-0 text-center text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
            Praktine informacija.
          </h2>
          <div className="mx-auto mt-8 grid max-w-[1000px] grid-cols-1 gap-4 min-[768px]:grid-cols-2">
            {[
              ['📍 Vieta', 'Vilnius, UNICOS Akademija'],
              ['📅 Data ir laikas', '2026 m. spalio 24 d., 10:00-16:00.'],
              ['💳 Kaina', '49 EUR (su PVM). Partneriams - specialios salygos.'],
              ['🏆 Sertifikatas', 'Tarptautinis Neostrata sertifikatas, patvirtinantis kompetencija atlikti profesinius pilingus.'],
            ].map(([title, body]) => (
              <div key={title} className="border border-solid border-[#1A1010]/15 p-6" style={{ borderRadius: '0px' }}>
                <h3 className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '17px', lineHeight: 1.3, fontWeight: 600 }}>
                  {title}
                </h3>
                <p className="m-0 mt-2 text-[#1A1010]/78" style={{ ...BODY, fontSize: '15px', lineHeight: 1.6 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-[1000px] border border-solid border-[#1A1010]/15" style={{ borderRadius: '0px' }}>
            <details>
              <summary className="cursor-pointer list-none px-6 py-4 text-[#64151F]" style={{ ...BODY, fontSize: '16px', fontWeight: 600 }}>
                Registracijos salygos.
              </summary>
              <div className="border-t border-solid border-[#1A1010]/10 px-6 py-4">
                <p className="m-0 text-[#1A1010]/78" style={{ ...BODY, fontSize: '15px', lineHeight: 1.65 }}>
                  Vieta garantuojama tik po apmokejimo. Atsaukus registracija likus 3 ir daugiau darbo dienu - graziname pilna suma. Atsaukus veliau - suma negrazinama, taciau galite perleisti vieta kolegai. Dalyviu skaicius ribotas - registruokites is anksto.
                </p>
              </div>
            </details>
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', lineHeight: 1.08, fontWeight: 300 }}>
              Kiti artimiausi renginiai.
            </h2>
            <Link href="/akademija" className="text-[#64151F] underline underline-offset-2" style={{ ...BODY, fontSize: '15px', fontWeight: 500 }}>
              Visi renginiai →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 min-[992px]:grid-cols-2">
            {[
              {
                badge: 'KOSMETOLOGIJA',
                title: 'Guinot aparatines proceduros: Hydradermie',
                location: 'Kaunas',
                price: 'Nemokama',
                priceColor: '#3B443A',
                date: 'Lapkricio 05',
              },
              {
                badge: 'ESTETINE MEDICINA',
                title: 'Fillmed mezoterapijos protokolai',
                location: 'Vilnius',
                price: '79 EUR',
                priceColor: '#64151F',
                date: 'Gruodzio 03',
              },
            ].map((card) => (
              <article key={card.title} className="border border-solid border-[#1A1010]/15 p-6" style={{ borderRadius: '0px' }}>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="border border-solid border-[#64151F] bg-[#64151F] px-2 py-1 text-[#EFE8DB]" style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, borderRadius: '0px' }}>
                    {card.badge}
                  </span>
                  <span className="border border-solid border-[#64151F] px-2 py-1 text-[#64151F]" style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, borderRadius: '0px' }}>
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
                <Link href="/akademija" className="mt-5 inline-block text-[#64151F] underline underline-offset-2" style={{ ...BODY, fontSize: '15px', fontWeight: 500 }}>
                  Placiau →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#64151F] py-24 max-[767px]:py-16">
        <Container>
          <div className="mx-auto max-w-[980px]">
            <h2 className="m-0 text-[#EFE8DB]" style={{ ...HEADING, fontSize: 'clamp(2rem, 3.4vw, 3rem)', lineHeight: 1.06, fontWeight: 300 }}>
              Uztikrinkite savo vieta.
            </h2>
            <p className="m-0 mt-4 text-[#EFE8DB]/80" style={{ ...BODY, fontSize: '16px', lineHeight: 1.65 }}>
              Dalyviu skaicius ribotas - registruokites dabar ir gaukite tarptautini sertifikata.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button className="h-12 border-0 bg-[#EFE8DB] px-6 text-[#64151F]" style={{ ...BODY, fontSize: '15px', fontWeight: 600, borderRadius: '0px' }}>
                Registruotis
              </button>
              <span className="text-[#EFE8DB]/60" style={{ ...BODY, fontSize: '15px' }}>
                49 EUR
              </span>
              <span className="uppercase text-[#EFE8DB]/60" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600 }}>
                Liko 4 vietos
              </span>
              <button className="h-12 border border-solid border-[#EFE8DB] bg-transparent px-6 text-[#EFE8DB]" style={{ ...BODY, fontSize: '15px', fontWeight: 500, borderRadius: '0px' }}>
                Gauti priminima
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[#EFE8DB]/60" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5 }}>
              <span>📞 +370 600 00000</span>
              <span>💬 Live Chat</span>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
