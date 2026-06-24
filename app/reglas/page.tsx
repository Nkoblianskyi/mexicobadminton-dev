import type { Metadata } from 'next'
import Image from 'next/image'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Reglas del Juego y Disciplinas',
  description:
    'Conoce todas las reglas del bádminton: puntuación, sistemas de juego, disciplinas (simples, dobles y mixtos), faltas y el reglamento completo vigente.',
}

const disciplines = [
  {
    name: 'Simples Masculino',
    desc: 'Uno contra uno. La modalidad que más exige en términos físicos y técnicos. La movilidad y el control del centro de la cancha son cruciales.',
  },
  {
    name: 'Simples Femenino',
    desc: 'Caracterizado por un juego más táctico y de mayor continuidad de peloteo que el masculino. La colocación y la variación de ritmo son determinantes.',
  },
  {
    name: 'Dobles Masculino',
    desc: 'Velocidad e intensidad al máximo. Los intercambios son más cortos y directos. La coordinación entre pareja es la clave del éxito.',
  },
  {
    name: 'Dobles Femenino',
    desc: 'Requiere una lectura constante del juego y una comunicación permanente entre jugadoras. El posicionamiento y las coberturas definen las parejas ganadoras.',
  },
  {
    name: 'Dobles Mixto',
    desc: 'La disciplina de mayor complejidad táctica. Combina las fortalezas físicas y técnicas de hombre y mujer en una dinámica de juego única.',
  },
]

const scoringRules = [
  'Un partido se disputa al mejor de tres sets.',
  'Cada set se gana llegando primero a 21 puntos con al menos 2 puntos de ventaja.',
  'En caso de empate 20-20, el juego continúa hasta que un jugador logre 2 puntos de diferencia.',
  'Si el marcador llega a 29-29, el siguiente punto define el ganador del set (punto de oro).',
  'Cada vez que el volante toca el suelo se anota un punto, sin importar quién sirvió.',
  'El saque siempre corresponde al equipo o jugador que ganó el punto anterior.',
  'Entre el primer y segundo set hay un descanso de 2 minutos. Si se disputa tercer set, también.',
  'Al llegar cualquier jugador a 11 puntos en el tercer set, hay un breve descanso de 1 minuto.',
]

const faults = [
  { title: 'Falta de Saque', desc: 'El saque debe ejecutarse por debajo de la cintura del sacador con el golpe inicial hacia arriba.' },
  { title: 'Volante Fuera', desc: 'Si el volante cae fuera de los límites de la cancha, se concede el punto al rival.' },
  { title: 'Red', desc: 'Si el volante toca la red durante el saque o durante el juego y no la supera, es falta.' },
  { title: 'Doble Golpe', desc: 'No está permitido golpear el volante dos veces seguidas con la misma raqueta.' },
  { title: 'Invasión de Campo', desc: 'Ningún jugador puede tocar o cruzar la red con la raqueta ni con el cuerpo durante el juego.' },
  { title: 'Obstrucción', desc: 'Cualquier acción que interfiera deliberadamente con el movimiento del rival es considerada falta.' },
]

const courtZones = [
  { zone: 'Línea de fondo', measure: '13.4 m (dobles) / 11.88 m (simples)', note: 'Límite posterior de la zona de juego.' },
  { zone: 'Línea lateral dobles', measure: '6.1 m de ancho', note: 'Cancha más ancha en dobles.' },
  { zone: 'Línea lateral simples', measure: '5.18 m de ancho', note: 'Cancha más estrecha para individuales.' },
  { zone: 'Línea corta de saque', measure: '1.98 m desde la red', note: 'El volante debe caer detrás de esta línea en el saque.' },
  { zone: 'Altura de la red', measure: '1.55 m en postes / 1.52 m al centro', note: 'La red es ligeramente más baja en el centro.' },
]

export default function ReglasPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
          <Image
            src="/images/cancha.png"
            alt="Cancha oficial de bádminton"
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
              Reglamento
            </p>
            <h1
              className="font-heading text-[clamp(3rem,8vw,7rem)] leading-none text-balance"
              style={{ color: 'var(--background)' }}
            >
              REGLAS Y<br />
              <span style={{ color: 'oklch(0.62 0.18 34)' }}>DISCIPLINAS</span>
            </h1>
          </div>
        </section>

        {/* Disciplinas */}
        <section className="max-w-7xl mx-auto px-6 py-20" aria-labelledby="disc-heading">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            Modalidades oficiales
          </p>
          <h2 id="disc-heading" className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none mb-14">
            LAS CINCO DISCIPLINAS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {disciplines.map((d, i) => (
              <div
                key={d.name}
                className="p-8 rounded-2xl border border-border"
                style={i === 0 ? { background: 'var(--primary)', color: 'var(--primary-foreground)', borderColor: 'var(--primary)' } : {}}
              >
                <span
                  className="font-heading text-5xl"
                  style={{ color: i === 0 ? 'oklch(1 0 0 / 25%)' : 'var(--border)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-2xl mt-3 mb-3">{d.name}</h3>
                <p className="text-sm leading-relaxed" style={{ opacity: i === 0 ? 0.85 : 1, color: i === 0 ? 'var(--primary-foreground)' : undefined }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sistema de puntuación */}
        <section className="py-20" style={{ background: 'var(--secondary)' }} aria-labelledby="scoring-heading">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
              Puntuación
            </p>
            <h2 id="scoring-heading" className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none mb-12">
              SISTEMA DE PUNTUACIÓN
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {scoringRules.map((rule, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl bg-background border border-border">
                  <span
                    className="font-heading text-3xl leading-none flex-shrink-0 w-10"
                    style={{ color: 'var(--primary)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground pt-1">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medidas de la cancha */}
        <section className="max-w-7xl mx-auto px-6 py-20" aria-labelledby="court-heading">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            La cancha
          </p>
          <h2 id="court-heading" className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none mb-12">
            DIMENSIONES OFICIALES
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'var(--foreground)', color: 'var(--background)' }}>
                  <th className="text-left px-6 py-4 font-semibold tracking-wide">Zona / Elemento</th>
                  <th className="text-left px-6 py-4 font-semibold tracking-wide">Medida</th>
                  <th className="text-left px-6 py-4 font-semibold tracking-wide hidden md:table-cell">Nota</th>
                </tr>
              </thead>
              <tbody>
                {courtZones.map((row, i) => (
                  <tr key={row.zone} style={{ background: i % 2 === 0 ? 'var(--card)' : 'var(--background)' }}>
                    <td className="px-6 py-4 font-medium">{row.zone}</td>
                    <td className="px-6 py-4 font-heading text-lg" style={{ color: 'var(--primary)' }}>
                      {row.measure}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Faltas */}
        <section
          className="py-20"
          style={{ background: 'var(--foreground)', color: 'var(--background)' }}
          aria-labelledby="faltas-heading"
        >
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Infracciones
            </p>
            <h2
              id="faltas-heading"
              className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none mb-14"
              style={{ color: 'var(--background)' }}
            >
              FALTAS REGLAMENTARIAS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {faults.map((f) => (
                <div key={f.title} className="p-6 rounded-xl" style={{ background: 'oklch(0.98 0.005 100 / 5%)' }}>
                  <h3
                    className="font-heading text-2xl mb-3"
                    style={{ color: 'oklch(0.62 0.18 34)' }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.98 0.005 100 / 65%)' }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
