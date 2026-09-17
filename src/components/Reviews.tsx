import { reviews } from "@/lib/reviews";

export function Reviews() {
  return (
    <section className="section-pad !py-16">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Avis clients</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-[var(--heading)] sm:text-4xl">
            Ils streamment avec Kode
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="font-semibold text-[var(--heading)]">{review.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">{review.city}</p>
                </div>
                <p className="text-sm text-amber-500">{"★".repeat(review.rating)}</p>
              </div>
              <p className="muted mt-3 text-sm leading-relaxed">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
