import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isSearchBot } from "@/lib/bots";

const GEO_COUNTRY_COOKIE = "kode_country";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;
const PRIMARY_HOST = "kode.ma";

/** Production Vercel alias that must not stay indexable as a second site. */
const VERCEL_PRODUCTION_HOSTS = new Set(["kode-ma.vercel.app"]);

const LEGACY_REDIRECTS: Record<string, string> = {
  "/termes-et-conditions": "/legal/conditions-utilisation",
  "/terms": "/legal/conditions-utilisation",
  "/terms-and-conditions": "/legal/conditions-utilisation",
  "/mentions-legales": "/legal/mentions-legales",
  "/politique-de-confidentialite": "/legal/politique-confidentialite",
  "/politique-confidentialite": "/legal/politique-confidentialite",
  "/privacy": "/legal/politique-confidentialite",
  "/privacy-policy": "/legal/politique-confidentialite",
  "/cgv": "/legal/conditions-utilisation",
  "/cgu": "/legal/conditions-utilisation",
  "/remboursement": "/legal/remboursement-et-retour",
  "/refund": "/legal/remboursement-et-retour",
};

function normalizeCountryCode(code: string | null | undefined): string {
  if (!code) return "MA";
  const normalized = code.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(normalized)) return "MA";
  if (normalized === "XX" || normalized === "T1") return "MA";
  return normalized;
}

function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase().split(":")[0];
  const path = normalizePath(request.nextUrl.pathname);

  // Collapse duplicate host (Vercel production URL) onto the brand domain.
  if (VERCEL_PRODUCTION_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = PRIMARY_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  const legacyTarget = LEGACY_REDIRECTS[path];
  if (legacyTarget) {
    return NextResponse.redirect(new URL(legacyTarget, `https://${PRIMARY_HOST}`), 308);
  }

  const ua = request.headers.get("user-agent");
  const bot = isSearchBot(ua);

  // Crawlers always get MAD pricing / Morocco content (primary market + SEO).
  const fromCookie = bot ? undefined : request.cookies.get(GEO_COUNTRY_COOKIE)?.value;
  const fromVercel = request.headers.get("x-vercel-ip-country");
  const country = bot ? "MA" : normalizeCountryCode(fromCookie ?? fromVercel);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-kode-country", country);
  if (bot) {
    requestHeaders.set("x-kode-bot", "1");
  }

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  if (!bot && fromCookie !== country) {
    response.cookies.set(GEO_COUNTRY_COOKIE, country, {
      path: "/",
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
