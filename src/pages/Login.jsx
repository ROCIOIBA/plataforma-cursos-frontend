
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api"; // ⭐ IMPORTANTE

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post("/usuarios/login", { email, password })
      .then((res) => {
        const data = res.data;

        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.usuario));
          navigate("/");
        } else {
          alert("Credenciales incorrectas");
        }
      })
      .catch((err) => console.error("Error en login:", err));
  };

  return (
    <div className="form-auth">
      <h1>Iniciar sesión</h1>

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
