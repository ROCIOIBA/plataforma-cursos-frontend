import { useEffect, useState } from "react";

// Normaliza categorías
function normalizarCategoria(cat) {
  if (!cat) return "";
  return cat
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Imágenes por categoría
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

export default function Dashboard() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/cursos")
      .then((res) => res.json())
      .then((data) => setCursos(data))
      .catch((err) => console.error("Error cargando cursos:", err));
  }, []);

  return (
    <div className="dashboard-container" style={{ padding: "40px" }}>
      <h1>Panel de Administración</h1>

      <button
        style={{
          margin: "20px 0",
          padding: "10px 20px",
          background: "#4f46e5",
          color: "white",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        + Agregar Curso
      </button>

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
              <p><strong>Categoría:</strong> {curso.categoria}</p>
              <p><strong>Profesor:</strong> {curso.profesor}</p>

              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 15px",
                  background: "#ef4444",
                  color: "white",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
