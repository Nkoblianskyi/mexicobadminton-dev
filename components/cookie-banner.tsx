'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

const COOKIE_KEY = 'mb_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY)
      if (!stored) setVisible(true)
    } catch {
      // localStorage unavailable
    }
  }, [])

  function accept() {
    try {
      localStorage.setItem(COOKIE_KEY, 'accepted')
    } catch {
      // ignore
    }
    setVisible(false)
  }

  function decline() {
    try {
      localStorage.setItem(COOKIE_KEY, 'declined')
    } catch {
      // ignore
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div
        className="max-w-3xl mx-auto rounded-2xl p-5 md:p-6 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{ background: 'var(--foreground)', color: 'var(--background)' }}
      >
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold mb-1" style={{ color: 'var(--background)' }}>
            Este sitio usa cookies
          </p>
          <p className="text-xs leading-relaxed" style={{ color: 'oklch(0.98 0.005 100 / 65%)' }}>
            Usamos cookies esenciales y analíticas para mejorar tu experiencia. Consulta nuestra{' '}
            <Link
              href="/cookie-policy"
              className="underline hover:no-underline"
              style={{ color: 'var(--gold)' }}
              onClick={accept}
            >
              política de cookies
            </Link>{' '}
            para más información.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all hover:bg-background/10"
            style={{ borderColor: 'oklch(0.98 0.005 100 / 25%)', color: 'oklch(0.98 0.005 100 / 70%)' }}
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all hover:opacity-90"
            style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
          >
            Aceptar
          </button>
          <button
            onClick={decline}
            className="p-1.5 rounded-full hover:bg-background/10 transition-colors ml-1"
            aria-label="Cerrar aviso de cookies"
            style={{ color: 'oklch(0.98 0.005 100 / 50%)' }}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
