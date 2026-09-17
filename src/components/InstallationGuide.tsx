import Image from "next/image";
import { Accordion } from "@/components/ui/Accordion";
import { deviceGuides, universalSteps } from "@/lib/installation";
import {
  iptvAppsNote,
  recommendedApps,
  NINO_PLAYER_PLAY_STORE,
  NINO_PLAYER_WEBSITE,
} from "@/lib/iptv-apps";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/constants";

export function RecommendedApps() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {recommendedApps.map((app) => (
        <div key={app.name} className="surface-soft rounded-2xl p-4">
          <h3 className="font-semibold text-[var(--heading)]">
            {app.url ? (
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#002395] hover:underline"
              >
                {app.name}
              </a>
            ) : (
              app.name
            )}
          </h3>
          <p className="muted mt-1 text-sm">{app.description}</p>
        </div>
      ))}
      <p className="muted sm:col-span-2 text-sm">{iptvAppsNote}</p>
    </div>
  );
}

export function NinoPlayerQuickGuide() {
  return (
    <div className="glass flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center">
      <a
        href={NINO_PLAYER_WEBSITE}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl shadow-sm ring-1 ring-black/10 transition hover:opacity-90"
        aria-label="Site officiel Nino Player"
      >
        <Image
          src="/nino-player.png"
          alt="Logo Nino Player"
          width={56}
          height={56}
          className="h-full w-full object-cover"
        />
      </a>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-[var(--heading)]">Nino Player — démarrage rapide</h3>
        <p className="muted mt-1 text-sm leading-relaxed">
          Installez Nino Player, ajoutez vos codes Xtream Kode, chargez les chaînes et
          ajustez la qualité selon votre débit. Besoin d&apos;aide ? WhatsApp en un clic.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <a
            href={NINO_PLAYER_WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#002395] bg-white px-3 py-2 text-sm font-semibold text-[#002395] transition hover:bg-[#e8eefc]"
          >
            Site ninoplayer.com
          </a>
          <a
            href={NINO_PLAYER_PLAY_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition hover:opacity-90"
            aria-label="Disponible sur Google Play — Nino Player"
          >
            <Image
              src="/google-play-badge.png"
              alt="Disponible sur Google Play"
              width={160}
              height={48}
              className="h-11 w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export function InstallationGuide() {
  return (
    <section className="section-pad !py-16">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Installation</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-[var(--heading)] sm:text-4xl">
            Guide rapide multi-appareils
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-6">
          <RecommendedApps />
          <NinoPlayerQuickGuide />
          <Accordion
            items={deviceGuides.map((guide) => ({
              title: guide.title,
              content: (
                <ol className="list-decimal space-y-2 pl-5">
                  {guide.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              ),
            }))}
          />
          <Accordion
            items={[
              {
                title: universalSteps.title,
                content: (
                  <ol className="list-decimal space-y-2 pl-5">
                    {universalSteps.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                ),
              },
            ]}
          />
          <a
            href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Aide installation WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
