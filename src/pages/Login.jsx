import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { setUsuario } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/usuarios/login", {
        email,
        password,
      });

      // El backend devuelve el usuario y setea la cookie
      setUsuario(res.data.usuario);

      navigate("/mis-cursos");
    } catch (err) {
      console.error(err);
      setError("Credenciales incorrectas o error en el servidor.");
    }
  };

  return (
    <div className="form-auth">
      <h1>Ingresar</h1>

      {error && <p className="mensaje-error">{error}</p>}

      <form onSubmit={handleLogin}>
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
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}




