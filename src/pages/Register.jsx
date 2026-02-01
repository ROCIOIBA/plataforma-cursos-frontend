import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/usuarios/register", {
        nombre,
        email,
        password,
      });

      setMensaje("Registro exitoso. Ahora podés iniciar sesión.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMensaje("Error al registrarse. Revisá los datos.");
      console.error(err);
    }
  };

  return (
    <div className="form-auth">
      <h1>Crear cuenta</h1>

      {mensaje && <p className="mensaje-exito">{mensaje}</p>}

      <form onSubmit={handleRegister}>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn-hero">
          Registrarme
        </button>
      </form>
    </div>
  );
}
