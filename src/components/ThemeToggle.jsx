import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  // El script del head ya ha resuelto la preferencia antes del primer render.
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
    const background = getComputedStyle(document.documentElement)
      .getPropertyValue(theme === 'dark' ? '--color-night' : '--color-paper')
      .trim()
    document.querySelector('meta[name="theme-color"]').content = background
    try {
      localStorage.setItem('pausa-theme', theme)
    } catch {
      // Persistir es opcional: no impide cambiar el tema de la sesión actual.
    }
  }, [theme])

  return (
    <button
      type="button"
      aria-label="Modo oscuro"
      aria-pressed={theme === 'dark'}
      onClick={() =>
        setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
      }
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm hover:bg-surface dark:border-mist/40 dark:hover:bg-panel"
    >
      <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
      <span>Tema</span>
    </button>
  )
}
