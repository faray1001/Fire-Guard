import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
const base = 'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors'
export function Button({ to, href, variant = 'primary', disabled, children, ...p }) {
  const v = { primary: 'bg-fire text-white hover:bg-fire-deep', secondary: 'border border-navy/20 text-navy hover:bg-navy hover:text-white', light: 'bg-white text-navy hover:bg-warm' }[variant]
  if (disabled) return <span role="link" aria-disabled="true" className={`${base} cursor-not-allowed bg-line text-muted`}>{children}</span>
  if (to) return <Link to={to} className={`${base} ${v}`} {...p}>{children}</Link>
  return <a href={href} className={`${base} ${v}`} {...p}>{children}</a>
}
export const Icon = ({ name, ...p }) => { const C = Icons[name] || Icons.Circle; return <C aria-hidden="true" {...p} /> }
export function SectionHeading({ title, text, action }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-xl"><h2 className="text-2xl font-bold tracking-tight">{title}</h2>{text && <p className="mt-2 text-muted">{text}</p>}</div>
      {action}
    </div>
  )
}
export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Jejak halaman" className="mb-6 text-sm text-muted">
      <ol className="flex flex-wrap gap-2">{items.map((it, i) => (
        <li key={i} className="flex gap-2">{it.to ? <Link className="underline-offset-2 hover:underline" to={it.to}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}{i < items.length - 1 && <span aria-hidden="true">/</span>}</li>
      ))}</ol>
    </nav>
  )
}
export const Page = ({ children, narrow }) => <main id="konten" className={`mx-auto px-5 py-12 sm:py-16 ${narrow ? 'max-w-3xl' : 'max-w-6xl'}`}>{children}</main>
export const Tag = ({ children }) => <span className="rounded-md border border-line bg-white px-2 py-0.5 text-xs font-semibold text-muted">{children}</span>
