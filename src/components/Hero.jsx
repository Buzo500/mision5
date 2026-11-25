import ActionLink from './ActionLink'

export default function Hero() {
  return (
    <section className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
      <div className="motion-safe:animate-enter">
        <p className="mb-6 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
          <span className="size-2 rounded-full bg-moss dark:bg-leaf" />
          Un pequeño espacio para concentrarte
        </p>
        <h1 className="font-display text-6xl leading-none tracking-tight md:text-7xl xl:text-8xl">
          Menos ruido.
          <br />
          Más <em className="font-normal text-moss dark:text-leaf">foco.</em>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted dark:text-mist">
          No necesitas hacerlo todo a la vez. Encuentra tu ritmo, dedica un rato
          a lo importante y deja espacio para respirar.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <ActionLink href="#demo">Encuentra tu foco</ActionLink>
          <span className="text-sm text-muted dark:text-mist">
            Sin cuenta. Sin distracciones.
          </span>
        </div>
        <p className="mt-12 text-xs tracking-widest uppercase text-muted dark:text-mist">
          Hecho para estudiar a tu manera
        </p>
      </div>
      <div className="rounded-card bg-leaf p-6 text-ink shadow-card md:p-10 motion-safe:animate-enter">
        <div className="flex items-center justify-between text-xs font-semibold tracking-widest uppercase">
          <span>Tu espacio de calma</span>
          <span aria-hidden="true">↗</span>
        </div>
        <div aria-hidden="true" className="my-8 flex justify-center">
          <svg viewBox="0 0 320 240" className="w-full max-w-xs" fill="none">
            <circle
              cx="160"
              cy="120"
              r="105"
              stroke="currentColor"
              strokeOpacity=".2"
            />
            <circle
              cx="160"
              cy="120"
              r="80"
              stroke="currentColor"
              strokeOpacity=".2"
            />
            <path
              d="M160 207V105M160 154C92 155 73 109 78 67C129 65 164 102 160 154ZM160 121C161 65 197 36 244 40C244 88 212 123 160 121Z"
              fill="#35634b"
            />
            <path
              d="M160 154L99 90M160 121L222 60"
              stroke="#d4ed88"
              strokeWidth="2"
            />
            <path
              d="M129 207H191"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="border-t border-ink/25 pt-5">
          <p className="font-display text-3xl">
            El progreso también
            <br />
            crece con calma.
          </p>
          <p className="mt-3 text-sm">Una tarea. Un momento. Un paso más.</p>
        </div>
      </div>
    </section>
  )
}
