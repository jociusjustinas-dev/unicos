'use client';
import * as React from 'react';
import { SPRENDIMAI_NAV_SEGMENTS } from '@/config/sprendimaiSolutionLanding';
import { SfArrowLeft, SfMenu, SfX } from '@/components/icons/feather';
import { CtaLink } from '@/components/ui/CtaLink';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface DropdownColumn {
  label: string;
  items: { title: string; description?: string; href: string }[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const PREKES_ZENKLAI_COLUMNS: DropdownColumn[] = [
  {
    label: 'Premium',
    items: [
      { title: 'Balmain Hair', href: '#' },
      { title: 'Medik8', href: '#' },
      { title: 'Environ', href: '#' },
      { title: 'La Biosthetique', href: '#' },
    ],
  },
  {
    label: 'Profesionalūs',
    items: [
      { title: 'Wella Professionals', href: '#' },
      { title: 'Goldwell', href: '#' },
      { title: 'Schwarzkopf Professional', href: '#' },
      { title: "L'Oréal Professionnel", href: '#' },
    ],
  },
  {
    label: 'Nišiniai',
    items: [
      { title: 'Comfort Zone', href: '#' },
      { title: 'Guinot', href: '#' },
      { title: 'Mary Cohr', href: '#' },
      { title: 'Ahava Pro', href: '#' },
    ],
  },
];

const RESURSAI_COLUMNS: DropdownColumn[] = [
  {
    label: 'Žinios',
    items: [
      { title: 'Tinklaraštis', description: 'Įžvalgos, gairės ir tendencijos specialistams', href: '#' },
      { title: 'Gidai ir metodikos', description: 'Praktiniai protokolai kasdieniam darbui', href: '#' },
      { title: 'DUK', description: 'Atsakymai į dažniausiai užduodamus klausimus', href: '#duk' },
    ],
  },
  {
    label: 'Atsisiuntimai',
    items: [
      { title: 'Katalogai', description: 'Naujausi produktų katalogai ir kainynai', href: '#' },
      { title: 'Mokymų medžiaga', description: 'Programos, skaidrės ir naudingi šablonai', href: '#' },
      { title: 'Partnerio dokumentai', description: 'Formos, taisyklės ir sutartiniai šablonai', href: '#' },
    ],
  },
];

const NAV_FONT: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------


function ColumnLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center px-2 py-1 self-start bg-[rgba(100,21,31,0.08)]">
      <span
        className="break-words [overflow-wrap:anywhere]"
        style={{
          ...NAV_FONT,
          fontSize: '10px',
          lineHeight: '12px',
          fontWeight: 400,
          letterSpacing: '0.75px',
          textTransform: 'uppercase',
          color: '#3B443A',
        }}
      >
        {children}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sprendimai mega-dropdown
// ---------------------------------------------------------------------------

function SprendimaiPanel({
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className={`fixed left-0 right-0 z-[50] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none -translate-y-3'
      }`}
      style={{ top: '76px' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute inset-0 bg-[#EFE8DB] border-b border-[rgba(26,16,16,0.08)]" />
      <div className="relative z-10 max-w-[1800px] mx-auto px-16 max-[767px]:px-6 pt-10 pb-10 max-[479px]:px-4 max-[767px]:pt-7 max-[767px]:pb-7">
        <div className="grid grid-cols-4 gap-5 max-[1279px]:grid-cols-2 max-[767px]:grid-cols-1">
          {SPRENDIMAI_NAV_SEGMENTS.map((segment) => (
            <a
              key={segment.title}
              href={segment.href}
              className="group relative min-h-[236px] overflow-hidden border border-[rgba(26,16,16,0.14)] no-underline"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(26,16,16,0.22) 0%, rgba(26,16,16,0.65) 100%), url("${segment.image}")`,
                  backgroundColor: segment.accent,
                }}
              />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'linear-gradient(180deg, rgba(100,21,31,0.28) 0%, rgba(26,16,16,0.8) 100%)' }}
              />
              <div className="relative z-10 flex h-full flex-col justify-between p-6">
                <span
                  className="self-end translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ ...NAV_FONT, fontSize: '24px', lineHeight: 1, color: '#EFE8DB' }}
                >
                  →
                </span>
                <h3
                  style={{
                    ...NAV_FONT,
                    fontSize: '16px',
                    lineHeight: 1.2,
                    letterSpacing: '0.01em',
                    fontWeight: 400,
                    color: '#EFE8DB',
                  }}
                >
                  {segment.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Prekių ženklai mega-dropdown
// ---------------------------------------------------------------------------

function PrekesZenklaiPanel({
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className={`fixed left-0 right-0 z-[50] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none -translate-y-3'
      }`}
      style={{ top: '76px' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute inset-0 bg-[#EFE8DB] border-b border-[rgba(26,16,16,0.08)]" />
      <div className="relative z-10 max-w-[1800px] mx-auto px-16 max-[767px]:px-6 pt-10 pb-10 max-[479px]:px-4 max-[767px]:pt-7 max-[767px]:pb-7">
        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(3, 1fr) 260px' }}>

          {PREKES_ZENKLAI_COLUMNS.map((col) => (
            <div key={col.label} className="flex flex-col gap-6">
              <ColumnLabel>{col.label}</ColumnLabel>
              <div className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="no-underline py-1 hover:opacity-60 transition-opacity duration-200"
                    style={{ ...NAV_FONT, fontSize: '14px', fontWeight: 500, color: '#1A1010' }}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Info card */}
          <div className="border border-[rgba(59,68,58,0.2)] bg-[#3B443A] p-6 flex flex-col gap-4">
            <p
              style={{ ...NAV_FONT, fontSize: '10px', fontWeight: 400, letterSpacing: '0.75px', textTransform: 'uppercase', color: 'rgba(239,232,219,0.64)' }}
            >
              Visi prekių ženklai
            </p>
            <p style={{ ...NAV_FONT, fontSize: '16px', fontWeight: 400, color: '#EFE8DB', lineHeight: '1.5' }}>
              Atstovaujame 30+ pasaulinių profesionalios kosmetikos prekių ženklų Baltijos šalyse.
            </p>
            <a
              href="/prekiu-zenklai"
              className="inline-flex items-center no-underline hover:opacity-60 transition-opacity duration-200"
              style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500, color: '#EFE8DB' }}
            >
              Žiūrėti visus →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

function ResursaiPanel({
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className={`fixed left-0 right-0 z-[50] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none -translate-y-3'
      }`}
      style={{ top: '76px' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute inset-0 bg-[#EFE8DB] border-b border-[rgba(26,16,16,0.08)]" />
      <div className="relative z-10 max-w-[1800px] mx-auto px-16 max-[767px]:px-6 pt-10 pb-10 max-[479px]:px-4 max-[767px]:pt-7 max-[767px]:pb-7">
        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(2, 1fr) 260px' }}>
          {RESURSAI_COLUMNS.map((col) => (
            <div key={col.label} className="flex flex-col gap-6">
              <ColumnLabel>{col.label}</ColumnLabel>
              <div className="flex flex-col gap-4">
                {col.items.map((item) => (
                  <a key={item.title} href={item.href} className="flex flex-col gap-1 no-underline group">
                    <span
                      className="group-hover:opacity-60 transition-opacity duration-200"
                      style={{ ...NAV_FONT, fontSize: '14px', fontWeight: 500, color: '#1A1010' }}
                    >
                      {item.title}
                    </span>
                    {item.description && (
                      <span
                        style={{ ...NAV_FONT, fontSize: '13px', lineHeight: '1.5', color: 'rgba(26,16,16,0.52)' }}
                      >
                        {item.description}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="border border-[rgba(100,21,31,0.24)] bg-[#64151F] p-6 flex flex-col gap-4">
            <p
              style={{ ...NAV_FONT, fontSize: '10px', fontWeight: 400, letterSpacing: '0.75px', textTransform: 'uppercase', color: 'rgba(239,232,219,0.62)' }}
            >
              Resursų centras
            </p>
            <p style={{ ...NAV_FONT, fontSize: '16px', fontWeight: 400, color: '#EFE8DB', lineHeight: '1.5' }}>
              Viskas vienoje vietoje: mokomoji medžiaga, praktiniai failai ir partneriams aktuali informacija.
            </p>
            <a
              href="#"
              className="inline-flex items-center no-underline hover:opacity-60 transition-opacity duration-200"
              style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500, color: '#EFE8DB' }}
            >
              Atidaryti resursus →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mobile menu
// ---------------------------------------------------------------------------

function MobileMenu({ open }: { open: boolean }) {
  const [openGroup, setOpenGroup] = React.useState<string | null>(null);

  const toggleGroup = (group: string) => {
    setOpenGroup((prev) => (prev === group ? null : group));
  };

  return (
    <div
      className={`absolute left-0 right-0 z-[40] bg-[#EFE8DB] border-b border-[rgba(26,16,16,0.08)] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open ? 'opacity-100 pointer-events-auto max-h-[640px]' : 'opacity-0 pointer-events-none max-h-0'
      }`}
      style={{ top: '72px' }}
    >
      <div className="px-6 py-6 flex flex-col gap-1 max-[479px]:px-4">
        <div className="border-b border-[rgba(26,16,16,0.07)]">
          <button
            type="button"
            onClick={() => toggleGroup('sprendimai')}
            className="flex w-full items-center justify-between border-0 bg-transparent py-3 text-left cursor-pointer"
            style={{ ...NAV_FONT, fontSize: '15px', fontWeight: 500, color: '#1A1010' }}
          >
            <span>Sprendimai</span>
            <span
              aria-hidden
              className="inline-flex items-center justify-center text-[#64151F] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: openGroup === 'sprendimai' ? 'rotate(-90deg)' : 'rotate(180deg)' }}
            >
              <SfArrowLeft size={14} className="text-current" />
            </span>
          </button>

          <div
            className={`grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              openGroup === 'sprendimai' ? 'grid-rows-[1fr] pb-2' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col pb-1">
                {SPRENDIMAI_NAV_SEGMENTS.map((segment) => (
                  <a
                    key={segment.title}
                    href={segment.href}
                    className="no-underline py-2 pl-3 pr-2 [overflow-wrap:anywhere]"
                    style={{ ...NAV_FONT, fontSize: '14px', fontWeight: 400, color: 'rgba(26,16,16,0.72)' }}
                  >
                    {segment.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {[
          { label: 'Prekių ženklai', href: '/prekiu-zenklai' },
          { label: 'Akademija', href: '#' },
          { label: 'Partnerystė', href: '/tapkite-partneriu' },
          { label: 'Apie Unicos', href: '/apie-unicos' },
          { label: 'Kontaktai', href: '/kontaktai' },
          { label: 'Resursai', href: '#' },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="no-underline py-3 pr-2 border-b border-[rgba(26,16,16,0.07)] hover:opacity-60 transition-opacity duration-200 [overflow-wrap:anywhere]"
            style={{ ...NAV_FONT, fontSize: '15px', fontWeight: 500, color: '#1A1010' }}
          >
            {item.label}
          </a>
        ))}
        <div className="mt-6 flex flex-col gap-3">
          <a
            href="#"
            className="no-underline py-2"
            style={{ ...NAV_FONT, fontSize: '14px', fontWeight: 500, color: 'rgba(26,16,16,0.56)' }}
          >
            Prisijungti
          </a>
          <CtaLink href="/tapkite-partneriu" variant="secondary" className="self-center">
            Tapti partneriu
          </CtaLink>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function NavigationBarSection({
  forceLightSurface = false,
  logoOnly = false,
}: {
  forceLightSurface?: boolean;
  logoOnly?: boolean;
}) {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [navVisible, setNavVisible] = React.useState(true);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const lastScrollYRef = React.useRef(0);
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMegaOpen = openDropdown !== null;
  const useLightNavSurface = forceLightSurface || logoOnly || isMegaOpen || mobileOpen || hasScrolled;

  const clearCloseTimeout = React.useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const handleEnter = (name: string) => {
    clearCloseTimeout();
    setOpenDropdown(name);
  };

  const handleLeave = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  const handleToggle = (name: string) =>
    setOpenDropdown((prev) => (prev === name ? null : name));

  React.useEffect(() => {
    return () => clearCloseTimeout();
  }, [clearCloseTimeout]);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHasScrolled(currentY > 24);

      if (isMegaOpen || mobileOpen) {
        setNavVisible(true);
        lastScrollYRef.current = currentY;
        return;
      }

      if (currentY <= 24) {
        setNavVisible(true);
      } else if (currentY > lastScrollYRef.current + 6) {
        setNavVisible(false);
      } else if (currentY < lastScrollYRef.current - 6) {
        setNavVisible(true);
      }

      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMegaOpen, mobileOpen]);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-[999] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        navVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >

      {/* ------------------------------------------------------------------ */}
      {/* Nav bar — transparent, sits over HeroSection's #EFE8DB background  */}
      {/* ------------------------------------------------------------------ */}
      <div
        className={`relative z-[60] py-4 max-[767px]:py-3 transition-colors duration-300 ${
          useLightNavSurface ? 'bg-[#EFE8DB] border-b border-[rgba(26,16,16,0.08)]' : ''
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-16 max-[767px]:px-6 max-[479px]:px-4 flex items-center justify-between">

          {/* LEFT — hamburger + logo */}
          <div className="flex items-center gap-3">
            {logoOnly ? (
              <a href="/" className="no-underline flex items-start self-start">
                <img
                  src="/unicos-logo.svg"
                  alt="Unicos"
                  className="block h-16 w-auto max-[767px]:h-11 transition duration-300"
                  style={{
                    filter: useLightNavSurface
                      ? 'invert(12%) sepia(43%) saturate(1442%) hue-rotate(321deg) brightness(95%) contrast(95%)'
                      : 'brightness(0) invert(1)',
                  }}
                />
              </a>
            ) : (
              <>
                <button
                  className="hidden h-10 w-10 flex-none items-center justify-center overflow-visible border border-[rgba(239,232,219,0.35)] bg-[rgba(26,16,16,0.25)] p-1.5 text-[#EFE8DB] max-[991px]:flex"
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label="Atidaryti meniu"
                >
                  {mobileOpen ? (
                    <SfX size={20} strokeWidth={1.5} className="text-current" aria-hidden />
                  ) : (
                    <SfMenu size={20} strokeWidth={1.5} className="text-current" aria-hidden />
                  )}
                </button>

                <div className="inline-flex flex-col items-start gap-0">
                  <a href="/" className="no-underline flex items-start self-start">
                    <img
                      src="/unicos-logo.svg"
                      alt="Unicos"
                      className="block h-16 w-auto max-[767px]:h-11 transition duration-300"
                      style={{
                        filter: useLightNavSurface
                          ? 'invert(12%) sepia(43%) saturate(1442%) hue-rotate(321deg) brightness(95%) contrast(95%)'
                          : 'brightness(0) invert(1)',
                      }}
                    />
                  </a>
                  <span
                    className={`-mt-[5px] m-0 ml-[18px] block self-start text-left uppercase tracking-[0.08em] leading-none transition-colors duration-300 max-[767px]:ml-[12px] ${
                      useLightNavSurface ? 'text-[#1A1010]' : 'text-[#EFE8DB]'
                    }`}
                    style={{ ...NAV_FONT, fontSize: '10px', lineHeight: 1, fontWeight: 500 }}
                  >
                    Buvusi Sugihara Pro
                  </span>
                </div>
              </>
            )}
          </div>

          {/* CENTER — nav links (desktop only) */}
          {logoOnly ? null : (
            <nav className="flex items-center gap-0.5 max-[991px]:hidden">

            {/* Sprendimai — with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter('sprendimai')}
              onMouseLeave={handleLeave}
            >
              <button
                onClick={() => handleToggle('sprendimai')}
                className={`px-4 py-2 border border-transparent bg-transparent cursor-pointer transition-all duration-300 hover:bg-[rgba(59,68,58,0.88)] hover:text-[#EFE8DB] ${
                  useLightNavSurface
                    ? 'text-[#1A1010] hover:border-transparent'
                    : 'text-[#EFE8DB] hover:border-transparent'
                }`}
                style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500 }}
              >
                Sprendimai
              </button>
            </div>

            {/* Prekių ženklai — with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter('prekes')}
              onMouseLeave={handleLeave}
            >
              <button
                onClick={() => handleToggle('prekes')}
                className={`px-4 py-2 border border-transparent bg-transparent cursor-pointer transition-all duration-300 hover:bg-[rgba(59,68,58,0.88)] hover:text-[#EFE8DB] ${
                  useLightNavSurface
                    ? 'text-[#1A1010] hover:border-transparent'
                    : 'text-[#EFE8DB] hover:border-transparent'
                }`}
                style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500 }}
              >
                Prekių ženklai
              </button>
            </div>

            {/* Plain links */}
            {[
              { label: 'Akademija', href: '#' },
              { label: 'Partnerystė', href: '/tapkite-partneriu' },
              { label: 'Apie Unicos', href: '/apie-unicos' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 border border-transparent no-underline transition-all duration-300 hover:bg-[rgba(59,68,58,0.88)] hover:text-[#EFE8DB] ${
                  useLightNavSurface
                    ? 'text-[#1A1010] hover:border-transparent'
                    : 'text-[#EFE8DB] hover:border-transparent'
                }`}
                style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500 }}
              >
                {item.label}
              </a>
            ))}

            {/* Resursai — with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter('resursai')}
              onMouseLeave={handleLeave}
            >
              <button
                onClick={() => handleToggle('resursai')}
                className={`px-4 py-2 border border-transparent bg-transparent cursor-pointer transition-all duration-300 hover:bg-[rgba(59,68,58,0.88)] hover:text-[#EFE8DB] ${
                  useLightNavSurface
                    ? 'text-[#1A1010] hover:border-transparent'
                    : 'text-[#EFE8DB] hover:border-transparent'
                }`}
                style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500 }}
              >
                Resursai
              </button>
            </div>

            <a
              href="/kontaktai"
              className={`px-4 py-2 border border-transparent no-underline transition-all duration-300 hover:bg-[rgba(59,68,58,0.88)] hover:text-[#EFE8DB] ${
                useLightNavSurface
                  ? 'text-[#1A1010] hover:border-transparent'
                  : 'text-[#EFE8DB] hover:border-transparent'
              }`}
              style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500 }}
            >
              Kontaktai
            </a>
            </nav>
          )}

          {/* RIGHT — auth + CTA */}
          {logoOnly ? null : (
            <div className="flex items-center gap-4">
            {/* Prisijungti — text slide */}
            <a href="#" className="group relative no-underline overflow-hidden max-[767px]:hidden">
              <div
                className="transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-[1.5em]"
                style={{
                  ...NAV_FONT,
                  fontSize: '14px',
                  fontWeight: 500,
                  color: useLightNavSurface ? 'rgba(26,16,16,0.72)' : 'rgba(239,232,219,0.88)',
                  textShadow: `0 1.5em 0 ${useLightNavSurface ? 'rgba(26,16,16,0.72)' : 'rgba(239,232,219,0.88)'}`,
                }}
              >
                Prisijungti
              </div>
            </a>

            <CtaLink href="/tapkite-partneriu" variant="secondary" className="whitespace-nowrap">
              Tapti partneriu
            </CtaLink>
            </div>
          )}

        </div>
      </div>

      {logoOnly ? null : (
        <>
          {/* ------------------------------------------------------------------ */}
          {/* Mega-dropdown panels                                                 */}
          {/* ------------------------------------------------------------------ */}
          <SprendimaiPanel
            open={openDropdown === 'sprendimai'}
            onMouseEnter={() => handleEnter('sprendimai')}
            onMouseLeave={handleLeave}
          />
          <PrekesZenklaiPanel
            open={openDropdown === 'prekes'}
            onMouseEnter={() => handleEnter('prekes')}
            onMouseLeave={handleLeave}
          />
          <ResursaiPanel
            open={openDropdown === 'resursai'}
            onMouseEnter={() => handleEnter('resursai')}
            onMouseLeave={handleLeave}
          />

          {/* ------------------------------------------------------------------ */}
          {/* Mobile menu                                                           */}
          {/* ------------------------------------------------------------------ */}
          <MobileMenu open={mobileOpen} />
        </>
      )}

    </div>
  );
}

export default NavigationBarSection;
