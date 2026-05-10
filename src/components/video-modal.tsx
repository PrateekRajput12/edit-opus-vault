import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { PortfolioItem } from "@/lib/portfolio-data";

export function VideoModal({ item, onClose }: { item: PortfolioItem | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = item ? "hidden" : "";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full ${item.aspect === "vertical" ? "max-w-md" : "max-w-6xl"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Close <X className="h-4 w-4" />
            </button>
            <div className={`relative overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated ${item.aspect === "vertical" ? "aspect-[9/16]" : "aspect-video"}`}>
              <video src={item.video} poster={item.thumb} controls autoPlay className="h-full w-full object-cover" />
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">{item.category}</p>
                <h3 className="font-display text-2xl md:text-3xl mt-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">Client · {item.client}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
