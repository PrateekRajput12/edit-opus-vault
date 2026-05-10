import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PACKAGES } from "@/lib/portfolio-data";

export function Pricing() {
  return (
    <section id="pricing" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">— Investment</p>
          <h2 className="font-display text-5xl md:text-7xl">Pick your package.</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Transparent pricing, no surprises. Custom scopes available on request.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl border p-8 flex flex-col ${
                p.featured
                  ? "bg-gradient-to-b from-primary/15 to-surface border-primary shadow-glow"
                  : "bg-surface border-border"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary text-primary-foreground px-4 py-1 text-[10px] uppercase tracking-widest font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-3xl tracking-wide">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-6xl">{p.price}</span>
                <span className="text-muted-foreground text-sm">{p.unit}</span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full py-3.5 text-sm font-semibold transition ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:bg-surface-elevated"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
