import doctor from "@/assets/thumb-doctor.jpg";
import realestate from "@/assets/thumb-realestate.jpg";
import youtube from "@/assets/thumb-youtube.jpg";
import motion from "@/assets/thumb-motion.jpg";
import ai from "@/assets/thumb-ai.jpg";
import social from "@/assets/thumb-social.jpg";

export const CATEGORIES = [
  "All",
  "Doctor Reels",
  "Real Estate Ads",
  "YouTube Videos",
  "Motion Graphics",
  "AI Videos",
  "Social Media Ads",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  clientType: string;
  tools: string[];
  duration: string;
  year: number;
  category: Exclude<Category, "All">;
  thumb: string;
  video: string;
  aspect: "vertical" | "horizontal";
}

// Royalty-free placeholder videos (Google sample bucket)
const V = {
  bunny: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  elephant: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  blaze: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  escapes: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  fun: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  joy: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
};

export const PORTFOLIO: PortfolioItem[] = [
  { id: "1", title: "Cardiology Clinic — Patient Story", client: "Dr. Mehra", clientType: "Healthcare Brand", tools: ["Premiere Pro", "After Effects", "DaVinci"], duration: "0:58", year: 2025, category: "Doctor Reels", thumb: doctor, video: V.bunny, aspect: "vertical" },
  { id: "2", title: "Skyline Villa — Cinematic Tour", client: "Atrium Realty", clientType: "Real Estate Agency", tools: ["Premiere Pro", "DaVinci", "After Effects"], duration: "1:42", year: 2025, category: "Real Estate Ads", thumb: realestate, video: V.escapes, aspect: "horizontal" },
  { id: "3", title: "10M Subs Special Edit", client: "Creator Studio", clientType: "YouTube Creator", tools: ["Premiere Pro", "After Effects", "Photoshop"], duration: "12:18", year: 2024, category: "YouTube Videos", thumb: youtube, video: V.fun, aspect: "horizontal" },
  { id: "4", title: "Liquid Type Reel", client: "In-House", clientType: "Studio Project", tools: ["After Effects", "Cinema 4D", "Photoshop"], duration: "0:45", year: 2025, category: "Motion Graphics", thumb: motion, video: V.elephant, aspect: "horizontal" },
  { id: "5", title: "Neon Future — AI Short", client: "Concept", clientType: "Personal Project", tools: ["Runway ML", "Midjourney", "Premiere Pro"], duration: "1:10", year: 2025, category: "AI Videos", thumb: ai, video: V.blaze, aspect: "horizontal" },
  { id: "6", title: "Glow Skincare — Launch Spot", client: "Glow Co.", clientType: "DTC Brand", tools: ["Premiere Pro", "After Effects", "Canva"], duration: "0:30", year: 2025, category: "Social Media Ads", thumb: social, video: V.joy, aspect: "vertical" },
  { id: "7", title: "Dental Reel — Smile Makeover", client: "Dr. Khan", clientType: "Healthcare Brand", tools: ["Premiere Pro", "DaVinci"], duration: "0:48", year: 2025, category: "Doctor Reels", thumb: doctor, video: V.bunny, aspect: "vertical" },
  { id: "8", title: "Penthouse Walkthrough", client: "Crest Estates", clientType: "Real Estate Agency", tools: ["Premiere Pro", "After Effects"], duration: "2:05", year: 2024, category: "Real Estate Ads", thumb: realestate, video: V.escapes, aspect: "horizontal" },
  { id: "9", title: "Vlog Opener Sequence", client: "TravelByMo", clientType: "YouTube Creator", tools: ["After Effects", "Premiere Pro"], duration: "0:22", year: 2025, category: "YouTube Videos", thumb: youtube, video: V.fun, aspect: "horizontal" },
];

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
