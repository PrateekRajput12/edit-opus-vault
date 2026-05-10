import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/portfolio-data";

export function Testimonials() {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">— Kind Words</p>
          <h2 className="font-display text-5xl md:text-7xl max-w-3xl">Trusted by creators & brands worldwide.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative rounded-3xl border border-border bg-surface p-8 md:p-10"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/30" />
              <blockquote className="text-lg leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-lg">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
