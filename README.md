This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Proyecto de Login con Next.js 14, TypeScript y SCSS

Este proyecto es una aplicación de autenticación básica construida con Next.js 14 y TypeScript. Incluye funcionalidades de inicio de sesión, cierre de sesión, y manejo de rutas protegidas. Además, utiliza CSS modular para el estilo de los componentes y react-icons para los íconos de navegación. El proyecto sigue las mejores prácticas de clean code y los principios SOLID para asegurar un código mantenible y escalable.

## Instrucciones de Ejecución

### Sigue estos pasos para ejecutar el proyecto localmente:

- Instala dependencias

```bash
npm install
# or
yarn install
```

- Ejecuta el Servidor de Desarrollo

```bash
npm run dev
# or
yarn run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

### El proyecto sigue una estructura modular para facilitar el mantenimiento y la escalabilidad. Aquí hay un breve resumen de las carpetas principales:

	•	src/app: Contiene las páginas de la aplicación.
	•	src/components: Contiene los componentes reutilizables, como Header, LoginForm, Button, etc.
	•	src/context: Contiene los contextos de React, como AuthContext.
	•	src/hooks: Contiene los hooks personalizados.
	•	src/providers: Contiene los proveedores de contexto.
	•	src/styles: Contiene los estilos globales y modulares.
	•	src/utils: Contiene las utilidades y funciones auxiliares.
	•	src/graphql: Contiene las consultas y mutaciones GraphQL.

##Enfoque y Principios

###Clean Code

El proyecto sigue estandares de clean code, incluyendo:

	•	Nombres Significativos: Variables, funciones y componentes tienen nombres descriptivos que reflejan su propósito.
	•	Funciones Pequeñas: Las funciones están diseñadas para hacer una sola cosa, lo que facilita su comprensión y mantenimiento.
	•	Comentarios: Se agregan comentarios cuando es necesario para explicar partes complejas del código.

### SOLID

Se aplican los principios SOLID para asegurar un código robusto y escalable:

	•	S: Principio de responsabilidad única (Single Responsibility Principle).
	•	O: Principio de abierto/cerrado (Open/Closed Principle).
	•	L: Principio de sustitución de Liskov (Liskov Substitution Principle).
	•	I: Principio de segregación de interfaces (Interface Segregation Principle).
	•	D: Principio de inversión de dependencias (Dependency Inversion Principle).

### Hooks Personalizados

El proyecto utiliza hooks personalizados para encapsular la lógica de negocio y mejorar la reutilización del código. Algunos ejemplos incluyen:

	•	useAuth: Maneja la lógica de autenticación, incluyendo el inicio y cierre de sesión.
	•	useValidation: Valida los campos de entrada basados en su tipo (correo electrónico y contraseña.).
	•	useRedirect: Maneja la redirección de usuarios autenticados y no autenticados a las rutas adecuadas.

### Providers Wrapper

El proyecto utiliza Providers Wrapper para envolver la aplicación con varios contextos necesarios para su funcionamiento. Esto asegura que los componentes hijos puedan acceder a los contextos fácilmente. Por ejemplo:

	•	ApolloProviderWrapper: Provee el cliente de Apollo para manejar las consultas y mutaciones GraphQL.
	•	AuthProviderWrapper: Provee el contexto de autenticación para manejar el estado de autenticación del usuario.

### Funcionalidades Principales

	•	Inicio de Sesión: Los usuarios pueden iniciar sesión con su email y contraseña.
	•	Cierre de Sesión: Los usuarios pueden cerrar sesión, lo que elimina su token de autenticación.
	•	Rutas Protegidas: Algunas rutas están protegidas y solo son accesibles para usuarios autenticados.
	•	Navegación Dinámica: Los íconos de navegación cambian en función de la autenticación del usuario y el tamaño de la pantalla.

### Tecnologías Utilizadas

	•	Next.js: Framework de React para el desarrollo de aplicaciones web.
	•	TypeScript: Superset de JavaScript que añade tipos estáticos.
	•	SCSS Modular: Enfoque para escribir estilos encapsulados en módulos.
	•	React Icons: Biblioteca de íconos para React.
	•	GraphQL: Lenguaje de consulta para APIs.
