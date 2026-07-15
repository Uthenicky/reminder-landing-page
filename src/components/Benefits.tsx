import { Card, CardContent } from "./ui/card";
import {
  Bot,
  Users,
  Clock,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: BenefitProps[] = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Menjawab Chat Otomatis",
    description:
      "Balas pertanyaan pelanggan kapan saja menggunakan informasi bisnis Anda.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Tangkap Calon Pelanggan",
    description:
      "AI akan mengumpulkan informasi penting sebelum diteruskan ke tim sales.",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Reminder Otomatis",
    description:
      "Kirim pengingat, jadwal, atau promo secara otomatis sesuai jadwal yang Anda tentukan.",
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
    title: "Dashboard Monitoring",
    description:
      "Pantau seluruh percakapan, performa chatbot, dan aktivitas pelanggan dalam satu tempat.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Mudah Digunakan",
    description:
      "Tidak perlu kemampuan teknis. Cukup sambungkan WhatsApp dan chatbot siap bekerja.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, } },
};

export const Benefits = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" ref={ref} className="container py-24 sm:py-32">
      <div className="text-center space-y-4 mb-12">
        <motion.h2
          className="text-3xl lg:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Mengapa{" "}
          <span className="bg-gradient-to-r from-primary to-emerald-400 text-transparent bg-clip-text">
            Memilih Kami?
          </span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tingkatkan efisiensi bisnis Anda dengan fitur-fitur unggulan kami.
        </motion.p>
      </div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {benefits.map((benefit, i) => (
          <motion.div key={benefit.title} variants={itemVariants}>
            <Card
              className={`h-full border-2 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
