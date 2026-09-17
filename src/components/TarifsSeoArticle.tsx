import Link from "next/link";
import { tarifsSeoArticle } from "@/lib/tarifs-seo-article";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/constants";

export function TarifsSeoArticle() {
  const { eyebrow, title, intro, sections, closing } = tarifsSeoArticle;

  return (
    <section className="section-pad !py-16" aria-labelledby="seo-tarifs-title">
      <div className="container-site max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2
          id="seo-tarifs-title"
          className="mt-3 font-display text-3xl font-bold text-[var(--heading)] sm:text-4xl"
        >
          {title}
        </h2>
        <p className="muted mt-5 text-base leading-relaxed">{intro}</p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h3 className="font-display text-xl font-bold text-[var(--heading)] sm:text-2xl">
                {section.heading}
              </h3>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)} className="muted text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="muted mt-10 text-base leading-relaxed">{closing}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Commander via WhatsApp
          </a>
          <Link href="#tarifs" className="btn-secondary">
            Revoir les packs
          </Link>
          <Link href="/guide" className="btn-secondary">
            Guide d&apos;installation
          </Link>
        </div>
      </div>
    </section>
  );
}
