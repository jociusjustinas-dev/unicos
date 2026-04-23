'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NavigationBarSection } from '@/components/sections/NavigationBarSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { CtaButton } from '@/components/ui/CtaButton';
import { CtaLink } from '@/components/ui/CtaLink';
import { PAGE_SHELL_CLASS } from '@/config/pageShell';
import { useAuth } from '@/lib/auth';
import { SfCheck, SfLock, SfCalendar, SfEnvelope } from '@/components/icons/feather';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const HEADING: React.CSSProperties = {
  fontFamily: "'Quiche Sans', Georgia, serif",
};

/** Fake užsakymai demonstracijai — produkcijoje ateis iš DB. */
type DemoOrder = { id: string; date: string; status: string; items: { title: string; qty: number }[]; total: string };
const DEMO_ORDERS: DemoOrder[] = [
  {
    id: 'ord-2026-001',
    date: '2026-03-12',
    status: 'Patvirtinta',
    items: [{ title: 'Neostrata rūgštinių pilingų meistriškumas', qty: 2 }],
    total: '98,00 €',
  },
  {
    id: 'ord-2026-000',
    date: '2026-02-28',
    status: 'Patvirtinta',
    items: [{ title: 'Verslo augimo pusryčiai: Kainodara', qty: 1 }],
    total: '29,00 €',
  },
];

export default function ProfilisPage() {
  const router = useRouter();
  const { user, isAuthenticated, isHydrated, isPartner, signOut, updateProfile, setRole } = useAuth();

  React.useEffect(() => {
    if (isHydrated && !isAuthenticated) router.replace('/prisijungti?next=/profilis');
  }, [isHydrated, isAuthenticated, router]);

  if (!isHydrated || !user) {
    return (
      <main className="bg-[#EFE8DB] text-[#1A1010]">
        <NavigationBarSection forceLightSurface />
        <div className={`${PAGE_SHELL_CLASS} pt-40 pb-24 max-[767px]:pt-28`}>
          <p className="m-0 text-[#1A1010]/65" style={{ ...BODY, fontSize: '14px' }}>Įkeliama…</p>
        </div>
        <FooterSection />
      </main>
    );
  }

  const inputClass =
    'h-12 w-full border bg-[rgba(239,232,219,0.08)] px-4 text-[#EFE8DB] placeholder:text-[#EFE8DB]/48 outline-none transition-[border-color,color] duration-200 focus:border-[#EFE8DB]/65 border-[#EFE8DB]/12';

  return (
    <main className="bg-[#EFE8DB] text-[#1A1010]">
      <NavigationBarSection forceLightSurface />

      <section className="pt-36 pb-12 max-[767px]:pt-28">
        <div className={PAGE_SHELL_CLASS}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 bg-[#64151F]" style={{ borderRadius: '0px' }} aria-hidden />
                <span className="uppercase text-[#64151F]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                  Mano paskyra
                </span>
              </div>
              <h1 className="m-0 mt-4 text-[#64151F]" style={{ ...HEADING, fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.05, fontWeight: 300 }}>
                <span className="font-light">Sveiki, </span>
                <span className="font-medium">{user.fullName}</span>
              </h1>
              <p className="m-0 mt-3 text-[#1A1010]/72" style={{ ...BODY, fontSize: '15px' }}>
                {user.email}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span
                className="inline-flex items-center gap-2 border px-3 py-1 uppercase"
                style={{
                  ...BODY,
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  fontWeight: 500,
                  borderRadius: '0px',
                  borderColor: isPartner ? '#3B443A' : '#1A1010',
                  color: isPartner ? '#3B443A' : '#1A1010',
                  backgroundColor: isPartner ? 'rgba(59,68,58,0.1)' : 'transparent',
                }}
              >
                {isPartner ? (
                  <>
                    <SfCheck size={12} strokeWidth={2.5} aria-hidden />
                    Partneris
                  </>
                ) : (
                  'Individualus klientas'
                )}
              </span>
              <button
                type="button"
                onClick={signOut}
                className="text-[#1A1010]/65 underline underline-offset-2 transition-colors hover:text-[#64151F]"
                style={{ ...BODY, fontSize: '13px', fontWeight: 500 }}
              >
                Atsijungti
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 max-[767px]:pb-16">
        <div className={PAGE_SHELL_CLASS}>
          <div className="grid grid-cols-1 gap-8 min-[992px]:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] min-[992px]:gap-12">
            <div className="flex flex-col gap-8">
              <Card title="Mano mokymai">
                {DEMO_ORDERS.length === 0 ? (
                  <EmptyState
                    title="Dar neužsiregistravote"
                    body="Peržiūrėkite artimiausius mokymus ir pasirinkite savo sritį."
                    href="/akademija"
                    cta="Peržiūrėti mokymus"
                  />
                ) : (
                  <ul className="m-0 flex list-none flex-col divide-y divide-[#1A1010]/10 p-0">
                    {DEMO_ORDERS.map((o) => (
                      <li key={o.id} className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                        <div className="min-w-0">
                          <p className="m-0 truncate text-[#1A1010]" style={{ ...BODY, fontSize: '15px', fontWeight: 500, lineHeight: 1.35 }}>
                            {o.items.map((i) => i.title).join(', ')}
                          </p>
                          <p className="m-0 mt-1 text-[#1A1010]/62" style={{ ...BODY, fontSize: '12px' }}>
                            {o.date} · Užsakymas #{o.id} · {o.items.reduce((s, i) => s + i.qty, 0)} dalyvis(-iai)
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="uppercase text-[#3B443A]" style={{ ...BODY, fontSize: '10px', letterSpacing: '0.12em', fontWeight: 500 }}>
                            {o.status}
                          </span>
                          <span className="text-[#64151F]" style={{ ...BODY, fontSize: '15px', fontWeight: 500 }}>
                            {o.total}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>

              <Card title="Profilio duomenys">
                <ProfileForm
                  initial={{ fullName: user.fullName, email: user.email, phone: user.phone ?? '', company: user.company ?? '' }}
                  inputClass={inputClass}
                  onSave={updateProfile}
                />
              </Card>
            </div>

            <aside className="flex flex-col gap-6">
              <Card title="Greitosios nuorodos" tone="cream">
                <nav className="flex flex-col">
                  <QuickLink icon={<SfCalendar size={18} strokeWidth={1.75} />} label="Akademijos renginiai" href="/akademija" />
                  <QuickLink icon={<SfLock size={18} strokeWidth={1.75} />} label="Partnerių resursai" href="/resursai" />
                  <QuickLink icon={<SfEnvelope size={18} strokeWidth={1.75} />} label="Susisiekti su vadybininku" href="/kontaktai#kontaktai-forma" />
                </nav>
              </Card>

              {isPartner ? (
                <Card title="Partnerio privalumai" tone="cream">
                  <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[#1A1010]/80" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5 }}>
                    <li className="flex items-start gap-2">
                      <SfCheck size={14} strokeWidth={2} className="mt-0.5 text-[#3B443A]" aria-hidden />
                      Pilnas resursų bibliotekos priėjimas.
                    </li>
                    <li className="flex items-start gap-2">
                      <SfCheck size={14} strokeWidth={2} className="mt-0.5 text-[#3B443A]" aria-hidden />
                      Nuolaidos akademijos mokymams.
                    </li>
                    <li className="flex items-start gap-2">
                      <SfCheck size={14} strokeWidth={2} className="mt-0.5 text-[#3B443A]" aria-hidden />
                      Tiesioginis kontaktas su vadybininku.
                    </li>
                  </ul>
                </Card>
              ) : (
                <Card title="Tapkite partneriu" tone="cream">
                  <p className="m-0 text-[#1A1010]/75" style={{ ...BODY, fontSize: '14px', lineHeight: 1.55 }}>
                    Jei esate kosmetikos specialistas ar klinika — tapkite UNICOS partneriu ir gaukite pilnus resursus, nuolaidas ir asmeninį vadybininką.
                  </p>
                  <div className="mt-4">
                    <CtaLink href="/tapkite-partneriu" variant="primary" labelMode="static">
                      Pildyti paraišką
                    </CtaLink>
                  </div>
                </Card>
              )}

              <Card title="Demo rėžimas" tone="cream">
                <p className="m-0 text-[#1A1010]/70" style={{ ...BODY, fontSize: '13px', lineHeight: 1.55 }}>
                  Kol nėra backendo — persimeskite tarp rolių, kad pamatytumėte, kaip atrodo <code className="bg-[#1A1010]/5 px-1 py-0.5">/resursai</code> partneriui.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('user')}
                    className={`border px-3 py-2 uppercase transition-colors ${!isPartner ? 'border-[#64151F] bg-[#64151F] text-[#EFE8DB]' : 'border-[#1A1010]/20 text-[#1A1010] hover:border-[#64151F]/45'}`}
                    style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500, borderRadius: '0px' }}
                  >
                    Individualus
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('partner')}
                    className={`border px-3 py-2 uppercase transition-colors ${isPartner ? 'border-[#3B443A] bg-[#3B443A] text-[#EFE8DB]' : 'border-[#1A1010]/20 text-[#1A1010] hover:border-[#3B443A]/45'}`}
                    style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500, borderRadius: '0px' }}
                  >
                    Partneris
                  </button>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

function Card({
  title,
  tone = 'dark',
  children,
}: {
  title: string;
  tone?: 'dark' | 'cream';
  children: React.ReactNode;
}) {
  const darkCard = tone === 'dark';
  return (
    <section
      className={`border p-6 max-[767px]:p-5 ${darkCard ? 'border-[#EFE8DB]/20 bg-[#3B443A] text-[#EFE8DB]' : 'border-[#1A1010]/12 bg-white/60 text-[#1A1010]'}`}
      style={{ borderRadius: '0px' }}
    >
      <h2
        className={`m-0 mb-4 ${darkCard ? 'text-[#EFE8DB]' : 'text-[#1A1010]'}`}
        style={{ ...HEADING, fontSize: '20px', fontWeight: 400 }}
      >
        {title}
      </h2>
      <div className={darkCard ? 'text-[#EFE8DB]' : 'text-[#1A1010]'}>{children}</div>
    </section>
  );
}

function QuickLink({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between border-b border-[#1A1010]/10 py-3 last:border-none text-[#1A1010] no-underline transition-colors hover:text-[#64151F]"
      style={{ ...BODY, fontSize: '14px', fontWeight: 500 }}
    >
      <span className="flex items-center gap-3 text-[#1A1010]/75 group-hover:text-[#64151F]">
        <span className="text-[#64151F]">{icon}</span>
        {label}
      </span>
      <span aria-hidden>→</span>
    </Link>
  );
}

function EmptyState({ title, body, href, cta }: { title: string; body: string; href: string; cta: string }) {
  return (
    <div className="flex flex-col items-start gap-3 text-[#1A1010]">
      <p className="m-0" style={{ ...HEADING, fontSize: '18px', fontWeight: 400 }}>
        {title}
      </p>
      <p className="m-0 text-[#1A1010]/70" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5 }}>
        {body}
      </p>
      <CtaLink href={href} variant="primary" labelMode="static">
        {cta}
      </CtaLink>
    </div>
  );
}

function ProfileForm({
  initial,
  inputClass,
  onSave,
}: {
  initial: { fullName: string; email: string; phone: string; company: string };
  inputClass: string;
  onSave: (patch: Partial<{ fullName: string; email: string; phone: string; company: string }>) => void;
}) {
  const [values, setValues] = React.useState(initial);
  const [saved, setSaved] = React.useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(values);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  };

  const labelClass = 'uppercase text-[#EFE8DB]';
  const labelStyle: React.CSSProperties = { ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="pf-name" className={labelClass} style={labelStyle}>
            Vardas ir pavardė
          </label>
          <input
            id="pf-name"
            value={values.fullName}
            onChange={(e) => setValues({ ...values, fullName: e.target.value })}
            className={inputClass}
            style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="pf-email" className={labelClass} style={labelStyle}>
            El. paštas
          </label>
          <input
            id="pf-email"
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className={inputClass}
            style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="pf-phone" className={labelClass} style={labelStyle}>
            Telefonas
          </label>
          <input
            id="pf-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className={inputClass}
            style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
            placeholder="+370 600 00000"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="pf-company" className={labelClass} style={labelStyle}>
            Įmonė
          </label>
          <input
            id="pf-company"
            value={values.company}
            onChange={(e) => setValues({ ...values, company: e.target.value })}
            className={inputClass}
            style={{ ...BODY, borderRadius: '0px', fontSize: '15px' }}
            placeholder="UAB Grožis"
          />
        </div>
      </div>
      <div className="mt-2 flex items-center gap-4">
        <CtaButton type="submit" variant="lightFill" className="min-w-[180px] justify-center">
          Išsaugoti
        </CtaButton>
        {saved ? (
          <span className="uppercase text-[#E8EDE9]" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
            Išsaugota ✓
          </span>
        ) : null}
      </div>
    </form>
  );
}
