import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Apakah harus install aplikasi untuk menggunakannya?",
    answer:
      "Tidak perlu! Lancar Iuran berbasis web dan bekerja via WhatsApp yang sudah ada di HP kamu. Orang tua siswa juga tidak perlu install apapun — mereka hanya menerima pesan WA seperti biasa.",
    value: "item-1",
  },
  {
    question: "Apakah bisa dipakai di HP saja?",
    answer:
      "Tentu bisa! Dashboard Lancar Iuran sepenuhnya mobile-friendly dan bisa diakses dari HP, tablet, maupun laptop. Kelola pembayaran siswa di mana saja dan kapan saja.",
    value: "item-2",
  },
  {
    question: "Apakah reminder benar-benar dikirim otomatis?",
    answer:
      "Ya, 100% otomatis! Setelah kamu mengatur jadwal dan data siswa, sistem akan mengirim reminder sesuai tanggal yang kamu tentukan — tanpa kamu perlu melakukan apapun. Sistem aktif 24 jam, 7 hari seminggu.",
    value: "item-3",
  },
  {
    question: "Apakah data siswa dan pembayaran aman?",
    answer:
      "Keamanan data adalah prioritas utama kami. Data kamu tersimpan dengan enkripsi dan tidak pernah dibagikan ke pihak ketiga. Kami juga rutin melakukan backup agar data tidak hilang.",
    value: "item-4",
  },
  {
    question: "Apakah bisa coba dulu sebelum bayar?",
    answer:
      "Bisa banget! Kami menyediakan paket Trial Gratis selama 2 bulan dengan akses ke semua fitur dasar, tanpa perlu kartu kredit atau komitmen apapun. Cukup daftar dan langsung coba!",
    value: "item-5",
  },
  {
  question: "Apakah harus menggunakan WhatsApp Business?",
  answer:
    "Tidak harus. Anda bisa menggunakan WhatsApp Business resmi (Meta) maupun WhatsApp biasa. Sistem kami mendukung keduanya sehingga lebih fleksibel sesuai kebutuhan Anda.",
  value: "item-6",
  },
  {
    question: "Apakah nomor WhatsApp bisa terkena banned?",
    answer:
      "Risiko banned sangat kecil selama penggunaan sesuai aturan. Sistem kami menggunakan teknologi pengiriman yang dirancang menyerupai aktivitas manusia agar lebih aman dan natural.",
    value: "item-7",
  }
];

export const FAQ = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Header */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Pertanyaan yang{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-400 text-transparent bg-clip-text">
              Sering Ditanyakan
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Masih ada yang belum jelas? Kami siap membantu kamu menemukan jawaban terbaik.
          </p>
          <a
            href="https://wa.me/6282299459702"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/30"
          >
            <MessageCircle className="w-4 h-4" />
            Tanya via WhatsApp
          </a>
        </motion.div>

        {/* Right: Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {FAQList.map(({ question, answer, value }) => (
              <AccordionItem
                key={value}
                value={value}
                className="border border-border rounded-xl px-4 data-[state=open]:border-primary/40 data-[state=open]:bg-primary/5 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline py-4">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
