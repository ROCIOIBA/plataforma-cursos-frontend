import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

export default function CursoDetalle() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/cursos/${id}`)
      .then((res) => res.json())
      .then((data) => setCurso(data))
      .catch((err) => console.error("Error cargando curso:", err));
  }, [id]);

  if (!curso) return <p style={{ padding: "40px" }}>Cargando...</p>;

  const categoriaNormalizada = normalizarCategoria(curso.categoria);

  return (
    <div className="curso-detalle" style={{ padding: "40px" }}>
      <img
        src={
          curso.imagen ||
          imagenesPorCategoria[categoriaNormalizada] ||
          `https://picsum.photos/400/250?random=${curso._id}`
        }
        alt={curso.titulo}
        className="curso-img"
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      <h1>{curso.titulo}</h1>
      <p>{curso.descripcion}</p>

      <h3>Profesor: {curso.profesor}</h3>
      <p>Categoría: {curso.categoria}</p>
      <p>Nivel: {curso.nivel}</p>

      <button
        onClick={() => alert("Inscripción funcionando")}
        className="btn-inscribirse"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#4f46e5",
          color: "white",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Inscribirme
      </button>
    </div>
  );
}
