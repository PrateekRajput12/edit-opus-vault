import { motion } from "framer-motion";
import { Film, Smartphone, Sparkles, Palette, AudioLines, Brain } from "lucide-react";
import { SERVICES } from "@/lib/portfolio-data";

const ICONS = { Film, Smartphone, Sparkles, Palette, AudioLines, Brain };

export function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">— What I Do</p>
            <h2 className="font-display text-5xl md:text-7xl">Services <br/><span className="text-gradient italic">built for impact.</span></h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-muted-foreground text-lg self-end">
            From hook-driven shorts to long-form documentaries — I bring story, rhythm and craft to every cut.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-surface p-8 hover:bg-surface-elevated transition-colors"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/15 text-primary mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl tracking-wide">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                <div className="absolute top-6 right-6 font-display text-xs text-muted-foreground/60">0{i + 1}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
