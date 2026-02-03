import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function CursoDetalle() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    api
      .get(`/cursos/${id}`)
      .then((res) => setCurso(res.data))
      .catch((err) => console.error("Error cargando curso:", err));
  }, [id]);

  const inscribirse = () => {
    api
      .post(`/inscripciones/${id}`)
      .then(() => setMensaje("Te inscribiste correctamente"))
      .catch(() => setMensaje("Error al inscribirse"));
  };

  if (!curso) return <p>Cargando...</p>;

  return (
    <div className="page-container">
      <div className="course-card">
        {curso.imagen && (
          <img
            src={curso.imagen}
            alt={curso.titulo}
            className="curso-detalle-img"
            style={{
              width: "100%",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />
        )}

        <h1>{curso.titulo}</h1>
        <p>{curso.descripcion}</p>

        <p className="category">
          <strong>Categoría:</strong> {curso.categoria}
        </p>

        {mensaje && <p className="mensaje-exito">{mensaje}</p>}

        <button className="btn-hero" onClick={inscribirse}>
          Inscribirme
        </button>
      </div>
    </div>
  );
}
