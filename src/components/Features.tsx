import { homepageFeatures } from "@/lib/fonctionnalites";

export function Features() {
  return (
    <section className="section-pad !py-16">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Fonctionnalités</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-[var(--heading)] sm:text-4xl">
            Tout ce qu&apos;il faut pour streamer
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homepageFeatures.map((feature) => (
            <article
              key={feature.title}
              className="glass rounded-2xl p-6 transition hover:border-[#002395]/35"
            >
              <h3 className="font-display text-lg font-bold text-[var(--heading)]">{feature.title}</h3>
              <p className="muted mt-2 text-sm leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
