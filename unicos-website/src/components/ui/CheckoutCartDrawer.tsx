'use client';

import * as React from 'react';
import Link from 'next/link';
import { CtaLink } from '@/components/ui/CtaLink';
import { SfX } from '@/components/icons/feather';
import { useCart, formatEur, type CartItem } from '@/lib/cart';

const BODY: React.CSSProperties = {
  fontFamily: "'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif",
};

const HEADING: React.CSSProperties = {
  fontFamily: "'Quiche Sans', Georgia, serif",
};

export function CheckoutCartDrawer() {
  const { items, isDrawerOpen, closeDrawer, totalQuantity, totalPrice, increment, decrement, removeItem } = useCart();

  return (
    <div
      aria-hidden={!isDrawerOpen}
      className={`fixed inset-0 z-[1200] ${isDrawerOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Uždaryti krepšelį"
        onClick={closeDrawer}
        className={`absolute inset-0 cursor-default bg-[rgba(26,16,16,0.55)] backdrop-blur-[2px] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isDrawerOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className={`absolute right-0 top-0 h-dvh w-[min(480px,100vw)] bg-[#EFE8DB] shadow-[-20px_0_60px_rgba(26,16,16,0.25)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between border-b border-[#1A1010]/10 px-6 py-5">
            <div className="flex items-baseline gap-3">
              <h2 id="cart-drawer-title" className="m-0 text-[#1A1010]" style={{ ...HEADING, fontSize: '22px', fontWeight: 400 }}>
                Jūsų krepšelis
              </h2>
              <span className="uppercase text-[#1A1010]/55" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                {totalQuantity} {totalQuantity === 1 ? 'vieta' : totalQuantity > 1 && totalQuantity < 10 ? 'vietos' : 'vietų'}
              </span>
            </div>
            <button
              type="button"
              onClick={closeDrawer}
              aria-label="Uždaryti"
              className="flex h-10 w-10 items-center justify-center border border-[#1A1010]/15 bg-transparent text-[#1A1010] transition-colors duration-300 hover:border-[#64151F] hover:bg-[#64151F] hover:text-[#EFE8DB]"
              style={{ borderRadius: '0px' }}
            >
              <SfX size={18} strokeWidth={1.5} aria-hidden />
            </button>
          </header>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <p className="m-0 text-[#1A1010]" style={{ ...HEADING, fontSize: '22px', fontWeight: 400 }}>
                  Krepšelis tuščias
                </p>
                <p className="m-0 max-w-[32ch] text-[#1A1010]/70" style={{ ...BODY, fontSize: '14px', lineHeight: 1.5 }}>
                  Pasirinkite renginį iš Akademijos ir jį pridėsime čia.
                </p>
                <div className="mt-2">
                  <CtaLink href="/akademija" variant="outline" labelMode="static" onClick={closeDrawer}>
                    Peržiūrėti mokymus
                  </CtaLink>
                </div>
              </div>
            ) : (
              <ul className="m-0 flex list-none flex-col gap-4 p-0">
                {items.map((item) => (
                  <CartRow
                    key={item.id}
                    item={item}
                    onInc={() => increment(item.id)}
                    onDec={() => decrement(item.id)}
                    onRemove={() => removeItem(item.id)}
                  />
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 ? (
            <footer className="border-t border-[#1A1010]/10 bg-[#EFE8DB] px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="uppercase text-[#1A1010]/62" style={{ ...BODY, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 500 }}>
                  Iš viso
                </span>
                <span className="text-[#64151F]" style={{ ...HEADING, fontSize: '22px', fontWeight: 400 }}>
                  {formatEur(totalPrice)}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/akademija/registracija"
                  onClick={closeDrawer}
                  className="inline-flex min-h-[48px] w-full items-center justify-center border border-transparent bg-[#64151F] px-6 py-3 text-center text-[13px] font-medium uppercase tracking-[0.04em] text-[#EFE8DB] no-underline transition-colors duration-200 hover:bg-[#7a222c]"
                  style={{ ...BODY, borderRadius: '0px' }}
                >
                  Pereiti prie apmokėjimo
                </Link>
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="text-center text-[#1A1010]/65 underline underline-offset-2 transition-colors hover:text-[#64151F]"
                  style={{ ...BODY, fontSize: '13px', fontWeight: 500 }}
                >
                  Tęsti peržiūrą
                </button>
              </div>
            </footer>
          ) : null}
        </div>
      </aside>
    </div>
  );
}

function CartRow({
  item,
  onInc,
  onDec,
  onRemove,
}: {
  item: CartItem;
  onInc: () => void;
  onDec: () => void;
  onRemove: () => void;
}) {
  return (
    <li className="flex gap-4 border border-[#1A1010]/10 bg-white/60 p-3" style={{ borderRadius: '0px' }}>
      {item.imageSrc ? (
        <div className="h-20 w-20 shrink-0 overflow-hidden border border-[#1A1010]/10" style={{ borderRadius: '0px' }}>
          <img src={item.imageSrc} alt="" loading="lazy" className="h-full w-full object-cover" />
        </div>
      ) : null}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="m-0 truncate text-[#1A1010]" style={{ ...BODY, fontSize: '14px', fontWeight: 500, lineHeight: 1.3 }}>
          {item.title}
        </p>
        {item.date ? (
          <p className="m-0 text-[#1A1010]/62" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
            {item.date}
          </p>
        ) : null}
        {item.speaker ? (
          <p className="m-0 text-[#1A1010]/55" style={{ ...BODY, fontSize: '12px', lineHeight: 1.4 }}>
            {item.speaker}
          </p>
        ) : null}

        <div className="mt-2 flex items-center justify-between gap-3">
          <div className="inline-flex items-stretch border border-[#1A1010]/20" style={{ borderRadius: '0px' }}>
            <button
              type="button"
              onClick={onDec}
              aria-label="Mažiau dalyvių"
              className="flex h-8 w-8 items-center justify-center text-[#1A1010] transition-colors hover:bg-[#1A1010]/5"
            >
              −
            </button>
            <span className="flex h-8 w-8 items-center justify-center border-x border-[#1A1010]/20 text-[#1A1010]" style={{ ...BODY, fontSize: '13px', fontWeight: 500 }}>
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={onInc}
              aria-label="Daugiau dalyvių"
              className="flex h-8 w-8 items-center justify-center text-[#1A1010] transition-colors hover:bg-[#1A1010]/5"
            >
              +
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#64151F]" style={{ ...BODY, fontSize: '14px', fontWeight: 500 }}>
              {formatEur(item.price * item.quantity)}
            </span>
            <button
              type="button"
              onClick={onRemove}
              aria-label="Pašalinti"
              className="text-[#1A1010]/55 underline underline-offset-2 transition-colors hover:text-[#64151F]"
              style={{ ...BODY, fontSize: '12px' }}
            >
              Šalinti
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CheckoutCartDrawer;
