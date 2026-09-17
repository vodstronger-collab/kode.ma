import { notFound } from "next/navigation";
import { LegalPageContent } from "@/components/legal/LegalPageContent";
import { SiteShell } from "@/components/layout/SiteShell";
import { getLegalPage, legalPages } from "@/lib/legal";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) return {};
  return createMetadata({
    title: `${page.title} | Kode.ma`,
    description: page.description,
    path: `/legal/${page.slug}`,
  });
}

export default async function LegalSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();

  return (
    <SiteShell>
      <LegalPageContent title={page.title} sections={page.sections} />
    </SiteShell>
  );
}
