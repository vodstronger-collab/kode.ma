const benefits = [
  {
    title: "Stabilité premium",
    text: "Infrastructure VPS et Anti-freeze pour un IPTV Maroc sans prise de tête.",
  },
  {
    title: "Qualité HD / 4K",
    text: "Choisissez le pack adapté à votre débit et à vos écrans.",
  },
  {
    title: "Support humain",
    text: "Commande et assistance directement sur WhatsApp, 24/7.",
  },
];

const steps = [
  { title: "1. Choisissez votre pack", text: "Pro, Ultra ou VIP selon vos appareils." },
  { title: "2. Activez via WhatsApp", text: "Paiement et envoi des identifiants rapide." },
  { title: "3. Installez & regardez", text: "Smart TV, Firestick, Android, MAG…" },
];

export function Benefits() {
  return (
    <section className="section-pad !py-16">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Avantages Kode</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-[var(--heading)] sm:text-4xl">
            Un IPTV conçu pour le Maroc
          </h2>
          <p className="muted mt-3">
            Du premier contact WhatsApp au zapping du soir, Kode simplifie l&apos;abonnement
            IPTV Premium.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-[var(--heading)]">{item.title}</h3>
              <p className="muted mt-2 text-sm leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`rounded-2xl p-5 ${i % 2 === 0 ? "surface-soft" : "surface-red"}`}
            >
              <h3 className={`font-semibold ${i % 2 === 0 ? "text-[#002395]" : "text-[var(--france-red-text)]"}`}>
                {step.title}
              </h3>
              <p className="muted mt-1 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
