/**
 * ────────────────────────────────────────────────────────────────────
 *  PORTFOLIO ITEMS — Edit this file to update your work showcase.
 * ────────────────────────────────────────────────────────────────────
 *
 *  Each item supports these fields:
 *    title         — Project title shown on the card and modal
 *    category      — Must be one of CATEGORIES below (used by filter)
 *    client        — Client / brand name
 *    clientType    — Short descriptor, e.g. "Healthcare Brand"
 *    tools         — Array of tools used, e.g. ["Premiere Pro", "After Effects"]
 *    thumbnailUrl  — Image URL OR imported asset (see "How to add a thumbnail")
 *    videoUrl      — MP4 / Cloudinary / direct video URL (NOT a YouTube page)
 *    duration      — String like "1:23"
 *    year          — Number, e.g. 2025
 *    aspect        — "vertical" (9:16 reels) or "horizontal" (16:9)
 *
 *  ── How to add a thumbnail ──
 *  Option A (recommended): drop an image into src/assets/ and import it:
 *      import myThumb from "@/assets/my-thumb.jpg";
 *      thumbnailUrl: myThumb,
 *
 *  Option B: paste any public URL string:
 *      thumbnailUrl: "https://res.cloudinary.com/.../thumb.jpg",
 *
 *  ── How to add a video ──
 *  Paste a direct MP4 / Cloudinary / Mux URL:
 *      videoUrl: "https://res.cloudinary.com/demo/video/upload/dog.mp4",
 *
 *  Use SHOWREEL_VIDEO_URL (bottom of file) for the main showreel.
 * ────────────────────────────────────────────────────────────────────
 */

// Local thumbnail assets (replace with your own anytime)
import doctor from "@/assets/thumb-doctor.jpg";
import realestate from "@/assets/thumb-realestate.jpg";
import youtube from "@/assets/thumb-youtube.jpg";
import motion from "@/assets/thumb-motion.jpg";
import ai from "@/assets/thumb-ai.jpg";
import social from "@/assets/thumb-social.jpg";

// ── Categories used by the portfolio filter ──
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
export type WorkCategory = Exclude<Category, "All">;

export interface PortfolioItem {
  id: string;
  title: string;
  category: WorkCategory;
  client: string;
  clientType: string;
  tools: string[];
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  year: number;
  aspect: "vertical" | "horizontal";
}

// ── Placeholder videos (replace with your real Cloudinary URLs) ──
const PLACEHOLDER = {
  v1: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  v2: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  v3: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  v4: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  v5: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  v6: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
};

// ════════════════════════════════════════════════════════════════════
//  ✏️  EDIT YOUR PORTFOLIO ITEMS BELOW
// ════════════════════════════════════════════════════════════════════
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "Cardiology Clinic — Patient Story",
    category: "Doctor Reels",
    client: "Dr. Mehra",
    clientType: "Healthcare Brand",
    tools: ["Premiere Pro", "After Effects", "DaVinci"],
    thumbnailUrl: doctor,
    videoUrl: PLACEHOLDER.v1,
    duration: "0:58",
    year: 2025,
    aspect: "vertical",
  },
  {
    id: "2",
    title: "Skyline Villa — Cinematic Tour",
    category: "Real Estate Ads",
    client: "Atrium Realty",
    clientType: "Real Estate Agency",
    tools: ["Premiere Pro", "DaVinci", "After Effects"],
    thumbnailUrl: realestate,
    videoUrl: PLACEHOLDER.v4,
    duration: "1:42",
    year: 2025,
    aspect: "horizontal",
  },
  {
    id: "3",
    title: "10M Subs Special Edit",
    category: "YouTube Videos",
    client: "Creator Studio",
    clientType: "YouTube Creator",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    thumbnailUrl: youtube,
    videoUrl: PLACEHOLDER.v5,
    duration: "12:18",
    year: 2024,
    aspect: "horizontal",
  },
  {
    id: "4",
    title: "Liquid Type Reel",
    category: "Motion Graphics",
    client: "In-House",
    clientType: "Studio Project",
    tools: ["After Effects", "Cinema 4D", "Photoshop"],
    thumbnailUrl: motion,
    videoUrl: PLACEHOLDER.v2,
    duration: "0:45",
    year: 2025,
    aspect: "horizontal",
  },
  {
    id: "5",
    title: "Neon Future — AI Short",
    category: "AI Videos",
    client: "Concept",
    clientType: "Personal Project",
    tools: ["Runway ML", "Midjourney", "Premiere Pro"],
    thumbnailUrl: ai,
    videoUrl: PLACEHOLDER.v3,
    duration: "1:10",
    year: 2025,
    aspect: "horizontal",
  },
  {
    id: "6",
    title: "Glow Skincare — Launch Spot",
    category: "Social Media Ads",
    client: "Glow Co.",
    clientType: "DTC Brand",
    tools: ["Premiere Pro", "After Effects", "Canva"],
    thumbnailUrl: social,
    videoUrl: PLACEHOLDER.v6,
    duration: "0:30",
    year: 2025,
    aspect: "vertical",
  },
  {
    id: "7",
    title: "Dental Reel — Smile Makeover",
    category: "Doctor Reels",
    client: "Dr. Khan",
    clientType: "Healthcare Brand",
    tools: ["Premiere Pro", "DaVinci"],
    thumbnailUrl: doctor,
    videoUrl: PLACEHOLDER.v1,
    duration: "0:48",
    year: 2025,
    aspect: "vertical",
  },
  {
    id: "8",
    title: "Penthouse Walkthrough",
    category: "Real Estate Ads",
    client: "Crest Estates",
    clientType: "Real Estate Agency",
    tools: ["Premiere Pro", "After Effects"],
    thumbnailUrl: realestate,
    videoUrl: PLACEHOLDER.v4,
    duration: "2:05",
    year: 2024,
    aspect: "horizontal",
  },
  {
    id: "9",
    title: "Vlog Opener Sequence",
    category: "YouTube Videos",
    client: "TravelByMo",
    clientType: "YouTube Creator",
    tools: ["After Effects", "Premiere Pro"],
    thumbnailUrl: youtube,
    videoUrl: PLACEHOLDER.v5,
    duration: "0:22",
    year: 2025,
    aspect: "horizontal",
  },
];

// ── Main showreel video (top of page) ──
export const SHOWREEL_VIDEO_URL = PLACEHOLDER.v6;
