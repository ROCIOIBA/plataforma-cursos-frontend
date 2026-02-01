import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../services/api";

export default function RutaPrivada({ children }) {
  const [cargando, setCargando] = useState(true);
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    api.get("/usuarios/me") // ⭐ Debes tener esta ruta en backend
      .then(() => {
        setAutenticado(true);
        setCargando(false);
      })
      .catch(() => {
        setAutenticado(false);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando...</p>;

  if (!autenticado) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
