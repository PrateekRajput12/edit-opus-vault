import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Clock, Calendar } from "lucide-react";
import { useEffect } from "react";
import type { PortfolioItem } from "@/lib/portfolio-data";

interface Props {
  item: PortfolioItem | null;
  list: PortfolioItem[];
  onClose: () => void;
  onNavigate: (item: PortfolioItem) => void;
}

export function VideoModal({ item, list, onClose, onNavigate }: Props) {
  const idx = item ? list.findIndex((i) => i.id === item.id) : -1;
  const hasNav = idx >= 0 && list.length > 1;

  const go = (dir: -1 | 1) => {
    if (idx < 0) return;
    const next = list[(idx + dir + list.length) % list.length];
    onNavigate(next);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasNav) go(1);
      if (e.key === "ArrowLeft" && hasNav) go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = item ? "hidden" : "";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, hasNav, idx]);

  return (
    <AnimatePresence mode="wait">
      {item && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/92 backdrop-blur-md" />

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 z-10 flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-4 py-2 text-sm hover:bg-surface-elevated transition"
          >
            Close <X className="h-4 w-4" />
          </button>

          {/* Counter */}
          {hasNav && (
            <div className="absolute top-5 left-5 z-10 rounded-full border border-border bg-surface/80 backdrop-blur px-4 py-2 text-xs font-mono tabular-nums text-muted-foreground">
              {String(idx + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
            </div>
          )}

          {/* Prev / Next */}
          {hasNav && (
            <>
              <NavButton side="left" onClick={(e) => { e.stopPropagation(); go(-1); }} />
              <NavButton side="right" onClick={(e) => { e.stopPropagation(); go(1); }} />
            </>
          )}

          <motion.div
            key={item.id}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full ${item.aspect === "vertical" ? "max-w-md" : "max-w-6xl"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative overflow-hidden rounded-2xl border border-border bg-black shadow-elevated ${item.aspect === "vertical" ? "aspect-[9/16]" : "aspect-video"}`}>
              <video
                key={item.id}
                src={item.video}
                poster={item.thumb}
                controls
                autoPlay
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-5 grid md:grid-cols-[1fr_auto] gap-4 items-start">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest">
                  <span className="text-primary">{item.category}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                  <span className="text-muted-foreground">{item.clientType}</span>
                </div>
                <h3 className="font-display text-2xl md:text-4xl mt-2 leading-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">Client · <span className="text-foreground">{item.client}</span></p>
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {item.tools.map((t) => (
                    <span key={t} className="rounded-md bg-surface border border-border px-2.5 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex md:flex-col items-start md:items-end gap-3 text-xs text-muted-foreground md:text-right">
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {item.duration}</span>
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {item.year}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavButton({ side, onClick }: { side: "left" | "right"; onClick: (e: React.MouseEvent) => void }) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      aria-label={side === "left" ? "Previous video" : "Next video"}
      className={`absolute top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-border bg-surface/80 backdrop-blur hover:bg-primary hover:text-primary-foreground hover:border-primary transition shadow-elevated ${
        side === "left" ? "left-3 md:left-6" : "right-3 md:right-6"
      }`}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
}
