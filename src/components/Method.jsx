const steps = [
  {
    number: '01',
    title: 'Elige una sola cosa.',
    description:
      'Ese ejercicio pendiente, un capítulo o una idea. Dale a tu próxima sesión un objetivo pequeño y concreto.',
    detail: 'MENOS PESTAÑAS ABIERTAS',
  },
  {
    number: '02',
    title: 'Dale su momento.',
    description:
      'Reserva 25 minutos para avanzar sin saltar de una tarea a otra. El resto puede esperar un poco.',
    detail: 'MÁS ATENCIÓN AL PRESENTE',
  },
  {
    number: '03',
    title: 'Haz una pausa.',
    description:
      'Levántate, bebe agua y mira lejos de la pantalla. Descansar también forma parte del trabajo.',
    detail: 'UN RITMO QUE PUEDES MANTENER',
  },
]

export default function Method() {
  return (
    <section
      id="metodo"
      aria-labelledby="method-title"
      className="border-t border-line py-16 md:py-20 dark:border-mist/20"
    >
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-xs font-bold tracking-widest uppercase text-muted dark:text-mist">
            El método Pausa
          </p>
          <h2 id="method-title" className="font-display text-4xl md:text-5xl">
            Haz menos. Avanza mejor.
          </h2>
        </div>
        <p className="max-w-xs text-muted dark:text-mist">
          Sin listas infinitas ni rachas que perseguir. Solo un poco de
          intención.
        </p>
      </div>
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ number, title, description, detail }) => (
          <li
            key={number}
            className="rounded-card border border-line bg-white/60 p-7 dark:border-mist/20 dark:bg-panel"
          >
            <span className="mb-10 inline-flex size-11 items-center justify-center rounded-full border border-line font-display text-lg dark:border-mist/40">
              {number}
            </span>
            <h3 className="mb-3 text-xl font-semibold">{title}</h3>
            <p className="leading-relaxed text-muted dark:text-mist">
              {description}
            </p>
            <p className="mt-8 text-xs font-semibold tracking-wider text-moss dark:text-leaf">
              {detail}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
