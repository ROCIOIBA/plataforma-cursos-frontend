import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function MisCursos() {
  const { usuario, cargando } = useAuth();
  const [cursos, setCursos] = useState([]);
  const [loadingCursos, setLoadingCursos] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cargando && !usuario) {
      navigate("/register");
    }
  }, [cargando, usuario, navigate]);

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

    if (usuario) {
      fetchCursos();
    }
  }, [usuario]);

  if (cargando || (usuario && loadingCursos)) {
    return <p>Cargando...</p>;
  }

  if (!usuario) {
    return null;
  }

  return (
    <div className="mis-cursos-container">
      <h1>Mis Cursos</h1>

      {cursos.length === 0 ? (
        <p>No estás inscripta en ningún curso todavía.</p>
      ) : (
        <div className="lista-cursos">
          {cursos.map((curso) => (
            <div className="curso-card" key={curso._id}>
              <h3>{curso.titulo}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
