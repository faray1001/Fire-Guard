import { useState, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Page, Tag, Breadcrumbs, Button } from '../components/ui.jsx'
import { fmtDate } from '../data/site.js'
import useDocTitle from '../hooks/useDocTitle.js'
import { NotFound } from './Simple.jsx'
export function Listing({ kind, title, items }) {
  useDocTitle(title)
  const [q, setQ] = useState(''); const [cat, setCat] = useState('Semua')
  const cats = ['Semua', ...new Set(items.map(i => i.category))]
  const shown = useMemo(() => items.filter(i => (cat === 'Semua' || i.category === cat) && `${i.title} ${i.excerpt}`.toLowerCase().includes(q.trim().toLowerCase())), [items, q, cat])
  const featured = kind === 'berita' && cat === 'Semua' && !q.trim() ? shown[0] : null
  const rest = featured ? shown.slice(1) : shown
  return (<Page><h1 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-[40px]">{title}</h1>
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
      <label className="relative block md:w-80"><span className="sr-only">Cari</span><Search className="absolute left-3 top-3 text-muted" size={18} aria-hidden="true" />
        <input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Cari judul atau topik" className="min-h-11 w-full rounded-lg border border-line bg-white pl-10 pr-3" /></label>
      <div role="group" aria-label="Filter kategori" className="flex flex-wrap gap-2">{cats.map(c => (
        <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)} className={`min-h-11 rounded-lg border px-4 text-sm font-semibold ${cat === c ? 'border-navy bg-navy text-white' : 'border-line bg-white hover:border-navy'}`}>{c}</button>))}</div>
    </div>
    {shown.length === 0 ? <div className="rounded-xl border border-dashed border-line p-10 text-center"><p className="font-semibold">Tidak ada hasil yang cocok.</p><p className="mt-1 text-muted">Coba kata kunci lain atau pilih kategori “Semua”.</p>
      <button className="mt-4 font-semibold text-fire underline" onClick={() => { setQ(''); setCat('Semua') }}>Atur ulang pencarian</button></div> :
      <>{featured && <Link to={`/${kind}/${featured.slug}`} className="mb-5 block rounded-xl border border-line bg-white p-8 hover:border-fire"><div className="flex items-center gap-3"><Tag>{featured.category}</Tag><time dateTime={featured.date} className="text-sm text-muted">{fmtDate(featured.date)}</time></div><h2 className="mt-3 text-2xl font-bold">{featured.title}</h2><p className="mt-2 text-muted">{featured.excerpt}</p></Link>}
      <ul className="grid gap-5 md:grid-cols-2">{rest.map(i => (
        <li key={i.slug}><Link to={`/${kind}/${i.slug}`} className="block h-full rounded-xl border border-line bg-white p-6 hover:border-fire">
          <div className="flex items-center gap-3"><Tag>{i.category}</Tag>{i.date && <time dateTime={i.date} className="text-sm text-muted">{fmtDate(i.date)}</time>}</div>
          <h2 className="mt-3 text-xl font-bold">{i.title}</h2><p className="mt-2 text-muted">{i.excerpt}</p></Link></li>))}</ul></>}
  </Page>)
}
export function Detail({ kind, label, items }) {
  const { slug } = useParams(); const it = items.find(i => i.slug === slug)
  useDocTitle(it?.title || 'Tidak ditemukan')
  if (!it) return <NotFound />
  const related = items.filter(i => i.slug !== slug).sort((a, b) => (b.category === it.category) - (a.category === it.category)).slice(0, 2)
  return (<Page narrow><Breadcrumbs items={[{ to: '/', label: 'Beranda' }, { to: `/${kind}`, label }, { label: it.title }]} />
    <article><div className="flex items-center gap-3"><Tag>{it.category}</Tag>{it.date && <time dateTime={it.date} className="text-sm text-muted">{fmtDate(it.date)}</time>}</div>
      <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{it.title}</h1>
      <div className="mt-6 space-y-5 text-lg leading-8 text-navy/85">{it.body.map((p, i) => <p key={i}>{p}</p>)}</div></article>
    <aside className="mt-12 border-t border-line pt-8"><h2 className="text-lg font-bold">Baca juga</h2>
      <ul className="mt-3 space-y-2">{related.map(r => <li key={r.slug}><Link className="font-semibold text-fire underline" to={`/${kind}/${r.slug}`}>{r.title}</Link></li>)}</ul>
      <div className="mt-6"><Button to="/darurat" variant="secondary">Informasi kontak darurat</Button></div></aside></Page>)
}
