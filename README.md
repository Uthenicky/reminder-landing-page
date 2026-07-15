# LancarBales — Landing Page

> Platform **WhatsApp Automation & Asisten Cerdas** untuk berbagai jenis bisnis (Toko Online, Jasa, hingga Lembaga Pendidikan).
> Otomatiskan balasan chat, kelola prospek pelanggan, dan kirim pengingat (reminder) via WhatsApp secara efisien 24 jam.

🌐 **Domain:** [lancarbales.com](https://lancarbales.com) &nbsp;|&nbsp; 👤 **Owner:** utheniky

---

## Tech Stack

| Teknologi | Versi | Peran |
|---|---|---|
| [React](https://react.dev/) | 18.3.1 | Core UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.4.5 | Static Typing |
| [Vite](https://vitejs.dev/) | 5.2.13 | Build Tool & Dev Server |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.4 | Utility-first Styling |
| [Shadcn/UI](https://ui.shadcn.com/) | latest | Component Library (Radix UI) |
| [Framer Motion](https://www.framer.com/motion/) | latest | Animasi (fade, stagger, float) |
| [Lucide React](https://lucide.dev/) | 0.424.0 | Icon Library |

---

## Sections Halaman

| Section | Komponen | Keterangan |
|---|---|---|
| Navbar | `Navbar.tsx` | Sticky, scroll-aware backdrop blur, CTA Coba Gratis |
| Hero | `Hero.tsx` + `HeroCards.tsx` | Headline berfokus pada hasil, badges, CTA, simulasi chat |
| Modul Bisnis | `BusinessModules.tsx` | Fungsionalitas tab berdasarkan niche (Pendidikan, Jasa, Toko) |
| Fitur | `Features.tsx` | 4 fitur utama: WA Reminder, Asisten Cerdas, Monitoring, Efisiensi Waktu |
| Manfaat | `Benefits.tsx` | Manfaat implementasi bisnis dengan icon card |
| Cara Kerja | `Services.tsx` | How It Works — langkah mudah penggunaan |
| Harga | `Pricing.tsx` | Paket Balas & Paket Sales dengan fitur dan kuota (messageLimit) |
| FAQ | `FAQ.tsx` | Pertanyaan umum seputar layanan |
| Footer | `Footer.tsx` | WA CTA banner, social links, menu navigasi perusahaan |

---

## Fitur & Highlights

- ✅ **Fully Responsive** — Mobile-first, optimal di HP, tablet, dan laptop
- ✅ **Dark Mode & Light Mode** — Toggle instan via Shadcn theme-provider
- ✅ **Animasi Framer Motion** — Animasi ringan (fade-up, stagger) yang sudah dipercepat agar gesit
- ✅ **SEO-ready** — Meta tags, siap di-crawl mesin pencari
- ✅ **Copywriting Outcome-Based** — Bebas jargon teknis berlebih ("AI Slop"), berfokus pada manfaat dan hasil nyata bagi bisnis.
- ✅ **Vercel Ready** — Dilengkapi dengan `vercel.json` dan `.env.example` untuk deployment mulus.

---

## Struktur Project

```
src/
├── App.tsx                  # Root — menyusun halaman
├── index.css                # Styling utama & Tailwind base
├── main.tsx                 # Entry point + ThemeProvider
├── assets/
├── components/
│   ├── ui/                  # Shadcn/UI primitives (Button, Card, dll)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── HeroCards.tsx
│   ├── BusinessModules.tsx  # Tab konten per jenis bisnis
│   ├── Features.tsx
│   ├── Benefits.tsx
│   ├── Services.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── mode-toggle.tsx
│   └── theme-provider.tsx
├── pages/
│   ├── LandingPage.tsx      # Menampung seluruh seksi beranda
│   └── AboutPage.tsx        # Halaman Tentang Kami, Kontak & Legal
└── lib/
    └── utils.ts             # cn() utility
```

---

## Cara Menjalankan (Development)

**1. Clone repository:**
```bash
git clone <repo-url>
cd shadcn-landing-page
```

**2. Install dependencies:**
```bash
npm install
```

**3. Setup Environment Variables:**
Copy `.env.example` menjadi `.env` jika diperlukan (khusus untuk `VITE_API_BASE_URL`).
```bash
cp .env.example .env
```

**4. Jalankan development server:**
```bash
npm run dev
# → http://localhost:5173
```

---

## Deployment (Vercel)

Proyek ini telah dikonfigurasi untuk **Vercel**.
1. Import repository ke Vercel Dashboard.
2. Tambahkan Environment Variable: `VITE_API_BASE_URL` sesuai API produksi.
3. Aturan *routing* SPA telah dikelola otomatis oleh `vercel.json`.
4. Deploy!

---

## Lisensi

MIT License © 2026 [LancarBales](https://lancarbales.com)
