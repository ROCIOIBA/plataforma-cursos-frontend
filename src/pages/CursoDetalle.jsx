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
    <div className="curso-detalle">
      <img src={curso.imagen} alt={curso.titulo} className="curso-detalle-img" />

      <h1>{curso.titulo}</h1>
      <p>{curso.descripcion}</p>
      <p><strong>Categoría:</strong> {curso.categoria}</p>

      {mensaje && <p className="mensaje-exito">{mensaje}</p>}

      <button className="btn-hero" onClick={inscribirse}>
        Inscribirme
      </button>
    </div>
  );
}
