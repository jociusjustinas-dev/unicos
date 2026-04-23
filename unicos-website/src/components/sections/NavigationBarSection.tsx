'use client';
import * as React from 'react';
import Link from 'next/link';
import { SPRENDIMAI_NAV_SEGMENTS } from '@/config/sprendimaiSolutionLanding';
import { SfMenu, SfX } from '@/components/icons/feather';
import { CtaLink } from '@/components/ui/CtaLink';
import { ChevronDownIcon } from '@/components/ui/ChevronArrows';
import { useAuth } from '@/lib/auth';

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

/** Visi prekių ženklų įrašai nukreipia į šablono puslapį `/prekiu-zenklai/guinot`, kol nėra konkrečių brand'o puslapių. */
const BRAND_TEMPLATE_HREF = '/prekiu-zenklai/guinot';
const PREKES_ZENKLAI_COLUMNS: DropdownColumn[] = [
  {
    label: 'Premium',
    items: [
      { title: 'Balmain Hair', href: BRAND_TEMPLATE_HREF },
      { title: 'Medik8', href: BRAND_TEMPLATE_HREF },
      { title: 'Environ', href: BRAND_TEMPLATE_HREF },
      { title: 'La Biosthetique', href: BRAND_TEMPLATE_HREF },
    ],
  },
  {
    label: 'Profesionalūs',
    items: [
      { title: 'Wella Professionals', href: BRAND_TEMPLATE_HREF },
      { title: 'Goldwell', href: BRAND_TEMPLATE_HREF },
      { title: 'Schwarzkopf Professional', href: BRAND_TEMPLATE_HREF },
      { title: "L'Oréal Professionnel", href: BRAND_TEMPLATE_HREF },
    ],
  },
  {
    label: 'Nišiniai',
    items: [
      { title: 'Comfort Zone', href: BRAND_TEMPLATE_HREF },
      { title: 'Guinot', href: '/prekiu-zenklai/guinot' },
      { title: 'Mary Cohr', href: BRAND_TEMPLATE_HREF },
      { title: 'Ahava Pro', href: BRAND_TEMPLATE_HREF },
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

/** Kai `true` — header'yje jokios nuorodos neveda į puslapius (tik `#` + preventDefault). Įjunkite `false`, kai norėsite vėl įjungti maršrutus. */
export const NAV_HEADER_URLS_DISABLED = false;

function navAnchorAttrs(
  href: string
): Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> {
  if (!NAV_HEADER_URLS_DISABLED) {
    return { href };
  }
  return {
    href: '#',
    onClick(e) {
      e.preventDefault();
    },
  };
}

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
              {...navAnchorAttrs(segment.href)}
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
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
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
                    {...navAnchorAttrs(item.href)}
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
              {...navAnchorAttrs('/prekiu-zenklai')}
              className="inline-flex items-center no-underline hover:opacity-60 transition-opacity duration-200"
              style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500, color: '#EFE8DB' }}
            >
              Žiūrėti visus
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
                  <a key={item.title} {...navAnchorAttrs(item.href)} className="flex flex-col gap-1 no-underline group">
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
              {...navAnchorAttrs('/resursai')}
              className="inline-flex items-center no-underline hover:opacity-60 transition-opacity duration-200"
              style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500, color: '#EFE8DB' }}
            >
              Atidaryti resursus
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
            aria-expanded={openGroup === 'sprendimai'}
          >
            <span>Sprendimai</span>
            <span
              aria-hidden
              className="inline-flex items-center justify-center text-[#64151F] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: openGroup === 'sprendimai' ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <ChevronDownIcon className="h-4 w-4 text-current" />
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
                    {...navAnchorAttrs(segment.href)}
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
          { label: 'Akademija', href: '/akademija' },
          { label: 'Partnerystė', href: '/partneryste' },
          { label: 'Apie Unicos', href: '/apie-unicos' },
          { label: 'Kontaktai', href: '/kontaktai' },
          { label: 'Resursai', href: '/resursai' },
        ].map((item) => (
          <a
            key={item.label}
            {...navAnchorAttrs(item.href)}
            className="no-underline py-3 pr-2 border-b border-[rgba(26,16,16,0.07)] hover:opacity-60 transition-opacity duration-200 [overflow-wrap:anywhere]"
            style={{ ...NAV_FONT, fontSize: '15px', fontWeight: 500, color: '#1A1010' }}
          >
            {item.label}
          </a>
        ))}
        <MobileAccountBlock />
        <div className="mt-6 flex flex-col gap-3">
          <CtaLink {...navAnchorAttrs('#')} variant="outline" className="self-start">
            B2B platforma
          </CtaLink>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

function MobileAccountBlock() {
  const { user, isAuthenticated, isHydrated, signOut } = useAuth();
  if (!isHydrated) return null;
  if (!isAuthenticated) {
    return (
      <div className="mt-2 flex flex-col gap-2 border-t border-[rgba(26,16,16,0.07)] pt-4">
        <Link
          href="/prisijungti"
          className="no-underline text-[#1A1010]"
          style={{ ...NAV_FONT, fontSize: '15px', fontWeight: 500 }}
        >
          Prisijungti
        </Link>
        <Link
          href="/sukurti-paskyra"
          className="no-underline text-[#1A1010]/65"
          style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500 }}
        >
          Susikurti paskyrą
        </Link>
      </div>
    );
  }
  return (
    <div className="mt-2 flex flex-col gap-2 border-t border-[rgba(26,16,16,0.07)] pt-4">
      <p className="m-0 text-[#1A1010]/65" style={{ ...NAV_FONT, fontSize: '12px' }}>
        Prisijungę kaip
      </p>
      <p className="m-0 truncate text-[#1A1010]" style={{ ...NAV_FONT, fontSize: '14px', fontWeight: 500 }}>
        {user?.fullName || user?.email}
      </p>
      <Link
        href="/profilis"
        className="mt-2 no-underline text-[#1A1010]"
        style={{ ...NAV_FONT, fontSize: '14px', fontWeight: 500 }}
      >
        Mano paskyra
      </Link>
      <button
        type="button"
        onClick={signOut}
        className="text-left text-[#64151F]"
        style={{ ...NAV_FONT, fontSize: '14px', fontWeight: 500 }}
      >
        Atsijungti
      </button>
    </div>
  );
}

function AccountMenu({ useLightNavSurface }: { useLightNavSurface: boolean }) {
  const { user, isAuthenticated, isHydrated, signOut } = useAuth();
  const [open, setOpen] = React.useState(false);
  const wrapRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('mousedown', onClick);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onClick);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (!isHydrated) return null;

  if (!isAuthenticated) {
    return (
      <>
        <Link
          href="/prisijungti"
          className={`no-underline transition-opacity duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-80 max-[767px]:hidden ${
            useLightNavSurface ? 'text-[#1A1010]/78' : 'text-[#EFE8DB]/88'
          }`}
          style={{ ...NAV_FONT, fontSize: '14px', fontWeight: 500 }}
        >
          Prisijungti
        </Link>
        <CtaLink href="/tapkite-partneriu" variant="secondary" className="whitespace-nowrap">
          Tapti partneriu
        </CtaLink>
      </>
    );
  }

  const initials = (user?.fullName || user?.email || 'U').slice(0, 1).toUpperCase();

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Mano paskyra"
        className={`flex h-10 items-center gap-2 border px-3 transition-colors duration-200 ${
          useLightNavSurface
            ? 'border-[#1A1010]/15 bg-[#EFE8DB] text-[#1A1010] hover:border-[#64151F]/45'
            : 'border-[#EFE8DB]/28 bg-[rgba(26,16,16,0.25)] text-[#EFE8DB] hover:border-[#EFE8DB]/55'
        }`}
        style={{ borderRadius: '0px', ...NAV_FONT, fontSize: '13px', fontWeight: 500 }}
      >
        <span
          className={`grid h-7 w-7 place-items-center text-[12px] font-semibold ${
            useLightNavSurface ? 'bg-[#64151F] text-[#EFE8DB]' : 'bg-[#EFE8DB] text-[#64151F]'
          }`}
          style={{ borderRadius: '999px' }}
          aria-hidden
        >
          {initials}
        </span>
        <span className="hidden max-[479px]:block">Paskyra</span>
        <span className="max-[479px]:hidden">{user?.fullName?.split(' ')[0] || 'Paskyra'}</span>
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+8px)] z-[80] w-[240px] border border-[#1A1010]/10 bg-[#EFE8DB] p-2 text-[#1A1010] shadow-[0_20px_48px_rgba(26,16,16,0.18)]"
          style={{ borderRadius: '0px' }}
        >
          <div className="border-b border-[#1A1010]/10 px-3 py-3">
            <p className="m-0 truncate text-[#1A1010]" style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500 }}>
              {user?.fullName}
            </p>
            <p className="m-0 truncate text-[#1A1010]/65" style={{ ...NAV_FONT, fontSize: '12px' }}>
              {user?.email}
            </p>
          </div>
          <Link
            href="/profilis"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 no-underline text-[#1A1010] transition-colors hover:bg-[#1A1010]/5"
            style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500 }}
            role="menuitem"
          >
            Mano paskyra
          </Link>
          <Link
            href="/akademija"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 no-underline text-[#1A1010] transition-colors hover:bg-[#1A1010]/5"
            style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500 }}
            role="menuitem"
          >
            Mokymai
          </Link>
          <Link
            href="/resursai"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 no-underline text-[#1A1010] transition-colors hover:bg-[#1A1010]/5"
            style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500 }}
            role="menuitem"
          >
            Resursai
          </Link>
          <button
            type="button"
            onClick={() => {
              signOut();
              setOpen(false);
            }}
            className="block w-full border-t border-[#1A1010]/10 px-3 py-2 text-left text-[#64151F] transition-colors hover:bg-[#1A1010]/5"
            style={{ ...NAV_FONT, fontSize: '13px', fontWeight: 500 }}
            role="menuitem"
          >
            Atsijungti
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function NavigationBarSection({
  forceLightSurface = false,
  logoOnly = false,
  transparentStatic = false,
}: {
  forceLightSurface?: boolean;
  logoOnly?: boolean;
  /** Be fono, ne sticky, logo žaliai — dedamas virš hero, kurio fonas jau kreminis. */
  transparentStatic?: boolean;
}) {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [navVisible, setNavVisible] = React.useState(true);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const lastScrollYRef = React.useRef(0);
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMegaOpen = openDropdown !== null;
  const useLightNavSurface = !transparentStatic && (forceLightSurface || logoOnly || isMegaOpen || mobileOpen || hasScrolled);

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

  const headerDocked = navVisible || mobileOpen || isMegaOpen;

  React.useEffect(() => {
    document.documentElement.style.setProperty('--site-sticky-top', headerDocked ? '8rem' : '0px');
    return () => {
      document.documentElement.style.removeProperty('--site-sticky-top');
    };
  }, [headerDocked]);

  return (
    <div
      className={
        transparentStatic
          ? 'absolute inset-x-0 top-0 z-[999]'
          : `fixed inset-x-0 top-0 z-[999] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              navVisible ? 'translate-y-0' : '-translate-y-full'
            }`
      }
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
              <a {...navAnchorAttrs('/')} className="no-underline flex items-start self-start">
                {transparentStatic ? (
                  <span
                    aria-label="Unicos"
                    role="img"
                    className="block h-16 max-[767px]:h-11"
                    style={{
                      width: '184px',
                      backgroundColor: '#3B443A',
                      WebkitMaskImage: 'url("/unicos-logo.svg")',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'left center',
                      WebkitMaskSize: 'contain',
                      maskImage: 'url("/unicos-logo.svg")',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'left center',
                      maskSize: 'contain',
                    }}
                  />
                ) : (
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
                )}
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

                <div className="relative inline-flex flex-col items-start gap-0">
                  <a {...navAnchorAttrs('/')} className="no-underline flex items-center">
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
                    className={`-mt-[5px] m-0 ml-[18px] block self-start text-left uppercase tracking-[0.08em] leading-none transition-colors duration-300 max-[991px]:hidden ${
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
              { label: 'Akademija', href: '/akademija' },
              { label: 'Partnerystė', href: '/partneryste' },
              { label: 'Apie Unicos', href: '/apie-unicos' },
            ].map((item) => (
              <a
                key={item.label}
                {...navAnchorAttrs(item.href)}
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
              {...navAnchorAttrs('/kontaktai')}
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
            {/* B2B platforma — ghost mygtukas (outline) vietoj buvusio „Prisijungti“ teksto. */}
            <CtaLink
              {...navAnchorAttrs('#')}
              variant={useLightNavSurface ? 'outline' : 'outlineLight'}
              className="whitespace-nowrap max-[767px]:hidden"
            >
              B2B platforma
            </CtaLink>

            <AccountMenu useLightNavSurface={useLightNavSurface} />
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
