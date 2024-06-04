export function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-screen-xl px-8 lg:px-24 py-8">
        {title && <h3 className="text-3xl font-bold mb-16">{title}</h3>}
        {children}
      </div>
    </section>
  );
}
