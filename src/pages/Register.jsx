import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: ""
  });

  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/usuarios/registro", form);

      setMensaje("Registro exitoso. Redirigiendo...");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch {
      setMensaje("Error al registrarse.");
    }
  };

  return (
    <div className="form-container">
      <h2>Crear cuenta</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />

        <button type="submit">Registrarme</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}
