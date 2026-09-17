"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GUARANTEE_TEXT, DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/constants";
import { useGeoPricing } from "@/context/GeoPricingContext";

const HERO_FALLBACK = "/kode.png";

export function Hero() {
  const { countryName, heroImageUrl, currentPacks } = useGeoPricing();
  const starting = currentPacks[0];

  return (
    <section className="section-pad !pt-14">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up space-y-6">
          <p className="eyebrow">IPTV Maroc Premium</p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[var(--heading)] sm:text-5xl lg:text-[3.35rem]">
            Le Meilleur IPTV Maroc en 2026 : Streaming Premium Stable
          </h1>
          <p className="muted max-w-xl text-lg leading-relaxed">
            Kode vous offre +45 000 chaînes HD/4K, Anti-freeze, activation WhatsApp 24/7 et
            une garantie 45 jours — sans essai gratuit, avec des packs clairs.
          </p>

          <div className="flex flex-wrap gap-2">
            {["+45 000 chaînes", "4K Anti-freeze", "Garantie 45 jours", "WhatsApp 24/7"].map(
              (pill) => (
                <span
                  key={pill}
                  className="rounded-md border border-[#002395]/20 bg-[#e8eefc] px-3 py-1 text-xs font-semibold text-[#002395]"
                >
                  {pill}
                </span>
              ),
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Commander WhatsApp
            </a>
            <Link href="/abonnement-iptv" className="btn-secondary">
              Commencer
            </Link>
            <Link href="#tarifs" className="btn-secondary">
              Voir forfaits
            </Link>
          </div>

          <p className="text-sm text-[#002395]/90">{GUARANTEE_TEXT}</p>
        </div>

        <HeroVisual
          heroImageUrl={heroImageUrl}
          countryName={countryName}
          startingPrice={starting?.price ?? 300}
          currency={starting?.currency ?? "DH"}
        />
      </div>
    </section>
  );
}

function HeroVisual({
  heroImageUrl,
  countryName,
  startingPrice,
  currency,
}: {
  heroImageUrl: string;
  countryName: string;
  startingPrice: number;
  currency: string;
}) {
  const [src, setSrc] = useState(heroImageUrl);

  useEffect(() => {
    setSrc(heroImageUrl);
  }, [heroImageUrl]);

  return (
    <div className="animate-fade-up relative [animation-delay:120ms]">
      <div className="glow-ring relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-black/5 bg-white p-2">
        {/* eslint-disable-next-line @next/next/no-img-element -- remote flag CDN; avoid optimizer 500s */}
        <img
          src={src}
          alt={`Kode — visiteur depuis ${countryName}`}
          width={1280}
          height={800}
          className="h-full w-full rounded-[1.1rem] object-cover"
          onError={() => {
            if (src !== HERO_FALLBACK) setSrc(HERO_FALLBACK);
          }}
        />
      </div>
      <div className="absolute -bottom-4 left-6 right-6 glass rounded-xl border-l-4 border-l-[#ed2939] px-4 py-3 text-sm font-medium text-[var(--heading)]">
        Activation express · Serveurs VPS · Packs dès {startingPrice} {currency}/an
      </div>
    </div>
  );
}
