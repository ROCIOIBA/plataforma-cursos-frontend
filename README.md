🌐 Plataforma de Cursos – Frontend

Interfaz web desarrollada por Rocío Ibañez, Fullstack Developer.

Este frontend permite a los usuarios navegar cursos, ver detalles, inscribirse, gestionar su perfil y acceder a sus cursos.
Construido con React, integra autenticación con cookies y consume la API REST desplegada en Render.

🚀 Tecnologías utilizadas
React

React Router DOM

Axios

Context API (autenticación)

CSS puro

Vite (entorno de desarrollo)

📦 Instalación y ejecución

1. Clonar el repositorio
bash
git clone https://github.com/ROCIOIBA/plataforma-cursos-frontend.git
2. Instalar dependencias
bash
npm install
3. Configurar variables de entorno
Crear un archivo .env en la raíz:

Código
VITE_API_URL=https://plataforma-cursos-backend-4o3v.onrender.com/api

4. Ejecutar el proyecto

bash
npm run dev
Frontend disponible en:

Código

http://localhost:5173

🧩 Funcionalidades principales
👤 Autenticación
Registro

Login

Logout

Sesiones con cookies httpOnly

Context global de usuario

Rutas protegidas

📚 Cursos
Listado de cursos

Detalle de curso

Imágenes dinámicas por categoría

Inscripción a cursos

📝 Mis Cursos
Ver cursos en los que el usuario está inscrito

Acceso solo para usuarios autenticados

👤 Perfil
Ver datos del usuario

Validación de sesión

🗂️ Estructura del proyecto

Código
src/
  components/        # Navbar, Footer, RutaPrivada, etc.
  pages/             # Home, Cursos, CursoDetalle, MisCursos, Login, Register, Perfil
  context/           # AuthContext (manejo de sesión)
  services/          # api.js (axios configurado)
  styles.css         # Estilos globales
  App.jsx            # Rutas principales
  main.jsx           # Punto de entrada
🔗 Conexión con el backend
El frontend consume la API desplegada en Render:

Código
https://plataforma-cursos-backend-4o3v.onrender.com/api
Todas las solicitudes se realizan mediante Axios desde:

Código
src/services/api.js
Incluye:

withCredentials: true para enviar cookies

Base URL configurable por .env

🧪 Pruebas
Navegación completa

Autenticación

Inscripción a cursos

Acceso a rutas protegidas

Manejo de errores

Integración con backend en producción

🌐 Deploy
Frontend desplegado en Render:

Código
https://plataforma-cursos-frontend-kfm6.onrender.com

👩‍💻 Autora
Desarrollado por Rocío Ibañez  
Frontend & Backend Developer