import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 backdrop-blur-xl bg-white/50 border-b border-black/10" />
      <nav className="relative mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-widest uppercase text-sm">Kyotyo•Portfolio</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-black/70 hover:text-black transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </nav>
      {open && (
        <div className="md:hidden relative bg-white/80 backdrop-blur-xl border-t border-black/10">
          <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="py-2 text-sm" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
