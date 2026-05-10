import { useRef, useState } from "react";
import { motion } from "framer-motion";
import realestate from "@/assets/thumb-realestate.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">— Before / After</p>
          <h2 className="font-display text-5xl md:text-7xl">The transformation.</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Drag the slider to see raw footage become a cinematic frame.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          ref={ref}
          className="relative aspect-video w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-border shadow-elevated select-none cursor-ew-resize"
          onMouseMove={(e) => onMove(e.clientX)}
          onTouchMove={(e) => onMove(e.touches[0].clientX)}
        >
          {/* Before — desaturated, flat */}
          <img
            src={realestate}
            alt="Before edit"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "saturate(0.4) brightness(0.85) contrast(0.85)" }}
          />
          {/* After — graded */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          >
            <img
              src={realestate}
              alt="After edit"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ filter: "saturate(1.3) contrast(1.15) brightness(1.05)" }}
            />
          </div>

          <div className="absolute top-4 left-4 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest">Before</div>
          <div className="absolute top-4 right-4 rounded-full bg-primary/90 text-primary-foreground px-3 py-1 text-xs uppercase tracking-widest">After</div>

          <div
            className="absolute top-0 bottom-0 w-0.5 bg-primary shadow-glow pointer-events-none"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-glow">
              ⇆
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
