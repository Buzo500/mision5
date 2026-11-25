# Pausa · Misión 5

Landing de un producto inventado: una aplicación de concentración para estudiantes.
Incluye una demo local de sesiones de 25 minutos y descansos de 5 minutos.

## Puesta en marcha

Requisitos: Node.js 22.12 o superior y npm.

```bash
npm install
npm run dev
```

Abre la dirección que muestre Vite en la terminal.

```bash
npm run lint
npm run build
npm run preview
```

`build` genera `dist/`. Ni esa carpeta ni `node_modules/` se incluyen en Git.
No hace falta configurar claves, variables de entorno ni servicios externos.

## Tecnología y estructura

React con componentes funcionales, JavaScript con módulos ES, Vite y Tailwind CSS v4.
La configuración de Tailwind está en `src/index.css`: `@import`, `@theme` y
`@custom-variant`. No hay `tailwind.config.js`, Bootstrap ni un CDN de Tailwind.

```text
src/
  main.jsx                   Entrada y StrictMode
  App.jsx                    Composición de la landing
  index.css                  Tokens, animación y estilos base
  components/
    Header.jsx               Marca y navegación
    Hero.jsx                 Presentación e ilustración SVG decorativa
    ActionLink.jsx           Enlace de llamada a la acción
    Method.jsx               Pasos del método
    FocusDemo.jsx            Temporizador con estado local
    ThemeToggle.jsx          Tema y persistencia
    Questions.jsx            Preguntas con details/summary
    Footer.jsx               Cierre y vuelta al inicio
```

## Diseño y relación con la rúbrica

| Apartado | Implementación |
| --- | --- |
| Mobile-first | Una columna por defecto; tarjetas en dos columnas desde `md` y tres desde `lg`; portada y demo en dos desde `lg`. Tipografía ajustada en `md` y `xl`. |
| Sistema de diseño | Colores `paper`, `ink`, `leaf`, `moss`, `night`, `panel`, `mist`; fuente de títulos; radio `card` y sombra `card` definidos en `@theme`. Espaciado con la escala de Tailwind. |
| Flexbox y Grid | Flex para navegación y acciones; Grid para portada, tarjetas, demo y preguntas. Sin posicionamiento absoluto para maquetar. |
| Modo oscuro | Variantes `dark:` activadas con `.dark` en `html`; inicialmente usa la preferencia guardada o la del sistema. El botón permite cambiarla. |
| Dirección visual | Identidad propia en crema y verde, títulos serif, composición editorial e ilustración vegetal SVG incluida en el código. Sin imágenes ni fuentes remotas. |
| Bonus | `--animate-enter` y `@keyframes enter` en `@theme`, usados con `motion-safe:animate-enter`. |

## Buenas prácticas de los apuntes

- Componentes separados por responsabilidad; listas con `map` y claves estables.
- `const`, nombres descriptivos, comparación estricta y actualización del estado sin mutaciones.
- `useEffect` solo para sincronizar el tema y gestionar el intervalo; limpieza con `clearInterval`.
- Minutos, segundos y mensajes derivados del estado, sin efectos adicionales.
- HTML semántico, enlace para saltar al contenido, botones nativos y foco visible.
- Botones con altura mínima de 44 píxeles, estados `aria-pressed` y aviso final con `role="status"`.
- El lector de pantalla no anuncia cada segundo del temporizador.
- Animación y desplazamiento respetan `prefers-reduced-motion`.
- No se insertan cadenas mediante `innerHTML`, ni se guardan datos personales.
- No hay peticiones ni formularios: RHF, Zod y TanStack Query no son necesarios para esta landing.

## Comportamiento y límites

- Empezar, pausar, reanudar y reiniciar el temporizador.
- Cambiar de concentración a descanso reinicia la sesión; no cambia de modo automáticamente.
- El contador se calcula a partir de una fecha límite para evitar acumular retraso entre ticks.
- Al llegar a cero se detiene y muestra un mensaje. Reiniciar permite empezar de nuevo.
- Las sesiones se pierden al recargar. Solo se persiste el tema, si el navegador lo permite.
- No hay alarmas del sistema, cuentas, backend ni sincronización. Es una demo académica.

## Comprobación manual

1. Revisar a 360, 768 y 1280 px, tanto en claro como en oscuro: sin desbordamiento horizontal, texto legible y controles accesibles.
2. Recorrer con Tab: salto al contenido, navegación, tema, botones y preguntas. Activar controles con teclado.
3. Probar empezar, pausar, reanudar, reiniciar y cambiar de modo; comprobar que pausar detiene el avance.
4. Cambiar el tema y recargar; probar también con almacenamiento bloqueado.
5. Activar reducción de movimiento: la entrada debe quedar sin animación.
6. Abrir las preguntas y comprobar todos los enlaces internos.

## Uso de IA

<!-- Pendiente de completar por el autor. -->

## Autopsia

### 1. Tema manual con preferencia guardada

Se usa una clase en `html` para que el botón controle todas las variantes `dark:`.
La alternativa era depender únicamente del tema del sistema, que habría ahorrado
JavaScript, pero no permitiría probar ambos diseños desde la página. La preferencia
del sistema solo se consulta al iniciar si no existe una elección guardada; no se
añade una suscripción a sus cambios para mantener sencilla la implementación.

### 2. Demo funcional dentro de una landing

Se incluye un temporizador pequeño para que la llamada a la acción tenga un destino
útil. La alternativa era una captura estática, más simple pero sin interacción.
Se limita deliberadamente el alcance a dos duraciones y estado local: guardar
sesiones o añadir cuentas y estadísticas complicaría una práctica centrada en
maquetación. Se usa una fecha límite en lugar de restar uno en cada tick para no
acumular el retraso del navegador, aunque el cierre de la página pierde la sesión.
