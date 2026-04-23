'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { CtaButton } from '@/components/ui/CtaButton';
import { SfCheckboxCheck } from '@/components/icons/feather';
import { PAGE_SHELL_CLASS } from '@/config/pageShell';
import { useCart, formatEur } from '@/lib/cart';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const HEADING: React.CSSProperties = {
  fontFamily: "'Quiche Sans', Georgia, serif",
};

type Participant = { id: string; fullName: string; email: string };

function makeParticipantId() {
  return `p_${Math.random().toString(36).slice(2, 10)}`;
}

export default function AkademijaRegistracijaPage() {
  const router = useRouter();
  const { items, totalQuantity, totalPrice, clear, increment, decrement } = useCart();

  const [payer, setPayer] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
  });
  const [participants, setParticipants] = React.useState<Participant[]>([
    { id: makeParticipantId(), fullName: '', email: '' },
  ]);
  const [consent, setConsent] = React.useState(false);
  const [errors, setErrors] = React.useState<Partial<Record<string, string>>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  /** Jei krepšelis tuščias — pasiūlome grįžti į akademiją. */
  const empty = items.length === 0;

  const addParticipant = () =>
    setParticipants((p) => [...p, { id: makeParticipantId(), fullName: '', email: '' }]);
  const removeParticipant = (id: string) =>
    setParticipants((p) => (p.length <= 1 ? p : p.filter((x) => x.id !== id)));
  const updateParticipant = (id: string, patch: Partial<Participant>) =>
    setParticipants((p) => p.map((x) => (x.id === id ? { ...x, ...patch } : x)));

  const validate = () => {
    const next: Partial<Record<string, string>> = {};
    if (!payer.fullName.trim()) next.fullName = 'Nurodykite vardą ir pavardę.';
    if (!/\S+@\S+\.\S+/.test(payer.email)) next.email = 'Įveskite galiojantį el. paštą.';
    if (!payer.phone.trim()) next.phone = 'Telefonas privalomas.';
    if (!consent) next.consent = 'Sutikimas privalomas, kad galėtume tvarkyti duomenis.';
    participants.forEach((pt, i) => {
      if (!pt.fullName.trim()) next[`participant-name-${i}`] = 'Nurodykite dalyvio vardą.';
      if (!/\S+@\S+\.\S+/.test(pt.email)) next[`participant-email-${i}`] = 'Įveskite galiojantį el. paštą.';
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      // Simuliuojam apmokėjimą. Produkcijoje čia būtų mokėjimo provaiderio kvietimas.
      await new Promise((r) => setTimeout(r, 1100));
      clear();
      router.push('/akademija/registracija/aciu');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'h-12 w-full border bg-[rgba(239,232,219,0.08)] px-4 text-[#EFE8DB] placeholder:text-[#EFE8DB]/48 outline-none transition-[border-color,color] duration-200 focus:border-[#EFE8DB]/65';

  return (
    <main className="bg-[#EFE8DB] text-[#1A1010]">
      <NavigationBarSection forceLightSurface />

      <section className="pt-36 pb-16 max-[767px]:pt-28 max-[767px]:pb-12">
        <div className={PAGE_SHELL_CLASS}>
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="m-0 flex list-none flex-wrap items-center gap-3 p-0">
              <li>
                <Link href="/akademija" className="uppercase text-[#64151F] transition-opacity hover:opacity-80" style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}>
                  Akademija
                </Link>
              </li>
              <li className="text-[#1A1010]/45" style={{ ...BODY, fontSize: '11px' }}>/</li>
              <li className="uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em' }}>
                Registracija
              </li>
            </ol>
          </nav>

          <h1 className="m-0 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.05, fontWeight: 300 }}>
            <span className="font-light">Užbaikime </span>
            <span className="font-medium">registraciją</span>
          </h1>
          <p className="m-0 mt-4 max-w-[62ch] text-[#1A1010]/78" style={{ ...BODY, fontSize: '16px', lineHeight: 1.55 }}>
            Nurodykite, kas mokės, ir išvardinkite dalyvius — kiekvienam el. paštu išsiųsime dalyvavimo patvirtinimą.
          </p>
        </div>
      </section>

      {empty ? (
        <section className="pb-24 max-[767px]:pb-16">
          <div className={PAGE_SHELL_CLASS}>
            <div className="border border-[#1A1010]/12 bg-white/60 p-10 text-center">
              <p className="m-0 text-[#1A1010]" style={{ ...HEADING, fontSize: '24px', fontWeight: 400 }}>
                Krepšelis tuščias
              </p>
              <p className="m-0 mt-3 text-[#1A1010]/70" style={{ ...BODY, fontSize: '15px', lineHeight: 1.5 }}>
                Pasirinkite norimą renginį Akademijoje — jis atsiras čia.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/akademija"
                  className="inline-flex min-h-[48px] items-center justify-center border border-[#64151F] bg-[#64151F] px-8 text-[13px] font-medium uppercase tracking-[0.04em] text-[#EFE8DB] no-underline transition-colors hover:bg-[#7a222c]"
                  style={BODY}
                >
                  Peržiūrėti mokymus
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="pb-24 max-[767px]:pb-16">
          <div className={PAGE_SHELL_CLASS}>
            <div className="grid grid-cols-1 gap-10 min-[992px]:grid-cols-[minmax(0,1fr)_minmax(320px,400px)] min-[992px]:items-start min-[992px]:gap-16">
              <form onSubmit={onSubmit} noValidate className="flex flex-col gap-8">
                <div className="border border-[#EFE8DB]/20 bg-[#3B443A] p-8 max-[767px]:p-6" style={{ borderRadius: '0px' }}>
                  <h2 className="m-0 text-[#EFE8DB]" style={{ ...HEADING, fontSize: '22px', fontWeight: 400 }}>
                    Mokėtojo informacija
                  </h2>
                  <p className="m-0 mt-2 text-[#EFE8DB]/72" style={{ ...BODY, fontSize: '14px', lineHeight: 1.55 }}>
                    Šiuo adresu atsiųsime sąskaitą ir apmokėjimo patvirtinimą.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor="payer-name" className="uppercase text-[#EFE8DB]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                        Vardas ir pavardė
                      </label>
                      <input
                        id="payer-name"
                        value={payer.fullName}
                        onChange={(e) => setPayer({ ...payer, fullName: e.target.value })}
                        required
                        disabled={isSubmitting}
                        className={`${inputClass} ${errors.fullName ? 'border-[#F3C8CE]' : 'border-[#EFE8DB]/12'}`}
                        style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
                        placeholder="Vardenis Pavardenis"
                      />
                      {errors.fullName ? <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px' }}>{errors.fullName}</p> : null}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="payer-email" className="uppercase text-[#EFE8DB]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                        El. paštas
                      </label>
                      <input
                        id="payer-email"
                        type="email"
                        value={payer.email}
                        onChange={(e) => setPayer({ ...payer, email: e.target.value })}
                        required
                        disabled={isSubmitting}
                        className={`${inputClass} ${errors.email ? 'border-[#F3C8CE]' : 'border-[#EFE8DB]/12'}`}
                        style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
                        placeholder="vardas@imone.lt"
                      />
                      {errors.email ? <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px' }}>{errors.email}</p> : null}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="payer-phone" className="uppercase text-[#EFE8DB]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                        Telefonas
                      </label>
                      <input
                        id="payer-phone"
                        type="tel"
                        value={payer.phone}
                        onChange={(e) => setPayer({ ...payer, phone: e.target.value })}
                        required
                        disabled={isSubmitting}
                        className={`${inputClass} ${errors.phone ? 'border-[#F3C8CE]' : 'border-[#EFE8DB]/12'}`}
                        style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
                        placeholder="+370 600 00000"
                      />
                      {errors.phone ? <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px' }}>{errors.phone}</p> : null}
                    </div>

                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor="payer-company" className="uppercase text-[#EFE8DB]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                        Įmonė (neprivaloma)
                      </label>
                      <input
                        id="payer-company"
                        value={payer.company}
                        onChange={(e) => setPayer({ ...payer, company: e.target.value })}
                        disabled={isSubmitting}
                        className={`${inputClass} border-[#EFE8DB]/12`}
                        style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
                        placeholder="UAB Grožis"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-[#EFE8DB]/20 bg-[#3B443A] p-8 max-[767px]:p-6" style={{ borderRadius: '0px' }}>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="m-0 text-[#EFE8DB]" style={{ ...HEADING, fontSize: '22px', fontWeight: 400 }}>
                      Dalyviai ({participants.length})
                    </h2>
                    <span className="uppercase text-[#EFE8DB]/62" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                      Kiekvienas gauna asmeninį patvirtinimą
                    </span>
                  </div>

                  <div className="mt-6 flex flex-col gap-6">
                    {participants.map((pt, i) => (
                      <div key={pt.id} className="border border-[#EFE8DB]/14 bg-[#EFE8DB]/[0.04] p-5 max-[767px]:p-4" style={{ borderRadius: '0px' }}>
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="uppercase text-[#EFE8DB]/70" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                            Dalyvis #{i + 1}
                          </span>
                          {participants.length > 1 ? (
                            <button
                              type="button"
                              onClick={() => removeParticipant(pt.id)}
                              className="text-[#EFE8DB]/65 underline underline-offset-2 transition-colors hover:text-[#F3C8CE]"
                              style={{ ...BODY, fontSize: '12px', fontWeight: 500 }}
                            >
                              Pašalinti
                            </button>
                          ) : null}
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="flex flex-col gap-2">
                            <label htmlFor={`part-name-${pt.id}`} className="uppercase text-[#EFE8DB]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                              Vardas ir pavardė
                            </label>
                            <input
                              id={`part-name-${pt.id}`}
                              value={pt.fullName}
                              onChange={(e) => updateParticipant(pt.id, { fullName: e.target.value })}
                              required
                              disabled={isSubmitting}
                              className={`${inputClass} ${errors[`participant-name-${i}`] ? 'border-[#F3C8CE]' : 'border-[#EFE8DB]/12'}`}
                              style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
                              placeholder="Vardenis Pavardenis"
                            />
                            {errors[`participant-name-${i}`] ? <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px' }}>{errors[`participant-name-${i}`]}</p> : null}
                          </div>
                          <div className="flex flex-col gap-2">
                            <label htmlFor={`part-email-${pt.id}`} className="uppercase text-[#EFE8DB]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                              El. paštas
                            </label>
                            <input
                              id={`part-email-${pt.id}`}
                              type="email"
                              value={pt.email}
                              onChange={(e) => updateParticipant(pt.id, { email: e.target.value })}
                              required
                              disabled={isSubmitting}
                              className={`${inputClass} ${errors[`participant-email-${i}`] ? 'border-[#F3C8CE]' : 'border-[#EFE8DB]/12'}`}
                              style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
                              placeholder="vardas@pastas.lt"
                            />
                            {errors[`participant-email-${i}`] ? <p className="m-0 text-[#F3C8CE]" style={{ ...BODY, fontSize: '12px' }}>{errors[`participant-email-${i}`]}</p> : null}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={addParticipant}
                    className="mt-5 inline-flex items-center gap-2 border border-[#EFE8DB]/30 bg-transparent px-4 py-3 text-[#EFE8DB] transition-colors hover:border-[#EFE8DB]/55"
                    style={{ ...BODY, fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', borderRadius: '0px' }}
                  >
                    + Pridėti dar vieną dalyvį
                  </button>
                </div>

                <label className="flex items-start gap-3 text-[#1A1010]/80" style={{ ...BODY, fontSize: '14px', lineHeight: 1.55 }}>
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 h-5 w-5 shrink-0 border border-[#1A1010]/30 accent-[#64151F]"
                    style={{ borderRadius: '0px' }}
                  />
                  <span>
                    Sutinku, kad UNICOS tvarkytų mano ir nurodytų dalyvių duomenis renginio registracijos ir patvirtinimų tikslais.{' '}
                    <a href="#" className="text-[#64151F] underline underline-offset-2">Privatumo politika</a>.
                  </span>
                </label>
                {errors.consent ? <p className="m-0 text-[#64151F]" style={{ ...BODY, fontSize: '12px' }}>{errors.consent}</p> : null}

                <div className="flex flex-wrap items-center gap-4">
                  <CtaButton type="submit" variant="primary" disabled={isSubmitting} className="min-w-[240px] justify-center">
                    {isSubmitting ? 'Apmokama…' : `Apmokėti ${formatEur(totalPrice)}`}
                  </CtaButton>
                  <Link
                    href="/akademija"
                    className="text-[#1A1010]/65 underline underline-offset-2 transition-colors hover:text-[#64151F]"
                    style={{ ...BODY, fontSize: '14px', fontWeight: 500 }}
                  >
                    Grįžti į mokymus
                  </Link>
                </div>
              </form>

              <aside className="min-w-0">
                <div className="sticky top-32 border border-[#1A1010]/12 bg-white/60 p-6 max-[767px]:p-5" style={{ borderRadius: '0px' }}>
                  <h3 className="m-0 text-[#1A1010]" style={{ ...HEADING, fontSize: '20px', fontWeight: 400 }}>
                    Užsakymas
                  </h3>

                  <ul className="m-0 mt-4 flex list-none flex-col gap-4 border-b border-[#1A1010]/10 p-0 pb-4">
                    {items.map((i) => (
                      <li key={i.id} className="flex gap-3">
                        {i.imageSrc ? (
                          <div className="h-16 w-16 shrink-0 overflow-hidden border border-[#1A1010]/10" style={{ borderRadius: '0px' }}>
                            <img src={i.imageSrc} alt="" loading="lazy" className="h-full w-full object-cover" />
                          </div>
                        ) : null}
                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                          <span className="text-[#1A1010]" style={{ ...BODY, fontSize: '14px', fontWeight: 500, lineHeight: 1.3 }}>
                            {i.title}
                          </span>
                          {i.date ? <span className="text-[#1A1010]/55" style={{ ...BODY, fontSize: '12px' }}>{i.date}</span> : null}
                          <div className="mt-1 flex items-center justify-between gap-3">
                            <div className="inline-flex items-stretch border border-[#1A1010]/20" style={{ borderRadius: '0px' }}>
                              <button type="button" onClick={() => decrement(i.id)} aria-label="−" className="flex h-7 w-7 items-center justify-center text-[#1A1010] hover:bg-[#1A1010]/5">−</button>
                              <span className="flex h-7 w-8 items-center justify-center border-x border-[#1A1010]/20 text-[#1A1010]" style={{ ...BODY, fontSize: '12px', fontWeight: 500 }}>{i.quantity}</span>
                              <button type="button" onClick={() => increment(i.id)} aria-label="+" className="flex h-7 w-7 items-center justify-center text-[#1A1010] hover:bg-[#1A1010]/5">+</button>
                            </div>
                            <span className="text-[#64151F]" style={{ ...BODY, fontSize: '14px', fontWeight: 500 }}>{formatEur(i.price * i.quantity)}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-baseline justify-between">
                    <span className="uppercase text-[#1A1010]/62" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                      Iš viso ({totalQuantity})
                    </span>
                    <span className="text-[#64151F]" style={{ ...HEADING, fontSize: '24px', fontWeight: 400 }}>
                      {formatEur(totalPrice)}
                    </span>
                  </div>

                  <div className="mt-5 flex items-start gap-2 text-[#1A1010]/70" style={{ ...BODY, fontSize: '12px', lineHeight: 1.5 }}>
                    <SfCheckboxCheck size={14} className="mt-0.5 text-[#3B443A]" strokeWidth={2} aria-hidden />
                    <span>Saugus apmokėjimas. Sąskaitą gausite el. paštu.</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}

      <FooterSection />
    </main>
  );
}
