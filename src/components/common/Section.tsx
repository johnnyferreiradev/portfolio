export function Section({
  actions,
  children,
  title,
}: {
  actions?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-screen-xl px-8 lg:px-24 py-8">
        <div className="w-full flex justify-between items-center mb-8 md:mb-16">
          {title && <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>}
          {actions}
        </div>
        {children}
      </div>
    </section>
  );
}
