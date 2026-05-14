# Backlog del proyecto

Este proyecto es una API de inventario hecha con Node.js, Express y Prisma. La he hecho para practicar backend, autenticación y manejo de base de datos.

## Autenticación

Registro de usuarios en la base de datos.
Login con verificación de contraseña.
Las contraseñas se guardan encriptadas con bcrypt.
Se genera un token JWT al hacer login.
El token se usa para acceder a rutas protegidas.

## Middleware

He creado un middleware para proteger rutas.
Comprueba el token JWT en las peticiones.
Si el token no es válido o no existe, bloquea el acceso.

## Productos

Se pueden crear productos.
También listarlos, ver uno por ID, actualizar y eliminar.
Cada producto está relacionado con una categoría.

## Categorías

Se pueden crear categorías y listarlas.
Están conectadas con los productos.

## Estructura del proyecto

El proyecto está separado en controllers, routes y middleware.
Uso Prisma para conectar con la base de datos.
Las variables de entorno están en un archivo .env.

## Base de datos

Uso PostgreSQL con Prisma.
Tengo los modelos de User, Product, Category y Movement.
