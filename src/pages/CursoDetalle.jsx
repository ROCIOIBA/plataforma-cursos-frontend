import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Toast from "../components/Toast";

export default function CursoDetalle() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [toast, setToast] = useState({ mensaje: "", tipo: "" });
  const [inscripta, setInscripta] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Obtener curso
    api.get(`/api/cursos/${id}`).then((res) => setCurso(res.data));

    // Verificar si ya está inscripta
    api.get("/api/inscripciones/mis-cursos", {
      headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      const yaInscripta = res.data.some((c) => c._id === id);
      setInscripta(yaInscripta);
    });
  }, [id]);

  const inscribirse = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/inscripciones",
        { cursoId: curso._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setInscripta(true);
      setToast({ mensaje: "¡Inscripción exitosa!", tipo: "success" });
      setTimeout(() => setToast({ mensaje: "", tipo: "" }), 3000);
    } catch {
      setToast({ mensaje: "Ya estás inscrita o hubo un error.", tipo: "error" });
      setTimeout(() => setToast({ mensaje: "", tipo: "" }), 3000);
    }
  };

  if (!curso) return <p>Cargando curso...</p>;

  return (
    <div className="detalle">
      <h2>{curso.titulo}</h2>
      <p>{curso.descripcion}</p>
      <p><strong>Categoría:</strong> {curso.categoria}</p>
      <p><strong>Nivel:</strong> {curso.nivel}</p>
      <p><strong>Profesor:</strong> {curso.profesor}</p>

      <button
        onClick={inscribirse}
        disabled={inscripta}
        style={{
          backgroundColor: inscripta ? "#4caf50" : "#007bff",
          cursor: inscripta ? "not-allowed" : "pointer",
          color: "white",
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          marginTop: "10px"
        }}
      >
        {inscripta ? "Inscripta" : "Inscribirme"}
      </button>

      <Toast mensaje={toast.mensaje} tipo={toast.tipo} />
    </div>
  );
}
