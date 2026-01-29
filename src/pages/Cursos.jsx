import { useEffect, useState } from "react";
import api from "../services/api";
import CourseCard from "../components/CourseCard";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    api
      .get("/api/cursos")
      .then((res) => setCursos(res.data))
      .catch(() => console.log("Error al cargar cursos"));
  }, []);

  return (
    <div className="container">
      <h1>Cursos disponibles</h1>

      {cursos.length === 0 ? (
        <p>No hay cursos disponibles por el momento.</p>
      ) : (
        <div className="grid">
          {cursos.map((curso) => (
            <CourseCard key={curso._id} curso={curso} />
          ))}
        </div>
      )}
    </div>
  );
}
