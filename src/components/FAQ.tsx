import { Accordion } from "@/components/ui/Accordion";
import { faqCategories, faqItems } from "@/lib/faq";

export function FAQ({
  compact = false,
  items = faqItems,
  title = "Questions fréquentes",
  grouped = true,
}: {
  compact?: boolean;
  items?: { question: string; answer: string }[];
  title?: string;
  /** Affiche les catégories (technique, offres, support). Désactiver si `items` custom. */
  grouped?: boolean;
}) {
  const useGroups = grouped && items === faqItems;

  return (
    <section className="section-pad !py-16">
      <div className="container-site max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-[var(--heading)] sm:text-4xl">{title}</h2>

        {useGroups ? (
          <div className="mt-10 space-y-12">
            {faqCategories.map((category) => (
              <div key={category.id}>
                <h3 className="font-display text-xl font-bold text-[#002395] sm:text-2xl">
                  {category.title}
                </h3>
                <div className="mt-5">
                  <Accordion
                    compact={compact}
                    items={category.items.map((item) => ({
                      title: item.question,
                      content: item.answer,
                    }))}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8">
            <Accordion
              compact={compact}
              items={items.map((item) => ({
                title: item.question,
                content: item.answer,
              }))}
            />
          </div>
        )}
      </div>
    </section>
  );
}
