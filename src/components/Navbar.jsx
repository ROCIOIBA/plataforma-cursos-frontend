
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { usuario, setUsuario } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Si usás cookies, no hace falta borrar nada del localStorage
    setUsuario(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">Cursos Online</Link>
      </div>

      <div className="nav-links">
        <Link to="/cursos">Cursos</Link>

        {usuario ? (
          <>
            <span className="saludo">Hola, {usuario.nombre}</span>
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

