import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
 console.log("Usuario guardado:", user);


  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">Cursos Online</Link>
      </div>

      <div className="nav-links">
        <Link to="/cursos">Cursos</Link>

      {user ? (
  <>
    <span className="saludo">Hola, {user.nombre}</span>
    <Link to="/mis-cursos">Mis cursos</Link>
    <button onClick={handleLogout} className="btn-logout">
      Cerrar sesión
    </button>
  </>
) : (
  <>
    <Link to="/login">Ingresar</Link>
    <Link to="/register">Registrar</Link>
  </>
)}

      </div>
    </nav>
  );
}
