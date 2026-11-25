import { useEffect, useRef, useState } from 'react'

const modes = [
  { id: 'focus', label: 'Concentración', seconds: 25 * 60 },
  { id: 'rest', label: 'Descanso', seconds: 5 * 60 },
]

export default function FocusDemo() {
  const [mode, setMode] = useState(modes[0])
  const [remaining, setRemaining] = useState(modes[0].seconds)
  const [running, setRunning] = useState(false)
  const deadline = useRef(0)

  useEffect(() => {
    if (!running) return
    const intervalId = window.setInterval(() => {
      // Una fecha límite evita acumular retraso si el navegador ralentiza la pestaña.
      const nextRemaining = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000))
      setRemaining(nextRemaining)
      if (nextRemaining === 0) setRunning(false)
    }, 250)
    return () => window.clearInterval(intervalId)
  }, [running])

  function selectMode(nextMode) {
    setMode(nextMode)
    setRunning(false)
    setRemaining(nextMode.seconds)
  }

  function toggleTimer() {
    if (running) {
      setRemaining(Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000)))
      setRunning(false)
    } else {
      deadline.current = Date.now() + remaining * 1000
      setRunning(true)
    }
  }

  const minutes = String(Math.floor(remaining / 60)).padStart(2, '0')
  const seconds = String(remaining % 60).padStart(2, '0')
  const status = remaining === 0 ? 'Sesión terminada. Tómate un momento para respirar.' : running ? 'Sesión en marcha. Una cosa cada vez.' : 'Cuando quieras, este rato es para ti.'

  return (
    <section id="demo" aria-labelledby="demo-title" className="grid items-center gap-10 rounded-card bg-ink p-6 text-paper md:p-12 lg:grid-cols-2 dark:bg-panel">
      <div><p className="mb-4 text-xs font-bold tracking-widest uppercase text-leaf">Pruébalo aquí mismo</p><h2 id="demo-title" className="font-display text-4xl leading-tight md:text-5xl">Tu siguiente paso<br />empieza con una pausa.</h2><p className="mt-5 max-w-sm leading-relaxed text-mist">Piensa en una tarea, aparta el móvil y empieza. Cuando termines, cambia a descanso. Así de simple.</p><p className="mt-8 text-sm text-mist">Demo local · Sin registro ni envío de datos</p></div>
      <div className="rounded-card bg-paper p-5 text-center text-ink md:p-8 dark:bg-night dark:text-paper">
        <div role="group" aria-label="Tipo de sesión" className="flex flex-wrap justify-center gap-2">
          {modes.map(item => <button type="button" key={item.id} aria-pressed={mode.id === item.id} onClick={() => selectMode(item)} className={`min-h-11 rounded-full px-4 text-sm font-semibold ${mode.id === item.id ? 'bg-ink text-paper dark:bg-leaf dark:text-ink' : 'text-muted hover:bg-line dark:text-mist dark:hover:bg-panel'}`}>{item.label}</button>)}
        </div>
        <p role="timer" aria-label={`${minutes} minutos y ${seconds} segundos restantes`} className="my-8 font-display text-7xl tracking-tight tabular-nums md:text-8xl">{minutes}:{seconds}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button type="button" disabled={remaining === 0} onClick={toggleTimer} className="min-h-12 rounded-full bg-leaf px-7 font-semibold text-ink hover:bg-leaf/80 disabled:cursor-not-allowed disabled:opacity-50">{running ? 'Pausar' : 'Empezar'}</button>
          <button type="button" onClick={() => selectMode(mode)} className="min-h-12 rounded-full border border-muted px-5 text-sm hover:bg-line dark:border-mist dark:hover:bg-panel">Reiniciar</button>
        </div>
        <p role="status" className="mt-5 min-h-10 text-sm text-muted dark:text-mist">{status}</p>
      </div>
    </section>
  )
}
