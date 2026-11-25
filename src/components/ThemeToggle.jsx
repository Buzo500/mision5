import { useEffect, useState } from 'react'

function readTheme() {
  try {
    const savedTheme = localStorage.getItem('pausa-theme')
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
  } catch {
    // El tema sigue funcionando aunque el navegador bloquee el almacenamiento.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
    try {
      localStorage.setItem('pausa-theme', theme)
    } catch {
      // Persistir es opcional: no impide cambiar el tema de la sesión actual.
    }
  }, [theme])

  return (
    <button type="button" aria-label="Modo oscuro" aria-pressed={theme === 'dark'} onClick={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm hover:bg-white dark:border-mist/40 dark:hover:bg-panel">
      <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span><span>Tema</span>
    </button>
  )
}
