import { motion } from "framer-motion";
import { TOOLS } from "@/lib/portfolio-data";

export function Tools() {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">— The Stack</p>
          <h2 className="font-display text-5xl md:text-7xl">Tools of the trade.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TOOLS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-surface p-6 overflow-hidden hover:bg-surface-elevated transition"
            >
              <div
                className="absolute -top-10 -right-10 h-24 w-24 rounded-full opacity-30 group-hover:opacity-60 transition blur-2xl"
                style={{ backgroundColor: t.color }}
              />
              <div
                className="h-10 w-10 rounded-lg mb-4 flex items-center justify-center font-display text-xl text-background"
                style={{ backgroundColor: t.color }}
              >
                {t.name[0]}
              </div>
              <div className="font-display text-xl tracking-wide">{t.name}</div>
              <div className="text-xs text-muted-foreground mt-1">Daily driver</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
