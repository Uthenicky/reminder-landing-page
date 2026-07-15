import { Button, buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import { HeroCards } from "./HeroCards";
import { MessageCircle, Play } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Variants } from "framer-motion";

const badges = [
  "Solusi WhatsApp Business",
  "Otomatisasi Chat",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center lg:text-start space-y-6 z-10">
        {/* Badge row */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center lg:justify-start"
          initial="hidden"
          animate="show"
        >
          {badges.map((badge, i) => (
            <motion.div key={badge} variants={fadeUp} custom={i}>
              <Badge
                variant="secondary"
                className="text-xs font-medium px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {badge}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.main
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1>
            Otomatiskan Balas Chat & Follow Up Pelanggan. Aktif{" "}
            <span className="inline bg-gradient-to-r from-primary to-teal-400 text-transparent bg-clip-text">
              24 Jam
            </span>{" "}Tanpa Ribet.
          </h1>
        </motion.main>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground md:w-11/12 mx-auto lg:mx-0 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tinggalkan cara manual. Biarkan sistem kami membalas chat, mengirim pengingat tagihan, dan menangkap prospek penjualan secara otomatis saat Anda tidur.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
        >
          <a
            href="https://wa.me/6282299459702"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto font-semibold text-base flex items-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
            >
              <MessageCircle className="w-5 h-5" />
              Mulai Gratis
            </Button>
          </a>

          <a
            href="#how-it-works"
            className={cn(
              "w-full sm:w-auto font-semibold text-base flex items-center justify-center gap-2",
              buttonVariants({ variant: "outline", size: "lg" })
            )}
          >
            <Play className="w-4 h-4" />
            Lihat Demo
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          ✅ Coba gratis 1 bulan &nbsp;·&nbsp; 🔒 Data aman &nbsp;·&nbsp; 💬 Tanpa install aplikasi
        </motion.p>
      </div>

      {/* Hero Cards section */}
      <motion.div
        className="z-10 w-full"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <HeroCards />
      </motion.div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
