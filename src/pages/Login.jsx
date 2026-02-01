import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");

    try {
      const res = await api.post("/usuarios/login", { email, password });

      if (res.data.usuario) {
        localStorage.setItem("user", JSON.stringify(res.data.usuario));

        setMensaje("Inicio de sesión exitoso");

        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (err) {
      console.error("Error en login:", err);
      setError("Error al iniciar sesión. Intenta nuevamente.");
    }
  };

  return (
    <div className="form-auth">
      <h1>Iniciar sesión</h1>

      {mensaje && <p className="mensaje-exito">{mensaje}</p>}
      {error && <p className="mensaje-error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn-hero">
          Ingresar
        </button>
      </form>
    </div>
  );
}
