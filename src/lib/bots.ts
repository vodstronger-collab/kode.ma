/** Search / SEO crawlers that should always see Morocco (MAD) pricing. */
const SEARCH_BOT_RE =
  /googlebot|google-inspectiontool|bingbot|yandex(?:bot)?|baiduspider|duckduckbot|slurp|applebot|semrushbot|ahrefsbot|dotbot|petalbot|bytespider|facebookexternalhit|twitterbot|linkedinbot|bingpreview|storebot-google/i;

export function isSearchBot(userAgent: string | null | undefined): boolean {
  if (!userAgent) return false;
  return SEARCH_BOT_RE.test(userAgent);
}
