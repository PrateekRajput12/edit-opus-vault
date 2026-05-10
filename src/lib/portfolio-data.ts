/**
 * Internal data layer. To EDIT YOUR PORTFOLIO, open:
 *   src/lib/portfolio-items.ts
 */
import { PORTFOLIO_ITEMS, SHOWREEL_VIDEO_URL, CATEGORIES, type Category, type PortfolioItem as Item } from "./portfolio-items";

export { CATEGORIES };
export type { Category };

// Internal shape used across components (keeps `thumb`/`video` aliases)
export interface PortfolioItem extends Item {
  thumb: string;
  video: string;
}

export const PORTFOLIO: PortfolioItem[] = PORTFOLIO_ITEMS.map((it) => ({
  ...it,
  thumb: it.thumbnailUrl,
  video: it.videoUrl,
}));

export const SHOWREEL_VIDEO = SHOWREEL_VIDEO_URL;

export const SERVICES = [
  { title: "Long-Form Editing", desc: "YouTube videos, podcasts, documentaries with retention-focused pacing.", icon: "Film" },
  { title: "Short-Form Reels", desc: "Vertical edits engineered to hook in 1.5 seconds and convert.", icon: "Smartphone" },
  { title: "Motion Graphics", desc: "Custom kinetic typography, lower thirds, and animated brand systems.", icon: "Sparkles" },
  { title: "Color Grading", desc: "Cinematic looks via DaVinci Resolve — film-grade color science.", icon: "Palette" },
  { title: "Sound Design", desc: "Immersive mixing, SFX layering, and dialogue cleanup.", icon: "AudioLines" },
  { title: "AI Video Production", desc: "End-to-end AI shorts: generation, upscaling, voice, and editing.", icon: "Brain" },
];

export const TOOLS = [
  { name: "Premiere Pro", color: "#9999FF" },
  { name: "After Effects", color: "#D291FF" },
  { name: "Photoshop", color: "#31A8FF" },
  { name: "DaVinci Resolve", color: "#FF6B6B" },
  { name: "Canva", color: "#00C4CC" },
  { name: "Midjourney", color: "#FFFFFF" },
  { name: "Runway ML", color: "#9CFF6B" },
  { name: "ElevenLabs", color: "#FFB86B" },
];

export const TESTIMONIALS = [
  { name: "Dr. Aarav Mehra", role: "Cardiologist", quote: "My reels exploded after switching to this team. Engagement up 480% in two months — and the cinematic feel matches my brand perfectly.", avatar: "AM" },
  { name: "Sofia Russo", role: "Atrium Realty", quote: "Every property tour feels like a film trailer. Our listings move 2x faster now. Worth every penny.", avatar: "SR" },
  { name: "Marcus Lin", role: "YouTuber, 2.4M subs", quote: "Best editor I've worked with. Pacing, sound design, motion graphics — everything is studio-grade.", avatar: "ML" },
  { name: "Priya Shah", role: "Founder, Glow Co.", quote: "Our launch reel hit 12M views organically. The hook, the rhythm, the color — chef's kiss.", avatar: "PS" },
];

export const PACKAGES = [
  {
    name: "Starter",
    price: "$299",
    unit: "/ video",
    desc: "Perfect for reels and short ads.",
    features: ["Up to 60 seconds", "Color grade + sound mix", "1 round of revisions", "48-hour delivery", "Vertical or horizontal"],
    featured: false,
  },
  {
    name: "Signature",
    price: "$899",
    unit: "/ video",
    desc: "Long-form YouTube and brand content.",
    features: ["Up to 15 minutes", "Custom motion graphics", "3 rounds of revisions", "Premium SFX library", "Thumbnail design included", "Priority delivery"],
    featured: true,
  },
  {
    name: "Studio Retainer",
    price: "$3,499",
    unit: "/ month",
    desc: "Unlimited edits for serious creators.",
    features: ["Unlimited edits queue", "Dedicated editor", "Same-day turnaround", "Strategy calls weekly", "Full motion + AI workflow", "Priority Slack channel"],
    featured: false,
  },
];

export const SHOWREEL_VIDEO = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";
export const SHOWREEL_POSTER = "/images/showreel-poster.jpg";
