import { useEffect, useState } from "react";
import api from "../services/api";

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerPerfil = async () => {
      try {
        const res = await api.get("/usuarios/perfil");
        setUsuario(res.data);
      } catch (err) {
        console.error("Error cargando perfil:", err);
        setError("No se pudo cargar tu perfil. Iniciá sesión nuevamente.");
      } finally {
        setCargando(false);
      }
    };

    obtenerPerfil();
  }, []);

  if (cargando) {
    return <p style={{ padding: "40px" }}>Cargando perfil...</p>;
  }

  if (error) {
    return <p style={{ padding: "40px", color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Mi Perfil</h1>

      <div className="perfil-card">
        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Rol:</strong> {usuario.rol}</p>
      </div>
    </div>
  );
}
