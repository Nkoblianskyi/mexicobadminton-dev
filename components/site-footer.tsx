import Link from 'next/link'

const footerNav = {
  deporte: [
    { href: '/historia', label: 'Historia' },
    { href: '/reglas', label: 'Reglas del Juego' },
    { href: '/tecnica', label: 'Técnica y Táctica' },
  ],
  informacion: [
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'Contacto' },
  ],
  legal: [
    { href: '/cookie-policy', label: 'Política de Cookies' },
    { href: '/privacy-policy', label: 'Política de Privacidad' },
  ],
}

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-background mt-24">
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, var(--primary) 0%, var(--accent) 50%, var(--gold) 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-heading text-3xl tracking-widest" style={{ color: 'oklch(0.62 0.18 34)' }}>MX</span>
              <span className="font-heading text-3xl tracking-widest text-background/90">BADMINTON</span>
            </div>
            <p className="text-sm leading-relaxed text-background/60 max-w-xs">
              La fuente de referencia sobre el bádminton en México. Información general, historia y desarrollo del deporte.
            </p>
          </div>

          {/* Nav columns */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-background/40 mb-4">El Deporte</p>
            <ul className="space-y-2.5">
              {footerNav.deporte.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-background/40 mb-4">Información</p>
            <ul className="space-y-2.5">
              {footerNav.informacion.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-background/40 mb-4">Legal</p>
            <ul className="space-y-2.5">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40 tracking-wide">
            &copy; {new Date().getFullYear()} mexicobadminton.com &mdash; Todos los derechos reservados.
          </p>
          <p className="text-xs text-background/30 tracking-widest uppercase font-heading text-lg" style={{ color: 'oklch(0.62 0.18 34 / 50%)' }}>
            Velocidad &bull; Precisión &bull; Pasión
          </p>
        </div>
      </div>
    </footer>
  )
}
