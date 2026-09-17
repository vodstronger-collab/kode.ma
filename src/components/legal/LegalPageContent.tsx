import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";

export function LegalPageContent({
  title,
  sections,
}: {
  title: string;
  sections: { heading: string; paragraphs: string[] }[];
}) {
  return (
    <>
      <PageHero title={title} label="Informations légales" />
      <section className="container-site pb-20">
        <div className="glass mx-auto max-w-3xl space-y-10 rounded-2xl p-6 sm:p-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-bold text-[var(--heading)]">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <p className="text-sm">
            <Link href="/sitemap-html" className="font-medium text-[#ed2939] hover:underline">
              Retour au plan du site
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
