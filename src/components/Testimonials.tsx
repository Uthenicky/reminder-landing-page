import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TestimonialProps {
  initials: string;
  name: string;
  role: string;
  institution: string;
  comment: string;
  stars: number;
}

const testimonials: TestimonialProps[] = [
  {
    initials: "SR",
    name: "Siti Rahayu",
    role: "Guru Privat",
    institution: "Privat Matematika Jogja",
    comment:
      "Dulu saya harus WA orang tua satu per satu tiap bulan. Sekarang tinggal duduk, sistem yang kerja. Bayaran murid lebih tepat waktu dan saya bisa fokus ngajar.",
    stars: 5,
  },
  {
    initials: "BW",
    name: "Budi Wicaksono",
    role: "Pemilik Bimbel",
    institution: "Bimbel Prestasi Malang",
    comment:
      "Setelah pakai Lancar Iuran, tunggakan SPP turun drastis. Orang tua lebih responsif karena diingatkan via WA langsung. Mantap banget!",
    stars: 5,
  },
  {
    initials: "NF",
    name: "Nurul Fitri",
    role: "Owner Daycare",
    institution: "Daycare Buah Hati Bandung",
    comment:
      "Admin saya dulu kewalahan follow-up pembayaran. Sekarang dengan Lancar Iuran, semua otomatis dan laporan juga langsung ada. Sangat membantu!",
    stars: 5,
  },
  {
    initials: "DH",
    name: "Dian Hermawan",
    role: "Kepala Sekolah",
    institution: "SD Harapan Bangsa",
    comment:
      "Kami sudah pakai selama 4 bulan. Cashflow lebih stabil karena orang tua bayar tepat waktu. AI-nya juga pintar menjawab pertanyaan orang tua.",
    stars: 5,
  },
  {
    initials: "RK",
    name: "Rizky Kurniawan",
    role: "Pengelola Kursus",
    institution: "English First Surabaya",
    comment:
      "Setup-nya gampang banget, tidak perlu skill teknis. Dalam 30 menit sudah langsung aktif. Orang tua senang dapat reminder, kami senang cashflow lancar.",
    stars: 5,
  },
  {
    initials: "AP",
    name: "Anita Putri",
    role: "Guru Les Rumahan",
    institution: "Les Piano & Menggambar",
    comment:
      "Cocok banget untuk les rumahan seperti saya. Harga starter-nya terjangkau, fiturnya lengkap. Tidak perlu lagi malu-malu nagih orang tua.",
    stars: 5,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5,  } },
};

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

export const Testimonials = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={ref} className="container py-24 sm:py-32">
      <div className="text-center space-y-4 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Dipercaya oleh{" "}
          <span className="bg-gradient-to-r from-primary to-emerald-400 text-transparent bg-clip-text">
            Lembaga Pendidikan Indonesia
          </span>
        </motion.h2>
        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Dari guru privat sampai sekolah — mereka semua merasakan manfaatnya.
        </motion.p>
      </div>

      <motion.div
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={cardVariants}
            className="break-inside-avoid mb-6"
          >
            <Card className="border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-sm">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5">
                  <CardTitle className="text-base">{t.name}</CardTitle>
                  <CardDescription className="text-xs">
                    {t.role} · {t.institution}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <StarRating count={t.stars} />
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{t.comment}"
                </p>
                <Badge
                  variant="secondary"
                  className="text-xs text-primary bg-primary/10 border border-primary/20"
                >
                  Pengguna Terverifikasi ✓
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
