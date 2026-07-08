import { motion } from "framer-motion";
import { CheckCircle2, FileSpreadsheet, Send, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Manajemen Data Siswa",
    description: "Kelola data siswa beserta kontak WhatsApp ibu dan ayah dengan mudah.",
    icon: <Users className="w-5 h-5 text-emerald-500" />
  },
  {
    title: "Import Excel & CSV",
    description: "Upload data siswa dan tagihan sekaligus. Nomor HP otomatis ternormalisasi ke +62.",
    icon: <FileSpreadsheet className="w-5 h-5 text-emerald-500" />
  },
  {
    title: "Reminder Berjadwal",
    description: "Kirim pengingat otomatis H-7, H-3, H-1, dan Hari-H jatuh tempo.",
    icon: <Send className="w-5 h-5 text-emerald-500" />
  },
  {
    title: "Bukti Pembayaran Otomatis",
    description: "Kirim bukti bayar PDF via WA seketika saat status tagihan berubah menjadi paid.",
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />
  }
];

export const EducationView = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-emerald-200">
            Sekolah & Bimbel
          </Badge>
          <h3 className="text-3xl font-bold">Otomatisasi Tagihan SPP & Iuran</h3>
          <p className="text-muted-foreground leading-relaxed">
            Tidak perlu lagi menagih satu per satu secara manual. Sistem kami yang akan
            melakukan follow-up pembayaran kepada orang tua siswa sesuai jadwal yang Anda tentukan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-foreground">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-3xl blur-3xl -z-10 opacity-70"></div>
        <Card className="border-0 shadow-2xl shadow-emerald-900/5 bg-white/80 backdrop-blur-xl overflow-hidden">
          <div className="bg-emerald-600 px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-emerald-600">
              SM
            </div>
            <div className="text-white">
              <div className="font-semibold text-sm">Orang Tua Siswa (Budi)</div>
              <div className="text-xs opacity-80">Online</div>
            </div>
          </div>
          <CardContent className="p-4 space-y-4 bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')] bg-contain dark:bg-zinc-900 dark:bg-none">
            <div className="flex gap-2 mb-2">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm">
                <span className="font-semibold text-emerald-600">Reminder Tagihan SPP</span>
                <br /><br />
                Halo Bapak/Ibu Wali dari <strong>Budi Santoso</strong>,
                <br /><br />
                Kami menginformasikan bahwa tagihan SPP bulan <strong>Mei 2026</strong> sebesar <strong>Rp 500.000</strong> akan jatuh tempo dalam 3 hari (10 Mei 2026).
                <br /><br />
                Abaikan pesan ini jika sudah melakukan pembayaran. Terima kasih. 🙏
                <div className="text-[10px] text-right text-muted-foreground mt-2">10:00</div>
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%] text-sm">
                Baik, sudah saya transfer barusan ya ke rekening sekolah.
                <div className="text-[10px] text-right text-emerald-600/70 mt-2">10:15 ✓✓</div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm border-l-4 border-emerald-500">
                <span className="font-semibold text-emerald-600">✅ Pembayaran Berhasil</span>
                <br /><br />
                Terima kasih, pembayaran sebesar <strong>Rp 500.000</strong> untuk ananda Budi Santoso telah kami terima.
                <br /><br />
                📄 <i>Bukti_Kwitansi_Mei.pdf</i>
                <div className="text-[10px] text-right text-muted-foreground mt-2">10:20</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
