import { motion } from "framer-motion";
import { Mail, MessageCircle, Instagram, ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">— Let's Talk</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">Got a story <br/><span className="text-gradient italic">to tell?</span></h2>
            <p className="text-muted-foreground mt-6 max-w-md">
              Drop a line about your project, or reach out directly via WhatsApp, email or DM.
            </p>

            <div className="mt-10 space-y-3">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 010-2034", href: "https://wa.me/15550102034" },
                { icon: Mail, label: "Email", value: "hello@kairo.studio", href: "mailto:hello@kairo.studio" },
                { icon: Instagram, label: "Instagram", value: "@kairo.cuts", href: "https://instagram.com" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 hover:bg-surface-elevated transition"
                  >
                    <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                      <div className="font-medium">{c.value}</div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                  </a>
                );
              })}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="lg:col-span-7 rounded-3xl border border-border bg-surface p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@brand.com" />
            </div>
            <Field label="Project type" name="project" placeholder="YouTube edit, reel, ad…" className="mt-5" />
            <div className="mt-5">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Tell me more</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Goals, deadline, references…"
                className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-glow disabled:opacity-60"
            >
              {sending ? "Sending…" : <>Send message <Send className="h-4 w-4" /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...props}
        required
        className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
    </div>
  );
}
