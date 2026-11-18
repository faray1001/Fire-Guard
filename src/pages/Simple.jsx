import { Link, useParams } from 'react-router-dom'
import { Button, Icon, Page, Breadcrumbs } from '../components/ui.jsx'
import { services, config } from '../data/site.js'
import useDocTitle from '../hooks/useDocTitle.js'
const H1 = ({ children }) => <h1 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-[40px]">{children}</h1>
export function About() {
  useDocTitle('Tentang')
  return (<Page narrow><H1>Tentang kami</H1>
    <p className="rounded-lg border border-champagne/50 bg-white p-4 text-sm">Konten pada halaman ini adalah contoh dan perlu diganti dengan informasi resmi instansi.</p>
    <h2 className="mt-10 text-2xl font-bold">Misi</h2><p className="mt-2 text-muted">Melindungi warga melalui pencegahan, respons cepat, dan edukasi yang mudah dipahami.</p>
    <h2 className="mt-8 text-2xl font-bold">Visi</h2><p className="mt-2 text-muted">Masyarakat yang siap menghadapi kebakaran dan keadaan darurat.</p>
    <h2 className="mt-8 text-2xl font-bold">Nilai</h2>
    <ul className="mt-3 grid gap-4 sm:grid-cols-3">{[['Keselamatan', 'Prioritas utama'], ['Kejelasan', 'Informasi mudah dipahami'], ['Pelayanan', 'Tanpa membeda-bedakan']].map(([t, d]) => <li key={t} className="rounded-xl border border-line bg-white p-4"><b className="block">{t}</b><span className="text-sm text-muted">{d}</span></li>)}</ul>
    <h2 className="mt-8 text-2xl font-bold">Kemampuan operasional</h2><p className="mt-2 text-muted">Isi dengan data armada, personel, dan fasilitas yang sebenarnya. Situs ini sengaja tidak memuat angka rekaan.</p>
  </Page>)
}
export function Services() {
  useDocTitle('Layanan')
  return (<Page><H1>Layanan</H1>
    <ul className="grid gap-5 sm:grid-cols-2">{services.map(s => (
      <li key={s.id} className="flex flex-col rounded-xl border border-line bg-white p-6"><Icon name={s.icon} className="text-fire" size={28} />
        <h2 className="mt-4 text-2xl font-bold">{s.title}</h2><p className="mt-2 flex-1 text-muted">{s.short}</p>
        <div className="mt-5"><Button to={`/layanan/${s.id}`} variant="secondary">Lihat detail {s.title.toLowerCase()}</Button></div></li>
    ))}</ul></Page>)
}
export function ServiceDetail() {
  const { id } = useParams(); const s = services.find(x => x.id === id)
  useDocTitle(s?.title || 'Layanan tidak ditemukan')
  if (!s) return <NotFound />
  return (<Page narrow><Breadcrumbs items={[{ to: '/', label: 'Beranda' }, { to: '/layanan', label: 'Layanan' }, { label: s.title }]} /><H1>{s.title}</H1>
    <p className="text-lg text-muted">{s.short}</p>
    <h2 className="mt-8 text-2xl font-bold">Siapa yang terbantu</h2><p className="mt-2 text-muted">{s.who}</p>
    <h2 className="mt-8 text-2xl font-bold">Cara mendapatkan layanan</h2><p className="mt-2 text-muted">{s.how}</p>
    <div className="mt-8"><Button to="/kontak">Lihat informasi kontak</Button></div></Page>)
}
export function Contact() {
  useDocTitle('Kontak')
  const row = (k, v) => <div className="border-b border-line py-4"><dt className="text-sm font-semibold text-muted">{k}</dt><dd className="mt-1">{v}</dd></div>
  const ph = <span className="text-muted">Belum dikonfigurasi (isi lewat file .env)</span>
  return (<Page narrow><H1>Kontak dan lokasi</H1>
    <dl>
      {row('Telepon darurat', config.emergencyNumber ? <a className="font-bold text-fire" href={`tel:${config.emergencyNumber}`}>{config.emergencyNumber}</a> : ph)}
      {row('Alamat kantor', config.address || ph)}
      {row('Jam layanan', <span className="text-muted">Belum diverifikasi</span>)}
      {row('Peta', config.mapUrl ? <a className="font-semibold text-fire underline" href={config.mapUrl} target="_blank" rel="noopener noreferrer">Buka di peta (tab baru)</a> : ph)}
    </dl>
    <p className="mt-6 text-muted">Untuk kejadian darurat, jangan menunggu balasan pesan. Buka <Link className="font-semibold text-fire underline" to="/darurat">halaman informasi darurat</Link>.</p></Page>)
}
export function NotFound() {
  useDocTitle('Halaman tidak ditemukan')
  return (<Page narrow><H1>Halaman tidak ditemukan</H1><p className="mb-6 text-muted">Alamat yang Anda buka tidak ada atau sudah dipindahkan.</p>
    <div className="flex flex-wrap gap-3"><Button to="/">Kembali ke beranda</Button><Button to="/darurat" variant="secondary">Informasi darurat</Button></div></Page>)
}
