import { seoContent } from "@/lib/seo-content";

export function WhyChooseIptv() {
  const { title, paragraphs } = seoContent.homeWhyChoose;
  return (
    <section className="section-pad !py-16">
      <div className="container-site max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-[var(--heading)] sm:text-4xl">{title}</h2>
        <div className="mt-6 space-y-4">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="muted leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
