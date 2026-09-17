"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { mainNav } from "@/lib/navigation";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappUrl } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"FR" | "AR">("FR");

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="container-site flex items-center justify-between gap-4 px-5 py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-2 text-sm text-[var(--text-muted)] transition hover:bg-[#e8eefc] hover:text-[#002395]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div className="flex rounded-lg border border-black/10 p-0.5 text-xs font-semibold">
            {(["FR", "AR"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`rounded-md px-2 py-1 ${
                  lang === code ? "bg-[#002395] text-white" : "text-[var(--text-muted)]"
                }`}
                aria-pressed={lang === code}
              >
                {code}
              </button>
            ))}
          </div>
          <a
            href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-3 !py-2 text-sm"
          >
            WhatsApp
          </a>
          <Link href="/abonnement-iptv" className="btn-primary !px-3 !py-2 text-sm">
            Commencer
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-[var(--heading)] lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="container-site flex flex-col gap-1 px-5 py-4" aria-label="Menu mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-[var(--heading)] hover:bg-[#e8eefc]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp
              </a>
              <Link href="/abonnement-iptv" className="btn-primary" onClick={() => setOpen(false)}>
                Commencer
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
