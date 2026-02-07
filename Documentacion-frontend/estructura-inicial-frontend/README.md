¡Claro que sí! Es una excelente práctica documentar la arquitectura antes de empezar a escribir código.

Aquí tienes un resumen técnico y detallado de toda la configuración del Frontend, ideal para tu documento de proyecto de grado.

---

## Documento de Arquitectura y Configuración del Frontend: PaaS Core Education

### 1. Resumen y Justificación del Stack Tecnológico

La arquitectura del Frontend ha sido seleccionada para cumplir con los estándares de la industria de aplicaciones **SaaS (Software as a Service)** y herramientas para desarrolladores, priorizando la **velocidad de desarrollo**, la **mantenibilidad** y una **experiencia de usuario (UX)** profesional.

**Stack Tecnológico Principal:**
*   **Librería principal:** React v19
*   **Lenguaje:** TypeScript v5
*   **Herramienta de Construcción (Build Tool):** Vite v7
*   **Estilos:** Tailwind CSS v3

**Justificación:**
*   **React + TypeScript:** Proporciona un sistema de componentes robusto con tipado estático, crucial para interactuar sin errores con una API de backend compleja y fuertemente tipada (Java/Python).
*   **Vite:** Garantiza una experiencia de desarrollo casi instantánea (Hot Module Replacement) y genera compilaciones de producción altamente optimizadas, superando a herramientas tradicionales como Webpack (usado en `create-react-app`).
*   **Tailwind CSS:** Es un framework de CSS "Utility-First" que permite implementar diseños personalizados y complejos (como el estilo "Modern SaaS" definido en los mockups) con total precisión y consistencia, evitando la sobreescritura de estilos que ocurre con librerías de componentes tradicionales.

### 2. Estructura de Carpetas (Arquitectura del Frontend)

Para mantener el proyecto organizado y escalable, se adoptará una estructura de carpetas basada en funcionalidades y dominios de negocio:

```
paas-frontend/
├── public/                 # Iconos, imágenes y archivos estáticos
├── src/
│   ├── assets/             # Fuentes, logos, etc.
│   ├── components/         # Componentes UI reutilizables (generados por Shadcn)
│   │   ├── ui/             # Primitivos: Button, Input, Card...
│   │   └── shared/         # Compuestos: Navbar, Sidebar...
│   ├── config/             # Configuración de la app (variables de entorno, constantes)
│   ├── features/           # Lógica de negocio por "característica"
│   │   ├── auth/           # Login, Registro, Recuperación
│   │   ├── dashboard/      # Vistas del Dashboard de usuario
│   │   ├── projects/       # Flujo de creación, detalle, manifiestos...
│   │   └── admin/          # Vistas de administración
│   ├── hooks/              # Hooks personalizados (ej. useUser)
│   ├── lib/                # Utilidades (cn, cliente API, formateadores)
│   ├── pages/              # Componentes de página (rutas principales)
│   ├── providers/          # Contextos o proveedores de React (ej. React Query)
│   ├── router/             # Definición de rutas de la aplicación
│   ├── services/           # Lógica de llamadas a la API (separada de los componentes)
│   └── App.tsx             # Componente raíz
├── index.html
├── package.json
├── tsconfig.json           # Configuración de TypeScript
├── vite.config.ts          # Configuración de Vite (alias @)
├── tailwind.config.js      # Configuración de Tailwind CSS
├── Dockerfile              # Receta para la imagen de producción
├── nginx.conf              # Configuración de Nginx para la SPA
└── docker-compose.yaml     # Para pruebas locales de la imagen de producción
```

### 3. Herramientas y Versiones de Desarrollo

*   **Node.js:** v22.19.0 (LTS).
*   **Gestor de Paquetes:** `npm`.


### 4. Dependencias Clave del Proyecto

**Dependencias de Producción (`dependencies`):**
*   **`react`, `react-dom`:** Librería principal para la interfaz de usuario.
*   **`react-router-dom`:** Para la gestión de rutas y navegación entre páginas.
*   **`@tanstack/react-query`:** Para la gestión de estado del servidor (fetching, caching, polling de datos de la API).
*   **`zustand`:** Para la gestión de estado global del cliente (información del usuario autenticado, token JWT).
*   **`axios`:** Cliente HTTP para realizar peticiones a los microservicios del backend.
*   **`lucide-react`:** Librería de iconos minimalistas y profesionales.
*   **`clsx`, `tailwind-merge`:** Utilidades instaladas por Shadcn/ui para combinar clases de Tailwind de forma inteligente.

**Dependencias de Desarrollo (`devDependencies`):**
*   **`vite`:** Herramienta de construcción y servidor de desarrollo.
*   **`typescript`:** Superset de JavaScript para tipado estático.
*   **`tailwindcss`, `postcss`, `autoprefixer`:** El ecosistema completo de Tailwind CSS.
*   **`@types/node`:** Tipos de TypeScript para la configuración de Vite.

### 5. Configuración de Despliegue (Docker y Kubernetes)

El despliegue en el clúster de Kubernetes se realiza sirviendo una aplicación estática optimizada. Esto se logra con una estrategia de **"Build Multi-Stage"** en Docker.

*   **`Dockerfile`:**
    *   **Etapa 1 (`build`):** Utiliza una imagen de `node:22-alpine` para instalar dependencias y ejecutar `npm run build`, generando los archivos estáticos en la carpeta `/dist`.
    *   **Etapa 2 (`production`):** Utiliza una imagen ligera de `nginx:alpine`. Copia únicamente la carpeta `/dist` de la etapa anterior y una configuración `nginx.conf` personalizada.
*   **`nginx.conf`:** Configura Nginx para servir los archivos estáticos y, crucialmente, redirige todas las rutas no encontradas al `index.html`. Esto permite que el enrutamiento del lado del cliente (React Router) funcione correctamente al recargar la página en una URL profunda (ej. `/projects/123`).
*   **`docker-compose.yaml`:** Se proporciona un archivo de composición únicamente para facilitar las **pruebas locales** de la imagen de producción construida, mapeando un puerto local al puerto 80 del contenedor Nginx. **Este archivo NO se utiliza para el despliegue en Kubernetes.**
