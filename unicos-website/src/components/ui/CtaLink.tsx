'use client';

import * as React from 'react';

export type CtaVariant = 'primary' | 'secondary' | 'outline' | 'glass';

type Props = React.ComponentPropsWithoutRef<'a'> & {
  variant?: CtaVariant;
  /** Slankiojantis tekstas; `static` — statinis be slide. */
  labelMode?: 'slide' | 'static';
  /** Papildomos klasės slankiojančiai etiketei. */
  labelClassName?: string;
  /** Papildomos klasės slankiojančio konteineriui (aukštis, jei ilgesnis tekstas). */
  slideWrapperClassName?: string;
};

const shellClassBase =
  'group relative inline-flex w-fit max-w-full shrink-0 items-center justify-center no-underline overflow-hidden ' +
  'min-h-[var(--btn-height)] px-[var(--btn-padding-x)] ' +
  'transition-[color,background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]';

function Background({ variant }: { variant: CtaVariant }) {
  if (variant === 'primary') {
    return (
      <div className="pointer-events-none absolute inset-0 bg-[var(--color-maroon)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[var(--color-maroon-hover)]" />
    );
  }
  if (variant === 'secondary') {
    return (
      <div className="pointer-events-none absolute inset-0 bg-[var(--color-green)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[var(--color-green-hover)]" />
    );
  }
  if (variant === 'glass') {
    return (
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[#EFE8DB]/25 bg-[#EFE8DB]/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:border-[#EFE8DB]/40 group-hover:bg-[#EFE8DB]/[0.2] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
        aria-hidden
      />
    );
  }
  return (
    <div className="pointer-events-none absolute inset-0 border border-[var(--color-maroon)] transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[var(--color-maroon)]" />
  );
}

export function CtaLink({
  variant = 'primary',
  labelMode = 'slide',
  className = '',
  labelClassName = '',
  slideWrapperClassName = '',
  children,
  ...rest
}: Props) {
  const v = variant;

  const shellClass = `${shellClassBase} rounded-[var(--btn-radius)] ${className}`.trim();

  const slideInner =
    v === 'outline'
      ? `text-[length:var(--btn-font-size)] font-medium normal-case [letter-spacing:var(--btn-letter-spacing)] text-[var(--color-maroon)] transition-transform duration-300 ease-[var(--btn-ease)] group-hover:-translate-y-[1.5em] ${labelClassName}`.trim()
      : v === 'glass'
        ? `text-[length:var(--btn-font-size)] font-medium normal-case [letter-spacing:var(--btn-letter-spacing)] text-[#EFE8DB] transition-transform duration-300 ease-[var(--btn-ease)] group-hover:-translate-y-[1.5em] ${labelClassName}`.trim()
        : `text-[length:var(--btn-font-size)] font-medium normal-case [letter-spacing:var(--btn-letter-spacing)] text-[var(--color-nougat)] transition-transform duration-300 ease-[var(--btn-ease)] group-hover:-translate-y-[1.5em] ${labelClassName}`.trim();

  const slideShadow =
    v === 'glass' ? '0 1.5em 0 #EFE8DB' : '0 1.5em 0 var(--color-nougat)';

  return (
    <a className={shellClass} {...rest}>
      <Background variant={v} />

      {labelMode === 'slide' ? (
        <div
          className={`relative z-[1] flex min-h-0 items-center justify-center overflow-hidden text-center pointer-events-none [height:var(--btn-label-track-height)] ${slideWrapperClassName}`.trim()}
        >
          <div
            className={slideInner}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--btn-font-weight)',
              textShadow: slideShadow,
            }}
          >
            {children}
          </div>
        </div>
      ) : (
        <span
          className={
            v === 'glass'
              ? 'relative z-[1] text-center font-normal normal-case text-[#EFE8DB] [font-size:var(--btn-static-font-size)] [letter-spacing:var(--btn-letter-spacing)] [line-height:var(--btn-static-line-height)]'
              : 'relative z-[1] text-center font-normal normal-case text-[var(--color-nougat)] [font-size:var(--btn-static-font-size)] [letter-spacing:var(--btn-letter-spacing)] [line-height:var(--btn-static-line-height)]'
          }
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {children}
        </span>
      )}
    </a>
  );
}
