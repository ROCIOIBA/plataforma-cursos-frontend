import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");   // ⭐ NUEVO
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post("/usuarios/login", { email, password })
      .then((res) => {
        const data = res.data;

        if (data.usuario) {
          localStorage.setItem("user", JSON.stringify(data.usuario));

          // ⭐ MENSAJE DE ÉXITO
          setMensaje("Inicio de sesión exitoso");

          // ⭐ ESPERAR 1.5s Y REDIRIGIR
          setTimeout(() => {
            navigate("/");
          }, 1500);

        } else {
          alert("Credenciales incorrectas");
        }
      })
      .catch((err) => console.error("Error en login:", err));
  };

  return (
    <div className="form-auth">
      <h1>Iniciar sesión</h1>

      {/* ⭐ MENSAJE VISUAL */}
      {mensaje && (
        <div className="mensaje-exito">
          {mensaje}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}
