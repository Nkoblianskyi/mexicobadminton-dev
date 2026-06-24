'use client'

export default function ContactForm() {
  return (
    <form
      className="flex flex-col gap-4"
      aria-label="Formulario de contacto"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label htmlFor="nombre" className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          placeholder="Tu nombre"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
          style={{ '--tw-ring-color': 'var(--primary)' } as React.CSSProperties}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          placeholder="tu@correo.com"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
          style={{ '--tw-ring-color': 'var(--primary)' } as React.CSSProperties}
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows={4}
          placeholder="Escribe tu mensaje aquí..."
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
          style={{ '--tw-ring-color': 'var(--primary)' } as React.CSSProperties}
        />
      </div>
      <button
        type="submit"
        className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all hover:opacity-90 self-start"
        style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
      >
        Enviar mensaje
      </button>
    </form>
  )
}
