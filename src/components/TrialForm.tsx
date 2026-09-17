"use client";

import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/lib/constants";
import type { PricingPack } from "@/lib/pricing";

export function TrialForm({ packs }: { packs: PricingPack[] }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pack, setPack] = useState(packs[1]?.id ?? packs[0]?.id ?? "ultra");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const selected = packs.find((p) => p.id === pack);
    const message = `${selected?.whatsappMessage ?? "Bonjour Kode, je souhaite commander."}\nNom: ${name}\nTéléphone: ${phone}`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="commander" className="section-pad !py-16">
      <div className="container-site">
        <div className="glass mx-auto max-w-xl rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-[var(--heading)] sm:text-3xl">
            Commander votre abonnement
          </h2>
          <p className="muted mt-2 text-sm">
            Remplissez le formulaire — vous serez redirigé vers WhatsApp pour finaliser.
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <label className="block text-sm">
              <span className="mb-1.5 block text-[var(--text-muted)]">Nom</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
                placeholder="Votre nom"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-[var(--text-muted)]">Téléphone / WhatsApp</span>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field"
                placeholder="06XXXXXXXX"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-[var(--text-muted)]">Pack</span>
              <select
                value={pack}
                onChange={(e) => setPack(e.target.value)}
                className="input-field"
              >
                {packs.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {p.price} {p.currency}
                    {p.period}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit" className="btn-primary w-full">
              Envoyer sur WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
