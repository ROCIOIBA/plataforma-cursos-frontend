import axios from "axios";

const api = axios.create({
  // LOCAL
  //baseURL: "http://localhost:3000/api",

  // RENDER
  baseURL: "https://plataforma-cursos-backend-4o3v.onrender.com/api",
  withCredentials: true,
  
});

export default api;
