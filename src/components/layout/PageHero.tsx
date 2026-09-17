export function PageHero({
  label,
  title,
  description,
  actions,
}: {
  label?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
}) {
  return (
    <section className="section-pad !pb-10 !pt-16">
      <div className="container-site max-w-3xl">
        {label ? <p className="eyebrow mb-3">{label}</p> : null}
        <h1 className="font-display text-3xl font-bold tracking-tight text-[var(--heading)] sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="muted mt-4 text-base leading-relaxed sm:text-lg">{description}</p>
        ) : null}
        {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
