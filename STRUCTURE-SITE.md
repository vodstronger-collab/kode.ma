# Structure du site — kode.ma

Documentation de l’arborescence des pages, de la navigation et des ressources techniques du site **Kode** (IPTV Maroc).

Site : [https://kode.ma](https://kode.ma)  
Sitemap XML : [https://kode.ma/sitemap.xml](https://kode.ma/sitemap.xml)  
Plan HTML : [https://kode.ma/sitemap-html](https://kode.ma/sitemap-html)

---

## 1. Arborescence des URLs

```
kode.ma/
├── /                              Accueil
├── /abonnement-iptv               Tarifs & packs
├── /fonctionnalites               Fonctionnalités
├── /guide                         Guide d’installation
├── /faq                           FAQ
├── /blog                          Blog
├── /contact                       Contact / WhatsApp
├── /sitemap-html                  Plan du site (HTML)
│
├── /legal/
│   ├── mentions-legales
│   ├── conditions-utilisation
│   ├── politique-utilisation-acceptable
│   ├── conformite-rgpd
│   ├── politique-dmca
│   ├── politique-confidentialite
│   └── remboursement-et-retour
│
├── /sitemap.xml                   Sitemap XML (Search Console)
├── /robots.txt                    Robots
└── /llms.txt                      Fichier pour moteurs IA
```

---

## 2. Pages principales

| URL | Label nav | Rôle | Priorité sitemap |
|-----|-----------|------|------------------|
| `/` | Accueil | Landing : hero, bénéfices, features, tarifs, avis, FAQ, SEO local | 1.0 |
| `/abonnement-iptv` | Tarifs | Comparatif packs Pro / Ultra / VIP + article SEO tarifs | 0.9 |
| `/fonctionnalites` | Fonctionnalités | Détail des capacités du service | 0.8 |
| `/guide` | Guide | Installation Smart TV, Firestick, apps IPTV | 0.8 |
| `/faq` | FAQ | Questions/réponses (technique, offres, activation, contenu) | 0.7 |
| `/blog` | Blog | Guides & actualités IPTV | 0.7 |
| `/contact` | Contact | Formulaire d’essai + support WhatsApp | 0.7 |
| `/sitemap-html` | — | Plan du site lisible (crawl / UX) | 0.7 |

---

## 3. Pages légales

| URL | Titre |
|-----|--------|
| `/legal/mentions-legales` | Mentions légales |
| `/legal/conditions-utilisation` | Conditions d’utilisation |
| `/legal/politique-utilisation-acceptable` | Utilisation acceptable |
| `/legal/conformite-rgpd` | Conformité RGPD |
| `/legal/politique-dmca` | Politique DMCA |
| `/legal/politique-confidentialite` | Confidentialité |
| `/legal/remboursement-et-retour` | Remboursement |

Priorité sitemap : **0.3** · fréquence : yearly.

---

## 4. Navigation

### Header (mainNav)

1. Accueil → `/`
2. Tarifs → `/abonnement-iptv`
3. Fonctionnalités → `/fonctionnalites`
4. Guide → `/guide`
5. FAQ → `/faq`
6. Blog → `/blog`
7. Contact → `/contact`

### Footer

- Liens principaux (même base que le header)
- Bloc légal (`legalNav`)
- Contact : WhatsApp `+212 600-184186` · `support@kode.ma`

### Élément global

- **WhatsApp FAB** (bouton flottant) → message par défaut d’activation

---

## 5. Structure de la page d’accueil

Ordre des sections sur `/` :

1. `Hero` — marque + CTA + drapeau geo
2. `Benefits`
3. `Features`
4. `Pricing` — packs geo (DH / €)
5. `WhyChooseIptv`
6. `TrialFormSection` — commande WhatsApp
7. *(below-fold)*
   - `Reviews`
   - `InstallationGuide`
   - `Support`
   - `FAQ`
   - `HomeSeoArticle`
   - `LocalSeo`

---

## 6. Offres & pricing (contenu métier)

| Pack | Maroc (DH/an) | International (€/an) |
|------|---------------|----------------------|
| Pack Pro | 300 | 35 |
| Expérience Ultra | 450 | 50 |
| Exclusif Suprême VIP | 600 | 65 |

- Devise affichée selon le pays (`x-vercel-ip-country` / cookie `kode_country`)
- Messages WhatsApp de commande alignés sur le prix geo

---

## 7. Structure technique (code)

```
src/
├── app/                    # App Router Next.js
│   ├── layout.tsx          # Layout global + JSON-LD
│   ├── page.tsx            # Accueil
│   ├── abonnement-iptv/
│   ├── fonctionnalites/
│   ├── guide/
│   ├── faq/
│   ├── blog/
│   ├── contact/
│   ├── sitemap-html/
│   ├── legal/[slug]/
│   ├── sitemap.ts
│   └── robots.ts
├── components/             # UI (Hero, Pricing, FAQ, etc.)
├── lib/                    # Données & helpers
│   ├── navigation.ts       # mainNav, legalNav, sitemapSections
│   ├── pricing.ts          # Packs & prix geo
│   ├── faq.ts
│   ├── schema.ts           # Schema.org
│   ├── constants.ts
│   └── ...
├── context/                # Geo pricing (si utilisé côté client)
└── middleware.ts           # Cookie / header pays
public/
├── llms.txt
└── flags/ma.svg
```

---

## 8. SEO & GEO

| Élément | Emplacement |
|---------|-------------|
| Sitemap XML | `/sitemap.xml` |
| Robots | `/robots.txt` |
| Plan HTML | `/sitemap-html` |
| JSON-LD | Organization, WebSite, Service/Offer, FAQPage, HowTo |
| llms.txt | `/llms.txt` |

---

## 9. Fichiers de référence dans le repo

| Fichier | Contenu |
|---------|---------|
| `src/lib/navigation.ts` | Menus + sections du plan de site |
| `src/app/sitemap.ts` | Génération du sitemap XML |
| `src/lib/legal.ts` | Contenu des pages légales |
| `src/lib/pricing.ts` | Packs et prix |
| `src/lib/faq.ts` | FAQ (UI + schéma) |

---

*Généré pour le projet Kode.ma — Next.js App Router.*
