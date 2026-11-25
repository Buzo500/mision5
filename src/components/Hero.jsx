import ActionLink from './ActionLink'

export default function Hero() {
  return (
    <section className="grid items-center gap-10 py-section md:grid-cols-2 md:gap-8 md:py-section-wide lg:gap-16">
      <div className="motion-safe:animate-enter">
        <p className="mb-6 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
          <span className="size-2 rounded-full bg-moss dark:bg-leaf" />
          Un pequeño espacio para concentrarte
        </p>
        <h1 className="max-w-lg font-display text-hero tracking-tight text-balance md:text-hero-tablet xl:text-hero-desktop">
          Menos ruido. Más{' '}
          <em className="font-normal text-moss dark:text-leaf">foco.</em>
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
        <p className="mt-12 text-xs tracking-widest text-muted uppercase dark:text-mist">
          Hecho para estudiar a tu manera
        </p>
      </div>
      <div className="w-full max-w-lg justify-self-center rounded-card bg-leaf p-6 text-ink shadow-card motion-safe:animate-enter lg:p-10 dark:bg-panel dark:text-paper">
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
              className="fill-moss dark:fill-leaf"
            />
            <path
              d="M160 154L99 90M160 121L222 60"
              className="stroke-leaf dark:stroke-panel"
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
        <div className="border-t border-ink/25 pt-5 dark:border-mist/30">
          <p className="max-w-xs font-display text-3xl text-balance">
            El progreso también crece con calma.
          </p>
          <p className="mt-3 text-sm">Una tarea. Un momento. Un paso más.</p>
        </div>
      </div>
    </section>
  )
}
