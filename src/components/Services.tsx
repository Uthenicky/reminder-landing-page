import { Card, CardContent } from "./ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Settings, Zap } from "lucide-react";

interface StepProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: StepProps[] = [
  {
    step: 1,
    icon: <UserPlus className="w-8 h-8 text-primary" />,
    title: "Daftar & Input Data Siswa",
    description:
      "Daftar gratis selama 2 bulan. Masukkan data siswa dan nomor WhatsApp orang tua. Bisa import dari Excel atau CSV.",
  },
  {
    step: 2,
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Atur Jadwal & Template Pesan",
    description:
      "Tentukan tanggal jatuh tempo iuran dan pilih template pesan reminder. Bisa dikustomisasi sesuai karakter lembaga kamu.",
  },
  {
    step: 3,
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Sistem Berjalan Otomatis",
    description:
      "Selesai! Sistem akan mengirim reminder otomatis, follow-up, dan notifikasi konfirmasi pembayaran tanpa perlu intervensi admin.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55,  } },
};

export const Services = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="container py-24 sm:py-32">
      {/* Header */}
      <div className="text-center space-y-4 mb-14">
        <motion.h2
          className="text-3xl lg:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Mulai dalam{" "}
          <span className="bg-gradient-to-r from-primary to-emerald-400 text-transparent bg-clip-text">
            3 Langkah Mudah
          </span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tidak perlu keahlian teknis. Setup dalam hitungan menit, langsung aktif hari ini.
        </motion.p>
      </div>

      {/* Steps */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-10 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 z-0" />

        {steps.map((step) => (
          <motion.div key={step.step} variants={itemVariants} className="relative z-10">
            <Card className="border-2 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group h-full">
              <CardContent className="p-6 text-center">
                {/* Step number */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 md:right-[calc(50%-36px)] w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="https://wa.me/6282299459702"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
        >
          Mulai Sekarang — Gratis 2 Bulan
        </a>
      </motion.div>
    </section>
  );
};
