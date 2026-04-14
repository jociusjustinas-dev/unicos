import { useState } from 'react';
import KrovlyLogo, { KrovlyIcon } from './components/KrovlyLogo';
import { VariantA, VariantB, VariantC, VariantD, VariantE, VariantF, VariantG } from './components/LogoVariants';

// ─── Design tokens ────────────────────────────────────────────────────────────
const palette = [
  {
    group: 'Primary',
    colors: [
      { name: 'Brand Orange', token: '--color-brand-orange', hex: '#F97316', light: false, usage: 'CTAs, highlights, logo icon' },
      { name: 'Orange Dark', token: '--color-brand-orange-dark', hex: '#EA580C', light: false, usage: 'Hover states, pressed' },
      { name: 'Orange Light', token: '--color-brand-orange-light', hex: '#FED7AA', light: true, usage: 'Tinted backgrounds, badges' },
      { name: 'Orange Pale', token: '--color-brand-orange-pale', hex: '#FFF7ED', light: true, usage: 'Section backgrounds' },
    ],
  },
  {
    group: 'Neutral',
    colors: [
      { name: 'Brand Navy', token: '--color-brand-navy', hex: '#0F172A', light: false, usage: 'Primary text, logo wordmark' },
      { name: 'Brand Slate', token: '--color-brand-slate', hex: '#334155', light: false, usage: 'Secondary text, subheadings' },
      { name: 'Brand Muted', token: '--color-brand-muted', hex: '#64748B', light: false, usage: 'Captions, placeholders' },
      { name: 'Brand Border', token: '--color-brand-border', hex: '#E2E8F0', light: true, usage: 'Dividers, card borders' },
    ],
  },
  {
    group: 'Surface',
    colors: [
      { name: 'Brand Surface', token: '--color-brand-surface', hex: '#F8FAFC', light: true, usage: 'Page background' },
      { name: 'Brand White', token: '--color-brand-white', hex: '#FFFFFF', light: true, usage: 'Card backgrounds' },
    ],
  },
  {
    group: 'Semantic',
    colors: [
      { name: 'Amber', token: '--color-brand-amber', hex: '#FBBF24', light: false, usage: 'Warnings, ratings, attention' },
      { name: 'Green', token: '--color-brand-green', hex: '#10B981', light: false, usage: 'Success, verified, completed' },
      { name: 'Red', token: '--color-brand-red', hex: '#EF4444', light: false, usage: 'Errors, disputes, cancellations' },
    ],
  },
];

const typeScale = [
  { name: 'Display', tag: 'h1', size: '56px / 3.5rem', weight: '700', lineHeight: '1.1', font: 'Space Grotesk', sample: 'Kroviniai greitai' },
  { name: 'Heading 1', tag: 'h1', size: '40px / 2.5rem', weight: '700', lineHeight: '1.15', font: 'Space Grotesk', sample: 'Transport Marketplace' },
  { name: 'Heading 2', tag: 'h2', size: '28px / 1.75rem', weight: '600', lineHeight: '1.25', font: 'Space Grotesk', sample: 'Find your carrier' },
  { name: 'Heading 3', tag: 'h3', size: '20px / 1.25rem', weight: '600', lineHeight: '1.3', font: 'Space Grotesk', sample: 'Post a transport job' },
  { name: 'Body Large', tag: 'p', size: '18px / 1.125rem', weight: '400', lineHeight: '1.7', font: 'Inter', sample: 'The fastest way to move cargo across Lithuania and the EU.' },
  { name: 'Body', tag: 'p', size: '16px / 1rem', weight: '400', lineHeight: '1.7', font: 'Inter', sample: 'Connect with verified carriers for any cargo type — vehicles, machinery, pallets and more.' },
  { name: 'Body Small', tag: 'p', size: '14px / 0.875rem', weight: '400', lineHeight: '1.6', font: 'Inter', sample: 'Krovly commission: 8–15% per completed job, deducted automatically from escrow.' },
  { name: 'Caption', tag: 'span', size: '12px / 0.75rem', weight: '500', lineHeight: '1.5', font: 'Inter', sample: 'Trusted Carrier · 47 completed jobs · 4.9 ★' },
  { name: 'Label / Button', tag: 'span', size: '14px / 0.875rem', weight: '600', lineHeight: '1', font: 'Inter', sample: 'POST A JOB', extra: 'tracking: 0.06em, uppercase' },
];

const logoSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 border-b border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: '#0F172A', marginBottom: 6 }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#64748B', lineHeight: 1.6 }}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function ColorSwatch({ color }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="rounded-xl overflow-hidden border border-[#E2E8F0] cursor-pointer group hover:shadow-md transition-shadow"
      onClick={copy}
    >
      <div
        className="h-20 w-full flex items-end p-2"
        style={{ backgroundColor: color.hex }}
      >
        {copied && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-black/30 text-white">
            Copied!
          </span>
        )}
      </div>
      <div className="p-3 bg-white">
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color: '#0F172A' }}>
          {color.name}
        </p>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#64748B', marginTop: 2 }}>
          {color.hex}
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#94A3B8', marginTop: 4, lineHeight: 1.4 }}>
          {color.usage}
        </p>
      </div>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 13, color: '#64748B', textDecoration: 'none' }}
      className="hover:text-[#F97316] transition-colors"
    >
      {children}
    </a>
  );
}

// ─── Mock UI Components ───────────────────────────────────────────────────────

function Badge({ children, variant = 'default' }) {
  const styles = {
    default: { bg: '#FFF7ED', color: '#EA580C', border: '#FED7AA' },
    success: { bg: '#ECFDF5', color: '#059669', border: '#A7F3D0' },
    amber: { bg: '#FFFBEB', color: '#D97706', border: '#FDE68A' },
    muted: { bg: '#F1F5F9', color: '#64748B', border: '#E2E8F0' },
    navy: { bg: '#0F172A', color: '#FFFFFF', border: '#0F172A' },
  };
  const s = styles[variant] || styles.default;
  return (
    <span
      style={{
        backgroundColor: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: 11,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        borderRadius: 9999,
        padding: '3px 10px',
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  );
}

function Button({ children, variant = 'primary', size = 'md', icon }) {
  const base = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    transition: 'all 0.15s ease',
  };

  const sizes = {
    sm: { fontSize: 12, padding: '8px 16px', borderRadius: 8 },
    md: { fontSize: 13, padding: '12px 24px', borderRadius: 10 },
    lg: { fontSize: 14, padding: '16px 32px', borderRadius: 12 },
  };

  const variants = {
    primary: { backgroundColor: '#F97316', color: '#FFFFFF' },
    secondary: { backgroundColor: '#0F172A', color: '#FFFFFF' },
    outline: { backgroundColor: 'transparent', color: '#0F172A', border: '2px solid #0F172A' },
    ghost: { backgroundColor: 'transparent', color: '#F97316', border: '2px solid #FED7AA' },
    danger: { backgroundColor: '#EF4444', color: '#FFFFFF' },
  };

  return (
    <button style={{ ...base, ...sizes[size], ...variants[variant] }}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

function Card({ children, className = '' }) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: 16,
        padding: 24,
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
      }}
    >
      {children}
    </div>
  );
}

function JobCard() {
  return (
    <Card>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="default">Construction Machinery</Badge>
            <Badge variant="amber">High Complexity</Badge>
          </div>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16, color: '#0F172A', marginTop: 8 }}>
            Bobcat S650 — Vilnius → Hamburg
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#64748B', marginTop: 4 }}>
            Low-loader required · 1,450 km · 15 Apr 2026
          </p>
        </div>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: '#F97316' }}>
          €720
        </span>
      </div>

      <div className="flex items-center gap-3 py-3" style={{ borderTop: '1px solid #F1F5F9' }}>
        <div style={{ width: 36, height: 36, borderRadius: 9999, backgroundColor: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 16 }}>🚚</span>
        </div>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, color: '#0F172A' }}>
            Jonas Carrier
          </p>
          <div className="flex items-center gap-1">
            <span style={{ color: '#FBBF24', fontSize: 12 }}>★★★★★</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#64748B' }}>4.9 · 83 jobs</span>
            <Badge variant="navy">Trusted</Badge>
          </div>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="ghost" size="sm">Details</Button>
          <Button variant="primary" size="sm">Accept Bid</Button>
        </div>
      </div>
    </Card>
  );
}

function StatCard({ icon, value, label, sub }) {
  return (
    <Card>
      <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 32, color: '#0F172A' }}>
        {value}
      </div>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: '#334155', marginTop: 4 }}>
        {label}
      </div>
      {sub && (
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#10B981', marginTop: 4, fontWeight: 600 }}>
          {sub}
        </div>
      )}
    </Card>
  );
}

function InputField({ label, placeholder, type = 'text' }) {
  return (
    <div>
      <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#64748B', display: 'block', marginBottom: 6 }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: '100%',
          fontFamily: 'Inter, sans-serif',
          fontSize: 15,
          color: '#0F172A',
          backgroundColor: '#F8FAFC',
          border: '1.5px solid #E2E8F0',
          borderRadius: 10,
          padding: '11px 16px',
          outline: 'none',
        }}
      />
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const navItems = [
    { href: '#variants', label: 'Variants' },
    { href: '#logo', label: 'Logo' },
    { href: '#color', label: 'Colors' },
    { href: '#typography', label: 'Typography' },
    { href: '#components', label: 'Components' },
    { href: '#usage', label: 'Usage' },
  ];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* Top Nav */}
      <header style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1024, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <KrovlyLogo size="sm" theme="light" />
          <nav style={{ display: 'flex', gap: 28 }}>
            {navItems.map(item => (
              <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
            ))}
          </nav>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 12, color: '#94A3B8' }}>
            Brand v1.0 · April 2026
          </span>
        </div>
      </header>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1024, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 24 }}>
            <KrovlyLogo size="2xl" theme="dark" />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, color: '#94A3B8', fontWeight: 400, maxWidth: 520, lineHeight: 1.6 }}>
              Two-Sided Transport & Cargo Marketplace
            </p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16, color: '#F97316', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Kroviniai — greitai, patikimai, skaidriai
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
              {['Lithuania', 'Baltics', 'EU', 'PWA', 'v5.0'].map(tag => (
                <span key={tag} style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500, color: '#CBD5E1', border: '1px solid #334155', borderRadius: 9999, padding: '4px 14px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Variants Section ─────────────────────────────────────────────────── */}
      <Section
        id="variants"
        title="00 — Logo Concept Variants"
        subtitle="Seven distinct icon concepts exploring different visual metaphors for KROVLY. Each variant carries a different strategic emphasis — from trust to speed to digital-tech to industrial."
      >
        {/* Variant grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>

          {/* A */}
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600, color: '#F97316', background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 6, padding: '2px 10px' }}>A — SELECTED</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#94A3B8' }}>Route Node K</span>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', padding: '20px 0 24px' }}>
              <VariantA size={72} />
              <VariantA size={72} bg="#0F172A" />
            </div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: '#0F172A', marginBottom: 4 }}>Route Node K</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748B', lineHeight: 1.5 }}>
              Geometric K with a circular route node at the arm junction. The two diagonal arms read as arrows — movement, direction. The node = the marketplace connecting sender to carrier.
            </p>
            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Trustworthy', 'Modern', 'Versatile'].map(t => <span key={t} style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: '#10B981', background: '#ECFDF5', borderRadius: 9999, padding: '2px 8px' }}>{t}</span>)}
            </div>
          </Card>

          {/* B */}
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600, color: '#64748B', background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: 6, padding: '2px 10px' }}>B</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#94A3B8' }}>Arrow K</span>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', padding: '20px 0 24px' }}>
              <VariantB size={72} />
              <div style={{ background: '#F8FAFC', borderRadius: 14, padding: 8 }}>
                <VariantB size={56} />
              </div>
            </div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: '#0F172A', marginBottom: 4 }}>Arrow K</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748B', lineHeight: 1.5 }}>
              Dark navy background. The lower arm of the K escapes the letterform and becomes an orange arrowhead — speed, forward motion, urgency. High contrast, assertive.
            </p>
            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Bold', 'Energetic', 'Speed'].map(t => <span key={t} style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: '#F97316', background: '#FFF7ED', borderRadius: 9999, padding: '2px 8px' }}>{t}</span>)}
            </div>
          </Card>

          {/* C */}
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600, color: '#64748B', background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: 6, padding: '2px 10px' }}>C</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#94A3B8' }}>Shield K</span>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', padding: '20px 0 24px' }}>
              <VariantC size={72} />
              <VariantC size={56} />
            </div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: '#0F172A', marginBottom: 4 }}>Shield K</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748B', lineHeight: 1.5 }}>
              K inside an orange shield. Communicates trust, protection, and escrow security. Ideal for "Trusted Carrier" badge and insurance/verification contexts.
            </p>
            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Trust', 'Protection', 'Verified'].map(t => <span key={t} style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: '#0EA5E9', background: '#F0F9FF', borderRadius: 9999, padding: '2px 8px' }}>{t}</span>)}
            </div>
          </Card>

          {/* D */}
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600, color: '#64748B', background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: 6, padding: '2px 10px' }}>D</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#94A3B8' }}>Split Route</span>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', padding: '20px 0 24px' }}>
              <VariantD size={72} />
              <div style={{ background: '#0F172A', borderRadius: 14, padding: 8 }}>
                <VariantD size={56} />
              </div>
            </div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: '#0F172A', marginBottom: 4 }}>Split Route K</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748B', lineHeight: 1.5 }}>
              Two route pins — orange origin, navy destination — connected by lines forming the K. The dual-color arms visually separate sender (orange) from carrier (navy). Two-sided marketplace made literal.
            </p>
            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Two-sided', 'App icon', 'Narrative'].map(t => <span key={t} style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: '#7C3AED', background: '#F5F3FF', borderRadius: 9999, padding: '2px 8px' }}>{t}</span>)}
            </div>
          </Card>

          {/* E */}
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600, color: '#64748B', background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: 6, padding: '2px 10px' }}>E</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#94A3B8' }}>Editorial Monogram</span>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', padding: '20px 0 24px' }}>
              <VariantE size={72} dark={false} />
              <div style={{ background: '#0F172A', borderRadius: 14, padding: 8 }}>
                <VariantE size={56} dark={true} />
              </div>
            </div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: '#0F172A', marginBottom: 4 }}>Editorial Monogram</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748B', lineHeight: 1.5 }}>
              No background — pure K monogram. Lower arm in orange, connecting dot in orange. Ultra-minimal. Premium, editorial, investor-deck quality. Excellent at large sizes and on photography.
            </p>
            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Premium', 'Minimal', 'Editorial'].map(t => <span key={t} style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: '#64748B', background: '#F1F5F9', borderRadius: 9999, padding: '2px 8px' }}>{t}</span>)}
            </div>
          </Card>

          {/* F */}
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600, color: '#64748B', background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: 6, padding: '2px 10px' }}>F</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#94A3B8' }}>Hexagon K</span>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', padding: '20px 0 24px' }}>
              <VariantF size={72} />
              <VariantF size={56} />
            </div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: '#0F172A', marginBottom: 4 }}>Hexagon K</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748B', lineHeight: 1.5 }}>
              K inside a gradient hexagon frame. Hexagons are a universal sign of industry, engineering, and logistics. Works well for B2B, construction machinery segment, and heavy cargo.
            </p>
            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Industrial', 'B2B', 'Heavy cargo'].map(t => <span key={t} style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: '#EA580C', background: '#FFF7ED', borderRadius: 9999, padding: '2px 8px' }}>{t}</span>)}
            </div>
          </Card>

          {/* G */}
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600, color: '#64748B', background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: 6, padding: '2px 10px' }}>G</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#94A3B8' }}>Cargo Monogram</span>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', padding: '20px 0 24px' }}>
              <VariantG size={72} />
              <VariantG size={56} />
            </div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: '#0F172A', marginBottom: 4 }}>Cargo Monogram</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748B', lineHeight: 1.5 }}>
              Two stacked cargo containers form the K arms. Teal-to-orange gradient — fresh, tech-forward, digital marketplace energy. Most narrative — "cargo" is literally in the icon.
            </p>
            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Playful', 'Digital', 'Marketplace'].map(t => <span key={t} style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, color: '#0EA5E9', background: '#F0F9FF', borderRadius: 9999, padding: '2px 8px' }}>{t}</span>)}
            </div>
          </Card>

        </div>

        {/* Side-by-side comparison strip */}
        <Card className="mt-8" style={{ background: '#0F172A' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#475569', marginBottom: 24 }}>
            All variants — dark background comparison
          </p>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              { V: VariantA, label: 'A', props: { bg: '#1E293B' } },
              { V: VariantB, label: 'B', props: {} },
              { V: VariantC, label: 'C', props: {} },
              { V: VariantD, label: 'D', props: {} },
              { V: VariantE, label: 'E', props: { dark: true } },
              { V: VariantF, label: 'F', props: {} },
              { V: VariantG, label: 'G', props: {} },
            ].map(({ V, label, props }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <V size={48} {...props} />
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#475569', marginTop: 8 }}>{label}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Wordmark pairings */}
        <Card className="mt-6">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 24 }}>
            Wordmark pairings — all variants at lockup size
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { V: VariantA, label: 'A — Route Node K (current)', props: { bg: '#F97316' } },
              { V: VariantB, label: 'B — Arrow K', props: {} },
              { V: VariantC, label: 'C — Shield K', props: {} },
              { V: VariantD, label: 'D — Split Route', props: {} },
              { V: VariantE, label: 'E — Editorial Monogram', props: { dark: false } },
              { V: VariantF, label: 'F — Hexagon K', props: {} },
              { V: VariantG, label: 'G — Cargo Monogram', props: {} },
            ].map(({ V, label, props }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0', borderBottom: '1px solid #F1F5F9' }}>
                <V size={44} {...props} />
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  letterSpacing: '0.12em',
                  color: '#0F172A',
                }}>
                  KROVLY
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#94A3B8', marginLeft: 'auto' }}>{label}</span>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* ── Logo Section ─────────────────────────────────────────────────────── */}
      <Section
        id="logo"
        title="01 — Logo System"
        subtitle="The KROVLY logo consists of an icon mark and wordmark. The icon is a geometric K with a route node at the junction of its diagonal arms — symbolising the marketplace connection point between sender and carrier."
      >
        {/* Horizontal Lockup */}
        <div className="grid gap-6" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <Card>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 24 }}>
              Primary — Light background
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 0' }}>
              <KrovlyLogo size="xl" theme="light" />
            </div>
          </Card>

          <Card>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 24 }}>
              Primary — Dark background
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 0', background: '#0F172A', borderRadius: 12 }}>
              <KrovlyLogo size="xl" theme="dark" />
            </div>
          </Card>

          <Card>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 24 }}>
              Vertical lockup
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, padding: '24px 0' }}>
              <KrovlyLogo size="lg" theme="light" layout="vertical" />
              <div style={{ backgroundColor: '#0F172A', borderRadius: 16, padding: '24px 32px' }}>
                <KrovlyLogo size="lg" theme="dark" layout="vertical" />
              </div>
            </div>
          </Card>

          <Card>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 24 }}>
              Icon mark only
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, padding: '24px 0' }}>
              {[24, 32, 40, 56, 72, 96].map(s => (
                <KrovlyIcon key={s} size={s} theme="light" />
              ))}
            </div>
          </Card>
        </div>

        {/* Size scale */}
        <Card className="mt-6">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 24 }}>
            Size scale
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
            {logoSizes.map(s => (
              <div key={s} style={{ textAlign: 'center' }}>
                <KrovlyLogo size={s} theme="light" />
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#94A3B8', marginTop: 8 }}>{s}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Logo don'ts */}
        <Card className="mt-6" style={{ backgroundColor: '#FFF7ED', border: '1px solid #FED7AA' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: '#EA580C', marginBottom: 16 }}>
            ⚠ Logo Usage Rules
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
            {[
              'Never stretch or distort the logo',
              'Never change the icon or wordmark colors independently',
              'Never add drop shadows or effects',
              'Never place on a busy background without a clear zone',
              'Never use the wordmark without the icon in app contexts',
              'Maintain minimum 16px clear space on all sides',
              'Minimum logo width: 80px (horizontal), 48px (icon only)',
              'On photography, use the dark-background variant',
            ].map(rule => (
              <div key={rule} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <span style={{ color: '#EA580C', marginTop: 1 }}>–</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#7C3B0A' }}>{rule}</span>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* ── Color Section ────────────────────────────────────────────────────── */}
      <Section
        id="color"
        title="02 — Color Palette"
        subtitle="KROVLY's palette is built around a vibrant orange — evoking energy, movement, and approachability — anchored by deep navy for trust and professionalism. Click any swatch to copy the hex."
      >
        {palette.map(group => (
          <div key={group.group} className="mb-10">
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 16 }}>
              {group.group}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
              {group.colors.map(c => <ColorSwatch key={c.hex} color={c} />)}
            </div>
          </div>
        ))}

        {/* Gradient */}
        <Card className="mt-2">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 16 }}>
            Brand gradient
          </p>
          <div style={{ height: 80, borderRadius: 12, background: 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)' }} />
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#94A3B8', marginTop: 10 }}>
            linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)
          </p>
        </Card>

        {/* Dark gradient */}
        <Card className="mt-4">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 16 }}>
            Dark hero gradient
          </p>
          <div style={{ height: 80, borderRadius: 12, background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)' }} />
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#94A3B8', marginTop: 10 }}>
            linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)
          </p>
        </Card>
      </Section>

      {/* ── Typography Section ───────────────────────────────────────────────── */}
      <Section
        id="typography"
        title="03 — Typography"
        subtitle="Space Grotesk for display and headings — geometric, modern, characterful. Inter for body copy — highly legible, neutral, trusted. JetBrains Mono for code and technical values."
      >
        {/* Font families */}
        <div className="grid gap-6 mb-10" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          {[
            { name: 'Space Grotesk', role: 'Display / Headings', weights: '400 500 600 700', sample: 'AaBbCc 0–9', desc: 'Used for brand name, section headers, card titles, numeric KPIs' },
            { name: 'Inter', role: 'Body / UI', weights: '400 500 600 700', sample: 'AaBbCc 0–9', desc: 'Body copy, labels, buttons, navigation, input fields' },
            { name: 'JetBrains Mono', role: 'Code / Technical', weights: '400 500', sample: '#F97316 0.875rem', desc: 'Color hex codes, token names, API references, price values' },
          ].map(f => (
            <Card key={f.name}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 8 }}>{f.role}</p>
              <p style={{ fontFamily: `'${f.name}', sans-serif`, fontWeight: 700, fontSize: 28, color: '#0F172A', marginBottom: 4 }}>{f.name}</p>
              <p style={{ fontFamily: `'${f.name}', monospace`, fontSize: 18, color: '#F97316', marginBottom: 12 }}>{f.sample}</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#64748B', lineHeight: 1.5 }}>{f.desc}</p>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#94A3B8', marginTop: 8 }}>Weights: {f.weights}</p>
            </Card>
          ))}
        </div>

        {/* Type scale */}
        <Card>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 20 }}>
            Type scale
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {typeScale.map((t, i) => (
              <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '160px 1fr 120px', alignItems: 'center', padding: '16px 0', borderBottom: i < typeScale.length - 1 ? '1px solid #F1F5F9' : 'none', gap: 16 }}>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color: '#0F172A' }}>{t.name}</p>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#94A3B8', marginTop: 2 }}>{t.size}</p>
                  {t.extra && <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#94A3B8', marginTop: 1 }}>{t.extra}</p>}
                </div>
                <p style={{
                  fontFamily: t.font === 'Space Grotesk' ? "'Space Grotesk', sans-serif" : 'Inter, sans-serif',
                  fontWeight: Number(t.weight),
                  fontSize: Math.min(Number(t.size.split('px')[0]), 36),
                  color: '#0F172A',
                  lineHeight: t.lineHeight,
                  letterSpacing: t.name === 'Label / Button' ? '0.06em' : undefined,
                  textTransform: t.name === 'Label / Button' ? 'uppercase' : undefined,
                }}>
                  {t.sample}
                </p>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#94A3B8', textAlign: 'right' }}>
                  {t.font}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* ── Components Section ───────────────────────────────────────────────── */}
      <Section
        id="components"
        title="04 — UI Components"
        subtitle="Core interactive components for the KROVLY platform, designed for clarity and trust across all cargo workflows."
      >
        {/* Buttons */}
        <Card className="mb-6">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 20 }}>Buttons</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 16 }}>
            <Button variant="primary" size="lg">Post a Job</Button>
            <Button variant="secondary" size="lg">Browse Carriers</Button>
            <Button variant="outline" size="lg">View Details</Button>
            <Button variant="ghost" size="lg">Cancel</Button>
            <Button variant="danger" size="lg">Open Dispute</Button>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 16 }}>
            <Button variant="primary" size="md">Accept Bid</Button>
            <Button variant="secondary" size="md">Submit Offer</Button>
            <Button variant="outline" size="md">Counter-offer</Button>
            <Button variant="ghost" size="md">Save Draft</Button>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <Button variant="primary" size="sm">Confirm</Button>
            <Button variant="secondary" size="sm">Track</Button>
            <Button variant="outline" size="sm">Rate</Button>
          </div>
        </Card>

        {/* Badges */}
        <Card className="mb-6">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 20 }}>Badges & Labels</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Badge variant="default">Construction Machinery</Badge>
            <Badge variant="default">Vehicles</Badge>
            <Badge variant="default">Cargo & Pallets</Badge>
            <Badge variant="success">Completed</Badge>
            <Badge variant="success">Verified Carrier</Badge>
            <Badge variant="amber">High Complexity</Badge>
            <Badge variant="amber">Offer Received</Badge>
            <Badge variant="muted">Draft</Badge>
            <Badge variant="muted">In Transit</Badge>
            <Badge variant="navy">Trusted Carrier ✓</Badge>
          </div>
        </Card>

        {/* Form inputs */}
        <Card className="mb-6">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 20 }}>Form Inputs</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 640 }}>
            <InputField label="Pickup location" placeholder="Vilnius, Lithuania" />
            <InputField label="Delivery location" placeholder="Hamburg, Germany" />
            <InputField label="Transport date" placeholder="15 Apr 2026" type="date" />
            <InputField label="Cargo value (€)" placeholder="12,500" type="number" />
          </div>
        </Card>

        {/* Job card */}
        <div className="mb-6" style={{ maxWidth: 600 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 16 }}>Job Card</p>
          <JobCard />
        </div>

        {/* Stats */}
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 16 }}>KPI Cards</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            <StatCard icon="📦" value="2,847" label="Jobs completed" sub="↑ 31% this month" />
            <StatCard icon="🚚" value="412" label="Verified carriers" sub="↑ 18 this week" />
            <StatCard icon="⭐" value="4.87" label="Avg carrier rating" sub="From 1,200+ reviews" />
            <StatCard icon="💶" value="€38" label="Avg commission" sub="Goal: €42 by Month 12" />
          </div>
        </div>
      </Section>

      {/* ── Usage / Brand Voice Section ──────────────────────────────────────── */}
      <Section
        id="usage"
        title="05 — Brand Voice & Taglines"
        subtitle="KROVLY communicates with confidence and simplicity. Direct, honest, and built for trust — especially in markets where cargo logistics have historically lacked transparency."
      >
        <div className="grid gap-6" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <Card>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 16 }}>Primary tagline</p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: '#0F172A', lineHeight: 1.3 }}>
              Kroviniai — greitai,<br />patikimai, skaidriai.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748B', marginTop: 8 }}>
              "Cargo — fast, reliable, transparently."
            </p>
          </Card>

          <Card>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 16 }}>English tagline</p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: '#0F172A', lineHeight: 1.3 }}>
              Move anything.<br />Trust everyone.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748B', marginTop: 8 }}>
              Used for English-language marketing, EU expansion, investor materials.
            </p>
          </Card>

          <Card>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 16 }}>Brand voice principles</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Direct', 'No jargon. Say exactly what Krovly does.'],
                ['Confident', 'We are the answer. No hedging.'],
                ['Local-first', 'Lithuanian brand, EU scale. Never lose the roots.'],
                ['Trustworthy', 'Every word reinforces reliability and transparency.'],
                ['Action-oriented', 'Buttons, CTAs, and copy drive the user forward.'],
              ].map(([title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: 10 }}>
                  <span style={{ color: '#F97316', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, minWidth: 100 }}>{title}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748B' }}>{desc}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: 16 }}>Sample copy</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { context: 'Hero', text: 'Find a carrier for anything. In minutes.' },
                { context: 'Onboarding', text: 'Post your first job in under 2 minutes. No phone calls. No waiting.' },
                { context: 'Empty state', text: 'No bids yet. Carriers are reviewing your job — usually within the hour.' },
                { context: 'Confirmation', text: 'Job confirmed. Your Bobcat is in safe hands.' },
                { context: 'Error', text: 'Payment failed. Try again or contact support — we\'ll sort it.' },
              ].map(s => (
                <div key={s.context}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#94A3B8' }}>{s.context}</span>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#0F172A', marginTop: 3, lineHeight: 1.5 }}>"{s.text}"</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Domain / identity footer */}
        <Card className="mt-6" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <KrovlyLogo size="lg" theme="dark" />
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16, color: '#FFFFFF' }}>krovly.io · krovly.eu</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#94A3B8', marginTop: 4 }}>Lithuania + EU · Two-Sided Transport Marketplace</p>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#475569', marginTop: 6 }}>Brand Identity v1.0 · April 2026 · Confidential</p>
            </div>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer style={{ padding: '32px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#94A3B8' }}>
          KROVLY Brand Guidelines v1.0 · Prepared April 2026 · All rights reserved by the Krovly founding partners
        </p>
      </footer>
    </div>
  );
}
