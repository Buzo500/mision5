import Header from './components/Header'
import Hero from './components/Hero'

export default function App() {
  return (
    <div id="inicio" className="min-h-screen bg-paper text-ink antialiased dark:bg-night dark:text-paper">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:block focus:p-4">Saltar al contenido</a>
      <Header />
      <main id="contenido" className="mx-auto max-w-6xl px-6"><Hero /></main>
    </div>
  )
}
