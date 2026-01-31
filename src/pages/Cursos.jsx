import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Función para normalizar categorías (sin acentos y en minúsculas)
function normalizarCategoria(cat) {
  if (!cat) return "";
  return cat
    .toLowerCase()
    .normalize("NFD") // separa acentos
    .replace(/[\u0300-\u036f]/g, ""); // elimina acentos
}

const imagenesPorCategoria = {
  programacion: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  diseño: "https://images.unsplash.com/photo-1503602642458-232111445657",
  diseno: "https://images.unsplash.com/photo-1503602642458-232111445657",
  negocios: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  marketing: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  ingles: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  data: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  ciberseguridad: "https://images.unsplash.com/photo-1555949963-ff9fe0c9a3d1",
};

export default function Cursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/cursos")
      .then((res) => res.json())
      .then((data) => setCursos(data))
      .catch((err) => console.error("Error cargando cursos:", err));
  }, []);

  return (
    <div className="cursos-container">
      <h1>Cursos disponibles</h1>

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

              <Link to={`/curso/${curso._id}`} className="btn-detalle">
                Ver más
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
