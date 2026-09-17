import { PageHero } from "@/components/layout/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { SeoContentBlock } from "@/components/seo/SeoContentBlock";
import { blogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { seoContent } from "@/lib/seo-content";

export const metadata = createMetadata({
  title: "Best IPTV Services 2026 | IPTV Subscription UK & Guides - Kode",
  description:
    "Blog comparatifs best IPTV, UK, providers, guides techniques Firestick/Samsung et VOD VIP Kode.",
  path: "/blog",
  keywords: [
    "best IPTV services 2026",
    "IPTV subscription UK",
    "IPTV service providers",
  ],
});

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHero
        label="Contenu"
        title="Guides & actualités IPTV"
        description="Articles et conseils pour maîtriser votre IPTV Maroc avec Kode."
      />
      <SeoContentBlock className="container-site pb-8">
        <p>{seoContent.blogIntro}</p>
      </SeoContentBlock>
      <section className="container-site grid gap-4 pb-20 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="glass rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#002395]">
              {post.category}
            </p>
            <h2 className="mt-2 font-display text-xl font-bold text-[var(--heading)]">
              <a href="#" className="hover:text-[#ed2939]">
                {post.title}
              </a>
            </h2>
            <p className="muted mt-2 text-sm leading-relaxed">{post.excerpt}</p>
            <p className="mt-4 text-xs text-[var(--text-muted)]">{post.date}</p>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
