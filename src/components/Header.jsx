import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-b border-line px-6 py-5 dark:border-mist/20">
      <a
        href="#inicio"
        aria-label="Pausa, inicio"
        className="flex min-h-11 items-center gap-2 text-2xl font-bold tracking-tight"
      >
        <span
          aria-hidden="true"
          className="flex size-8 items-center justify-center rounded-full bg-ink text-base text-leaf dark:bg-leaf dark:text-ink"
        >
          Ⅱ
        </span>
        pausa
      </a>
      <nav
        aria-label="Navegación principal"
        className="order-last flex w-full flex-wrap items-center justify-between gap-4 text-sm font-medium md:order-none md:w-auto md:gap-8"
      >
        <a
          className="inline-flex min-h-11 items-center hover:underline"
          href="#metodo"
        >
          El método
        </a>
        <a
          className="inline-flex min-h-11 items-center hover:underline"
          href="#preguntas"
        >
          Preguntas
        </a>
        <a
          className="inline-flex min-h-11 items-center hover:underline"
          href="#demo"
        >
          Pruébalo ↗
        </a>
      </nav>
      <ThemeToggle />
    </header>
  )
}
