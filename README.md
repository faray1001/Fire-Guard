# FireGuard (situs contoh layanan pemadam kebakaran)
React 18 + Vite 6 + Tailwind CSS v4 (via `@tailwindcss/vite`, tanpa `tailwind.config.js` dan `postcss`) + React Router 6 + lucide-react.

## Menjalankan
    npm install
    cp .env.example .env   # isi nomor/alamat resmi setelah diverifikasi
    npm run dev            # pengembangan
    npm run build && npm run preview

## Konfigurasi
`VITE_EMERGENCY_NUMBER`, `VITE_OFFICE_ADDRESS`, `VITE_OFFICE_MAP_URL`. Bila kosong, tombol telepon nonaktif dan ditandai belum dikonfigurasi.

## Deploy (Netlify/Vercel)
Build command `npm run build`, output `dist`. Tambahkan rewrite SPA: Netlify `public/_redirects` berisi `/* /index.html 200`; Vercel `vercel.json` dengan rewrite `/(.*)` ke `/index.html`.

## Daftar uji manual
- [ ] Semua tautan navbar, footer, dan kartu berpindah halaman
- [ ] Menu seluler terbuka/tutup dan bisa dipakai dengan keyboard
- [ ] Filter dan pencarian bekerja; keadaan kosong muncul
- [ ] Tombol telepon nonaktif saat .env kosong, aktif (`tel:`) saat terisi
- [ ] Tidak ada gulir horizontal di lebar 320px
- [ ] Fokus keyboard terlihat; kontras teks memadai
- [ ] URL tidak dikenal menampilkan halaman 404
