
import { useEffect, useState } from "react";
import api from "../services/api";
import CourseCard from "../components/CourseCard";
import FAQ from "../components/FAQ"; // ← AGREGADO
import Testimonios from "../components/Testimonios"; // ← AGREGADO



export default function MisCursos() {
  const [cursos, setCursos] = useState([]);
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  useEffect(() => {
    if (!usuario) return;

    const token = localStorage.getItem("token");

    api
      .get("/api/inscripciones/mis-cursos", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        setCursos(res.data);
      })
      .catch(() => console.log("Error al cargar cursos"));
  }, [usuario]);

  if (!usuario) {
    return <p>Tenés que iniciar sesión para ver tus cursos.</p>;
  }

  return (
    <div className="container">
      <h1>Mis cursos</h1>

      {cursos.length === 0 ? (
        <p>No estás inscrita en ningún curso todavía.</p>
      ) : (
        <div className="grid">
          {cursos.map((curso) => (
            <CourseCard key={curso._id} curso={curso} />
          ))}
        </div>
      )}

      <FAQ />

      <Testimonios />
    </div>
  );
}
