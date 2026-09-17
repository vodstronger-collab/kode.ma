import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HomeSeoArticle } from "@/components/HomeSeoArticle";
import { InstallationGuide } from "@/components/InstallationGuide";
import { LocalSeo } from "@/components/LocalSeo";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { Support } from "@/components/Support";
import { TrialForm } from "@/components/TrialForm";
import { WhyChooseIptv } from "@/components/WhyChooseIptv";
import { SiteShell } from "@/components/layout/SiteShell";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <Benefits />
      <Features />
      <Pricing />
      <WhyChooseIptv />
      <TrialForm />
      <Reviews />
      <InstallationGuide />
      <Support />
      <FAQ />
      <HomeSeoArticle />
      <LocalSeo />
    </SiteShell>
  );
}
