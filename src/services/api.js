import axios from "axios";

const api = axios.create({
  baseURL: "https://plataforma-cursos-backend-4o3v.onrender.com/api",
});

export default api;
