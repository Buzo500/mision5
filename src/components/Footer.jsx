export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-4 border-t border-line px-6 py-8 text-sm md:flex-row md:items-center dark:border-mist/20">
      <p className="text-lg font-bold">Ⅱ pausa <span className="ml-3 text-sm font-normal text-muted dark:text-mist">A tu ritmo está bien.</span></p>
      <p className="text-muted dark:text-mist">Proyecto académico · Misión 5 · 2026</p>
      <a href="#inicio" className="inline-flex min-h-11 items-center underline underline-offset-4">Volver arriba ↑</a>
    </footer>
  )
}
