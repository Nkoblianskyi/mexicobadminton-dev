import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { Mail, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Nosotros y Contacto',
  description:
    'Mexico Badminton es el portal de referencia sobre el bádminton en México. Conoce nuestra misión y cómo ponerte en contacto con nosotros.',
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Header */}
        <section
          className="py-24 clip-diagonal"
          style={{ background: 'var(--foreground)' }}
        >
          <div className="max-w-7xl mx-auto px-6 pt-4 pb-10">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: 'var(--gold)' }}
            >
              Acerca de nosotros
            </p>
            <h1
              className="font-heading text-[clamp(3rem,9vw,8rem)] leading-none text-balance"
              style={{ color: 'var(--background)' }}
            >
              SOBRE
              <br />
              <span style={{ color: 'oklch(0.62 0.18 34)' }}>NOSOTROS</span>
            </h1>
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
                style={{ color: 'var(--accent)' }}
              >
                Nuestra misión
              </p>
              <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-6">
                DIFUNDIR EL
                <br />BÁDMINTON
                <br />EN MÉXICO
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Mexico Badminton nació con un propósito claro: ser la fuente de referencia en español sobre el bádminton
                en México. Un espacio donde cualquier persona, sin importar su nivel, pueda encontrar información
                confiable, bien redactada y actualizada sobre el deporte más veloz del mundo.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Creemos que el bádminton merece mayor visibilidad en el país. Con más de 35 estados con actividad
                organizada y una comunidad creciente de practicantes, el deporte tiene una presencia real que
                pocas plataformas reflejan adecuadamente en idioma español.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Nuestros contenidos son editoriales e informativos. No representamos ni estamos afiliados a ninguna
                federación, club, marca comercial o organización deportiva. Toda la información publicada tiene
                fines divulgativos.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  title: 'Información de calidad',
                  desc: 'Contenidos rigurosos sobre historia, reglamentos y técnica del bádminton.',
                },
                {
                  title: 'Perspectiva mexicana',
                  desc: 'Un enfoque centrado en el desarrollo del deporte dentro del contexto nacional.',
                },
                {
                  title: 'Acceso libre',
                  desc: 'Todo el contenido es gratuito, sin suscripciones ni muros de pago.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl"
                  style={{ background: 'var(--card)', borderLeft: '3px solid var(--primary)' }}
                >
                  <h3 className="font-semibold text-sm mb-1.5">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-px w-full" style={{ background: 'var(--border)' }} />
        </div>

        {/* What we cover */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Qué encontrarás aquí
          </p>
          <h2 className="font-heading text-3xl md:text-4xl mb-10">NUESTROS CONTENIDOS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                area: 'Historia',
                desc: 'Un recorrido por la evolución del bádminton en México desde sus primeras décadas hasta hoy.',
                href: '/historia',
              },
              {
                area: 'Reglas',
                desc: 'El reglamento completo: puntuación, dimensiones de la cancha, disciplinas y modalidades.',
                href: '/reglas',
              },
              {
                area: 'Técnica',
                desc: 'Fundamentos del juego, tipos de golpes, footwork y consejos para mejorar tu nivel.',
                href: '/tecnica',
              },
              {
                area: 'Blog',
                desc: 'Artículos sobre táctica, entrenamiento físico, psicología deportiva y equipamiento.',
                href: '/blog',
              },
            ].map((item) => (
              <div
                key={item.area}
                className="p-6 rounded-xl border border-border"
              >
                <h3 className="font-heading text-2xl mb-2" style={{ color: 'var(--primary)' }}>{item.area}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section
          className="py-20"
          style={{ background: 'var(--card)' }}
          aria-labelledby="contacto-heading"
        >
          <div className="max-w-4xl mx-auto px-6">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: 'var(--accent)' }}
            >
              Contacto
            </p>
            <h2
              id="contacto-heading"
              className="font-heading text-3xl md:text-5xl leading-none mb-6"
            >
              ESCRÍBENOS
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-10 max-w-xl">
              Para consultas editoriales, sugerencias de contenido, correcciones o cualquier otra comunicación,
              puedes contactarnos a través del correo electrónico o del formulario a continuación.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Contact info */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl border border-border">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-0.5">Email</p>
                    <a
                      href="mailto:hola@mexicobadminton.com"
                      className="text-sm font-medium hover:underline"
                      style={{ color: 'var(--primary)' }}
                    >
                      hola@mexicobadminton.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl border border-border">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--secondary)', color: 'var(--foreground)' }}
                  >
                    <Globe size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-0.5">Web</p>
                    <span className="text-sm font-medium text-foreground">mexicobadminton.com</span>
                  </div>
                </div>
              </div>

              {/* Contact form */}
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
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
