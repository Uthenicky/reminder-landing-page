import { motion } from "framer-motion";
import { Wrench, Users, BellRing, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Manajemen Layanan",
    description: "Kelola data layanan dengan mudah agar calon pelanggan bisa bertanya dengan lancar.",
    icon: <Wrench className="w-5 h-5 text-primary" />
  },
  {
    title: "Import Pelanggan",
    description: "Tarik data pelanggan dari Excel/CSV langsung ke dalam sistem secara instan.",
    icon: <Users className="w-5 h-5 text-primary" />
  },
  {
    title: "Tangkap Calon Pelanggan",
    description: "AI dengan cerdas dapat menentukan calon pelanggan yang serius atau tidak, lalu mencatatnya di dashboard.",
    icon: <Bot className="w-5 h-5 text-primary" />
  },
  {
    title: "Reminder Otomatis",
    description: "Pengingat otomatis H-7 hingga Hari-H agar pelanggan tidak tertinggal info penting.",
    icon: <BellRing className="w-5 h-5 text-primary" />
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
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Jasa & Service
          </Badge>
          <h3 className="text-3xl font-bold">Tingkatkan Pelayanan Jasa Anda</h3>
          <p className="text-muted-foreground leading-relaxed">
            Berikan pelayanan bintang lima kepada pelanggan Anda. Dari info promosi, layanan pelanggan, customer support hingga penjadwalan layanan semuanya bisa diurus otomatis oleh sistem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
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
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-primary/5 rounded-3xl blur-3xl -z-10 opacity-70"></div>
        <Card className="border-0 shadow-2xl shadow-primary/5 bg-white/80 backdrop-blur-xl overflow-hidden">
          <div className="bg-primary px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-primary">
              PB
            </div>
            <div className="text-white">
              <div className="font-semibold text-sm">Pelanggan Baru (Aruna)</div>
              <div className="text-xs opacity-80">Online</div>
            </div>
          </div>
          <CardContent className="p-4 space-y-4 bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')] bg-contain dark:bg-zinc-900 dark:bg-none">
            <div className="flex gap-2 justify-end mt-4">
              <div className="bg-primary/10 dark:bg-primary/5 p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%] text-sm">
                halo, mau pesan jasa service AC untuk besok bisa?
                <div className="text-[10px] text-right text-primary/70 mt-2">14:00 ✓✓</div>
              </div>
            </div>
            <div className="flex gap-2 mb-2">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm border-l-4 border-primary">
                <span className="font-semibold text-primary">AI Assistant 🤖</span>
                <br /><br />
                Halo! Tentu bisa, Kak. Untuk jadwal besok kami memiliki slot kosong pada pukul 10:00 dan 14:00. Kakak mau pilih jam berapa?
                <div className="text-[10px] text-right text-primary/70 mt-2">14:02 ✓✓</div>
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <div className="bg-primary/10 dark:bg-primary/5 p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%] text-sm">
                jam 10 pagi aja ya
                <div className="text-[10px] text-right text-primary/70 mt-2">14:05 ✓✓</div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm border-l-4 border-primary">
                <span className="font-semibold text-primary">Penjadwalan Otomatis 🤖</span>
                <br /><br />
                Baik, pesanan service AC untuk besok pukul 10:00 sudah kami jadwalkan. Teknisi kami akan menghubungi Kakak sebelum menuju ke lokasi. Terima kasih!
                <div className="text-[10px] text-right text-muted-foreground mt-2">14:07</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
