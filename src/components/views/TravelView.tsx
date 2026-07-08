import { motion } from "framer-motion";
import { Plane, CalendarCheck, FileSpreadsheet, BellRing } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Manajemen Booking & Paket",
    description: "Kelola data pelanggan dan buat paket wisata atau umroh dengan mudah.",
    icon: <Plane className="w-5 h-5 text-sky-500" />
  },
  {
    title: "Import Pelanggan",
    description: "Tarik data pelanggan dari Excel/CSV langsung ke dalam sistem secara instan.",
    icon: <FileSpreadsheet className="w-5 h-5 text-sky-500" />
  },
  {
    title: "Konfirmasi Otomatis",
    description: "Kirim detail itinerary otomatis saat status booking diubah menjadi Confirmed.",
    icon: <CalendarCheck className="w-5 h-5 text-sky-500" />
  },
  {
    title: "Reminder Keberangkatan",
    description: "Pengingat otomatis H-7 hingga Hari-H agar peserta tidak tertinggal info penting.",
    icon: <BellRing className="w-5 h-5 text-sky-500" />
  }
];

export const TravelView = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <Badge variant="secondary" className="bg-sky-100 text-sky-700 border-sky-200">
            Tour & Travel
          </Badge>
          <h3 className="text-3xl font-bold">Tingkatkan Pengalaman Peserta Tour</h3>
          <p className="text-muted-foreground leading-relaxed">
            Berikan pelayanan bintang lima kepada pelanggan Anda. Dari konfirmasi booking hingga
            pengingat barang bawaan sebelum keberangkatan, semua diurus otomatis oleh sistem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
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
        <div className="absolute inset-0 bg-gradient-to-bl from-sky-100 to-blue-50 rounded-3xl blur-3xl -z-10 opacity-70"></div>
        <Card className="border-0 shadow-2xl shadow-sky-900/5 bg-white/80 backdrop-blur-xl overflow-hidden">
          <div className="bg-sky-600 px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-sky-600">
              TR
            </div>
            <div className="text-white">
              <div className="font-semibold text-sm">Peserta Tour (Siti)</div>
              <div className="text-xs opacity-80">Online</div>
            </div>
          </div>
          <CardContent className="p-4 space-y-4 bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')] bg-contain dark:bg-zinc-900 dark:bg-none">
            <div className="flex gap-2 mb-2">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm border-l-4 border-sky-500">
                <span className="font-semibold text-sky-600">Konfirmasi Booking ✈️</span>
                <br /><br />
                Halo <strong>Siti Nurhaliza</strong>,
                <br /><br />
                Booking Anda untuk paket <strong>Eksplor Turki 7 Hari</strong> telah berhasil dikonfirmasi. Berikut adalah detail booking Anda:
                <br /><br />
                Kode: <strong>#TRK-8891</strong><br />
                Tanggal: <strong>15 Agustus 2026</strong>
                <br /><br />
                Terima kasih telah mempercayakan perjalanan Anda bersama kami!
                <div className="text-[10px] text-right text-muted-foreground mt-2">14:00</div>
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <div className="bg-sky-100 dark:bg-sky-900/40 p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%] text-sm">
                Terima kasih min, untuk itinerary lengkapnya kapan dikirim ya?
                <div className="text-[10px] text-right text-sky-600/70 mt-2">14:05 ✓✓</div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm">
                <span className="font-semibold text-sky-600">Reminder Keberangkatan 🔔</span>
                <br /><br />
                Halo Ibu Siti, pengingat bahwa keberangkatan Anda sisa <strong>3 Hari lagi</strong>!
                <br /><br />
                📄 <i>Itinerary_Turki.pdf</i>
                <br /><br />
                Mohon jangan lupa membawa Paspor dan dokumen terkait ya. Sampai jumpa di bandara!
                <div className="text-[10px] text-right text-muted-foreground mt-2">09:00</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
