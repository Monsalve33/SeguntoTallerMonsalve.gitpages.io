# Polleria React Commerce

Frontend de comercio construido con React y Vite para la exhibicion de productos de una polleria, con una experiencia visual moderna, catalogo destacado, formulario de compra y una ruta adicional para practicar composicion de componentes mediante `props`.

## Resumen Ejecutivo

Este proyecto fue desarrollado como una base academica y funcional para explorar patrones iniciales de frontend moderno sobre una experiencia tipo e-commerce. Aunque hoy representa una version de alcance acotado, su estructura permite evolucionarlo hacia una aplicacion mas robusta con estado global, autenticacion, integracion con APIs, persistencia de carrito y flujo real de checkout.

La aplicacion prioriza:

- Presentacion clara del catalogo de productos.
- Navegacion simple con React Router.
- Interfaz visual apoyada en Bootstrap y estilos personalizados.
- Separacion inicial por componentes reutilizables.
- Base apropiada para escalar hacia una arquitectura por features.

## Vista General del Producto

La experiencia actual incluye una landing comercial con:

- Hero principal con mensaje promocional y metricas visuales.
- Catalogo de productos destacados.
- Buscador visual en el encabezado.
- Boton de carrito con contador.
- Formulario de registro y pago digital.
- Ruta secundaria `/props` para demostrar reutilizacion de componentes en React.

## Caracteristicas

- `Catalogo destacado`: renderizado dinamico de productos a partir de un arreglo local.
- `UI comercial`: tarjetas de producto, hero promocional y layout responsive.
- `Checkout visual`: formulario de datos personales y pago listo para evolucionar a un flujo real.
- `Enrutamiento`: navegacion entre la vista principal y una vista demostrativa de props.
- `Identidad visual`: estilos propios sobre Bootstrap para lograr una interfaz mas cuidada que una plantilla base.
- `Base educativa`: codigo facil de leer para practicas de componentes, props, layout y organizacion de frontend.

## Stack Tecnologico

### Core

- `React 19`
- `Vite 7`
- `React DOM 19`
- `React Router DOM 7`

### UI y estilos

- `Bootstrap 5`
- `Bootstrap Icons`
- CSS personalizado en `src/shared/styles`

### Calidad y desarrollo

- `ESLint 9`
- `@vitejs/plugin-react`

## Arquitectura Actual

El proyecto sigue una estructura simple, suficiente para una primera fase de crecimiento:

```text
src/
|-- App.jsx
|-- main.jsx
|-- Routes.jsx
|-- features/
|   `-- layout/
|       `-- components/
|           |-- Header.jsx
|           |-- Content.jsx
|           |-- Footer.jsx
|           `-- Props.jsx
`-- shared/
    `-- styles/
        |-- App.css
        `-- index.css
```

### Responsabilidades por modulo

- `src/main.jsx`: punto de entrada, carga Bootstrap, iconos y estilos globales.
- `src/App.jsx`: compone el layout principal y define la navegacion con `BrowserRouter`.
- `src/features/layout/components/Header.jsx`: encabezado, branding, buscador y acceso visual al carrito.
- `src/features/layout/components/Content.jsx`: vista principal con hero, productos y formulario de compra.
- `src/features/layout/components/Footer.jsx`: pie de pagina institucional.
- `src/features/layout/components/Props.jsx`: demostracion aislada del uso de props y componentes reutilizables.

## Flujo de Navegacion

### Ruta principal

- `/`: homepage comercial con listado de productos y formulario de compra.

### Ruta de demostracion

- `/props`: ejemplo de composicion de componentes usando `Avatar` y objetos `person`.

## Instalacion

### Prerrequisitos

- `Node.js` 18 o superior recomendado
- `npm` 9 o superior recomendado

### Pasos

```bash
npm install
npm run dev
```

La aplicacion quedara disponible en el entorno local que Vite informe en consola, normalmente `http://localhost:5173`.

## Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera build de produccion
npm run preview  # Sirve localmente la build generada
npm run lint     # Ejecuta analisis estatico con ESLint
```

## Enfoque de Diseno

La interfaz combina Bootstrap con una capa visual personalizada para construir una identidad mas cercana a una landing comercial:

- Fondo calido con gradientes suaves.
- Header oscuro con contraste alto.
- Tarjetas de producto con elevacion y estados hover.
- Bloques de informacion destacados para oferta, metricas y checkout.
- Composicion responsive orientada a desktop y tablet, con adaptacion basica a mobile.

## Estado del Proyecto

Actualmente el proyecto se encuentra en una fase de frontend estatico/interactivo visual. Algunas piezas ya estan representadas en UI, pero aun no cuentan con logica de negocio completa:

- El buscador no ejecuta filtrado real.
- El carrito es visual y no administra estado persistente.
- Los botones `Editar` y `Eliminar` no estan conectados a operaciones CRUD reales.
- El formulario de compra no integra validaciones ni pasarela de pago.
- Los productos se definen localmente en memoria.

Esto no es una limitacion del planteamiento, sino el punto natural de partida para una siguiente iteracion.

## Roadmap Recomendado

Para llevar esta base a un nivel de producto mas profesional, los siguientes pasos tendrian mayor impacto:

1. Centralizar los datos de productos en un estado o servicio.
2. Implementar filtrado de catalogo por nombre o categoria.
3. Crear carrito funcional con `Context`, `useReducer` o una libreria de estado.
4. Agregar formularios controlados y validacion.
5. Integrar backend o API mock para operaciones CRUD.
6. Incorporar pruebas unitarias y de interfaz.
7. Separar componentes de presentacion y logica por dominio.
8. Anadir internacionalizacion, accesibilidad y manejo de errores.

## Buenas Practicas Sugeridas para Escalar

- Migrar a una arquitectura por features mas estricta.
- Incorporar TypeScript para contratos mas seguros.
- Anadir capa de servicios para consumo de API.
- Definir componentes reutilizables en `shared/ui`.
- Introducir testing con Vitest y React Testing Library.
- Automatizar calidad con hooks de lint y formateo.

## Captura del Perfil Tecnico

Este repositorio resulta especialmente util para:

- Practicas academicas de React.
- Primeros ejercicios de routing y composicion de componentes.
- Evolucion hacia un mini e-commerce.
- Portafolio frontend con una base visual mas cuidada que el template por defecto.

## Creditos

Proyecto desarrollado por Edward Monsalve como ejercicio de aprendizaje en desarrollo frontend con React.