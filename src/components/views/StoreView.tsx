import { motion } from "framer-motion";
import { ShoppingBag, PackageSearch, Truck, MessageSquareQuote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Manajemen Produk & Stok",
    description: "Kelola produk Anda, stok akan otomatis berkurang setiap ada pesanan masuk.",
    icon: <ShoppingBag className="w-5 h-5 text-orange-500" />
  },
  {
    title: "Update Status Pesanan",
    description: "Ubah status dari Pending, Processing, Shipped, hingga Delivered dalam satu klik.",
    icon: <PackageSearch className="w-5 h-5 text-orange-500" />
  },
  {
    title: "Notifikasi Resi Otomatis",
    description: "Sistem otomatis mengirimkan nomor resi kurir saat status pesanan dikirim (Shipped).",
    icon: <Truck className="w-5 h-5 text-orange-500" />
  },
  {
    title: "Review Otomatis",
    description: "Follow-up pelanggan otomatis untuk meminta ulasan setelah barang diterima (Delivered).",
    icon: <MessageSquareQuote className="w-5 h-5 text-orange-500" />
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
          <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
            Retail & Toko Online
          </Badge>
          <h3 className="text-3xl font-bold">Otomatiskan Toko Online Anda</h3>
          <p className="text-muted-foreground leading-relaxed">
            Fokus pada penjualan, biarkan sistem kami yang memberikan update pesanan kepada pelanggan
            Anda secara real-time via WhatsApp. Dari diproses hingga dikirim beserta nomor resi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
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
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-amber-50 rounded-3xl blur-3xl -z-10 opacity-70"></div>
        <Card className="border-0 shadow-2xl shadow-orange-900/5 bg-white/80 backdrop-blur-xl overflow-hidden">
          <div className="bg-orange-500 px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-orange-500">
              PL
            </div>
            <div className="text-white">
              <div className="font-semibold text-sm">Pelanggan (Andi)</div>
              <div className="text-xs opacity-80">Online</div>
            </div>
          </div>
          <CardContent className="p-4 space-y-4 bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')] bg-contain dark:bg-zinc-900 dark:bg-none">
            <div className="flex gap-2 mb-2">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm">
                <span className="font-semibold text-orange-500">Pesanan Diproses 📦</span>
                <br /><br />
                Halo <strong>Andi</strong>, pesanan Anda dengan nomor <strong>#ORD-1029</strong> sedang kami proses.
                <br /><br />
                Produk: 1x Sepatu Sneakers Hitam
                <br />
                Total: Rp 350.000
                <br /><br />
                Kami akan mengabari Anda lagi setelah pesanan dikirim.
                <div className="text-[10px] text-right text-muted-foreground mt-2">15:30</div>
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <div className="bg-orange-100 dark:bg-orange-900/40 p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%] text-sm">
                Siapp, ditunggu ya kak barangnya.
                <div className="text-[10px] text-right text-orange-600/70 mt-2">15:35 ✓✓</div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm border-l-4 border-orange-500">
                <span className="font-semibold text-orange-500">Pesanan Dikirim 🚚</span>
                <br /><br />
                Yeay! Pesanan Anda telah diserahkan ke kurir (JNE).
                <br /><br />
                Nomor Resi: <strong>JB1928374655</strong>
                <br /><br />
                Silakan lacak pesanan Anda secara berkala. Terima kasih telah berbelanja di toko kami!
                <div className="text-[10px] text-right text-muted-foreground mt-2">18:00</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
