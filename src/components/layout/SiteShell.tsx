import { AmbientBackground } from "@/components/AmbientBackground";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export function SiteShell({
  children,
  showFab = true,
}: {
  children: React.ReactNode;
  showFab?: boolean;
}) {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main>{children}</main>
      <Footer />
      {showFab ? <WhatsAppFab /> : null}
    </>
  );
}
