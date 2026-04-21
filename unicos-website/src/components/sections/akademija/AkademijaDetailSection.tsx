'use client';

type Props = {
  children: React.ReactNode;
  /** Numatytai siaurai teksto juostai; „Kam skirtas“ naudokite `max-w-none`. */
  maxWidthClass?: string;
};

/** Dešinėje kolonoje: vienoda `py` ir max plotis turinio blokams. */
export function AkademijaDetailSection({ children, maxWidthClass = 'max-w-[720px]' }: Props) {
  return (
    <section className="py-16 max-[767px]:py-12">
      <div className="w-full">
        <div className={`${maxWidthClass} text-left`}>{children}</div>
      </div>
    </section>
  );
}
