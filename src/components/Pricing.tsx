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
    title: "Paket Balas",
    price: "Rp99.000",
    period: "/ bulan",
    description: "Cocok untuk menjawab pertanyaan pelanggan secara cepat dan otomatis.",
    buttonText: "Pilih Paket Balas",
    highlighted: false,
    maxSiswa: "1.000 Pesan",
    benefitList: [
      "Menjawab pertanyaan otomatis",
      "Belajar dari FAQ bisnis",
      "Respon cepat 24 Jam",
      "Dashboard Monitoring",
      "Support",
    ],
  },
  {
    title: "Paket Balas Pro",
    price: "Rp149.000",
    period: "/ bulan",
    description: "Solusi balas otomatis untuk bisnis dengan volume interaksi tinggi.",
    badgeLabel: "Value",
    badgeIcon: <Zap className="w-3 h-3" />,
    buttonText: "Pilih Balas Pro",
    highlighted: false,
    maxSiswa: "10.000 Pesan",
    benefitList: [
      "Semua fitur Paket Balas",
      "Kuota pesan 10x lebih banyak",
      "Prioritas Support"
    ],
  },
  {
    title: "Paket Sales",
    price: "Rp199.000",
    period: "/ bulan",
    description: "Solusi lengkap dengan kualifikasi lead untuk membantu konversi tim sales Anda.",
    badgeLabel: "Paling Populer",
    badgeIcon: <Star className="w-3 h-3" />,
    buttonText: "Pilih Paket Sales",
    highlighted: true,
    maxSiswa: "1.000 Pesan",
    benefitList: [
      "Semua fitur Paket Balas",
      "Menanyakan kebutuhan pelanggan",
      "Mengumpulkan data leads",
      "Notif otomatis ke tim Sales (Hot Leads)",
    ],
  },
  {
    title: "Paket Sales Pro",
    price: "Rp249.000",
    period: "/ bulan",
    description: "Kualifikasi lead cerdas untuk bisnis skala besar dengan volume tinggi.",
    badgeLabel: "Terbaik",
    badgeIcon: <Crown className="w-3 h-3" />,
    buttonText: "Pilih Sales Pro",
    highlighted: false,
    maxSiswa: "10.000 Pesan",
    benefitList: [
      "Semua fitur Paket Sales",
      "Kuota pesan 10x lebih banyak",
      "Analitik & Statistik Lengkap",
      "Prioritas Support",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, } },
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
          Paket dan{" "}
          <span className="bg-gradient-to-r from-primary to-emerald-400 text-transparent bg-clip-text">
            Fitur
          </span>
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Pilih solusi yang paling cocok untuk bisnis Anda.
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
                  <span className="text-2xl font-extrabold">{plan.price}</span>
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
