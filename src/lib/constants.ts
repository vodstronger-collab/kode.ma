export const SITE_NAME = "Kode";
export const SITE_DOMAIN = "kode.ma";
export const SITE_URL = "https://kode.ma";
export const WHATSAPP_NUMBER = "212600184186";
export const SUPPORT_EMAIL = "support@kode.ma";

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const GUARANTEE_TEXT =
  "Satisfait ou remboursé sous 45 jours — serveurs garantis durant toute la période de l'abonnement";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Bonjour, je viens de commander sur kode.ma et je veux activer mon abonnement.";
