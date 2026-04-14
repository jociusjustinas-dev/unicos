/**
 * KROVLY Logo System
 *
 * The icon mark is a geometric "K" with a route node at its center junction —
 * symbolizing the marketplace connection point between sender and carrier.
 * The two diagonal arms of the K read as arrows, evoking movement and direction.
 *
 * Variants:
 *   - full: icon + wordmark (default)
 *   - icon: icon mark only
 *   - wordmark: text only
 *
 * Themes:
 *   - light: orange icon, dark wordmark (for light backgrounds)
 *   - dark: white icon + wordmark (for dark backgrounds)
 *   - mono: all dark (for single-color contexts)
 *   - inverse: all white (for dark backgrounds single-color)
 */

export function KrovlyIcon({ size = 40, theme = 'light', className = '' }) {
  const isBg = theme !== 'transparent';
  const bgColor = theme === 'dark' ? '#0F172A' : '#F97316';
  const fgColor = theme === 'dark' || theme === 'light' ? '#FFFFFF' : (theme === 'mono' ? '#0F172A' : '#FFFFFF');
  const nodeFill = theme === 'dark' ? '#F97316' : (theme === 'mono' ? '#0F172A' : '#F97316');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="KROVLY icon"
    >
      {/* Rounded square background */}
      <rect width="48" height="48" rx="11" fill={bgColor} />

      {/* Vertical bar of K */}
      <rect x="10" y="9" width="7" height="30" rx="3" fill={fgColor} />

      {/* Upper diagonal arm (lower-left to upper-right) */}
      <line
        x1="16.5"
        y1="24"
        x2="37"
        y2="10"
        stroke={fgColor}
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Lower diagonal arm (upper-left to lower-right) */}
      <line
        x1="16.5"
        y1="24"
        x2="37"
        y2="38"
        stroke={fgColor}
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Route node — the marketplace connection point */}
      <circle cx="17" cy="24" r="4.5" fill={nodeFill} />
      <circle cx="17" cy="24" r="2" fill={fgColor} />
    </svg>
  );
}

export function KrovlyWordmark({ size = 'md', theme = 'light', className = '' }) {
  const sizeMap = {
    xs: { fontSize: 16, letterSpacing: '0.12em' },
    sm: { fontSize: 20, letterSpacing: '0.12em' },
    md: { fontSize: 28, letterSpacing: '0.12em' },
    lg: { fontSize: 40, letterSpacing: '0.12em' },
    xl: { fontSize: 56, letterSpacing: '0.12em' },
    '2xl': { fontSize: 72, letterSpacing: '0.12em' },
  };

  const { fontSize, letterSpacing } = sizeMap[size] || sizeMap.md;
  const color = theme === 'dark' || theme === 'inverse' ? '#FFFFFF' : '#0F172A';

  return (
    <svg
      width={fontSize * 4.8}
      height={fontSize * 1.3}
      viewBox={`0 0 ${fontSize * 4.8} ${fontSize * 1.3}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="KROVLY"
    >
      <text
        x="0"
        y={fontSize}
        fontFamily="'Space Grotesk', 'Inter', system-ui, sans-serif"
        fontWeight="700"
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        fill={color}
        style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}
      >
        KROVLY
      </text>
    </svg>
  );
}

export function KrovlyLogo({
  size = 'md',
  theme = 'light',
  layout = 'horizontal',
  className = '',
}) {
  const iconSizeMap = {
    xs: 24, sm: 32, md: 40, lg: 56, xl: 72, '2xl': 96,
  };
  const iconSize = iconSizeMap[size] || 40;
  const gap = layout === 'horizontal' ? iconSize * 0.3 : iconSize * 0.25;

  const wordmarkColor = theme === 'dark' || theme === 'inverse' ? '#FFFFFF' : '#0F172A';
  const iconTheme = theme;

  const fontSizeMap = {
    xs: 13, sm: 17, md: 22, lg: 30, xl: 40, '2xl': 52,
  };
  const fontSize = fontSizeMap[size] || 22;

  if (layout === 'vertical') {
    return (
      <div
        className={`flex flex-col items-center ${className}`}
        style={{ gap }}
        role="img"
        aria-label="KROVLY"
      >
        <KrovlyIcon size={iconSize} theme={iconTheme} />
        <span
          style={{
            fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
            fontWeight: 700,
            fontSize,
            letterSpacing: '0.12em',
            color: wordmarkColor,
            lineHeight: 1,
          }}
        >
          KROVLY
        </span>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center ${className}`}
      style={{ gap }}
      role="img"
      aria-label="KROVLY"
    >
      <KrovlyIcon size={iconSize} theme={iconTheme} />
      <span
        style={{
          fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
          fontWeight: 700,
          fontSize,
          letterSpacing: '0.12em',
          color: wordmarkColor,
          lineHeight: 1,
        }}
      >
        KROVLY
      </span>
    </div>
  );
}

export default KrovlyLogo;
