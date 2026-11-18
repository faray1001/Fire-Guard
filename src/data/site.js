export const config = {
  emergencyNumber: import.meta.env.VITE_EMERGENCY_NUMBER || '',
  address: import.meta.env.VITE_OFFICE_ADDRESS || '',
  mapUrl: import.meta.env.VITE_OFFICE_MAP_URL || '',
}
export const nav = [
  { to: '/', label: 'Beranda' }, { to: '/tentang', label: 'Tentang' }, { to: '/layanan', label: 'Layanan' },
  { to: '/edukasi', label: 'Edukasi Keselamatan' }, { to: '/berita', label: 'Berita' }, { to: '/kontak', label: 'Kontak' },
]
export const services = [
  { id: 'pemadaman', icon: 'Flame', title: 'Pemadaman kebakaran', short: 'Penanganan kebakaran bangunan, kendaraan, dan lahan.', who: 'Warga, pemilik usaha, dan instansi di wilayah layanan.', how: 'Hubungi nomor darurat resmi. Layanan ini tidak melalui formulir daring.' },
  { id: 'penyelamatan', icon: 'LifeBuoy', title: 'Penyelamatan dan evakuasi', short: 'Evakuasi korban, penyelamatan hewan, dan bantuan non-kebakaran.', who: 'Siapa pun yang terjebak atau membutuhkan evakuasi.', how: 'Hubungi nomor darurat resmi, lalu sebutkan lokasi dan kondisi korban.' },
  { id: 'edukasi', icon: 'GraduationCap', title: 'Edukasi pencegahan', short: 'Penyuluhan dan simulasi untuk sekolah, kantor, dan lingkungan warga.', who: 'Sekolah, perusahaan, RT/RW, dan komunitas.', how: 'Ajukan lewat kontak resmi kantor (belum dikonfigurasi pada situs contoh).' },
  { id: 'inspeksi', icon: 'ClipboardCheck', title: 'Inspeksi dan konsultasi', short: 'Pemeriksaan kesiapan proteksi kebakaran pada bangunan.', who: 'Pengelola gedung, pemilik usaha, dan penyelenggara acara.', how: 'Ajukan lewat kontak resmi kantor (belum dikonfigurasi pada situs contoh).' },
]
export const articles = [
  { slug: 'cegah-korsleting', category: 'Rumah', title: 'Lima kebiasaan yang mencegah kebakaran akibat listrik', excerpt: 'Korsleting sering berawal dari kabel yang dipaksa menanggung beban terlalu besar.', body: ['Jangan menumpuk banyak perangkat pada satu terminal kabel. Periksa kabel yang terkelupas atau terasa panas.', 'Cabut pengisi daya dari stopkontak setelah selesai dipakai, dan jangan mengisi daya di atas kasur atau sofa.', 'Gunakan kabel dan stopkontak yang berstandar, dan panggil teknisi listrik bila MCB sering turun.'] },
  { slug: 'tabung-gas', category: 'Rumah', title: 'Memeriksa kebocoran tabung gas sebelum memasak', excerpt: 'Cara sederhana mengenali kebocoran dan langkah aman bila gas tercium.', body: ['Pasang tabung di area berventilasi dan periksa selang serta regulator secara berkala.', 'Bila tercium gas: matikan kompor, tutup katup tabung, buka pintu dan jendela. Jangan menyalakan sakelar listrik atau api.', 'Ganti selang dan regulator yang retak atau getas.'] },
  { slug: 'rencana-evakuasi', category: 'Kesiapsiagaan', title: 'Menyusun rencana evakuasi keluarga', excerpt: 'Tentukan dua jalur keluar dan titik kumpul sebelum keadaan darurat terjadi.', body: ['Gambar denah rumah dan tandai dua jalur keluar dari setiap ruangan.', 'Tentukan titik kumpul di luar rumah dan pastikan semua anggota keluarga hafal.', 'Latih rencana ini secara berkala, termasuk merunduk dan merayap di bawah asap.'] },
  { slug: 'apar-kantor', category: 'Tempat kerja', title: 'Menggunakan alat pemadam api ringan (APAR) di tempat kerja', excerpt: 'Kenali jenis APAR dan prinsip dasar penggunaannya.', body: ['Pastikan APAR mudah dijangkau, tidak terhalang, dan masa berlakunya masih baik.', 'Ingat prinsip PASS: tarik pin, arahkan nosel ke pangkal api, tekan tuas, sapukan dari sisi ke sisi.', 'Bila api membesar atau Anda ragu, tinggalkan area dan hubungi nomor darurat.'] },
]
export const news = [
  { slug: 'simulasi-sekolah', category: 'Kegiatan', date: '2026-10-02', title: 'Contoh: simulasi evakuasi kebakaran di sekolah dasar', excerpt: 'Berita contoh untuk menunjukkan tata letak kartu berita.', body: ['Ini adalah konten contoh dan bukan berita resmi. Ganti dengan pengumuman nyata dari instansi.'] },
  { slug: 'jam-layanan', category: 'Pengumuman', date: '2026-09-18', title: 'Contoh: pembaruan informasi jam layanan kantor', excerpt: 'Pengumuman contoh. Jam layanan nyata belum diverifikasi.', body: ['Konten contoh. Jam layanan resmi harus diisi oleh pengelola situs.'] },
  { slug: 'musim-kemarau', category: 'Imbauan', date: '2026-09-05', title: 'Contoh: imbauan kewaspadaan kebakaran lahan saat musim kemarau', excerpt: 'Imbauan contoh tentang tidak membakar sampah sembarangan.', body: ['Konten contoh. Jangan membuang puntung rokok sembarangan dan jangan membakar sampah di lahan kering.'] },
]
export const fmtDate = (d) => new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
