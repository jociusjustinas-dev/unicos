'use client';

import * as React from 'react';

/** Vienas krepšelio įrašas — akademijos renginys ar paketas. */
export type CartItem = {
  id: string;
  title: string;
  /** Papildoma info: lektorius, data. */
  speaker?: string;
  date?: string;
  /** Rodomas kainos žymeklis (pvz. „49 €“ arba „Nemokama“). */
  priceLabel: string;
  /** Skaitmeninė kaina eurais — naudojama sumų skaičiavimui. */
  price: number;
  /** Miniatiūros paveikslėlis. */
  imageSrc?: string;
  /** Nuoroda atgal į renginio puslapį. */
  href: string;
  /** Dalyvių skaičius. */
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  isDrawerOpen: boolean;
  totalQuantity: number;
  totalPrice: number;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (item: Omit<CartItem, 'quantity'>, qty?: number) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

const CartContext = React.createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'unicos-akademija-cart';

function loadInitial(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((it: unknown): it is CartItem =>
      Boolean(it) && typeof (it as CartItem).id === 'string'
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setItems(loadInitial());
    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (!hydrated || typeof window === 'undefined') return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* noop */
    }
  }, [items, hydrated]);

  /** Užrakinti scroll'ą kai drawer atidarytas. */
  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    const original = document.body.style.overflow;
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = original || '';
    }
    return () => {
      document.body.style.overflow = original || '';
    };
  }, [isDrawerOpen]);

  /** Esc mygtukas uždaro drawer'į. */
  React.useEffect(() => {
    if (!isDrawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isDrawerOpen]);

  const addItem = React.useCallback<CartContextValue['addItem']>((item, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === item.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
        return next;
      }
      return [...prev, { ...item, quantity: qty }];
    });
  }, []);

  const increment = React.useCallback((id: string) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)));
  }, []);

  const decrement = React.useCallback((id: string) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const removeItem = React.useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clear = React.useCallback(() => setItems([]), []);

  const openDrawer = React.useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = React.useCallback(() => setDrawerOpen(false), []);

  const totalQuantity = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.quantity, 0);

  const value: CartContextValue = React.useMemo(
    () => ({
      items,
      isDrawerOpen,
      totalQuantity,
      totalPrice,
      openDrawer,
      closeDrawer,
      addItem,
      increment,
      decrement,
      removeItem,
      clear,
    }),
    [items, isDrawerOpen, totalQuantity, totalPrice, openDrawer, closeDrawer, addItem, increment, decrement, removeItem, clear]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error('useCart must be called inside <CartProvider>');
  return ctx;
}

/** Pagalbinis — parse'inti kainos string'ą (pvz. „49 €“, „Nemokama“, „29 €“) į skaičių. */
export function parsePrice(label: string): number {
  const match = label.match(/(\d+(?:[.,]\d+)?)/);
  if (!match) return 0;
  const num = Number(match[1].replace(',', '.'));
  return Number.isFinite(num) ? num : 0;
}

/** Formatuoti sumą į „49.00 €“. */
export function formatEur(value: number): string {
  if (value === 0) return 'Nemokama';
  return `${value.toFixed(2).replace('.', ',')} €`;
}
