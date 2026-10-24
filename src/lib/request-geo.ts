import { cookies, headers } from "next/headers";
import { isSearchBot } from "@/lib/bots";
import { GEO_COUNTRY_COOKIE, normalizeCountryCode } from "@/lib/geo";

/** Country for the current request (middleware cookie / Vercel header). Bots → MA. */
export async function getRequestCountry(): Promise<string> {
  const cookieStore = await cookies();
  const headerStore = await headers();

  if (
    headerStore.get("x-kode-bot") === "1" ||
    isSearchBot(headerStore.get("user-agent"))
  ) {
    return "MA";
  }

  return normalizeCountryCode(
    cookieStore.get(GEO_COUNTRY_COOKIE)?.value ??
      headerStore.get("x-kode-country") ??
      "MA",
  );
}
