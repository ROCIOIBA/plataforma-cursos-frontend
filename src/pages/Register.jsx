import { useEffect, useState } from "react";
import api from "../services/api"; // ⭐ IMPORTANTE

function normalizarCategoria(cat) {
  if (!cat) return "";
  return cat
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const imagenesPorCategoria = {
  programacion: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  diseno: "https://images.unsplash.com/photo-1503602642458-232111445657",
  diseño: "https://images.unsplash.com/photo-1503602642458-232111445657",
  negocios: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  marketing: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  ingles: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  data: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  ciberseguridad: "https://images.unsplash.com/photo-1555949963-ff9fe0c9a3d1",
};

export default function MisCursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    api
      .get("/inscripciones/mis-cursos", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setCursos(res.data))
      .catch((err) => console.error("Error cargando mis cursos:", err));
  }, []);

  return (
    <div className="cursos-container">
      <h1>Mis cursos</h1>

      <div className="lista-cursos">
        {cursos.map((curso) => {
          const categoriaNormalizada = normalizarCategoria(curso.categoria);

          return (
            <div key={curso._id} className="curso-card">
              <img
                src={
                  curso.imagen ||
                  imagenesPorCategoria[categoriaNormalizada] ||
                  `https://picsum.photos/400/250?random=${curso._id}`
                }
                alt={curso.titulo}
                className="curso-img"
              />

              <h3>{curso.titulo}</h3>
              <p>{curso.descripcion}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
