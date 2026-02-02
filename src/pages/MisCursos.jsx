import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function MisCursos() {
  const { usuario, cargando } = useAuth();
  const [cursos, setCursos] = useState([]);
  const [loadingCursos, setLoadingCursos] = useState(true);
  const navigate = useNavigate();

  // Si todavía está cargando el usuario, mostramos loader
  if (cargando) {
    return <p>Cargando usuario...</p>;
  }

  // Si terminó de cargar y NO hay usuario → redirigir
  if (!usuario) {
    navigate("/register");
    return null;
  }

  // Cargar cursos del usuario
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const res = await api.get("/inscripciones/mis-cursos");
        setCursos(res.data);
      } catch (error) {
        console.error("Error al cargar cursos:", error);
      } finally {
        setLoadingCursos(false);
      }
    };

    fetchCursos();
  }, []);

  if (loadingCursos) {
    return <p>Cargando tus cursos...</p>;
  }

  return (
    <div className="mis-cursos">
      <h1>Mis Cursos</h1>

      {cursos.length === 0 ? (
        <p>No estás inscripta en ningún curso todavía.</p>
      ) : (
        <ul>
          {cursos.map((curso) => (
            <li key={curso._id}>{curso.titulo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
