# Integration Backend

Backend REST API construido con Node.js, Express, TypeScript y Supabase.

## Tech Stack

-   **Runtime**: Node.js (v20+)
-   **Framework**: Express
-   **Language**: TypeScript
-   **Database & Auth**: Supabase (PostgreSQL)
-   **ORM**: Drizzle ORM
-   **Logging**: Pino
-   **Testing**: Vitest
-   **Quality**: ESLint + Prettier + Husky (Pre-commit hooks)

## Prerequisites

-   Node.js v20.17.0 or higher
-   pnpm (Package Manager)
-   Supabase Project (URL & Keys)

## Setup

1.  **Instalar dependencias**:

    ```bash
    pnpm install
    ```

2.  **Configurar variables de entorno**:
    Copia el archivo de ejemplo y rellena tus credenciales.

    ```bash
    cp .env.example .env
    ```

    Variables requeridas en `.env`:
    -   `PORT`: Puerto del servidor (ej: 3000)
    -   `SUPABASE_URL`: URL de tu proyecto Supabase.
    -   `SUPABASE_KEY`: API Key pública (anon).
    -   `DATABASE_URL`: Connection string a Postgres (puerto 5432 o 6543).

3.  **Base de Datos**:
    El proyecto usa Drizzle Kit para gestionar el esquema.

    ```bash
    # Generar archivos de migración (basado en cambios de schema/)
    pnpm db:generate

    # Aplicar migraciones a la DB
    pnpm db:migrate

    # Abrir Drizzle Studio (visor de datos)
    pnpm db:studio
    ```

4.  **Desarrollo**:

    ```bash
    pnpm dev
    ```

    El servidor iniciará en `http://localhost:3000`.

## Project Structure

```
src/
├── config/         # Configuración de entorno y servicios externos
├── controllers/    # Lógica de manejo de peticiones HTTP
├── db/             # Configuración de Drizzle y Schemas
│   └── schema/     # Definición de tablas y relaciones
├── middlewares/    # Middlewares de Express (Auth, Error handling)
├── routes/         # Definición de rutas de la API
├── services/       # Lógica de negocio y acceso a datos
├── types/          # Definiciones de tipos globales
└── utils/          # Utilidades (Logger, Helpers)
```

## Scripts

-   `pnpm dev`: Inicia servidor en modo watch.
-   `pnpm build`: Compila TypeScript a JS (dist/).
-   `pnpm start`: Inicia el servidor compilado (producción).
-   `pnpm lint`: Revisa errores de linting.
-   `pnpm format`: Formatea el código con Prettier.
-   `pnpm test`: Ejecuta tests con Vitest.

## API Endpoints

### Health
-   `GET /api/v1/health`: Verificar estado del servicio.

### Auth
-   `GET /api/v1/auth/me`: Obtener perfil del usuario actual (Requiere Bearer Token).

### Users
-   `GET /api/v1/users`: Listar todos los usuarios.
-   `GET /api/v1/users/:id`: Obtener detalle de usuario.
