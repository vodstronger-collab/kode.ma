import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GEO_COUNTRY_COOKIE = "kode_country";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

function normalizeCountryCode(code: string | null | undefined): string {
  if (!code) return "MA";
  const normalized = code.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(normalized)) return "MA";
  if (normalized === "XX" || normalized === "T1") return "MA";
  return normalized;
}

export function middleware(request: NextRequest) {
  const fromCookie = request.cookies.get(GEO_COUNTRY_COOKIE)?.value;
  const fromVercel = request.headers.get("x-vercel-ip-country");
  const country = normalizeCountryCode(fromCookie ?? fromVercel);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-kode-country", country);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  if (fromCookie !== country) {
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
