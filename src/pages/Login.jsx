import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Toast from "../components/Toast";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [toast, setToast] = useState({ mensaje: "", tipo: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setToast({ mensaje: "Completá todos los campos", tipo: "error" });
      setTimeout(() => setToast({ mensaje: "", tipo: "" }), 3000);
      return;
    }

    try {
      // Ruta correcta según tu backend
      const res = await api.post("/api/usuarios/login", form);

      // Guardar usuario y token
      localStorage.setItem("usuario", JSON.stringify(res.data.usuario));
      localStorage.setItem("token", res.data.token);

      // Mensaje de éxito
      setToast({ mensaje: "Inicio de sesión exitoso", tipo: "success" });

      // Redirigir
      setTimeout(() => {
        setToast({ mensaje: "", tipo: "" });
        navigate("/mis-cursos");
      }, 1500);

    } catch (error) {
      console.error("Error al iniciar sesión:", error);

      setToast({ mensaje: "Credenciales incorrectas", tipo: "error" });
      setTimeout(() => setToast({ mensaje: "", tipo: "" }), 3000);
    }
  };

  return (
    <div className="form-container">
      <h2>Iniciar sesión</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Ingresar</button>
      </form>

      <Toast mensaje={toast.mensaje} tipo={toast.tipo} />
    </div>
  );
}
