import {
  buildFaqPageSchema,
  buildHowToSchema,
  buildOrganizationGraph,
} from "@/lib/schema";

export function JsonLd() {
  const { organization, website, service } = buildOrganizationGraph();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      service,
      buildFaqPageSchema(),
      buildHowToSchema(),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
