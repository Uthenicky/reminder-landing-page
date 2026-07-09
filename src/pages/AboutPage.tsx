import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import aboutImg from "../assets/arif-riyanto-G1N9kDHqBrQ-unsplash.jpg";

export const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="container py-24 sm:py-32 space-y-20 min-h-screen">
        <motion.section 
          id="tentang-kami" 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-sm">
              Tentang Kreator
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">Tentang Kami</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kami adalah seorang Software Engineer profesional <em>freelance</em> yang saat ini berfokus mengembangkan berbagai produk SaaS (Software as a Service) inovatif. Salah satu produk unggulan yang sedang kami bangun adalah platform otomasi kualifikasi <em>leads</em> (calon pelanggan) berbasis WhatsApp AI Chatbot yang dirancang khusus untuk mempermudah operasional dan perkembangan bisnis Anda.
            </p>
          </div>
          <motion.div 
            className="rounded-3xl overflow-hidden shadow-2xl relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 transition-colors duration-300 hover:bg-transparent" />
            <img 
              src={aboutImg} 
              alt="Workspace and development" 
              className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>
        </motion.section>

        <motion.section 
          id="kebijakan-privasi" 
          className="space-y-6 pt-10 border-t"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Kebijakan Privasi</h2>
          <ul className="list-disc list-outside ml-6 space-y-4 text-muted-foreground text-lg max-w-4xl">
            <li><strong>Keamanan Data:</strong> Seluruh data calon pembeli atau pelanggan Anda dijamin aman dan kerahasiaannya terjaga secara privat.</li>
            <li><strong>Dukungan WhatsApp Unofficial:</strong> Platform ini dapat digunakan dan kompatibel dengan WhatsApp tipe <em>unofficial</em>.</li>
            <li><strong>Masa Uji Coba (Trial):</strong> Fitur coba gratis hanya berlaku selama 1 bulan dan ditujukan khusus untuk keperluan pengujian sistem (<em>testing</em>).</li>
            <li><strong>Risiko Pemblokiran Nomor:</strong> Pengguna sangat menyadari dan memahami bahwa nomor WhatsApp berpotensi diblokir sewaktu-waktu oleh pihak WhatsApp jika terindikasi melanggar kebijakan dari WhatsApp.</li>
            <li><strong>Pembatalan Layanan:</strong> Layanan dapat dibatalkan atau diberhentikan apabila pengguna terbukti tidak mengikuti syarat dan aturan yang telah ditetapkan.</li>
          </ul>
        </motion.section>

        <motion.section 
          id="syarat-layanan" 
          className="space-y-6 pt-10 border-t"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Syarat Layanan</h2>
          <ul className="list-disc list-outside ml-6 space-y-4 text-muted-foreground text-lg max-w-4xl">
            <li><strong>Ketentuan Nomor Telepon:</strong> Sangat direkomendasikan untuk menggunakan nomor pribadi aktif yang sudah memiliki riwayat kontak atau telah digunakan lebih dari 3 bulan demi meminimalisir risiko pemblokiran.</li>
            <li><strong>Perangkat Khusus:</strong> Pengguna wajib (atau disarankan) untuk memiliki perangkat <em>handphone</em> khusus yang <em>standby</em> untuk nomor chatbot ini, atau minimal menggunakan HP dengan slot 2 SIM.</li>
            <li><strong>Alamat Email:</strong> Wajib memiliki dan mendaftarkan alamat email yang aktif sebagai sarana komunikasi dan pemberitahuan layanan.</li>
          </ul>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};
