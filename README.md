# RickandMorty  
# 🧪 Prueba Técnica – Evaluación de Empleabilidad

Stack: TypeScript + Next.js 15
API: Rick and Morty

# 🧠 Análisis del Proyecto Original

Al analizar el proyecto inicial se identificaron múltiples problemas comunes en proyectos reales en mantenimiento, entre ellos:

* Estructura de carpetas inconsistente con Next.js App Router.

* Uso incorrecto de carpetas especiales (ej. home) con paréntesis).

* Uso de any en estados, props y funciones.

* Consumo incorrecto de la API (uso de data en lugar de data.results).

* Lógica duplicada para consumo de API.

* Falta de manejo de estados (loading, error, datos vacíos).

* Dependencias no instaladas pero utilizadas (styled-components).

* Configuración de TypeScript desactualizada o incompleta.

* Renderizado duplicado de imágenes.

* Componentes con props no tipadas correctamente.

* El proyecto funcionaba de forma parcial y presentaba errores tanto en tiempo de compilación como en ejecución.

# 🔧 Correcciones y Decisiones Técnicas

Las siguientes correcciones se realizaron sin reescribir el proyecto desde cero, respetando el código existente y enfocándose únicamente en corregir errores reales:

1️⃣ Limpieza de estructura innecesaria

* Se eliminaron las carpetas login, register y dashboard, ya que el enunciado no solicitaba autenticación ni paneles administrativos.
Esta decisión evitó rutas muertas y confusión en la arquitectura.

2️⃣ Corrección de carpeta especial home

* Se corrigió el nombre de la carpeta home) a home, eliminando el paréntesis.Esto solucionó errores de routing y de expresiones regulares en el servidor de desarrollo.

3️⃣ Reorganización de componentes

Los componentes fueron movidos de app/components a src/components.

Esto permitió:

* Evitar mezclar lógica de rutas con componentes reutilizables.

* Corregir rutas de importación en page.tsx y home/page.tsx.

4️⃣ Instalación de dependencias faltantes

Se instaló styled-components, ya que estaba siendo utilizada pero no declarada.

* Esto corrigió errores de compilación y compatibilidad con TypeScript (npm install styled-components).

5️⃣ Mejora de configuración TypeScript

Se corrigió y fortaleció el tsconfig.json:

Se actualizó:

* "target": "ES5" → "ES2017"

Se activaron:

* "strict": true

* "noImplicitAny": true

* "strictNullChecks": true

Se ajustó:

* "lib": ["dom", "dom.iterable", "esnext"]

Estas configuraciones permitieron detectar errores reales de tipado y mejorar la robustez del proyecto.

6️⃣ Corrección del consumo de la API

Se corrigió el uso incorrecto de la respuesta de la API:

* setCharacters(data) → setCharacters(data.results)

Esto permitió que el renderizado funcionara correctamente.

7️⃣ Eliminación de render duplicado

* Se eliminó el <img src={char.image} /> duplicado en page.tsx y home/page.tsx.

La imagen quedó correctamente renderizada únicamente dentro del componente Card.

8️⃣ Tipado correcto de datos

* Se creó la carpeta types con la interfaz Character.

* Se reemplazó el uso de any por tipos definidos.

* Se ajustó el uso de props para que coincidan con la estructura real de la API.

9️⃣ Corrección del componente Card

* Se corrigieron las props del componente para que:

* Coincidieran con los datos enviados.

* Estuvieran correctamente tipadas.

Se alineó el uso de status y species con la interfaz Character.

🔟 Centralización del consumo de API

Se refactorizó completamente services/api.ts:

* API centralizada.

* Tipado estricto.

* Manejo de errores.

* Función reutilizable.

Luego:

* Se actualizó el useEffect de page.tsx y home/page.tsx para usar este servicio, sin modificar la estructura base del componente.

1️⃣.1️⃣ Manejo de estados y errores

Se implementó manejo mínimo pero correcto de estados:

* if (loading) return <p>Cargando...</p>
* if (error) return <p>{error}</p>
* if (characters.length === 0) return <p>No hay personajes para mostrar</p>


Esto permite:

* Evitar renders inconsistentes.

* Mostrar mensajes claros al usuario.

* Cumplir con el manejo de errores solicitado en el enunciado.

✅ Resultado Final

La aplicación:

* Compila sin errores de TypeScript.

* Funciona correctamente.

* Consume la API de forma adecuada.

* Renderiza nombre, imagen, especie y estado por personaje.

* El código es más legible, mantenible y profesional.

No se reescribió el proyecto desde cero, solo se corrigieron errores reales.

# 🚀 Mejoras Futuras

Si se dispusiera de más tiempo, se podrían implementar:

* Paginación de personajes.

* Vista de detalle por personaje.

* Uso de char.id como key.

* Custom hooks para consumo de API.

* Manejo de errores más avanzado (retry, fallback UI).

# 🧩 Dificultades Enfrentadas

* Código inicial con múltiples errores encadenados.

* Uso de dependencias no instaladas.

* Configuración TypeScript poco estricta.

* Estructura inconsistente del proyecto.

Estas dificultades reflejan escenarios reales de mantenimiento en proyectos existentes.

# 📌 Conclusión

El enfoque del trabajo fue pensar y actuar como desarrollador/a profesional, priorizando correcciones reales, criterio técnico y mantenibilidad, tal como se solicita en el assessment. 

# 👤 Author
* Nombre: Kateryn Yulieth Martinez Reyes 
* Rol: Frontend Developer (TypeScript / Next.js)
* Tecnologías: TypeScript, Next.js, React, API
* Contexto: Prueba técnica de evaluación de empleabilidad
