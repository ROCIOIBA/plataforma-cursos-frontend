📘 Plataforma de Cursos – Frontend

Aplicación frontend desarrollada con React y Vite para consumir la API de la Plataforma de Cursos. Permite a los usuarios visualizar cursos, registrarse, iniciar sesión y navegar por la plataforma de manera intuitiva y responsiva.

🚀 Tecnologías utilizadas

React

Vite

React Router

CSS / Tailwind / estilos propios (adaptar según tu proyecto)

Fetch / Axios para consumir la API

Node + Express (backend conectado)

📦 Instalación y ejecución

1. Clonar el repositorio
bash
git clone https://github.com/ROCIOIBA/plataforma-cursos-frontend.git

2. Instalar dependencias
bash
npm install

3. Configurar variables de entorno
Crear un archivo .env en la raíz del proyecto:

Código
VITE_API_URL=http://localhost:3000
(Una vez que el backend esté desplegado, reemplazar por la URL pública de Render.)

4. Ejecutar el proyecto

bash
npm run dev
La aplicación estará disponible en:

Código
http://localhost:5173

🧩 Funcionalidades principales

Registro de usuarios

Inicio de sesión

Visualización de cursos

Navegación por secciones

Consumo de API REST

Manejo de estados y rutas

🔗 Conexión con el backend

Este frontend consume la API desarrollada en:

Código
https://github.com/ROCIOIBA/plataforma-cursos-backend
(Agregar URL del deploy cuando esté lista.)

📁 Estructura del proyecto

Código
src/
  components/       # Componentes reutilizables (Navbar, Footer, etc.)
  pages/            # Vistas principales (Home, Cursos, Login, etc.)
  services/         # Funciones para consumir la API
  hooks/            # Custom hooks si usás alguno
  App.jsx           # Componente raíz
  main.jsx          # Punto de entrada
public/
  index.html        # HTML base

🌐 Deploy
https://plataforma-cursos-frontend.onrender.com


Ejemplo:

Código
https://plataforma-cursos-frontend.onrender.com




# Plataforma de Cursos – Frontend
Proyecto desarrollado por **Rocío Ibañez**, Backend .
