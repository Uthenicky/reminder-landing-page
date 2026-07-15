# Lancar Iuran — Landing Page

> Platform **WhatsApp Automation Reminder** untuk lembaga pendidikan Indonesia.
> Reminder iuran & tagihan otomatis via WhatsApp, didukung AI Admin Digital.

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
| Hero | `Hero.tsx` + `HeroCards.tsx` | Headline, badges, CTA, WhatsApp chat mockup |
| Statistik | `Statistics.tsx` | Count-up: 500+ lembaga, 10k+ siswa, 95% tepat bayar |
| Fitur | `Features.tsx` | 4 fitur utama: WA Reminder, AI Admin, Monitoring, Hemat Waktu |
| Manfaat | `Benefits.tsx` | 5 manfaat bisnis dengan icon card |
| Cara Kerja | `Services.tsx` | How It Works — 3 langkah mudah |
| Testimoni | `Testimonials.tsx` | 6 testimoni dummy dari guru, bimbel, daycare |
| Harga | `Pricing.tsx` | Trial / Starter Rp99k / Growth Rp149k / Pro Rp249k |
| FAQ | `FAQ.tsx` | 7 pertanyaan umum Bahasa Indonesia |
| Footer | `Footer.tsx` | WA CTA banner, social links, copyright © 2026 |

---

## Fitur & Highlights

- ✅ **Fully Responsive** — Mobile-first, berfungsi di HP, tablet, dan laptop
- ✅ **Dark Mode & Light Mode** — Toggle instan via Shadcn theme-provider
- ✅ **Animasi Framer Motion** — Fade-up, stagger children, float, count-up
- ✅ **SEO-ready** — Meta tags, Open Graph, Twitter Card, lang="id"
- ✅ **WhatsApp Chat Mockup** — Visual demo reminder otomatis di Hero
- ✅ **Harga Rupiah** — Format lokal `Rp 99.000 / bulan`
- ✅ **Copywriting Indonesia** — Bahasa sederhana, fokus manfaat bisnis
- ✅ **Tanpa API eksternal** — Fully static, deploy ke mana saja

---

## Struktur Project

```
src/
├── App.tsx                  # Root — susun semua section
├── App.css                  # Emerald theme & Tailwind base
├── index.css                # Scroll behavior & shadow animation
├── main.tsx                 # Entry point + ThemeProvider
├── assets/
│   ├── icon.ico             # Favicon
│   └── icon.png             # Favicon backup
├── components/
│   ├── ui/                  # Shadcn/UI primitives (Button, Card, dll)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── HeroCards.tsx        # WhatsApp chat mockup cards
│   ├── Statistics.tsx       # Count-up stats
│   ├── Features.tsx
│   ├── Benefits.tsx         # [NEW]
│   ├── Services.tsx         # How It Works
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── ScrollToTop.tsx
│   ├── mode-toggle.tsx      # Dark/light toggle
│   └── theme-provider.tsx   # Context provider tema
└── lib/
    └── utils.ts             # cn() — clsx + tailwind-merge
```

---

## Cara Menjalankan

**1. Clone repository:**
```bash
git clone <repo-url>
cd shadcn-landing-page
```

**2. Install dependencies:**
```bash
npm install
```

**3. Jalankan development server:**
```bash
npm run dev
# → http://localhost:5173
```

**4. Build untuk production:**
```bash
npm run build
```

**5. Preview hasil build:**
```bash
npm run preview
```

---

## Konfigurasi Kontak

Nomor WhatsApp aktif digunakan di beberapa komponen. Untuk mengubah nomor, cari dan ganti di file berikut:

| File | Lokasi |
|---|---|
| `Navbar.tsx` | Tombol "Coba Gratis" desktop & mobile |
| `Hero.tsx` | CTA button utama |
| `Services.tsx` | Tombol CTA bawah section |
| `FAQ.tsx` | Link "Tanya via WhatsApp" |
| `Footer.tsx` | Banner CTA + ikon sosial WA |

Format nomor: `https://wa.me/628XXXXXXXXXX` (tanpa +, tanpa 0 di depan)

---

## Lisensi

MIT License © 2026 [Lancar Iuran](https://lancarbales.com)
