
# Inventory API

Este proyecto es una API REST desarrollada con Node.js, Express y Prisma.
El objetivo es gestionar un sistema básico de inventario con usuarios autenticados, productos y categorías.

## Tecnologías

Node.js
Express
PostgreSQL
Prisma
JWT para autenticación
bcrypt para contraseñas
Vitest y Supertest para pruebas

## Instalación

Instalar dependencias:
npm install

Crear archivo .env:
DATABASE_URL="postgresql://postgres:ironhack@localhost:5432/inventory_db"
JWT_SECRET="supersecret"
PORT=3000

Ejecutar migraciones:
npx prisma migrate dev

Arrancar el servidor:
npm run dev

## Estructura del proyecto

prisma/
src/
controllers/
middleware/
routes/
lib/
tests/
app.js
server.js

## Autenticación

Registro de usuario con /api/auth/register
Login con /api/auth/login
Devuelve un token JWT

## Productos

GET /api/products
GET /api/products/:id
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id

Todas estas rutas necesitan token.

## Categorías

GET /api/categories
POST /api/categories

## Ruta protegida

GET /api/protected
Necesita token en el header Authorization: Bearer token

## Tests

npm test
Uso Vitest y Supertest para pruebas básicas de la API.