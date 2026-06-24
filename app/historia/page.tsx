import type { Metadata } from 'next'
import Image from 'next/image'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Historia del Bádminton en México',
  description:
    'Un recorrido por la historia del bádminton en México: desde sus orígenes a mediados del siglo XX hasta su desarrollo como deporte federado y competitivo en el país.',
}

const timeline = [
  {
    era: '1940s',
    title: 'Los Primeros Golpes',
    body: 'El bádminton llegó a México a través de comunidades de migrantes asiáticos y europeos que se asentaron principalmente en la Ciudad de México. Se practicaba de manera recreativa en clubes privados y patios familiares, sin reglamentación formal ni competencias organizadas.',
  },
  {
    era: '1950s',
    title: 'Raíces y Primeros Clubes',
    body: 'Durante esta década comenzaron a formarse los primeros grupos organizados de jugadores en la capital. Los intercambios con practicantes de otros países permitieron conocer las reglas internacionales y elevar el nivel técnico de los participantes más comprometidos con el deporte.',
  },
  {
    era: '1960s',
    title: 'Organización Federativa',
    body: 'México dio un paso determinante al formalizar la práctica del bádminton bajo una estructura federada. En 1968 se celebró el primer campeonato nacional oficial, marcando el nacimiento de la competencia reglamentada en el país y sentando las bases de lo que vendría después.',
  },
  {
    era: '1970s - 80s',
    title: 'Expansión Nacional',
    body: 'El deporte comenzó a extenderse más allá de la capital. Jalisco, Nuevo León y otros estados del norte y del bajío adoptaron el bádminton como actividad deportiva organizada. Se multiplicaron los torneos regionales y se fortaleció el intercambio con federaciones latinoamericanas.',
  },
  {
    era: '1990s',
    title: 'Ingreso Olímpico y Nuevo Impulso',
    body: 'La inclusión del bádminton en los Juegos Olímpicos de Barcelona 1992 tuvo un impacto directo en México. La visibilidad global del deporte atrajo nuevos practicantes y generó mayor interés institucional. Se renovaron programas de formación y se intensificaron los vínculos con la Confederación de Bádminton de América.',
  },
  {
    era: '2000s',
    title: 'Profesionalización y Tecnificación',
    body: 'El nuevo milenio trajo consigo una mayor profesionalización. Se desarrollaron metodologías de entrenamiento modernas, se incorporaron preparadores físicos especializados y el nivel técnico de los jugadores mexicanos se acercó progresivamente al estándar continental.',
  },
  {
    era: '2010s',
    title: 'Generación de Alto Rendimiento',
    body: 'México consolidó una cantera de jugadores con proyección internacional. La participación en circuitos continentales se volvió regular y el interés juvenil por el bádminton creció de forma sostenida, impulsado también por la mayor cobertura mediática del deporte a nivel mundial.',
  },
  {
    era: '2020s',
    title: 'Era Contemporánea',
    body: 'El bádminton mexicano vive hoy una etapa de madurez. Con presencia activa en más de 35 estados, una infraestructura federativa consolidada y una nueva generación de talentos, el deporte sigue creciendo y afirmando su lugar en el panorama deportivo nacional.',
  },
]

export default function HistoriaPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
          <Image
            src="/images/historia-badminton.png"
            alt="Historia del bádminton en México"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/60" />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/3"
            style={{ background: 'linear-gradient(to top, var(--background), transparent)' }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Historia
            </p>
            <h1 className="font-heading text-[clamp(3rem,8vw,7rem)] leading-none text-balance" style={{ color: 'var(--background)' }}>
              EL CAMINO DEL
              <br />
              <span style={{ color: 'oklch(0.62 0.18 34)' }}>BÁDMINTON MEXICANO</span>
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <p className="text-xl leading-relaxed text-muted-foreground">
            Desde los patios privados de los años cuarenta hasta las canchas profesionales del siglo XXI, el bádminton en México es una historia de constancia, crecimiento y amor por el deporte más veloz del mundo.
          </p>
        </section>

        {/* Timeline */}
        <section className="max-w-7xl mx-auto px-6 pb-24" aria-label="Línea de tiempo del bádminton en México">
          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-[7.5rem] top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'var(--border)' }}
            />

            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <div
                  key={item.era}
                  className="group flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-border last:border-0"
                >
                  {/* Era label */}
                  <div className="md:w-36 flex-shrink-0 flex md:flex-col md:items-end md:pt-1 gap-3 md:gap-0">
                    <span
                      className="font-heading text-xl md:text-2xl tracking-wide"
                      style={{ color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)' }}
                    >
                      {item.era}
                    </span>
                    {/* dot on timeline */}
                    <div
                      className="hidden md:block mt-2 w-3 h-3 rounded-full border-2 self-end translate-x-[calc(50%+0.5px)]"
                      style={{
                        borderColor: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                        background: 'var(--background)',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:pl-8">
                    <h2 className="font-heading text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-base leading-relaxed text-muted-foreground max-w-2xl">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA strip */}
        <section
          className="py-20"
          style={{ background: 'var(--foreground)', color: 'var(--background)' }}
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] leading-none text-balance" style={{ color: 'var(--background)' }}>
              LA HISTORIA CONTINÚA
              <br />
              <span style={{ color: 'oklch(0.62 0.18 34)' }}>CON CADA GOLPE</span>
            </h2>
            <p className="text-base max-w-sm leading-relaxed" style={{ color: 'oklch(0.98 0.005 100 / 60%)' }}>
              El bádminton mexicano sigue escribiendo su historia. Cada torneo, cada jugador formado y cada nuevo club abierto es un capítulo más de esta tradición deportiva.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
