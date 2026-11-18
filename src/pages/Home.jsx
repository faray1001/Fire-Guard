import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'
import { Button, Icon, SectionHeading, Page, Tag } from '../components/ui.jsx'
import { services, articles, news, config, fmtDate } from '../data/site.js'
import useDocTitle from '../hooks/useDocTitle.js'
export default function Home() {
  useDocTitle('')
  return (<>
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-5 lg:py-24">
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-[44px]">Tenang saat darurat. Siap sebelum api menyala.</h1>
          <p className="mt-6 max-w-lg text-lg text-white/75">Temukan cara menghubungi petugas, pelajari pencegahan kebakaran, dan kenali layanan yang tersedia untuk Anda.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/darurat"><Phone size={18} aria-hidden="true" />Lihat kontak darurat</Button>
            <Button to="/edukasi" variant="light">Pelajari pencegahan</Button>
          </div>
        </div>
        <aside className="rounded-2xl border border-white/10 bg-surface p-6 lg:col-span-2" aria-label="Ringkasan kontak darurat">
          <h2 className="text-lg font-bold text-champagne">Saat menelepon, sebutkan</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-white/85">
            <li>Alamat atau patokan lokasi yang jelas</li><li>Jenis kejadian dan apa yang terbakar</li><li>Apakah ada korban atau orang terjebak</li><li>Nama dan nomor telepon Anda</li>
          </ol>
          <p className="mt-5 border-t border-white/10 pt-4 text-sm text-white/70">{config.emergencyNumber ? `Nomor: ${config.emergencyNumber}` : 'Nomor resmi belum dikonfigurasi (situs contoh).'}</p>
        </aside>
      </div>
    </section>
    <Page>
      <SectionHeading title="Layanan kami" action={<Link className="inline-flex items-center gap-1 font-semibold text-fire" to="/layanan">Semua layanan <ArrowRight size={16} aria-hidden="true" /></Link>} />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(s => (
        <li key={s.id}><Link to={`/layanan/${s.id}`} className="block h-full rounded-xl border border-line bg-white p-5 hover:border-fire">
          <Icon name={s.icon} className="text-fire" /><h3 className="mt-4 font-bold">{s.title}</h3><p className="mt-2 text-sm text-muted">{s.short}</p></Link></li>
      ))}</ul>
      <div className="mt-16"><SectionHeading title="Pencegahan di rumah dan tempat kerja" text="Panduan singkat yang bisa dipraktikkan hari ini." />
        <ul className="grid gap-4 md:grid-cols-2">{articles.slice(0, 2).map(a => (
          <li key={a.slug}><Link to={`/edukasi/${a.slug}`} className="block rounded-xl border border-line bg-white p-6 hover:border-fire"><Tag>{a.category}</Tag><h3 className="mt-3 text-lg font-bold">{a.title}</h3><p className="mt-2 text-muted">{a.excerpt}</p></Link></li>
        ))}</ul></div>
      <div className="mt-16"><SectionHeading title="Berita terbaru" />
        <ul className="grid gap-4 md:grid-cols-3">{news.map(n => (
          <li key={n.slug}><Link to={`/berita/${n.slug}`} className="block h-full rounded-xl border border-line bg-white p-5 hover:border-fire"><Tag>{n.category}</Tag> <time dateTime={n.date} className="text-sm text-muted">{fmtDate(n.date)}</time><h3 className="mt-2 font-bold">{n.title}</h3></Link></li>
        ))}</ul></div>
    </Page>
  </>)
}
