import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description:
    'Política de cookies de Mexico Badminton. Información sobre qué cookies utilizamos y cómo puedes gestionarlas.',
}

export default function CookiePolicyPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        <section className="max-w-3xl mx-auto px-6 py-20">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Legal
          </p>
          <h1 className="font-heading text-[clamp(2.5rem,7vw,5rem)] leading-none mb-10">
            POLÍTICA DE
            <br />COOKIES
          </h1>

          <p className="text-xs text-muted-foreground mb-10">
            Última actualización: enero de 2025
          </p>

          <div className="flex flex-col gap-10 text-base leading-relaxed text-foreground/85">
            <section>
              <h2 className="font-heading text-2xl mb-4">¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del
                usuario cuando visita una página. Permiten que el sitio recuerde información sobre la visita,
                lo que puede facilitar tu próxima visita y hacer que el sitio te resulte más útil.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4">Cookies que utilizamos</h2>
              <p className="mb-4">
                Este sitio web utiliza exclusivamente cookies técnicas esenciales y, opcionalmente, cookies
                analíticas de terceros para entender cómo los usuarios interactúan con el contenido.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    nombre: 'Cookies estrictamente necesarias',
                    desc: 'Son imprescindibles para que el sitio web funcione correctamente. No pueden ser desactivadas. No almacenan información de identificación personal.',
                  },
                  {
                    nombre: 'Cookies de preferencias',
                    desc: 'Permiten al sitio recordar información que modifica el comportamiento o el aspecto del sitio, como el idioma preferido o la región en la que se encuentra el usuario.',
                  },
                  {
                    nombre: 'Cookies analíticas',
                    desc: 'Utilizadas para recopilar información estadística sobre cómo los visitantes usan el sitio. Los datos son anónimos y se usan para mejorar el contenido y la experiencia del usuario.',
                  },
                ].map((item) => (
                  <div
                    key={item.nombre}
                    className="p-5 rounded-xl border border-border"
                  >
                    <h3 className="font-semibold text-sm mb-2">{item.nombre}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4">Cómo gestionar las cookies</h2>
              <p className="mb-4">
                Puedes configurar tu navegador para que rechace todas o algunas cookies, o para que te avise
                cuando los sitios web establecen o acceden a cookies. Si deshabilitas o rechazas las cookies,
                ten en cuenta que algunas partes de este sitio pueden volverse inaccesibles o no funcionar
                correctamente.
              </p>
              <p>
                La mayoría de los navegadores aceptan cookies automáticamente pero puedes modificar la
                configuración del navegador para rechazarlas. Las instrucciones para hacerlo se encuentran en
                el archivo de ayuda de cada navegador.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4">Cookies de terceros</h2>
              <p>
                En algunos casos utilizamos herramientas de análisis de terceros que pueden establecer sus
                propias cookies en tu dispositivo. Estas cookies están sujetas a las políticas de privacidad
                de dichos terceros. Recomendamos revisar las políticas correspondientes para obtener
                información detallada.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4">Consentimiento</h2>
              <p>
                Al continuar usando este sitio web, aceptas el uso de cookies tal como se describe en esta
                política. Puedes retirar tu consentimiento en cualquier momento ajustando la configuración
                de tu navegador.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4">Contacto</h2>
              <p>
                Si tienes preguntas sobre esta política de cookies, puedes ponerte en contacto con nosotros
                a través de nuestra{' '}
                <Link href="/about" className="underline hover:no-underline" style={{ color: 'var(--primary)' }}>
                  página de contacto
                </Link>
                .
              </p>
            </section>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
