import { cn } from "@/lib/utils";

export function Section({
  actions,
  children,
  title,
  className,
  id,
}: {
  actions?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section className={cn("w-full flex justify-center", className)} id={id}>
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
