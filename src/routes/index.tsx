import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Showreel } from "@/components/showreel";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { BeforeAfter } from "@/components/before-after";
import { Tools } from "@/components/tools";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { Footer } from "@/components/footer";
import { VideoModal } from "@/components/video-modal";
import { PORTFOLIO, type PortfolioItem } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kairo Vance — Cinematic Video Editor & Motion Designer" },
      { name: "description", content: "Premium video editing, motion graphics and color grading for creators, brands and agencies. View the showreel and portfolio." },
      { property: "og:title", content: "Kairo Vance — Cinematic Video Editor" },
      { property: "og:description", content: "Showreel, portfolio and services for premium video editing & motion design." },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState<PortfolioItem | null>(null);
  const [list, setList] = useState<PortfolioItem[]>(PORTFOLIO);
  const showreelItem: PortfolioItem = {
    id: "showreel",
    title: "Showreel 2026",
    client: "Kairo Vance",
    clientType: "Studio Reel",
    tools: ["Premiere Pro", "After Effects", "DaVinci"],
    duration: "1:32",
    year: 2026,
    category: "Motion Graphics",
    thumb: PORTFOLIO[0].thumb,
    video: PORTFOLIO[3].video,
    aspect: "horizontal",
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground bg-grain overflow-x-hidden">
        <SiteNav />
        <main>
          <Hero onPlayShowreel={() => { setList([showreelItem]); setActive(showreelItem); }} />
          <Showreel />
          <Portfolio onSelect={(item, items) => { setList(items); setActive(item); }} />
          <Services />
          <BeforeAfter />
          <Tools />
          <Testimonials />
          <Pricing />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFab />
        <VideoModal item={active} list={list} onClose={() => setActive(null)} onNavigate={setActive} />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
