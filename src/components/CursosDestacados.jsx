import { useEffect, useState } from "react";
import api from "../services/api";
import CourseCard from "./CourseCard";

export default function CursosDestacados() {
  const [cursos, setCursos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    api
      .get("/cursos")
      .then((res) => {
        const data = res.data || [];

        if (data.length === 0) {
          setCursos([]);
        } else {
          setCursos(data.slice(0, 3));
        }

        setCargando(false);
      })
      .catch(() => {
        console.log("Error al cargar cursos destacados");
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando cursos destacados...</p>;

  if (cursos.length === 0) {
    return (
      <section className="destacados">
        <h2>Cursos Destacados</h2>
        <p>No hay cursos disponibles por el momento.</p>
      </section>
    );
  }

  return (
    <section className="destacados">
      <h2>Cursos Destacados</h2>

      <div className="grid">
        {cursos.map((curso) => (
          <CourseCard key={curso._id} curso={curso} />
        ))}
      </div>
    </section>
  );
}
