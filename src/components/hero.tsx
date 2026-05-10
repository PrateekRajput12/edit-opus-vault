import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { SHOWREEL_VIDEO } from "@/lib/portfolio-data";

export function Hero({ onPlayShowreel }: { onPlayShowreel: () => void }) {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background video layer */}
      <div className="absolute inset-0 -z-10">
        <video
          src={SHOWREEL_VIDEO}
          poster={heroBg}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-grain" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for projects · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[14vw] sm:text-[10vw] lg:text-[8.5rem] leading-[0.88] font-display"
          >
            Frames that <br />
            <span className="text-gradient italic">feel cinematic.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground"
          >
            I'm <span className="text-foreground font-semibold">Kairo Vance</span> — a video editor & motion designer crafting
            scroll-stopping reels, ads, and YouTube edits for brands and creators worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={onPlayShowreel}
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-glow"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch Showreel
            </button>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold hover:bg-surface transition"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:col-span-4 flex lg:justify-end"
        >
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {[
              { v: "8+", l: "Years editing" },
              { v: "320+", l: "Projects shipped" },
              { v: "180M", l: "Views generated" },
              { v: "60+", l: "Happy clients" },
            ].map((s) => (
              <div key={s.l} className="border-l border-border/60 pl-4">
                <div className="font-display text-4xl text-primary">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-6 left-0 right-0 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap text-muted-foreground/40 text-xs uppercase tracking-[0.4em]"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              <span>★ Cinematic Editing</span>
              <span>★ Motion Graphics</span>
              <span>★ Color Grading</span>
              <span>★ Sound Design</span>
              <span>★ AI Video</span>
              <span>★ Storytelling</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
