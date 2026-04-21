'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  SfCalendar,
  SfClock,
  SfMapPin,
  SfCheck,
  SfArrowRight,
  SfPhone,
  SfMessage,
  SfFaceSmile,
  SfLayers,
  SfActivity,
} from '@/components/icons/feather';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const HEADING: React.CSSProperties = {
  fontFamily: "'Quiche Sans', Georgia, serif",
};

const R0 = { borderRadius: '0px' } as const;

function useInView(threshold = 0.1, rootMargin = '0px 0px -6% 0px') {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);
  return { ref, visible };
}

function BlockDivider() {
  return (
    <div className="flex justify-center py-2" aria-hidden>
      <div className="h-10 w-px bg-[#1A1010]/28" style={R0} />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="m-0 text-center uppercase text-[#64151F]/75"
      style={{
        ...BODY,
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.12em',
      }}
    >
      {children}
    </p>
  );
}

const SCHEDULE: readonly [string, string][] = [
  ['10:00–10:30', 'Registracija ir pažintis.'],
  ['10:30–12:00', 'Teorinė dalis: rūgščių klasifikacija, veikimo mechanizmai, indikacijos ir kontraindikacijos.'],
  ['12:00–12:30', 'Pertrauka.'],
  ['12:30–14:00', 'Praktinė dalis I: odos vertinimas ir pilingo parinkimas.'],
  ['14:00–14:30', 'Pietų pertrauka.'],
  ['14:30–15:30', 'Praktinė dalis II: pilingo atlikimas ant modelio su supervizija.'],
  ['15:30–16:00', 'Klausimų sesija ir sertifikatų įteikimas.'],
];

const OUTCOMES: readonly string[] = [
  'Glikolio, polihidroksirūgščių ir retinoidų rūgščių veikimo mechanizmai.',
  'Odos tipo ir būklės vertinimas prieš pilingą.',
  'Tinkamo pilingo parinkimas pagal paciento poreikius ir jautrumą.',
  'Praktinis darbas: pilingo atlikimas ant modelio žingsnis po žingsnio.',
  'Postprocedūrinė priežiūra ir namų priežiūros rekomendacijos pacientui.',
];

const AUDIENCE: readonly { title: string; body: string; Icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }> }[] = [
  { title: 'Dermatovenerologams', body: 'Norite praplėsti procedūrų arsenalą mokslu pagrįstais pilingais.', Icon: SfFaceSmile },
  { title: 'Kosmetologams', body: 'Dirbate su odos priežiūra ir norite gilesnio supratimo apie cheminius pilingus.', Icon: SfLayers },
  { title: 'Estetinės medicinos specialistams', body: 'Ieškote papildomų neinvazinių procedūrų savo klinikai.', Icon: SfActivity },
];

const PRACTICAL_LINES: readonly string[] = [
  'Vieta: Vilnius, UNICOS Akademija.',
  'Data ir laikas: 2026 m. spalio 24 d., 10:00–16:00.',
  'Kaina: 49 € (su PVM). Partneriams — specialios sąlygos.',
  'Sertifikatas: tarptautinis Neostrata sertifikatas, patvirtinantis kompetenciją atlikti profesinius pilingus.',
];

const FAQ_ITEMS: readonly { question: string; answer: string }[] = [
  {
    question: 'Kam skirtas šis seminaras?',
    answer:
      'Šešių valandų praktinis seminaras, skirtas dermatologams ir kosmetologams, norintiems gilinti žinias apie cheminius pilingus su Neostrata produktais. Dirbsite su realiomis priemonėmis, analizuosite odos tipus ir mokysitės parinkti tinkamą pilingą kiekvienam pacientui.',
  },
  {
    question: 'Kur vyks ir kokia trukmė?',
    answer: 'Vilnius, UNICOS Akademija. 2026 m. spalio 24 d., 10:00–16:00.',
  },
  {
    question: 'Kokia kaina ir PVM?',
    answer: '49 € (su PVM). Partneriams — specialios sąlygos.',
  },
  {
    question: 'Kokį sertifikatą gausiu?',
    answer:
      'Tarptautinis Neostrata sertifikatas, patvirtinantis kompetenciją atlikti profesinius pilingus.',
  },
  {
    question: 'Kokios registracijos sąlygos?',
    answer:
      'Vieta garantuojama tik po apmokėjimo. Atšaukus registraciją likus 3 ir daugiau darbo dienų — grąžiname pilną sumą. Atšaukus vėliau — suma negrąžinama, tačiau galite perleisti vietą kolegai. Dalyvių skaičius ribotas — registruokitės iš anksto.',
  },
];

const OTHER_EVENTS = [
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
] as const;

const ABOUT_FULL =
  'Šešių valandų praktinis seminaras, skirtas dermatologams ir kosmetologams, norintiems gilinti žinias apie cheminius pilingus su Neostrata produktais. Dirbsite su realiomis priemonėmis, analizuosite odos tipus ir mokysitės parinkti tinkamą pilingą kiekvienam pacientui. Seminarą veda Dr. Rūta Gancevičienė — dermatovenerologė su tarptautine klinikine patirtimi.';

const SPEAKER_BIO =
  'Tarptautinę patirtį turinti dermatovenerologė, Neostrata klinikinių protokolų ekspertė. Reguliariai veda profesionalius seminarus Lietuvoje ir užsienyje. Mokslinių publikacijų autorė dermatologijos srityje.';

const TEACHER_IMG = 'https://byqsupply-components.netlify.app/haldenmiller/images/ContactAvatar-3.webp';

export function NeostrataPilingaiCmsPageSection() {
  const { ref: heroRef, visible: heroVisible } = useInView(0.08);
  const { ref: bodyRef, visible: bodyVisible } = useInView(0.06);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const heroMotion = heroVisible
    ? 'opacity-100 blur-0 translate-y-0'
    : 'opacity-0 blur-[12px] translate-y-5';
  const bodyMotion = bodyVisible
    ? 'opacity-100 blur-0 translate-y-0'
    : 'opacity-0 blur-[12px] translate-y-5';

  return (
    <>
      {/* Hero — video fonas, perdanga, centruotas turinys + lektorės kortelė */}
      <section className="relative overflow-hidden bg-[#EFE8DB] pt-36 pb-16 max-[767px]:pt-28 max-[479px]:pt-24">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 mix-blend-multiply">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover opacity-95"
              poster="https://byqsupply-components.netlify.app/hollow/images/Founder_1Founder.webp"
            >
              <source src="https://byqsupply-components.netlify.app/hollow/videos/Footer-transcode.mp4" type="video/mp4" />
              <source src="https://byqsupply-components.netlify.app/hollow/videos/Footer-transcode.webm" type="video/webm" />
            </video>
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#EFE8DB] via-[#EFE8DB]/88 to-[#EFE8DB]/35"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#64151F]/25" aria-hidden />
        </div>

        <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-8 max-[767px]:px-6 max-[479px]:px-4">
          <div
            ref={heroRef}
            className={`mx-auto flex max-w-[720px] flex-col items-center text-center transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-none ${heroMotion}`}
          >
            <p
              className="m-0 text-[#1A1010]/65"
              style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}
            >
              AKADEMIJA / NEOSTRATA RŪGŠTINIŲ PILINGŲ MEISTRIŠKUMAS
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <span
                className="border border-solid border-[#64151F] bg-[#64151F] px-2 py-1 text-[#EFE8DB]"
                style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, ...R0 }}
              >
                DERMATOLOGIJA
              </span>
              <span
                className="flex items-center gap-1.5 border border-solid border-[#64151F] bg-[#EFE8DB]/90 px-2 py-1 text-[#64151F]"
                style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, ...R0 }}
              >
                <SfClock size={12} strokeWidth={2} aria-hidden />
                6 val.
              </span>
              <span
                className="border border-solid border-[#64151F] px-2 py-1 text-[#64151F]"
                style={{ ...BODY, fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500, ...R0 }}
              >
                Gyvai · LT
              </span>
            </div>

            <h1
              className="m-0 mt-6 text-[#64151F]"
              style={{
                ...HEADING,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: 1.05,
                fontWeight: 300,
                letterSpacing: '-0.02em',
              }}
            >
              Neostrata rūgštinių pilingų meistriškumas.
            </h1>

            <p className="m-0 mt-5 max-w-[52ch] text-[#1A1010]/85" style={{ ...BODY, fontSize: '17px', lineHeight: 1.6 }}>
              Išmokite atlikti profesionalius cheminius pilingus saugiai ir efektyviai. Praktinis seminaras su tarptautiniu sertifikatu.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#1A1010]/82" style={{ ...BODY, fontSize: '15px' }}>
              <span className="inline-flex items-center gap-1.5">
                <SfCalendar size={16} className="text-[#64151F]" aria-hidden />
                Spalio 24
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SfClock size={16} className="text-[#64151F]" aria-hidden />
                10:00–16:00
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SfMapPin size={16} className="text-[#64151F]" aria-hidden />
                Vilnius, UNICOS Akademija
              </span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                className="h-12 border-0 bg-[#64151F] px-6 text-[#EFE8DB] transition-colors hover:bg-[#4a0f17]"
                style={{ ...BODY, fontSize: '15px', fontWeight: 500, ...R0 }}
              >
                Registruotis
              </button>
              <span
                className="inline-flex h-12 items-center bg-[#3B443A] px-4 text-[#EFE8DB]"
                style={{ ...BODY, fontSize: '15px', fontWeight: 500, ...R0 }}
              >
                49 €
              </span>
            </div>
            <p className="m-0 mt-2 text-[#1A1010]/58" style={{ ...BODY, fontSize: '12px' }}>
              Vieta garantuojama tik po apmokėjimo.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                className="h-12 border border-solid border-[#64151F] bg-transparent px-6 text-[#64151F] transition-colors hover:bg-[#64151F] hover:text-[#EFE8DB]"
                style={{ ...BODY, fontSize: '15px', fontWeight: 500, ...R0 }}
              >
                Gauti priminimą
              </button>
              <p className="m-0 text-[#1A1010]/58" style={{ ...BODY, fontSize: '12px' }}>
                Atsiųsime el. paštu.
              </p>
            </div>

            <p className="m-0 mt-4 uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600 }}>
              Liko 4 vietos
            </p>
          </div>

          <BlockDivider />

          <div
            className={`mx-auto flex max-w-[560px] flex-col items-center gap-4 text-center transition-all delay-100 duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-none ${heroMotion}`}
          >
            <p className="m-0 uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 600 }}>
              Lektorė
            </p>
            <div
              className="flex w-full max-w-[480px] items-center gap-5 border border-solid border-[#1A1010]/15 bg-[#EFE8DB]/95 p-4 text-left max-[479px]:flex-col max-[479px]:text-center"
              style={R0}
            >
              <div className="h-24 w-24 shrink-0 overflow-hidden border border-solid border-[#1A1010]/10 bg-[#3B443A]/10" style={R0}>
                <img src={TEACHER_IMG} alt="Dr. Rūta Gancevičienė" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="m-0 text-[#1A1010]" style={{ ...HEADING, fontSize: '20px', fontWeight: 400, lineHeight: 1.2 }}>
                  Dr. Rūta Gancevičienė
                </p>
                <p className="m-0 mt-1 text-[#1A1010]/65" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5 }}>
                  Tarptautinę patirtį turinti dermatovenerologė, Neostrata klinikinių protokolų ekspertė.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kūnas — vienas stulpelis, blokai atskirti vertikaliais divideriais */}
      <div className="bg-[#EFE8DB] pb-24 max-[767px]:pb-16">
        <div
          ref={bodyRef}
          className={`mx-auto w-full max-w-[912px] px-8 transition-all duration-700 ease-out max-[767px]:px-6 max-[479px]:px-4 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-none ${bodyMotion}`}
        >
          <BlockDivider />
          <SectionLabel>Programa</SectionLabel>
          <h2 className="m-0 mt-3 text-center text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.1 }}>
            Seminaro programa.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 min-[640px]:grid-cols-2 min-[992px]:grid-cols-3">
            {SCHEDULE.map(([time, label]) => (
              <div
                key={time}
                className="border border-solid border-[#1A1010]/12 bg-[#EFE8DB] px-4 py-4 transition-colors duration-300 ease-out hover:border-[#1A1010]/20 hover:bg-white/70"
                style={R0}
              >
                <p className="m-0 text-[#64151F]" style={{ ...BODY, fontSize: '14px', fontWeight: 700 }}>
                  {time}
                </p>
                <p className="m-0 mt-2 text-[#1A1010]/82" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5 }}>
                  {label}
                </p>
              </div>
            ))}
          </div>

          <BlockDivider />
          <SectionLabel>Vaizdo įžanga</SectionLabel>
          <div className="relative mt-6 aspect-video w-full overflow-hidden border border-solid border-[#1A1010]/12 bg-[#3B443A]/20" style={R0}>
            <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-95" poster={TEACHER_IMG}>
              <source src="https://byqsupply-components.netlify.app/hollow/videos/Footer-transcode.mp4" type="video/mp4" />
              <source src="https://byqsupply-components.netlify.app/hollow/videos/Footer-transcode.webm" type="video/webm" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1010]/35 to-transparent" aria-hidden />
          </div>

          <BlockDivider />
          <h2 className="m-0 text-center text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.1 }}>
            Apie seminarą.
          </h2>
          <p className="m-0 mt-6 text-center text-[#1A1010]/85" style={{ ...BODY, fontSize: '17px', lineHeight: 1.65 }}>
            {ABOUT_FULL}
          </p>

          <BlockDivider />
          <SectionLabel>Praktinė informacija</SectionLabel>
          <h2 className="m-0 mt-3 text-center text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.1 }}>
            Praktinė informacija.
          </h2>
          <ul className="m-0 mt-6 list-none space-y-4 p-0 text-left">
            {PRACTICAL_LINES.map((line) => (
              <li
                key={line}
                className="border-b border-solid border-[#1A1010]/10 pb-4 text-[#1A1010]/82 last:border-b-0 last:pb-0"
                style={{ ...BODY, fontSize: '16px', lineHeight: 1.55 }}
              >
                {line}
              </li>
            ))}
          </ul>

          <BlockDivider />
          <SectionLabel>Ką išmoksite</SectionLabel>
          <h2 className="m-0 mt-3 text-center text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.1 }}>
            Ką išmoksite?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 min-[640px]:grid-cols-2">
            {OUTCOMES.map((text) => (
              <div key={text} className="flex gap-3 border border-solid border-[#1A1010]/12 bg-white/40 p-5" style={R0}>
                <span className="mt-0.5 shrink-0 text-[#64151F]">
                  <SfCheck size={18} strokeWidth={2.5} aria-hidden />
                </span>
                <p className="m-0 text-[#1A1010]/88" style={{ ...BODY, fontSize: '15px', lineHeight: 1.55 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          <BlockDivider />
          <SectionLabel>Kam skirta</SectionLabel>
          <h2 className="m-0 mt-3 text-center text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.1 }}>
            Kam skirtas šis seminaras?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 min-[768px]:grid-cols-3">
            {AUDIENCE.map(({ title, body, Icon }) => (
              <div key={title} className="flex flex-col border border-solid border-[#1A1010]/15 bg-[#EFE8DB] p-6" style={R0}>
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center border border-solid border-[#64151F]/25 bg-[rgba(100,21,31,0.06)]"
                  style={R0}
                >
                  <Icon size={20} className="text-[#64151F]" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="m-0 text-[#1A1010]" style={{ ...BODY, fontSize: '18px', fontWeight: 600, lineHeight: 1.25 }}>
                  {title}
                </h3>
                <p className="m-0 mt-2 text-[#1A1010]/75" style={{ ...BODY, fontSize: '14px', lineHeight: 1.55 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

          <BlockDivider />
          <div className="border border-solid border-[#1A1010]/10 bg-[#3B443A] px-6 py-10 text-[#EFE8DB] max-[479px]:px-4" style={R0}>
            <p
              className="m-0 text-center uppercase text-[#EFE8DB]/75"
              style={{
                ...BODY,
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
              }}
            >
              Lektorė
            </p>
            <h2 className="m-0 mt-3 text-center" style={{ ...HEADING, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.1 }}>
              Dr. Rūta Gancevičienė
            </h2>
            <p className="m-0 mt-2 text-center text-[#EFE8DB]/65" style={{ ...BODY, fontSize: '16px' }}>
              Dermatovenerologė
            </p>
            <p className="m-0 mx-auto mt-5 max-w-[62ch] text-center text-[#EFE8DB]/85" style={{ ...BODY, fontSize: '16px', lineHeight: 1.65 }}>
              {SPEAKER_BIO}
            </p>
          </div>

          <BlockDivider />
          <SectionLabel>DUK</SectionLabel>
          <div className="mt-8 flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.question} className="border border-solid border-[#1A1010]/12 bg-[#EFE8DB]" style={R0}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-[#1A1010] transition-colors hover:bg-[#1A1010]/[0.03]"
                    style={R0}
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className="min-w-0 flex-1 font-medium" style={{ ...BODY, fontSize: '15px', lineHeight: 1.45 }}>
                      {item.question}
                    </span>
                    <span
                      className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-solid border-[#1A1010]/15 text-lg leading-none text-[#64151F] transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                      style={R0}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
                    style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="m-0 border-t border-solid border-[#1A1010]/10 px-5 pb-5 pt-3 text-[#1A1010]/78" style={{ ...BODY, fontSize: '15px', lineHeight: 1.65 }}>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <BlockDivider />
          <SectionLabel>Registracija ir kontaktai</SectionLabel>
          <div className="mt-8 grid grid-cols-1 gap-4 min-[768px]:grid-cols-3">
            {[
              {
                title: 'Registracija',
                body: 'Vieta garantuojama tik po apmokėjimo. Dalyvių skaičius ribotas — registruokitės dabar ir gaukite tarptautinį sertifikatą.',
                cta: 'Registruotis',
                href: '#',
              },
              {
                title: 'Kontaktai',
                body: '+370 600 00000 · Live Chat',
                cta: 'Kontaktai',
                href: '/kontaktai',
              },
              {
                title: 'Renginių kalendorius',
                body: 'Kiti artimiausi renginiai.',
                cta: 'Visi renginiai',
                href: '/akademija',
              },
            ].map((card) => (
              <div key={card.title} className="flex min-h-[200px] flex-col border border-solid border-[#1A1010]/12 bg-[#3B443A] p-6 text-[#EFE8DB]" style={R0}>
                <h3 className="m-0" style={{ ...HEADING, fontSize: '22px', fontWeight: 300, lineHeight: 1.15 }}>
                  {card.title}
                </h3>
                <p className="m-0 mt-2 flex-1 text-[#EFE8DB]/75" style={{ ...BODY, fontSize: '14px', lineHeight: 1.55 }}>
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex items-center gap-1 border border-solid border-[#EFE8DB] px-4 py-2 text-[#EFE8DB] transition-colors hover:bg-[#EFE8DB] hover:text-[#3B443A]"
                  style={{ ...BODY, fontSize: '14px', fontWeight: 500, ...R0 }}
                >
                  {card.cta}
                  <SfArrowRight size={14} strokeWidth={2.5} aria-hidden />
                </Link>
              </div>
            ))}
          </div>

          <BlockDivider />
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.1 }}>
              Kiti artimiausi renginiai.
            </h2>
            <Link href="/akademija" className="inline-flex items-center gap-1 text-[#64151F] underline underline-offset-2" style={{ ...BODY, fontSize: '15px', fontWeight: 500 }}>
              Visi renginiai
              <SfArrowRight size={14} strokeWidth={2.5} aria-hidden />
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 min-[768px]:grid-cols-2">
            {OTHER_EVENTS.map((card) => (
              <article key={card.title} className="border border-solid border-[#1A1010]/15 bg-[#EFE8DB] p-6" style={R0}>
                <div className="mb-3 flex flex-wrap gap-2">
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
                <h3 className="m-0 text-[#1A1010]" style={{ ...HEADING, fontSize: '24px', lineHeight: 1.15, fontWeight: 400 }}>
                  {card.title}
                </h3>
                <p className="m-0 mt-2 text-[#1A1010]/72" style={{ ...BODY, fontSize: '15px' }}>
                  {card.location}
                </p>
                <p className="m-0 mt-2" style={{ ...BODY, fontSize: '17px', fontWeight: 600, color: card.priceColor }}>
                  {card.price}
                </p>
                <p className="m-0 mt-1 text-[#1A1010]/72" style={{ ...BODY, fontSize: '15px' }}>
                  {card.date}
                </p>
                <Link href="/akademija" className="mt-4 inline-flex items-center gap-1 text-[#64151F] underline underline-offset-2" style={{ ...BODY, fontSize: '15px', fontWeight: 500 }}>
                  Plačiau
                  <SfArrowRight size={14} strokeWidth={2.5} aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Galinis CTA — pilnas plotis */}
      <section className="bg-[#64151F] py-20 max-[767px]:py-14">
        <div className="mx-auto w-full max-w-[1440px] px-8 max-[767px]:px-6 max-[479px]:px-4">
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
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[#EFE8DB]/60" style={{ ...BODY, fontSize: '14px' }}>
              <span className="inline-flex items-center gap-1.5">
                <SfPhone size={16} aria-hidden /> +370 600 00000
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SfMessage size={16} aria-hidden /> Live Chat
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
