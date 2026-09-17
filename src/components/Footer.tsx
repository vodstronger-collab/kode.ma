import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SUPPORT_EMAIL, whatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import { legalNav, mainNav } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-[#002395] text-white">
      <div className="container-site section-pad !py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo light />
            <p className="text-sm leading-relaxed text-white/75">
              Kode — IPTV Maroc Premium. Streaming HD/4K stable, activation WhatsApp et
              garantie 45 jours.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/75 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/sitemap-html" className="text-white/75 hover:text-white">
                  Plan du site
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-white">
              Légal
            </h3>
            <ul className="space-y-2 text-sm">
              {legalNav.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/75 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-white"
                >
                  WhatsApp 24/7
                </a>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white/75 hover:text-white">
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/15 pt-6 text-xs text-white/45">
          {legalNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/35">
          © {new Date().getFullYear()} Kode.ma — IPTV Maroc Premium.
        </p>
      </div>
    </footer>
  );
}
