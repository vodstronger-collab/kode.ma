import Link from "next/link";
import { diasporaBlocks, localSeoIntro, moroccoCityBlocks } from "@/lib/local-seo";

export function LocalSeo() {
  return (
    <section className="section-pad !py-16" aria-labelledby="local-seo-title">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Couverture Maroc</p>
          <h2
            id="local-seo-title"
            className="mt-3 font-display text-3xl font-bold text-[var(--heading)] sm:text-4xl"
          >
            IPTV Kode au Maroc et au-delà
          </h2>
          <p className="muted mt-4 text-base leading-relaxed">{localSeoIntro}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {moroccoCityBlocks.map((block) => (
            <article key={block.city} className="glass rounded-2xl p-5 text-left">
              <h3 className="font-display text-lg font-bold text-[var(--heading)]">
                {block.keyword}
              </h3>
              <p className="muted mt-2 text-sm leading-relaxed">{block.text}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2">
          {diasporaBlocks.map((block) => (
            <article key={block.title} className="surface-soft rounded-2xl p-5 text-left">
              <h3 className="font-display text-lg font-bold text-[#002395]">{block.title}</h3>
              <p className="muted mt-2 text-sm leading-relaxed">{block.text}</p>
            </article>
          ))}
        </div>

        <p className="muted mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed">
          Besoin d&apos;un abonnement IPTV Maroc près de chez vous ?{" "}
          <Link href="/abonnement-iptv" className="font-semibold text-[#002395] hover:underline">
            Voir les tarifs
          </Link>{" "}
          ou{" "}
          <Link href="/contact" className="font-semibold text-[#002395] hover:underline">
            contactez le support WhatsApp
          </Link>{" "}
          pour une activation guidée.
        </p>
      </div>
    </section>
  );
}
