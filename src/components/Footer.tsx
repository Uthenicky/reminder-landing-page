import { MessageCircle, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  Produk: [
    { label: "Fitur", href: "/#features" },
    { label: "Cara Kerja", href: "/#how-it-works" },
    { label: "Harga", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ],
  Pengguna: [
    { label: "Sekolah", href: "/#" },
    { label: "Guru Privat & Les", href: "/#" },
    { label: "Jasa & Service", href: "/#" },
    { label: "Toko Online", href: "/#" },
    { label: "UMKM", href: "/#" },
  ],
  Perusahaan: [
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Kontak", href: "https://wa.me/6282299459702" },
    { label: "Kebijakan Privasi", href: "/tentang-kami#kebijakan-privasi" },
    { label: "Syarat Layanan", href: "/tentang-kami#syarat-layanan" },
  ],
};

export const Footer = () => {
  return (
    <footer id="footer" className="border-t bg-muted/30">
      {/* WhatsApp CTA Banner */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">Bangun Pelayanan Pelanggan yang Lebih Cepat dengan AI WhatsApp</p>
            <p className="text-muted-foreground text-sm mt-1 max-w-lg">
              Otomatiskan balasan chat, kelola calon pelanggan, kirim reminder, dan tingkatkan produktivitas bisnis Anda.
            </p>
          </div>
          <a
            href="https://wa.me/6282299459702"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/30 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Mulai Gratis
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <section className="container py-16 grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-2">
          <a
            href="/"
            className="font-bold text-xl flex items-center gap-2 mb-4"
          >
            <div className="bg-primary rounded-lg p-1.5">
              <MessageCircle className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
            </div>
            <span>
              Balesin
            </span>
          </a>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
            AI WhatsApp Chatbot yang membantu bisnis melayani pelanggan 24 jam dengan cerdas dan otomatis.
          </p>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram Balesin"
              className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/6282299459702"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp Balesin"
              className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="YouTube Balesin"
              className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="flex flex-col gap-3">
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground/70">
              {category}
            </h3>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                rel="noreferrer noopener"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </section>

      {/* Bottom bar */}
      <section className="container border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © 2026{" "}
          <a
            href="https://lancarbales.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline font-medium"
          >
            Balesin
          </a>{" "}
          · Hak cipta dilindungi.
        </p>
        <p className="text-xs text-muted-foreground">
          Dibuat dengan ❤️ untuk UMKM Indonesia
        </p>
      </section>
    </footer>
  );
};
