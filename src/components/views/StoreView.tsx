import { motion } from "framer-motion";
import { ShoppingBag, FileSpreadsheet, Megaphone, MessageSquareQuote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Manajemen Produk & Stok",
    description: "Kelola produk Anda dan stok yang tersedia.",
    icon: <ShoppingBag className="w-5 h-5 text-primary" />
  },
  {
    title: "Import Excel & CSV",
    description: "Upload data produk secara masal.",
    icon: <FileSpreadsheet className="w-5 h-5 text-primary" />
  },
  {
    title: "Info Promosi",
    description: "Sistem otomatis mengirimkan pesan terjadwal seputar promosi dan produk terbaru.",
    icon: <Megaphone className="w-5 h-5 text-primary" />
  },
  {
    title: "Tangkap Calon Pembeli",
    description: "Follow-up pelanggan otomatis untuk meminta ulasan setelah barang diterima (Delivered).",
    icon: <MessageSquareQuote className="w-5 h-5 text-primary" />
  }
];

export const StoreView = () => {
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
            Retail & Toko Online
          </Badge>
          <h3 className="text-3xl font-bold">Otomatiskan Toko Online Anda</h3>
          <p className="text-muted-foreground leading-relaxed">
            Fokus pada penjualan, biarkan sistem kami yang memberikan update pesanan kepada pelanggan dan info seputar produk-produk Anda.
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
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl blur-3xl -z-10 opacity-70"></div>
        <Card className="border-0 shadow-2xl shadow-primary/5 bg-white/80 backdrop-blur-xl overflow-hidden">
          <div className="bg-primary px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-primary">
              PB
            </div>
            <div className="text-white">
              <div className="font-semibold text-sm">Pelanggan Baru (Afthar)</div>
              <div className="text-xs opacity-80">Online</div>
            </div>
          </div>
          <CardContent className="p-4 space-y-4 bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')] bg-contain dark:bg-zinc-900 dark:bg-none">
            <div className="flex gap-2 mb-2">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm">
                <span className="font-semibold text-primary">Salam Otomatis  🤖</span>
                <br /><br />
                Halo! Selamat datang di <strong>Sahabat PLTS</strong> 😊 Ada yang bisa kami bantu? Silakan sampaikan pertanyaan Anda.
                <div className="text-[10px] text-right text-muted-foreground mt-2">15:30</div>
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <div className="bg-primary/10 dark:bg-primary/5 p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%] text-sm">
                saya lihat2 katalog dulu
                <div className="text-[10px] text-right text-primary/70 mt-2">15:35 ✓✓</div>
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <div className="bg-primary/10 dark:bg-primary/5 p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%] text-sm">
                saya tertarik dengan paket 2 kk, bisa jelaskan sedikit
                <div className="text-[10px] text-right text-primary/70 mt-2">15:38 ✓✓</div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm border-l-4 border-primary">
                <span className="font-semibold text-primary">AI Mengkualifikasi Calon Pelanggan  🤖</span>
                <br /><br />
                Tentu, Kak! Paket 2 ini termasuk pemasangan sistem PLTS dengan kapasitas 3 kWp yang cocok untuk kebutuhan rumah tangga menengah. Paket ini sudah termasuk panel surya, inverter, dan instalasi lengkap. Apakah ada informasi lain yang ingin Kakak ketahui mengenai paket ini?
                <div className="text-[10px] text-right text-muted-foreground mt-2">15:40</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
