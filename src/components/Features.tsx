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
    title: "Reminder & Update Otomatis",
    description:
      "Sistem kami mengirim pengingat jadwal, status pesanan, dan tagihan secara otomatis — tanpa perlu admin chat satu per satu.",
    icon: <MessageCircle className="w-7 h-7 text-primary" />,
    badge: "Paling Digunakan",
    points: [
      "Follow-up pembayaran otomatis",
      "Update resi & status booking",
      "Notifikasi langsung ke pelanggan",
    ],
  },
  {
    title: "Admin Digital AI",
    description:
      "Chatbot berbasis AI yang siap menjawab pertanyaan pelanggan 24 jam — dari cek status hingga info layanan.",
    icon: <Bot className="w-7 h-7 text-primary" />,
    badge: "Berbasis AI",
    points: [
      "Jawab pertanyaan umum seketika",
      "Bantu admin lebih santai",
      "Respons cepat berbasis AI",
    ],
  },
  {
    title: "Monitoring Real-time",
    description:
      "Pantau status pembayaran, stok, atau booking dalam satu dashboard. Semua data tersinkronisasi otomatis.",
    icon: <BarChart3 className="w-7 h-7 text-primary" />,
    badge: "Real-time",
    points: [
      "Status transaksi per pelanggan",
      "Riwayat aktivitas lengkap",
      "Monitoring performa bisnis",
    ],
  },
  {
    title: "Hemat Waktu Admin",
    description:
      "Biarkan sistem yang bekerja. Admin tidak perlu lagi chat manual — fokus saja mengembangkan skala bisnis Anda.",
    icon: <Clock className="w-7 h-7 text-primary" />,
    badge: "Efisiensi",
    points: [
      "Kurangi pekerjaan manual",
      "Efisiensi biaya operasional",
      "Fokus kembangkan bisnis",
    ],
  },
];

const featureTags: string[] = [
  "WhatsApp Integration",
  "AI-Powered",
  "Real-time Dashboard",
  "Reminder Otomatis",
  "Multi-Tenant",
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
          Semua Fitur Core yang,{" "}
          <span className="bg-gradient-to-r from-primary to-emerald-400 text-transparent bg-clip-text">
            Anda Butuhkan
          </span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Dari reminder otomatis hingga admin AI, kami hadir untuk meringankan
          beban administrasi dan memastikan layanan ke pelanggan tetap maksimal.
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
