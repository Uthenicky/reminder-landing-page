import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, MessageCircle, Zap, Star, Crown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface PricingProps {
  title: string;
  price: string;
  period: string;
  description: string;
  badgeLabel?: string;
  badgeIcon?: React.ReactNode;
  buttonText: string;
  highlighted: boolean;
  benefitList: string[];
  maxSiswa: string;
}

const pricingList: PricingProps[] = [
  {
    title: "Trial",
    price: "Gratis",
    period: "2 Bulan",
    description: "Coba semua fitur tanpa biaya. Cocok untuk kamu yang ingin merasakan manfaatnya dulu.",
    buttonText: "Mulai Gratis Sekarang",
    highlighted: false,
    maxSiswa: "Maks. 50 Siswa",
    benefitList: [
      "Semua fitur dasar tersedia",
      "Reminder WhatsApp otomatis",
      "Dashboard pembayaran",
      "Support via WhatsApp",
      "Tanpa kartu kredit",
    ],
  },
  {
    title: "Starter",
    price: "Rp 99.000",
    period: "/ bulan",
    description: "Ideal untuk guru privat, tempat les rumahan, atau daycare dengan jumlah siswa kecil.",
    badgeLabel: "Paling Hemat",
    badgeIcon: <Zap className="w-3 h-3" />,
    buttonText: "Pilih Starter",
    highlighted: false,
    maxSiswa: "Maks. 50 Siswa",
    benefitList: [
      "Semua fitur Trial +",
      "Reminder unlimited",
      "Admin AI Chatbot",
      "Laporan bulanan PDF",
      "Priority email support",
    ],
  },
  {
    title: "Growth",
    price: "Rp 149.000",
    period: "/ bulan",
    description: "Untuk bimbel yang sedang berkembang dan butuh sistem lebih robust.",
    badgeLabel: "Paling Populer",
    badgeIcon: <Star className="w-3 h-3" />,
    buttonText: "Pilih Growth",
    highlighted: true,
    maxSiswa: "Maks. 200 Siswa",
    benefitList: [
      "Semua fitur Starter +",
      "Multi admin (3 akun)",
      "Integrasi kustom pesan",
      "Analitik cashflow",
      "WhatsApp dedicated support",
      "Export data Excel",
    ],
  },
  {
    title: "Pro",
    price: "Rp 249.000",
    period: "/ bulan",
    description: "Untuk sekolah dan bimbel besar yang membutuhkan kapasitas penuh dan dukungan prioritas.",
    badgeLabel: "Best Value",
    badgeIcon: <Crown className="w-3 h-3" />,
    buttonText: "Pilih Pro",
    highlighted: false,
    maxSiswa: "Maks. 500 Siswa",
    benefitList: [
      "Semua fitur Growth +",
      "Multi admin unlimited",
      "Kustomisasi brand (logo)",
      "API access",
      "Dedicated account manager",
      "SLA uptime 99.9%",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55,  } },
};

export const Pricing = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="container py-24 sm:py-32">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Pilih Paket{" "}
          <span className="bg-gradient-to-r from-primary to-emerald-400 text-transparent bg-clip-text">
            Sesuai Kebutuhan
          </span>
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Mulai gratis, upgrade kapan saja. Tanpa kontrak jangka panjang, bisa cancel kapanpun.
        </motion.p>
      </div>

      {/* Pricing Cards */}
      <motion.div
        className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {pricingList.map((plan) => (
          <motion.div key={plan.title} variants={cardVariants} className="flex">
            <Card
              className={cn(
                "flex flex-col w-full border-2 transition-all duration-300 hover:shadow-lg",
                plan.highlighted
                  ? "border-primary shadow-xl shadow-primary/20 relative"
                  : "hover:border-primary/40 hover:shadow-primary/10"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    Paling Populer
                  </div>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
                  {plan.badgeLabel && !plan.highlighted && (
                    <Badge
                      variant="secondary"
                      className="text-xs flex items-center gap-1 text-primary bg-primary/10 border border-primary/20"
                    >
                      {plan.badgeIcon}
                      {plan.badgeLabel}
                    </Badge>
                  )}
                </div>

                <div className="mb-1">
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
                </div>

                <Badge
                  variant="outline"
                  className="w-fit text-xs text-muted-foreground"
                >
                  {plan.maxSiswa}
                </Badge>

                <CardDescription className="mt-3 leading-relaxed text-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <a
                  href="https://wa.me/6282299459702"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button
                    className={cn("w-full font-semibold flex items-center gap-2", plan.highlighted ? "" : "variant-outline")}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {plan.buttonText}
                  </Button>
                </a>
              </CardContent>

              <hr className="w-4/5 mx-auto" />

              <CardFooter className="pt-4 pb-6">
                <div className="space-y-2.5 w-full">
                  {plan.benefitList.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom note */}
      <motion.p
        className="text-center text-sm text-muted-foreground mt-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        🔒 Pembayaran aman · Tanpa kontrak · Bisa cancel kapanpun · Data kamu 100% milikmu
      </motion.p>
    </section>
  );
};
