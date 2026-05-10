import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Clock, Wrench } from "lucide-react";
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
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-elevated hover:border-primary/60 transition-colors"
    >
      {/* Media */}
      <div className={`relative overflow-hidden ${item.aspect === "vertical" ? "aspect-[9/14]" : "aspect-[16/10]"}`}>
        <img
          src={item.thumb}
          alt={item.title}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
            hover ? "opacity-0 scale-110" : "opacity-100 scale-100 group-hover:scale-105"
          }`}
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

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/40" />

        {/* Top row: category + duration */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
          <span className="rounded-full bg-background/70 backdrop-blur-md border border-border/60 px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold">
            {item.category}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur-md border border-border/60 px-2.5 py-1 text-[10px] font-mono tabular-nums">
            <Clock className="h-3 w-3" /> {item.duration}
          </span>
        </div>

        {/* Play overlay */}
        <motion.div
          initial={false}
          animate={{ scale: hover ? 1 : 0.85, opacity: hover ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow ring-4 ring-primary/20">
            <Play className="h-7 w-7 fill-current ml-1" />
          </div>
        </motion.div>

        {/* Year stamp */}
        <div className="absolute bottom-4 right-4 font-display text-xs tracking-widest text-muted-foreground/80">
          © {item.year}
        </div>
      </div>

      {/* Meta block */}
      <div className="p-5 border-t border-border/50">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl md:text-2xl leading-tight tracking-wide line-clamp-2">{item.title}</h3>
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{item.client}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span>{item.clientType}</span>
        </div>

        {/* Tools chips */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <Wrench className="h-3 w-3 text-muted-foreground mr-1" />
          {item.tools.map((t) => (
            <span key={t} className="rounded-md bg-muted/60 border border-border/50 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

export function Portfolio({ onSelect }: { onSelect: (item: PortfolioItem, list: PortfolioItem[]) => void }) {
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
          <p className="text-sm text-muted-foreground max-w-xs">
            A curated set of edits across reels, ads, long-form and motion. Hover to preview, click to play.
          </p>
        </div>

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
              <VideoCard key={item.id} item={item} onClick={() => onSelect(item, items)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
