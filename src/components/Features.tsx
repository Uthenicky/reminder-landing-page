import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Bot, BarChart3, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  points: string[];
  badge: string;
}

const features: FeatureProps[] = [
  {
    title: "Reminder WhatsApp Otomatis",
    description:
      "Sistem kami mengirim pengingat iuran dan tagihan secara otomatis ke orang tua siswa — tanpa perlu admin chat satu per satu.",
    icon: <MessageCircle className="w-7 h-7 text-primary" />,
    badge: "Paling Digunakan",
    points: [
      "Reminder jatuh tempo otomatis",
      "Follow-up pembayaran otomatis",
      "Notifikasi langsung ke orang tua",
    ],
  },
  {
    title: "Admin Digital AI",
    description:
      "Chatbot berbasis AI yang siap menjawab pertanyaan orang tua 24 jam — dari cek status pembayaran sampai info jadwal.",
    icon: <Bot className="w-7 h-7 text-primary" />,
    badge: "Berbasis AI",
    points: [
      "Jawab pertanyaan umum orang tua",
      "Bantu admin sekolah lebih santai",
      "Respons cepat berbasis AI",
    ],
  },
  {
    title: "Monitoring Pembayaran",
    description:
      "Pantau status pembayaran semua siswa dalam satu dashboard. Tahu siapa yang sudah bayar, siapa yang belum.",
    icon: <BarChart3 className="w-7 h-7 text-primary" />,
    badge: "Real-time",
    points: [
      "Status pembayaran per siswa",
      "Riwayat transaksi lengkap",
      "Monitoring cashflow lebih mudah",
    ],
  },
  {
    title: "Hemat Waktu Admin",
    description:
      "Biarkan sistem yang bekerja. Admin tidak perlu lagi chat satu-satu — fokus saja mengembangkan bisnis pendidikan.",
    icon: <Clock className="w-7 h-7 text-primary" />,
    badge: "Efisiensi",
    points: [
      "Tidak perlu chat satu-satu lagi",
      "Kurangi pekerjaan admin manual",
      "Fokus kembangkan bisnis",
    ],
  },
];

const featureTags: string[] = [
  "WhatsApp Integration",
  "AI-Powered",
  "Real-time Dashboard",
  "Reminder Otomatis",
  "Multi-siswa",
  "Laporan Bulanan",
  "Dark Mode",
  "Mobile Friendly",
  "Tanpa Install App",
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55,  } },
};

export const Features = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="container py-24 sm:py-32 space-y-10">
      {/* Section header */}
      <div className="text-center space-y-4">
        <motion.h2
          className="text-3xl lg:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Semua yang Kamu Butuhkan,{" "}
          <span className="bg-gradient-to-r from-primary to-emerald-400 text-transparent bg-clip-text">
            Dalam Satu Platform
          </span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Dari reminder otomatis hingga admin AI, Lancar Iuran hadir untuk meringankan
          beban administrasi dan membuat cashflow lebih terkontrol.
        </motion.p>
      </div>

      {/* Feature tags */}
      <motion.div
        className="flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {featureTags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {tag}
          </Badge>
        ))}
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={cardVariants}>
            <Card className="h-full border-2 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs text-primary bg-primary/10 border border-primary/20"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 12 12">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
