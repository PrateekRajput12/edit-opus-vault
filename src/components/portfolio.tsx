import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { CATEGORIES, PORTFOLIO, type Category, type PortfolioItem } from "@/lib/portfolio-data";

function VideoCard({ item, onClick }: { item: PortfolioItem; onClick: () => void }) {
  const vRef = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);

  const onEnter = () => {
    setHover(true);
    const v = vRef.current;
    if (v) { v.currentTime = 0; v.play().catch(() => {}); }
  };
  const onLeave = () => {
    setHover(false);
    const v = vRef.current;
    if (v) v.pause();
  };

  return (
    <motion.button
      layout
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface text-left ${
        item.aspect === "vertical" ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      <img
        src={item.thumb}
        alt={item.title}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hover ? "opacity-0" : "opacity-100"}`}
      />
      <video
        ref={vRef}
        src={item.video}
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hover ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />

      <div className="absolute top-4 left-4 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest">
        {item.category}
      </div>

      <div className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/95 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity shadow-glow">
        <Play className="h-4 w-4 fill-current ml-0.5" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-xs text-muted-foreground">{item.client}</p>
        <h3 className="font-display text-xl md:text-2xl mt-1 leading-tight">{item.title}</h3>
      </div>
    </motion.button>
  );
}

export function Portfolio({ onSelect }: { onSelect: (item: PortfolioItem) => void }) {
  const [active, setActive] = useState<Category>("All");
  const items = active === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">— Selected Work</p>
            <h2 className="font-display text-5xl md:text-7xl">The Portfolio</h2>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active === c ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <VideoCard key={item.id} item={item} onClick={() => onSelect(item)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
