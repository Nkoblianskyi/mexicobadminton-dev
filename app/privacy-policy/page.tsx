import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad de Mexico Badminton. Cómo recopilamos, usamos y protegemos tu información personal.',
}

export default function PrivacyPolicyPage() {
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
            <br />PRIVACIDAD
          </h1>

          <p className="text-xs text-muted-foreground mb-10">
            Última actualización 2026
          </p>

          <div className="flex flex-col gap-10 text-base leading-relaxed text-foreground/85">
            <section>
              <h2 className="font-heading text-2xl mb-4">Responsable del tratamiento</h2>
              <p>
                El responsable del tratamiento de los datos personales recabados a través de este sitio web
                es Mexico Badminton, accesible en mexicobadminton.com. Para cualquier consulta relacionada
                con la privacidad, puedes contactarnos a través de nuestra{' '}
                <Link href="/about" className="underline hover:no-underline" style={{ color: 'var(--primary)' }}>
                  página de contacto
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4">Datos que recopilamos</h2>
              <p className="mb-4">
                Mexico Badminton es un portal informativo. No requerimos registro de usuario ni procesamos
                datos de pago. Los datos personales que podemos recopilar son:
              </p>
              <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-primary">
                <li className="text-muted-foreground">
                  <span className="text-foreground/85">Datos de contacto:</span> nombre y dirección de correo electrónico cuando utilizas nuestro formulario de contacto.
                </li>
                <li className="text-muted-foreground">
                  <span className="text-foreground/85">Datos de navegación:</span> información técnica como dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia, recopilada de forma anónima mediante herramientas analíticas.
                </li>
                <li className="text-muted-foreground">
                  <span className="text-foreground/85">Cookies:</span> según lo descrito en nuestra{' '}
                  <Link href="/cookie-policy" className="underline hover:no-underline" style={{ color: 'var(--primary)' }}>
                    política de cookies
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4">Finalidad del tratamiento</h2>
              <p>
                Los datos facilitados a través del formulario de contacto se utilizan exclusivamente para
                responder a tu consulta o solicitud. Los datos de navegación se utilizan para mejorar el
                rendimiento y los contenidos del sitio, siempre de forma agregada y anónima.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4">Base jurídica</h2>
              <p>
                El tratamiento de los datos de contacto se realiza con base en el consentimiento del
                interesado, manifestado al enviar el formulario de contacto. El tratamiento de datos
                analíticos se realiza con base en el interés legítimo de mejora del servicio.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4">Conservación de datos</h2>
              <p>
                Los datos de contacto se conservan durante el tiempo necesario para atender la solicitud
                y, si procede, durante el plazo legal correspondiente. Los datos analíticos anónimos
                se conservan según los términos del proveedor del servicio analítico.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4">Derechos del usuario</h2>
              <p className="mb-4">
                Puedes ejercer los siguientes derechos en relación con tus datos personales:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Acceso', 'Rectificación', 'Supresión', 'Oposición', 'Limitación', 'Portabilidad'].map(
                  (derecho) => (
                    <div
                      key={derecho}
                      className="px-4 py-2.5 rounded-lg text-sm font-medium border border-border"
                      style={{ color: 'var(--primary)' }}
                    >
                      {derecho}
                    </div>
                  )
                )}
              </div>
              <p className="mt-4">
                Para ejercer estos derechos, contacta con nosotros a través del correo indicado en nuestra
                página de contacto, adjuntando copia de un documento de identidad.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4">Seguridad</h2>
              <p>
                Adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de
                los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
                Sin embargo, ninguna transmisión por internet es completamente segura.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl mb-4">Cambios en esta política</h2>
              <p>
                Podemos actualizar esta política de privacidad en cualquier momento. Los cambios se
                publicarán en esta página con la fecha de última actualización. Te recomendamos revisar
                esta política periódicamente.
              </p>
            </section>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
