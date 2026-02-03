import { useEffect, useState } from "react";
import api from "../services/api";

export default function MisCursos() {
  const [cursos, setCursos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerMisCursos = async () => {
      try {
        const res = await api.get("/usuarios/mis-cursos");
        setCursos(res.data || []); // ← CORREGIDO
      } catch (error) {
        console.error("Error al obtener mis cursos:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerMisCursos();
  }, []);

  if (cargando) {
    return <p style={{ padding: "40px" }}>Cargando tus cursos...</p>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Mis Cursos</h1>

      {cursos.length === 0 ? (
        <p>No estás inscripta en ningún curso todavía.</p>
      ) : (
        <div className="cursos-grid">
          {cursos.map((curso) => (
            <div key={curso._id} className="curso-card">
              <h3>{curso.titulo}</h3>
              <p>{curso.descripcion}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
