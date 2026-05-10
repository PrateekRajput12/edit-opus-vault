import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { SHOWREEL_VIDEO } from "@/lib/portfolio-data";

export function Showreel() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };

  return (
    <section id="showreel" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">— 2026 Reel</p>
            <h2 className="font-display text-5xl md:text-7xl">The Showreel</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A 90-second cut featuring favorite frames from the past year — directed, edited, color graded and scored.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-elevated group cursor-pointer border border-border"
          onClick={toggle}
        >
          <video
            ref={ref}
            src={SHOWREEL_VIDEO}
            poster={heroBg}
            playsInline
            className="h-full w-full object-cover"
          />
          {!playing && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full bg-primary/95 text-primary-foreground shadow-glow"
                >
                  <Play className="h-10 w-10 md:h-12 md:w-12 fill-current ml-1" />
                </motion.div>
              </div>
              <div className="absolute bottom-6 left-6 font-display text-2xl md:text-3xl">PLAY REEL · 01:32</div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
