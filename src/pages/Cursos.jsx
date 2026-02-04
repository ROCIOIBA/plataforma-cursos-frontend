import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function normalizarCategoria(cat) {
  if (!cat) return "";
  return cat
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita tildes
    .replace(/\s+/g, ""); // quita espacios
}

const imagenesPorCategoria = {
  programacion: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  disenoweb: "https://images.unsplash.com/photo-1503602642458-232111445657",
  basesdedatos: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
};

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    api
      .get("/cursos")
      .then((res) => setCursos(res.data))
      .catch((err) => console.error("Error cargando cursos:", err))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando cursos...</p>;

  return (
    <div className="page-container">
      <h1>Cursos Disponibles</h1>

      <div className="cursos-grid">
        {cursos.map((curso) => {
          const categoria = normalizarCategoria(curso.categoria);

          return (
            <Link
              key={curso._id}
              to={`/cursos/${curso._id}`}
              className="curso-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={
                  curso.imagen ||
                  imagenesPorCategoria[categoria] ||
                  `https://picsum.photos/400/250?random=${curso._id}`
                }
                alt={curso.titulo}
                className="curso-img"
              />

              <h3>{curso.titulo}</h3>
              <p>{curso.descripcion}</p>
              <p><strong>Categoría:</strong> {curso.categoria}</p>
              <p><strong>Profesor:</strong> {curso.profesor}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
