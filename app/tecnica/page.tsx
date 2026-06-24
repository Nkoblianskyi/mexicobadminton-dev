import type { Metadata } from 'next'
import Image from 'next/image'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Técnica, Táctica y Entrenamiento',
  description:
    'Guía completa de técnica y táctica para bádminton: golpes fundamentales, footwork, planes de entrenamiento, ejercicios específicos y consejos para mejorar tu juego.',
}

const strokes = [
  {
    name: 'Clear',
    type: 'Golpe alto',
    desc: 'El golpe defensivo por excelencia. Envía el volante hacia el fondo de la cancha contraria en trayectoria alta, ganando tiempo para recuperar la posición central.',
    tip: 'Gira el antebrazo en el momento del impacto para dar potencia sin sacrificar control.',
  },
  {
    name: 'Smash',
    type: 'Ataque',
    desc: 'El golpe más potente del bádminton. Se ejecuta desde una posición alta sobre la cabeza y busca que el volante caiga en picada sobre la cancha del rival a la mayor velocidad posible.',
    tip: 'La cadena cinética es clave: piernas, cadera, torso, brazo. No es solo fuerza de brazo.',
  },
  {
    name: 'Drop',
    type: 'Colocación',
    desc: 'Golpe de precisión que hace caer el volante justo detrás de la red del rival. Rompe el ritmo del adversario y obliga a una respuesta difícil desde la red.',
    tip: 'Simula el inicio del smash para engañar al rival antes de suavizar el golpe.',
  },
  {
    name: 'Net Shot',
    type: 'Red',
    desc: 'Jugada delicada ejecutada cerca de la red, haciendo que el volante apenas ruede por encima y caiga lo más pegado posible al pie de la red contraria.',
    tip: 'La presión de los dedos sobre el mango controla la potencia. Usa la muñeca, no el brazo.',
  },
  {
    name: 'Drive',
    type: 'Rápido',
    desc: 'Intercambio rápido y horizontal a media altura. Muy utilizado en dobles para presionar al rival con una sucesión de golpes planos y veloces.',
    tip: 'Mantén la raqueta elevada entre golpes para reducir el tiempo de reacción.',
  },
  {
    name: 'Lob / Globo',
    type: 'Defensa',
    desc: 'Respuesta defensiva desde la zona delantera que eleva el volante hacia el fondo de la cancha contraria. Permite salir de situaciones comprometidas cerca de la red.',
    tip: 'Dirígelo hacia las esquinas del fondo para alejar al rival del centro.',
  },
]

const footworkDrills = [
  {
    name: 'Los Seis Puntos',
    reps: '3 x 90 seg',
    desc: 'Desplázate desde el centro a cada uno de los seis vértices de la cancha y regresa al centro tras cada movimiento. Desarrolla la agilidad multidireccional y la memoria muscular del footwork.',
  },
  {
    name: 'Zancada de Red',
    reps: '4 x 12 rep.',
    desc: 'Desde el centro, adelanta la pierna dominante hacia la esquina delantera, ejecuta el gesto de red y regresa al centro con pasos de recuperación. Entrena la llegada controlada a la red.',
  },
  {
    name: 'Salto con Rotación',
    reps: '3 x 8 rep.',
    desc: 'Practica el salto de smash con giro de cadera y aterrizaje equilibrado. Esencial para trasladar potencia al golpe sin perder el control postural después del impacto.',
  },
  {
    name: 'Desplazamiento Lateral Rápido',
    reps: '5 x 20 m',
    desc: 'Pasos laterales de chasse hacia cada esquina trasera seguidos de un gesto de clear. Fundamental para cubrir el fondo de la cancha en simples.',
  },
]

const trainingPlan = [
  { day: 'Lunes', focus: 'Técnica individual', content: 'Trabajo de golpes fundamentales con carro de volantes. 45 min de sombra técnica. Fundamentos del smash.' },
  { day: 'Martes', focus: 'Físico', content: 'Agilidad: escalera de coordinación, conos, sprints cortos. Trabajo de core y movilidad de cadera.' },
  { day: 'Miércoles', focus: 'Táctica y peloteo', content: 'Ejercicios de peloteo controlado. Patrones de 2 contra 1. Análisis de situaciones de juego real.' },
  { day: 'Jueves', focus: 'Descanso activo', content: 'Movilidad articular, elongación, natación suave o bicicleta estática a baja intensidad.' },
  { day: 'Viernes', focus: 'Partidos de práctica', content: 'Sets completos con aplicación de patrones tácticos trabajados en la semana. Enfoque en toma de decisiones.' },
  { day: 'Sábado', focus: 'Potencia y velocidad', content: 'Pliometría, saltos de caja, multisaltos. Sprints de 10 m. Trabajo de reacción con estímulos visuales.' },
  { day: 'Domingo', focus: 'Recuperación', content: 'Descanso total o sesión muy ligera de estiramientos. Hidratación y nutrición de recuperación.' },
]

const tactics = [
  {
    title: 'Control del Centro',
    body: 'El jugador que domina el centro de la cancha controla el juego. Después de cada golpe, el objetivo es regresar al punto central para tener el menor recorrido posible hacia cualquier rincón.',
  },
  {
    title: 'Presión Vertical',
    body: 'Alternar entre drops cortos y clears profundos obliga al rival a desplazarse constantemente hacia adelante y hacia atrás, agotándolo físicamente y abriendo espacios laterales.',
  },
  {
    title: 'Variación de Ritmo',
    body: 'Cambiar la velocidad y la trayectoria de los golpes desestabiliza al rival. Un jugador predecible es fácil de contrarrestar; la variación rompe los patrones defensivos.',
  },
  {
    title: 'Ataque a los Pies',
    body: 'En dobles y en situaciones específicas de simples, dirigir el volante a los pies del rival cuando está cerca de la red reduce su ángulo de respuesta y genera errores forzados.',
  },
]

export default function TecnicaPage() {
  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
          <Image
            src="/images/tecnica.png"
            alt="Técnica de bádminton"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/55" />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/3"
            style={{ background: 'linear-gradient(to top, var(--background), transparent)' }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Técnica y táctica
            </p>
            <h1 className="font-heading text-[clamp(3rem,8vw,7rem)] leading-none text-balance" style={{ color: 'var(--background)' }}>
              DOMINA EL JUEGO
            </h1>
          </div>
        </section>

        {/* Golpes fundamentales */}
        <section className="max-w-7xl mx-auto px-6 py-20" aria-labelledby="golpes-heading">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            Golpes
          </p>
          <h2 id="golpes-heading" className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none mb-14">
            GOLPES FUNDAMENTALES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {strokes.map((s, i) => (
              <article
                key={s.name}
                className="p-7 rounded-2xl border border-border flex flex-col gap-3 hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-heading text-3xl">{s.name}</h3>
                  <span
                    className="text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full mt-1"
                    style={{ background: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--secondary)' : 'var(--card)', color: i % 3 === 0 ? 'var(--primary-foreground)' : 'var(--muted-foreground)' }}
                  >
                    {s.type}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">{s.desc}</p>
                <div className="pt-3 border-t border-border">
                  <p className="text-xs font-semibold tracking-wide mb-1" style={{ color: 'var(--primary)' }}>
                    Consejo técnico
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{s.tip}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footwork */}
        <section className="py-20" style={{ background: 'var(--foreground)', color: 'var(--background)' }} aria-labelledby="footwork-heading">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Ejercicios
            </p>
            <h2 id="footwork-heading" className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none mb-14" style={{ color: 'var(--background)' }}>
              FOOTWORK Y DESPLAZAMIENTO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {footworkDrills.map((d) => (
                <div key={d.name} className="p-7 rounded-2xl" style={{ background: 'oklch(0.98 0.005 100 / 5%)' }}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading text-2xl" style={{ color: 'var(--background)' }}>{d.name}</h3>
                    <span className="font-heading text-xl" style={{ color: 'oklch(0.62 0.18 34)' }}>{d.reps}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.98 0.005 100 / 65%)' }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan semanal */}
        <section className="max-w-7xl mx-auto px-6 py-20" aria-labelledby="plan-heading">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
            Planificación
          </p>
          <h2 id="plan-heading" className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none mb-12">
            PLAN DE ENTRENAMIENTO SEMANAL
          </h2>
          <div className="flex flex-col gap-3">
            {trainingPlan.map((day, i) => (
              <div
                key={day.day}
                className="grid grid-cols-1 md:grid-cols-[8rem_14rem_1fr] gap-4 md:gap-6 p-6 rounded-xl border border-border items-start"
                style={i === 3 ? { background: 'var(--secondary)', borderColor: 'transparent' } : {}}
              >
                <p className="font-heading text-2xl" style={{ color: 'var(--primary)' }}>{day.day}</p>
                <p className="font-semibold text-sm tracking-wide">{day.focus}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{day.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Táctica */}
        <section className="py-20" style={{ background: 'var(--secondary)' }} aria-labelledby="tactica-heading">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
              Táctica
            </p>
            <h2 id="tactica-heading" className="font-heading text-[clamp(2.5rem,5vw,4rem)] leading-none mb-14">
              PRINCIPIOS TÁCTICOS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tactics.map((t, i) => (
                <div key={t.title} className="p-8 rounded-2xl bg-background border border-border">
                  <span
                    className="font-heading text-5xl block mb-3 leading-none"
                    style={{ color: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)', opacity: 0.25 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-3xl mb-4">{t.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t.body}</p>
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
