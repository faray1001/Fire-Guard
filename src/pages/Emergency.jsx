import { Phone, TriangleAlert } from 'lucide-react'
import { Button, Page } from '../components/ui.jsx'
import { config } from '../data/site.js'
import useDocTitle from '../hooks/useDocTitle.js'
export default function Emergency() {
  useDocTitle('Informasi darurat')
  const n = config.emergencyNumber
  return (<Page narrow>
    <h1 className="text-3xl font-extrabold tracking-tight sm:text-[44px]">Dalam keadaan darurat</h1>
    <p className="mt-3 text-lg text-muted">Hubungi petugas lewat telepon. Selamatkan diri lebih dulu, baru menelepon dari tempat aman.</p>
    <div className="mt-8 rounded-2xl border-2 border-fire bg-white p-6">
      {n ? <><p className="text-sm font-semibold text-muted">Nomor darurat resmi</p><p className="mt-1 text-4xl font-extrabold">{n}</p>
        <div className="mt-5"><Button href={`tel:${n}`}><Phone size={18} aria-hidden="true" />Telepon sekarang</Button></div></> :
        <><p className="font-bold">Nomor resmi belum dikonfigurasi.</p><p className="mt-1 text-muted">Ini situs contoh. Isi VITE_EMERGENCY_NUMBER pada file .env setelah nomor diverifikasi. Selama kosong, tombol telepon dinonaktifkan.</p>
          <div className="mt-5"><Button disabled><Phone size={18} aria-hidden="true" />Telepon (belum tersedia)</Button></div></>}
    </div>
    <h2 className="mt-10 text-2xl font-bold">Informasi yang perlu Anda sampaikan</h2>
    <ol className="mt-3 list-decimal space-y-2 pl-5 text-lg">
      <li>Alamat lengkap dan patokan terdekat</li><li>Jenis kejadian (kebakaran, asap, korban terjebak)</li><li>Jumlah dan kondisi korban, bila ada</li><li>Nama dan nomor telepon yang bisa dihubungi</li>
    </ol>
    <div className="mt-10 flex gap-3 rounded-xl bg-navy p-5 text-white" role="note"><TriangleAlert className="mt-1 shrink-0 text-champagne" aria-hidden="true" />
      <p>Situs ini tidak memiliki formulir laporan darurat dan tidak mengirim laporan ke petugas. Jangan mengandalkan pesan daring untuk keadaan darurat.</p></div>
  </Page>)
}
