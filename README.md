# Wira Bintang — Portfolio (Next.js)

Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · Framer Motion

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Struktur

```
app/            layout.tsx (font + provider), page.tsx (susunan halaman), globals.css
components/     Header, Hero, Marquee, SelectedWork, ProjectCard, About, Portrait,
                Experience, Contact, Footer + util animasi (Reveal, SplitText, Providers)
lib/data.ts     SEMUA isi konten (teks, proyek, pengalaman, link) — edit di sini
lib/motion.ts   easing, pengaturan viewport, dan variants bersama
```

## Animasi

| Bagian | Efek |
| --- | --- |
| Header | Sembunyi saat scroll turun, muncul saat scroll naik; garis progres scroll; garis bawah menu aktif berpindah halus; menu mobile (hamburger) |
| Hero | Judul muncul kata demi kata dari balik masker; garis eyebrow tergambar; panah bergerak pelan; parallax + memudar saat scroll |
| Marquee | Pita disiplin berjalan pelan, berhenti saat di-hover (CSS murni) |
| Selected Work | Kartu naik berurutan; gambar "mengendap" dari zoom; tag muncul bergiliran; hover: zoom gambar + judul berubah warna |
| About | Foto terbuka dari bawah (clip-path) + parallax; paragraf & daftar disiplin muncul bergiliran; foto berwarna saat di-hover |
| Experience | Garis pemisah tergambar kiri→kanan; baris muncul bergiliran; hover: baris bergeser |
| Contact | Judul kata demi kata; garis bawah email tergambar; panah sosial bergerak saat hover |

Semua animasi otomatis dimatikan jika pengunjung mengaktifkan **Reduce motion** di sistem operasinya
(`MotionConfig reducedMotion="user"` + `motion-reduce` pada marquee).

## Catatan

- Font memakai paket `@fontsource-variable` (Inter, Newsreader) sehingga build tidak butuh akses ke Google Fonts.
- Gambar proyek & foto masih mengarah ke URL `lh3.googleusercontent.com` hasil Google Stitch.
  URL itu bisa kedaluwarsa — ganti dengan file milikmu di `public/` (mis. `/images/aura.jpg`)
  lewat `lib/data.ts`. Domain Google sudah diizinkan di `next.config.mjs`; untuk gambar lokal tidak perlu konfigurasi tambahan.
