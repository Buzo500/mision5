# Pausa · Misión 5

Landing de un producto inventado: una aplicación de concentración para estudiantes.
Incluye una demo local de sesiones de 25 minutos y descansos de 5 minutos.

## Ejecutar y comprobar

```bash
npm ci
npm run dev
```

Comprobaciones realizadas tras la revisión de la rúbrica: `npm run lint`,
`npm run build` y `npm run format:check`. Prettier ordena también las clases
Tailwind teniendo en cuenta los tokens de `src/index.css`.

El tema se aplica desde el `head`, antes de React. Se han comprobado seis casos
del script inicial: claro/oscuro guardados, preferencia del sistema en ambos
modos, valor guardado inválido y almacenamiento bloqueado.

La portada usa dos columnas desde 768 px y un título de 48/56/80 px según el
ancho. Los títulos fluyen con `text-balance`, sin saltos `<br>`. El SVG y sus
variantes oscuras usan tokens, igual que las superficies y los estados hover.

Contraste calculado con la fórmula de luminancia relativa: `ink` sobre `line`
en el hover del selector, `mist` sobre `panel` y `ink` sobre `leaf-hover`
superan 4,5:1. Esto comprueba esos pares concretos, no toda la accesibilidad.

**Revisión visual pendiente:** el navegador de este entorno no puede acceder
al servidor local. Antes de entregar hay que revisar 360, 768 y 1280 px en
claro y oscuro, comprobar desbordamientos y probar navegación por teclado,
temporizador y recarga con tema guardado. No se presentan capturas ni se da
esta revisión por superada.

## Uso de IA

Le pregunté a la IA qué ideas me podría dar para hacer esta Misión. Me dio varias pero al final me quedé con esta.

""Dame ideas para hacer un programa usando tailwind, no escribas nada de codigo, solo una idea""

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
