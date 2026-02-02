import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { usuario, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="logo">Cursos Online</div>

      <div className="nav-links">
        <Link to="/cursos">Cursos</Link>

        {usuario && <Link to="/mis-cursos">Mis Cursos</Link>}

        {usuario ? (
          <>
            <span className="saludo">Hola, {usuario.nombre}</span>
            <button className="btn-logout" onClick={logout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/register">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
}
