'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/historia', label: 'Historia' },
  { href: '/reglas', label: 'Reglas' },
  { href: '/tecnica', label: 'Técnica' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'Contacto' },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + Wordmark */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Mexico Badminton — inicio">
          {/* Custom SVG Logo */}
          <div className="relative w-9 h-9 flex-shrink-0">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Racket shape */}
              <ellipse cx="16" cy="14" rx="10" ry="12" fill="none" stroke="var(--primary)" strokeWidth="2.2" />
              <ellipse cx="16" cy="14" rx="6" ry="8" fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.4" />
              <line x1="16" y1="2" x2="16" y2="26" stroke="var(--primary)" strokeWidth="1" opacity="0.4" />
              <line x1="6" y1="14" x2="26" y2="14" stroke="var(--primary)" strokeWidth="1" opacity="0.4" />
              {/* Handle */}
              <rect x="14.5" y="25" width="3" height="9" rx="1.5" fill="var(--accent)" />
              {/* Shuttlecock feather hint */}
              <circle cx="29" cy="6" r="2.5" fill="var(--gold)" />
              <line x1="27" y1="8" x2="22" y2="16" stroke="var(--gold)" strokeWidth="1.2" opacity="0.7" />
            </svg>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span
              className="font-heading text-2xl leading-none tracking-widest"
              style={{ color: 'var(--primary)' }}
            >
              MEXICO
            </span>
            <span
              className="font-heading text-2xl leading-none tracking-widest"
              style={{ color: 'var(--accent)' }}
            >
              BADMINTON
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 text-sm font-medium tracking-wide transition-all rounded-full ${
                  active
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav
          className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-1"
          aria-label="Navegación móvil"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium tracking-wide rounded-lg transition-all ${
                  active
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
