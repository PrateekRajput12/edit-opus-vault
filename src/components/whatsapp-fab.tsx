import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/15550102034"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elevated"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ backgroundColor: "var(--whatsapp)" }} />
      <MessageCircle className="h-6 w-6 fill-current relative" />
    </motion.a>
  );
}
