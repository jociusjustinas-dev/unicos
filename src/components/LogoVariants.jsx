/**
 * KROVLY — Logo Concept Variants
 *
 * A — Route Node K (current)     Geometric K, route node at junction
 * B — Arrow K                    K lower arm extends into bold forward arrow
 * C — Shield K                   K inside protective shield (trust/escrow)
 * D — Infinity Route             Two nodes linked by path, K in negative space
 * E — Monogram K                 Ultra-minimal single-weight K, editorial style
 * F — Hexagon K                  K inside hexagon — industrial/logistics feel
 */

// ─── Variant A — Route Node K (existing, shown for comparison) ───────────────
export function VariantA({ size = 56, bg = '#F97316' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="13" fill={bg} />
      <rect x="12" y="11" width="8" height="34" rx="3.5" fill="white" />
      <line x1="19.5" y1="28" x2="43" y2="12" stroke="white" strokeWidth="8" strokeLinecap="round" />
      <line x1="19.5" y1="28" x2="43" y2="44" stroke="white" strokeWidth="8" strokeLinecap="round" />
      <circle cx="20" cy="28" r="5" fill={bg} />
      <circle cx="20" cy="28" r="2.2" fill="white" />
    </svg>
  );
}

// ─── Variant B — Forward Arrow K ─────────────────────────────────────────────
// The lower arm of the K breaks free and becomes an arrow — movement, speed.
// Dark navy pill background, orange accent on the arrow tip.
export function VariantB({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dark rounded rect */}
      <rect width="56" height="56" rx="13" fill="#0F172A" />

      {/* Vertical bar */}
      <rect x="11" y="11" width="8" height="34" rx="3.5" fill="white" />

      {/* Upper arm — clean diagonal */}
      <line x1="18.5" y1="28" x2="40" y2="13" stroke="white" strokeWidth="7.5" strokeLinecap="round" />

      {/* Lower arm — runs to the arrow tip (shorter stop) */}
      <line x1="18.5" y1="28" x2="36" y2="40" stroke="white" strokeWidth="7.5" strokeLinecap="round" />

      {/* Arrow head — orange accent burst */}
      <polygon points="36,33 44,40 36,47" fill="#F97316" />
    </svg>
  );
}

// ─── Variant C — Shield K ────────────────────────────────────────────────────
// Shield shape suggests trust, escrow protection, verified carriers.
// Orange shield with white K — works well for "Trusted Carrier" badge.
export function VariantC({ size = 56 }) {
  const s = size / 56;
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield path */}
      <path
        d="M28 4 L48 12 L48 30 C48 42 36 52 28 54 C20 52 8 42 8 30 L8 12 Z"
        fill="#F97316"
      />
      {/* Inner highlight ring */}
      <path
        d="M28 9 L44 16 L44 30 C44 39.5 34.5 48 28 50 C21.5 48 12 39.5 12 30 L12 16 Z"
        fill="#EA580C"
        opacity="0.4"
      />
      {/* K — vertical bar */}
      <rect x="16" y="16" width="6.5" height="24" rx="2.5" fill="white" />
      {/* K — upper arm */}
      <line x1="21.5" y1="28" x2="37" y2="17" stroke="white" strokeWidth="6.5" strokeLinecap="round" />
      {/* K — lower arm */}
      <line x1="21.5" y1="28" x2="37" y2="39" stroke="white" strokeWidth="6.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Variant D — Split Route K ───────────────────────────────────────────────
// Two origin/destination pins connected by a route line that forms the K shape.
// Clean white background, very digital/tech/app-like.
export function VariantD({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft white square bg */}
      <rect width="56" height="56" rx="13" fill="#FFF7ED" />

      {/* Route line: upper origin to center junction */}
      <line x1="14" y1="28" x2="40" y2="11" stroke="#F97316" strokeWidth="5.5" strokeLinecap="round" />
      {/* Route line: center junction to lower destination */}
      <line x1="14" y1="28" x2="40" y2="45" stroke="#0F172A" strokeWidth="5.5" strokeLinecap="round" />
      {/* Vertical route pillar */}
      <rect x="10" y="11" width="7.5" height="34" rx="3" fill="#0F172A" />

      {/* Origin pin — upper (orange) */}
      <circle cx="40" cy="11" r="5.5" fill="#F97316" />
      <circle cx="40" cy="11" r="2.5" fill="white" />

      {/* Destination pin — lower (navy) */}
      <circle cx="40" cy="45" r="5.5" fill="#0F172A" />
      <circle cx="40" cy="45" r="2.5" fill="white" />

      {/* Junction node */}
      <circle cx="14" cy="28" r="4.5" fill="#F97316" />
    </svg>
  );
}

// ─── Variant E — Editorial Monogram ──────────────────────────────────────────
// Ultra-minimal, single-weight K. No background. Works for premium,
// B2B, and enterprise contexts. Can be used dark or light.
export function VariantE({ size = 56, dark = false }) {
  const c = dark ? '#FFFFFF' : '#0F172A';
  const accent = '#F97316';
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Vertical stroke */}
      <rect x="11" y="8" width="7" height="40" rx="2" fill={c} />
      {/* Upper arm */}
      <line x1="17.5" y1="28" x2="45" y2="10" stroke={c} strokeWidth="7" strokeLinecap="round" />
      {/* Lower arm — orange for distinction */}
      <line x1="17.5" y1="28" x2="45" y2="46" stroke={accent} strokeWidth="7" strokeLinecap="round" />
      {/* Small connector dot */}
      <circle cx="17.5" cy="28" r="3.5" fill={accent} />
    </svg>
  );
}

// ─── Variant F — Hexagon K ───────────────────────────────────────────────────
// Hexagon frame = industrial, logistics, B2B. Popular in transport/energy sectors.
// Gradient fill, sharp K.
export function VariantF({ size = 56 }) {
  // Hexagon points for 56x56 viewBox
  const hex = "28,4 50,16 50,40 28,52 6,40 6,16";
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hexGrad" x1="6" y1="4" x2="50" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
      </defs>
      <polygon points={hex} fill="url(#hexGrad)" />
      {/* K vertical */}
      <rect x="14" y="14" width="7" height="28" rx="2.5" fill="white" />
      {/* K upper arm */}
      <line x1="20.5" y1="28" x2="39" y2="15" stroke="white" strokeWidth="7" strokeLinecap="round" />
      {/* K lower arm */}
      <line x1="20.5" y1="28" x2="39" y2="41" stroke="white" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

// ─── Variant G — Cargo Monogram ──────────────────────────────────────────────
// K built from two overlapping cargo containers — playful but professional.
// Teal-to-orange gradient for a fresh, modern digital marketplace feel.
export function VariantG({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cargoGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <rect width="56" height="56" rx="13" fill="url(#cargoGrad)" />

      {/* Upper cargo block = upper K arm */}
      <rect x="21" y="10" width="22" height="15" rx="3.5" fill="white" opacity="0.95" />
      {/* Lower cargo block = lower K arm */}
      <rect x="21" y="31" width="22" height="15" rx="3.5" fill="white" opacity="0.85" />

      {/* Vertical bar */}
      <rect x="10" y="10" width="8" height="36" rx="3" fill="white" />

      {/* Connector line between blocks — the "K junction" */}
      <rect x="18" y="24.5" width="6" height="7" rx="0" fill="white" opacity="0.4" />

      {/* Cargo stripe details */}
      <line x1="25" y1="14" x2="39" y2="14" stroke="url(#cargoGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="25" y1="38" x2="39" y2="38" stroke="url(#cargoGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export default { VariantA, VariantB, VariantC, VariantD, VariantE, VariantF, VariantG };
