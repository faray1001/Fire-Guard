import { useState } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import { Menu, X, Phone, Flame } from 'lucide-react'
import { nav, config } from '../data/site.js'
const link = ({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'text-fire' : 'text-navy hover:text-fire'}`
function Logo({ light }) {
  return <Link to="/" className={`flex items-center gap-2 text-lg font-extrabold ${light ? 'text-white' : ''}`}><span className="grid size-9 place-items-center rounded-lg bg-fire text-white"><Flame size={20} aria-hidden="true" /></span>FireGuard</Link>
}
function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-warm/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">{nav.map(n => <NavLink key={n.to} to={n.to} end={n.to === '/'} className={link}>{n.label}</NavLink>)}</nav>
        <div className="flex items-center gap-2">
          <Link to="/darurat" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-fire px-4 text-sm font-bold text-white hover:bg-fire-deep"><Phone size={16} aria-hidden="true" />Darurat</Link>
          <button className="grid size-11 place-items-center rounded-lg border border-line lg:hidden" aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? 'Tutup menu' : 'Buka menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav id="menu-mobile" aria-label="Navigasi seluler" className="border-t border-line bg-white px-5 py-3 lg:hidden">
        {nav.map(n => <NavLink key={n.to} to={n.to} end={n.to === '/'} onClick={() => setOpen(false)} className={(s) => `block py-3 text-base ${link(s)}`}>{n.label}</NavLink>)}
      </nav>}
    </header>
  )
}
function Footer() {
  return (
    <footer className="mt-16 bg-navy text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div><Logo light /><p className="mt-3 max-w-xs text-sm">Situs contoh layanan pemadam kebakaran. Bukan situs resmi instansi mana pun.</p></div>
        <nav aria-label="Tautan footer"><ul className="space-y-2 text-sm">{nav.map(n => <li key={n.to}><Link className="hover:text-white" to={n.to}>{n.label}</Link></li>)}</ul></nav>
        <div className="text-sm"><p className="font-semibold text-champagne">Kontak darurat</p>
          {config.emergencyNumber ? <a className="mt-2 block text-xl font-bold text-white" href={`tel:${config.emergencyNumber}`}>{config.emergencyNumber}</a> : <p className="mt-2">Nomor resmi belum dikonfigurasi.</p>}
        </div>
      </div>
    </footer>
  )
}
export default function Layout() {
  return (<>
    <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:p-3">Lewati ke konten</a>
    <Header /><Outlet /><Footer />
  </>)
}
