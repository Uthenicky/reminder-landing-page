import { MessageCircle, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  Produk: [
    { label: "Fitur", href: "#features" },
    { label: "Cara Kerja", href: "#how-it-works" },
    { label: "Harga", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Pengguna: [
    { label: "Guru Privat", href: "#" },
    { label: "Tempat Les", href: "#" },
    { label: "Daycare", href: "#" },
    { label: "Bimbel", href: "#" },
    { label: "Sekolah", href: "#" },
  ],
  Perusahaan: [
    { label: "Tentang Kami", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Kontak", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat Layanan", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer id="footer" className="border-t bg-muted/30">
      {/* WhatsApp CTA Banner */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">Siap membuat cashflow lebih lancar?</p>
            <p className="text-muted-foreground text-sm">
              Bergabunglah dengan 500+ lembaga yang sudah memakai Lancar Iuran.
            </p>
          </div>
          <a
            href="https://wa.me/6282299459702"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-primary/30 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Coba Gratis via WhatsApp
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
              Lancar<span className="text-primary"> Iuran</span>
            </span>
          </a>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
            Platform WhatsApp Automation untuk membantu lembaga pendidikan
            mengelola iuran dan tagihan secara otomatis.
          </p>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram Lancar Iuran"
              className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/6282299459702"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp Lancar Iuran"
              className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="YouTube Lancar Iuran"
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
            href="https://utheai.my.id"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline font-medium"
          >
            Lancar Iuran
          </a>{" "}
          · utheai.my.id · Hak cipta dilindungi.
        </p>
        <p className="text-xs text-muted-foreground">
          Dibuat dengan ❤️ untuk pendidikan Indonesia
        </p>
      </section>
    </footer>
  );
};
