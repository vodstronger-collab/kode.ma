import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/constants";

const perks = [
  "Activation guidée après commande",
  "Assistance multi-appareils",
  "Réponses rapides sur WhatsApp",
  "Suivi garantie 45 jours",
];

export function Support() {
  return (
    <section className="section-pad !py-16">
      <div className="container-site">
        <div className="glass overflow-hidden rounded-2xl border-t-4 border-t-[#ed2939] p-8 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="eyebrow">Support</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-[var(--heading)]">
                Une équipe Kode à votre écoute
              </h2>
              <p className="muted mt-3 leading-relaxed">
                Du choix du pack à l&apos;installation sur Smart TV, notre support WhatsApp
                vous accompagne 24/7.
              </p>
              <a
                href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
              >
                Contacter WhatsApp
              </a>
            </div>
            <ul className="space-y-3">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="surface-soft flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[var(--text)]"
                >
                  <span className="text-[#002395]">✓</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
