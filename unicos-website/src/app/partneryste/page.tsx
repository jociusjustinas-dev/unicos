'use client';

import Link from 'next/link';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';

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
      <section className="py-24 max-[767px]:py-16">
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

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <SectionTitle
            title="Ka reiskia buti UNICOS partneriu?"
            subtitle="Tai daugiau nei tiekejo ir pirkejo santykis. Tai sistema, sukurta Jusu augimui."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 min-[992px]:grid-cols-3">
            {[
              ['Atrinka Jums', 'Mes ne sandelys. Atrenkame tik tai, kas patikrinta, atsakinga ir tinkama profesionaliam darbui. Jus negaistate laiko rinkdamiesi - mes jau tai padareme.'],
              ['Zinios pries pardavima', 'Produktas be ziniu yra rizika. Investuojame i mokymus, protokolus ir aisku supratima, kad dirbtumete saugiai ir uztikrintai.'],
              ['Augame kartu', 'Asmenine vadyba, konsultacijos ir palaikymas kasdieniuose sprendimuose. Jus nesate vieni.'],
            ].map(([title, description]) => (
              <article key={title} className="border border-solid border-[#1A1010]/15 p-10" style={{ borderRadius: '0px' }}>
                <div className="h-6 w-6 bg-[#64151F]" style={{ borderRadius: '0px' }} />
                <h3 className="m-0 mt-5 text-[#1A1010]" style={{ ...BODY, fontSize: '22px', lineHeight: 1.2, fontWeight: 600 }}>
                  {title}
                </h3>
                <p className="m-0 mt-3 text-[#1A1010]/75" style={{ ...BODY, fontSize: '15px', lineHeight: 1.65 }}>
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <SectionTitle
            title="Kas gali tapti partneriu?"
            subtitle="UNICOS skirtas profesionalams, dirbantiems grozio ir sveikatos srityje."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 min-[992px]:grid-cols-4 min-[768px]:grid-cols-2">
            {[
              ['Kosmetologijos kabinetai ir klinikos', 'Odos prieziuros proceduros ir namu prieziuros rekomendacijos.'],
              ['Grozio salonai ir kirpyklos', 'Profesionaliu plauku ir odos produktu pardavimas ir naudojimas.'],
              ['Estetines dermatologijos klinikos', 'Injekciju, lazerines ir aparatine proceduros.'],
              ['Dermakosmetikos konsultantai ir vaistines', 'Profesionalus produktu rekomendavimas klientams.'],
            ].map(([title, description]) => (
              <article key={title} className="border border-solid border-[#1A1010]/15 p-8" style={{ borderRadius: '0px' }}>
                <div className="h-5 w-5 border border-solid border-[#64151F]" style={{ borderRadius: '0px' }} />
                <h3 className="m-0 mt-5 text-[#1A1010]" style={{ ...BODY, fontSize: '18px', lineHeight: 1.35, fontWeight: 600 }}>
                  {title}
                </h3>
                <p className="m-0 mt-3 text-[#1A1010]/75" style={{ ...BODY, fontSize: '14px', lineHeight: 1.6 }}>
                  {description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/sprendimai/odos-specialistams" className="text-[#64151F] underline underline-offset-2" style={{ ...BODY, fontSize: '15px', fontWeight: 500 }}>
              Raskite savo sprendima →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[#3B443A] py-24 max-[767px]:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 text-center min-[992px]:grid-cols-4 min-[768px]:grid-cols-2">
            {[
              ['500+', 'partneriu', 'Auganciu su mumis'],
              ['25 metai', 'Patirties rinkoje', ''],
              ['12 prekiu zenklu', 'Atrinktu profesionalams', ''],
              ['24h pristatymas', 'Visoje Lietuvoje', ''],
            ].map(([value, label, desc]) => (
              <div key={value}>
                <p className="m-0 text-[#EFE8DB]" style={{ ...HEADING, fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: 1.05, fontWeight: 300 }}>
                  {value}
                </p>
                <p className="m-0 mt-2 text-[#EFE8DB]/70" style={{ ...BODY, fontSize: '15px', lineHeight: 1.45 }}>
                  {label}
                </p>
                {desc ? (
                  <p className="m-0 mt-1 text-[#EFE8DB]/70" style={{ ...BODY, fontSize: '14px', lineHeight: 1.45 }}>
                    {desc}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 min-[992px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] min-[992px]:items-center">
            <div>
              <h2 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(2rem, 3.4vw, 3rem)', lineHeight: 1.06, fontWeight: 300 }}>
                UNICOS platforma - daugiau laiko Jums.
              </h2>
              <p className="m-0 mt-4 text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.6 }}>
                Sukureme iranki, kuris pavercia uzsakymus malonumu.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {[
                  'Uzsakymai bet kuriuo paros metu - be skambuciu ir laukimo.',
                  'Likuciu stebejimas realiu laiku - visada zinote, kas sandelyje.',
                  'Patogi uzsakymu istorija - pakartokite megstama krepseli vienu paspaudimu.',
                  'Asmenines kainos ir akcijos - viskas matoma is karto.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-[1px] text-[#64151F]" style={{ ...BODY, fontSize: '16px', fontWeight: 700 }}>
                      ✓
                    </span>
                    <p className="m-0 text-[#1A1010]/82" style={{ ...BODY, fontSize: '15px', lineHeight: 1.6 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <button className="mt-7 h-[52px] border-0 bg-[#64151F] px-6 text-[#EFE8DB]" style={{ ...BODY, borderRadius: '0px', fontSize: '15px', fontWeight: 500 }}>
                Tapti partneriu ir gauti prieiga →
              </button>
            </div>
            <div className="flex min-h-[400px] items-center justify-center bg-[#3B443A] text-[#EFE8DB]/40" style={{ ...BODY, borderRadius: '0px', fontSize: '14px', letterSpacing: '0.06em' }}>
              Platform Dashboard Mockup
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <SectionTitle title="Lojalumo programa." subtitle="Kuo ilgiau dirbame kartu - tuo daugiau naudos Jusu verslui." />
          <div className="mt-8 grid grid-cols-1 gap-4 min-[992px]:grid-cols-3">
            {[
              ['Augancios nuolaidos', 'Partnerio kainodara gereja su kiekvienu ketvirciu.'],
              ['Pirmenybe naujienoms', 'Pirmieji suzinote apie naujus produktus ir mokymus.'],
              ['Asmeniniai pasiulymai', 'Vadybininkas paruosia akcijas, pritaikytas Jusu poreikiams.'],
            ].map(([title, body]) => (
              <article key={title} className="border border-solid border-[#1A1010]/15 p-8" style={{ borderRadius: '0px' }}>
                <div className="h-5 w-5 border border-solid border-[#64151F]" style={{ borderRadius: '0px' }} />
                <h3 className="m-0 mt-4 text-[#1A1010]" style={{ ...BODY, fontSize: '20px', lineHeight: 1.25, fontWeight: 600 }}>
                  {title}
                </h3>
                <p className="m-0 mt-3 text-[#1A1010]/75" style={{ ...BODY, fontSize: '15px', lineHeight: 1.6 }}>
                  {body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/kontaktai" className="text-[#64151F] underline underline-offset-2" style={{ ...BODY, fontSize: '15px', fontWeight: 500 }}>
              Suzinoti daugiau apie lojaluma →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <div className="mx-auto max-w-[1200px]">
            <SectionTitle title="Kaip tapti partneriu?" subtitle="Paprastas ir aiskus kelias partnerystes link." />
            <div className="mt-8 grid grid-cols-1 gap-4 min-[1200px]:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] min-[768px]:grid-cols-2">
              {[
                ['1.', 'Paraiska', 'Uzpildykite trumpa partnerio anketa musu svetaineje.', ['Imones rekvizitai / IV pazyma', 'Veiklos aprasymas', 'Trukme: 1-2 darbo dienos']],
                ['2.', 'Patikra', 'Perziuresime Jusu duomenis ir kvalifikacija.', ['Rankine specialistu patikra']],
                ['3.', 'Aktyvavimas', 'Pasirasome bendradarbiavimo sutarti ir priskiriame Jums atsakinga vadybininka.', ['Prieiga prie didmeniniu kainu', 'Savitarnos portalo atverimas']],
                ['4.', 'Onboarding', 'Su Jumis susisieks asmeninis vadybininkas ir pades zengti pirmuosius zingsnius.', ['Pirmojo krepselio formavimas', 'Supazindinimas su lojalumu']],
              ].map(([num, title, desc, list], idx) => (
                <div key={title as string} className="contents">
                  <article className="border border-solid border-[#1A1010]/15 p-8" style={{ borderRadius: '0px' }}>
                    <p className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: '40px', lineHeight: 1, fontWeight: 300 }}>
                      {num as string}
                    </p>
                    <h3 className="m-0 mt-4 text-[#1A1010]" style={{ ...BODY, fontSize: '22px', lineHeight: 1.2, fontWeight: 600 }}>
                      {title as string}
                    </h3>
                    <p className="m-0 mt-3 text-[#1A1010]/75" style={{ ...BODY, fontSize: '15px', lineHeight: 1.6 }}>
                      {desc as string}
                    </p>
                    <div className="mt-4 border-t border-solid border-[#1A1010]/10 pt-3">
                      {(list as string[]).map((li) => (
                        <p key={li} className="m-0 mt-1 text-[#1A1010]/72" style={{ ...BODY, fontSize: '13px', lineHeight: 1.5 }}>
                          • {li}
                        </p>
                      ))}
                    </div>
                  </article>
                  {idx < 3 ? (
                    <div className="hidden min-[1200px]:flex min-[1200px]:items-center min-[1200px]:justify-center min-[1200px]:px-2">
                      <span className="text-[#64151F]" style={{ ...BODY, fontSize: '24px', fontWeight: 500 }}>
                        →
                      </span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="h-[52px] border-0 bg-[#64151F] px-8 text-[#EFE8DB]" style={{ ...BODY, borderRadius: '0px', fontSize: '15px', fontWeight: 500 }}>
                Pradeti registracija →
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 max-[767px]:py-16">
        <Container>
          <SectionTitle
            align="left"
            title="Jusu sekmes istorijos - geriausias musu darbo ivertinimas."
            subtitle="Didziuojames matydami, kaip UNICOS partneriai auga ir stipreja."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 min-[992px]:grid-cols-3">
            {[
              ['+35% Pajamu augimas', 'Su UNICOS pagalba optimizavome produktu krepseli ir tai tiesiogiai atsispindejo musu klinikos pelningume jau po pirmo ketvircio.', 'Dr. Ieva Kazlauskiene', 'Dermatovenerologe', 'in'],
              ['2x Efektyvesnis darbas', 'Mokymai mano komandai suteike ne tik ziniu, bet ir pasitikejimo atliekant sudetingas proceduras. Klientai tai jaucia.', 'Tomas Vaitkus', 'Klinikos vadovas', 'in'],
              ['100% Klientu griztamumas', 'Ivedus Guinot proceduras, pastebejome, kad klientai registruojasi kitam vizitui dar neiseje is kabineto. Tai didziausias ivertinimas.', 'Laura Simanaviciute', 'Estetines medicinos specialiste', 'ig'],
            ].map(([metric, quote, name, role, social]) => (
              <article key={name as string} className="border border-solid border-[#1A1010]/15 p-10" style={{ borderRadius: '0px' }}>
                <span className="inline-flex bg-[#3B443A] px-3 py-1 text-[#EFE8DB]" style={{ ...BODY, fontSize: '12px', fontWeight: 500, borderRadius: '0px' }}>
                  {metric}
                </span>
                <p className="m-0 mt-5 text-[#1A1010]/80" style={{ ...BODY, fontSize: '16px', lineHeight: 1.65 }}>
                  "{quote}"
                </p>
                <div className="mt-5 border-t border-solid border-[#1A1010]/10 pt-4">
                  <p className="m-0 text-[#1A1010]" style={{ ...HEADING, fontSize: '30px', lineHeight: 1.1, fontWeight: 300 }}>
                    {name}
                  </p>
                  <div className="mt-1 flex items-center justify-between gap-3">
                    <p className="m-0 text-[#1A1010]/60" style={{ ...BODY, fontSize: '14px' }}>
                      {role}
                    </p>
                    <span className="text-[#1A1010]/55" style={{ ...BODY, fontSize: '13px', letterSpacing: '0.08em' }}>
                      {social}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#64151F] py-24 max-[767px]:py-16">
        <Container>
          <div className="mx-auto max-w-[1080px] text-center">
            <h2 className="m-0 text-[#EFE8DB]" style={{ ...HEADING, fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.06, fontWeight: 300 }}>
              Pasiruose augti kartu?
            </h2>
            <p className="m-0 mt-4 text-[#EFE8DB]/80" style={{ ...BODY, fontSize: '16px', lineHeight: 1.65 }}>
              Prisijunkite prie UNICOS bendruomenes - cia Jusu laukia isskirtiniai produktai, vertingos zinios ir nuosirdus palaikymas.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button className="h-[52px] border-0 bg-[#EFE8DB] px-8 text-[#64151F]" style={{ ...BODY, borderRadius: '0px', fontSize: '15px', fontWeight: 600 }}>
                Pildyti partnerio paraiska →
              </button>
              <button className="h-[52px] border border-solid border-[#EFE8DB] bg-transparent px-6 text-[#EFE8DB]" style={{ ...BODY, borderRadius: '0px', fontSize: '15px', fontWeight: 500 }}>
                Gauti konsultacija
              </button>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[#EFE8DB]/60" style={{ ...BODY, fontSize: '13px' }}>
              <span>Patvirtinimas per 24 val.</span>
              <span>|</span>
              <span>+370 600 00000</span>
              <span>Live Chat</span>
              <span>15 min. poreikiu analize</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 bg-[#EFE8DB]/40" style={{ borderRadius: '999px' }} />
                B2B linija aktyvi
              </span>
            </div>
          </div>
        </Container>
      </section>
      <FooterSection />
    </main>
  );
}
