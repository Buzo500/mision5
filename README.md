# Pausa · Misión 5

Landing de un producto inventado: una aplicación de concentración para estudiantes.
Incluye una demo local de sesiones de 25 minutos y descansos de 5 minutos.

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
