const questions = [
  {
    question: '¿Necesito registrarme para probarlo?',
    answer:
      'No. Puedes usar el temporizador de esta página directamente. No pedimos correo ni guardamos tus sesiones.',
  },
  {
    question: '¿Por qué sesiones de 25 minutos?',
    answer:
      'Es un punto de partida sencillo del método Pomodoro: un bloque corto de concentración seguido de un descanso. No es una regla universal; adapta el ritmo a lo que necesites.',
  },
  {
    question: '¿Pausa es una aplicación real?',
    answer:
      'Pausa es un producto inventado para esta práctica. Esta landing incluye una demo funcional de concentración y descanso, pero no ofrece cuentas, estadísticas ni sincronización.',
  },
  {
    question: '¿Qué ocurre si cierro la página?',
    answer:
      'La sesión se reinicia al cerrar o recargar. Solo se recuerda tu elección de tema en este navegador, si permite el almacenamiento local.',
  },
]

export default function Questions() {
  return (
    <section
      id="preguntas"
      aria-labelledby="questions-title"
      className="grid gap-8 py-section md:py-section-wide lg:grid-cols-2 lg:gap-16"
    >
      <div>
        <p className="mb-3 text-xs font-bold tracking-widest text-muted uppercase dark:text-mist">
          Por si te lo preguntas
        </p>
        <h2
          id="questions-title"
          className="max-w-sm font-display text-4xl text-balance md:text-5xl"
        >
          Todo un poco más sencillo.
        </h2>
      </div>
      <div className="border-t border-line dark:border-mist/20">
        {questions.map(({ question, answer }) => (
          <details
            key={question}
            className="border-b border-line py-2 dark:border-mist/20"
          >
            <summary className="min-h-12 py-3 font-semibold">
              {question}
            </summary>
            <p className="pb-5 leading-relaxed text-muted dark:text-mist">
              {answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
