import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Inicio | Mexico Badminton',
  description:
    'El portal de referencia del bádminton en México. Historia, reglas, técnicas, logros nacionales y artículos sobre el deporte más veloz del mundo.',
}

const achievementItems = [
  {
    number: '1968',
    label: 'Primer Campeonato Nacional',
    desc: 'Año en que México celebró su primer torneo oficial de bádminton a nivel nacional.',
  },
  {
    number: '400+',
    label: 'km/h Velocidad del Volante',
    desc: 'El volante puede superar esta velocidad, convirtiéndolo en el proyectil más rápido del deporte.',
  },
  {
    number: '12',
    label: 'Disciplinas Reglamentadas',
    desc: 'Desde simples individuales hasta eventos mixtos, el bádminton ofrece múltiples categorías.',
  },
  {
    number: '35+',
    label: 'Estados con Actividad',
    desc: 'La práctica del bádminton se extiende por más de 35 estados del territorio mexicano.',
  },
]

const equipmentItems = [
  {
    title: 'La Raqueta',
    desc: 'Ligera, resistente y precisa. Las raquetas modernas pesan entre 70 y 95 gramos y se fabrican con grafito de alta resistencia.',
    detail: 'Carbon ultraligero',
    dark: false,
  },
  {
    title: 'El Volante',
    desc: 'El "gallo" o volante de plumas naturales de ganso es el equipamiento más distintivo del bádminton competitivo.',
    detail: '16 plumas por volante',
    dark: true,
  },
  {
    title: 'El Calzado',
    desc: 'Zapatillas específicas con suela de goma no marcante, refuerzo lateral y amortiguación para los movimientos del juego.',
    detail: 'Giro y soporte lateral',
    dark: false,
  },
  {
    title: 'La Red',
    desc: 'Colocada a 1.55m en los postes y 1.52m en el centro, la red define el espacio de juego y el desafío táctico.',
    detail: '1.52 m de altura central',
    dark: true,
  },
]

const facts1 = [
  { stat: '493 km/h', desc: 'La velocidad máxima registrada de un volante en competencia profesional.' },
  { stat: '1992', desc: 'Año en que el bádminton se incorporó oficialmente como deporte olímpico en Barcelona.' },
  { stat: '220M', desc: 'Jugadores activos hacen del bádminton el segundo deporte de raqueta más practicado en el mundo.' },
]

const facts2 = [
  { stat: '13.4m', desc: 'Longitud total de la cancha de bádminton en partidos de dobles.' },
  { stat: '21 pts', desc: 'Puntos para ganar cada set bajo el sistema de puntuación moderno (rally point).' },
  { stat: '3 sets', desc: 'Modalidad a mejor de tres sets, con el tercero hasta 21 o 30 en caso de empate extremo.' },
]

const blogPreviews = [
  {
    slug: 'fundamentos-del-servicio',
    title: 'Los Fundamentos del Servicio en Bádminton',
    excerpt:
      'El servicio es la única jugada donde tienes control total. Aprende por qué dominarlo transforma tu juego por completo.',
    img: '/images/blog-1.png',
  },
  {
    slug: 'dobles-estrategia-rotacion',
    title: 'Estrategia de Rotación en Dobles',
    excerpt:
      'Los mejores doblistas no piensan individualmente. La rotación y el posicionamiento definen al equipo ganador.',
    img: '/images/blog-2.png',
  },
  {
    slug: 'entrenamiento-fisico-especifico',
    title: 'Entrenamiento Físico Específico para el Bádminton',
    excerpt:
      'Velocidad, agilidad y potencia explosiva: los tres pilares del acondicionamiento en este deporte.',
    img: '/images/blog-3.png',
  },
]

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-end overflow-hidden pt-16">
          <Image
            src="/images/hero-badminton.png"
            alt="Jugador de bádminton en plena acción"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/55" />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2"
            style={{ background: 'linear-gradient(to top, var(--background) 0%, transparent 100%)' }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
            <div className="max-w-3xl">
              <p
                className="text-sm font-semibold tracking-[0.25em] uppercase mb-4"
                style={{ color: 'var(--gold)' }}
              >
                El deporte de la velocidad y la precisión
              </p>
              <h1 className="font-heading text-[clamp(4rem,12vw,10rem)] leading-none text-background mb-6 text-balance">
                BÁDMINTON
                <br />
                <span style={{ color: 'oklch(0.62 0.18 34)' }}>MÉXICO</span>
              </h1>
              <p className="text-lg leading-relaxed text-background/80 max-w-xl mb-8">
                Descubre la historia, la técnica y la pasión de un deporte que ha conquistado México golpe a
                golpe.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/historia"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm tracking-wide rounded-full transition-all hover:opacity-90"
                  style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
                >
                  Nuestra Historia <ArrowRight size={16} />
                </Link>
                <Link
                  href="/reglas"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm tracking-wide rounded-full border border-background/40 text-background hover:bg-background/10 transition-all"
                >
                  Reglas del Juego
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── HISTORIA PREVIEW ── */}
        <section className="max-w-7xl mx-auto px-6 py-24" aria-labelledby="historia-heading">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/historia-badminton.png"
                  alt="Historia del bádminton en México"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 px-5 py-3 rounded-xl font-heading text-2xl tracking-widest shadow-lg"
                style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                DESDE 1940s
              </div>
            </div>
            <div>
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: 'var(--accent)' }}
              >
                Historia
              </p>
              <h2
                id="historia-heading"
                className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none mb-6 text-balance"
              >
                DÉCADAS DE
                <br />
                EVOLUCIÓN
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                El bádminton llegó a México a mediados del siglo XX traído por comunidades de migrantes. Desde
                entonces, el deporte creció de forma constante hasta convertirse en una disciplina presente en
                cada rincón del país.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-8">
                Con décadas de organización federativa, torneos regionales y una base de practicantes que no
                deja de crecer, México ocupa hoy un lugar relevante en el panorama latinoamericano del bádminton.
              </p>
              <Link
                href="/historia"
                className="inline-flex items-center gap-2 font-semibold text-sm tracking-wide group"
                style={{ color: 'var(--primary)' }}
              >
                Leer historia completa
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── LOGROS ── */}
        <section
          className="py-24 clip-diagonal"
          style={{ background: 'var(--foreground)' }}
          aria-labelledby="logros-heading"
        >
          <div className="max-w-7xl mx-auto px-6 pt-4 pb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p
                  className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                  style={{ color: 'var(--gold)' }}
                >
                  Cifras que importan
                </p>
                <h2
                  id="logros-heading"
                  className="font-heading text-[clamp(2.5rem,6vw,5rem)] leading-none text-balance"
                  style={{ color: 'var(--background)' }}
                >
                  LOGROS Y
                  <br />
                  REFERENCIAS
                </h2>
              </div>
              <p className="text-base max-w-sm leading-relaxed" style={{ color: 'oklch(0.98 0.005 100 / 60%)' }}>
                El bádminton mexicano se ha construido con esfuerzo, pasión y resultados que hablan por sí solos.
              </p>
            </div>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-px"
              style={{ background: 'oklch(0.98 0.005 100 / 10%)' }}
            >
              {achievementItems.map((item) => (
                <div key={item.number} className="p-8" style={{ background: 'var(--foreground)' }}>
                  <p className="font-heading text-5xl md:text-6xl mb-2" style={{ color: 'var(--accent)' }}>
                    {item.number}
                  </p>
                  <p className="font-semibold text-sm mb-2" style={{ color: 'var(--background)' }}>
                    {item.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'oklch(0.98 0.005 100 / 50%)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EQUIPAMIENTO ── */}
        <section className="max-w-7xl mx-auto px-6 py-24" aria-labelledby="equipo-heading">
          <div className="mb-14">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: 'var(--accent)' }}
            >
              Equipamiento
            </p>
            <h2
              id="equipo-heading"
              className="font-heading text-[clamp(2.5rem,6vw,5rem)] leading-none text-balance"
            >
              LOS CUATRO
              <br />
              ELEMENTOS DEL JUEGO
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipmentItems.map((item, i) => (
              <div
                key={item.title}
                className="relative p-8 rounded-2xl overflow-hidden"
                style={{
                  background: item.dark ? 'var(--primary)' : 'var(--card)',
                  color: item.dark ? 'var(--primary-foreground)' : 'var(--foreground)',
                }}
              >
                <div
                  className="absolute top-6 right-6 font-heading text-8xl leading-none opacity-10"
                  style={{ color: item.dark ? 'var(--primary-foreground)' : 'var(--primary)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <span
                  className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4"
                  style={{
                    background: item.dark ? 'oklch(1 0 0 / 15%)' : 'var(--secondary)',
                    color: item.dark ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                  }}
                >
                  {item.detail}
                </span>
                <h3 className="font-heading text-3xl mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl overflow-hidden relative h-64">
            <Image
              src="/images/equipamiento.png"
              alt="Equipamiento profesional de bádminton"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-foreground/35 flex items-center justify-center">
              <p className="font-heading text-4xl text-background tracking-widest text-center px-4">
                EQUIPO DE ALTO RENDIMIENTO
              </p>
            </div>
          </div>
        </section>

        {/* ── HECHOS 1 ── */}
        <section
          className="py-20"
          style={{ background: 'var(--secondary)' }}
          aria-labelledby="hechos1-heading"
        >
          <div className="max-w-7xl mx-auto px-6">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-2"
              style={{ color: 'var(--accent)' }}
            >
              ¿Sabías que?
            </p>
            <h2
              id="hechos1-heading"
              className="font-heading text-[clamp(2rem,4vw,3.5rem)] leading-none mb-12"
            >
              DATOS QUE SORPRENDEN
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {facts1.map((f) => (
                <div key={f.stat} className="flex flex-col gap-3">
                  <p className="font-heading text-6xl" style={{ color: 'var(--primary)' }}>
                    {f.stat}
                  </p>
                  <div className="w-12 h-0.5 rounded" style={{ background: 'var(--accent)' }} />
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REGLAS PREVIEW ── */}
        <section className="max-w-7xl mx-auto px-6 py-24" aria-labelledby="reglas-heading">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden min-h-80">
              <Image
                src="/images/cancha.png"
                alt="Cancha de bádminton vista aérea"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-foreground/50" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h2
                  id="reglas-heading"
                  className="font-heading text-[clamp(2.5rem,4vw,4rem)] leading-none mb-4"
                  style={{ color: 'var(--background)' }}
                >
                  REGLAS Y
                  <br />
                  DISCIPLINAS
                </h2>
                <p className="text-sm leading-relaxed max-w-sm mb-6" style={{ color: 'oklch(0.98 0.005 100 / 80%)' }}>
                  Simples, dobles y mixtos. Cada modalidad tiene sus propias estrategias y reglas que hacen del
                  bádminton un deporte de enorme riqueza táctica.
                </p>
                <Link
                  href="/reglas"
                  className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all hover:opacity-90"
                  style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
                >
                  Ver reglamento completo <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-4">
              {[
                {
                  title: 'Individuales',
                  desc: 'El duelo más puro: un jugador contra otro en una prueba de velocidad, resistencia y precisión.',
                },
                {
                  title: 'Dobles',
                  desc: 'La coordinación entre compañeros define el resultado. Rotaciones, coberturas y ataques sincronizados.',
                },
                {
                  title: 'Mixtos',
                  desc: 'La combinación de un hombre y una mujer en cancha genera una dinámica única y muy demandante.',
                },
              ].map((disc) => (
                <div
                  key={disc.title}
                  className="flex-1 p-6 rounded-xl border border-border hover:border-primary transition-colors"
                >
                  <h3 className="font-heading text-2xl mb-2">{disc.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{disc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TÉCNICA PREVIEW ── */}
        <section
          className="py-24"
          style={{ background: 'var(--card)' }}
          aria-labelledby="tecnica-heading"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p
                  className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                  style={{ color: 'var(--accent)' }}
                >
                  Técnica
                </p>
                <h2
                  id="tecnica-heading"
                  className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-6 text-balance"
                >
                  APRENDE,
                  <br />
                  MEJORA,
                  <br />
                  DOMINA
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  La técnica en bádminton marca la diferencia entre un jugador aficionado y uno competitivo. Desde
                  la postura base hasta los golpes más avanzados, cada detalle suma.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground mb-8">
                  Planes de entrenamiento, ejercicios de footwork, tácticas individuales y en dobles. Todo para
                  llevar tu nivel al siguiente peldaño.
                </p>
                <Link
                  href="/tecnica"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm tracking-wide rounded-full transition-all hover:opacity-90"
                  style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
                >
                  Ir a técnica y táctica <ArrowRight size={15} />
                </Link>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden max-h-96">
                <Image
                  src="/images/tecnica.png"
                  alt="Técnica de golpe en bádminton"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── HECHOS 2 ── */}
        <section className="py-20 overflow-hidden" aria-labelledby="hechos2-heading">
          <div className="max-w-7xl mx-auto px-6">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-2"
              style={{ color: 'var(--accent)' }}
            >
              Conoce más
            </p>
            <h2
              id="hechos2-heading"
              className="font-heading text-[clamp(2rem,4vw,3.5rem)] leading-none mb-12"
            >
              EL DEPORTE EN NÚMEROS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {facts2.map((f, i) => (
                <div
                  key={f.stat}
                  className="p-8 rounded-2xl"
                  style={{
                    background: i === 1 ? 'var(--accent)' : 'var(--secondary)',
                    color: i === 1 ? 'var(--accent-foreground)' : 'var(--foreground)',
                  }}
                >
                  <p
                    className="font-heading text-6xl mb-4"
                    style={{ color: i === 1 ? 'oklch(1 0 0 / 90%)' : 'var(--primary)' }}
                  >
                    {f.stat}
                  </p>
                  <p className="text-sm leading-relaxed opacity-80">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG PREVIEW ── */}
        <section className="max-w-7xl mx-auto px-6 py-24" aria-labelledby="blog-heading">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: 'var(--accent)' }}
              >
                Blog
              </p>
              <h2
                id="blog-heading"
                className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none text-balance"
              >
                ARTÍCULOS
                <br />
                RECIENTES
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 font-semibold text-sm tracking-wide group"
              style={{ color: 'var(--primary)' }}
            >
              Ver todos los artículos
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPreviews.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border hover:border-primary transition-colors bg-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl leading-tight mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">{post.excerpt}</p>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide"
                    style={{ color: 'var(--primary)' }}
                  >
                    Leer artículo <ChevronRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 sm:hidden text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-semibold text-sm"
              style={{ color: 'var(--primary)' }}
            >
              Ver todos los artículos <ChevronRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
