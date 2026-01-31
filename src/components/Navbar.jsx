import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Aprende a Programar</Link>

      <div className="nav-links">
        <Link to="/cursos">Cursos</Link>

        {token ? (
          <>
            <Link to="/mis-cursos">Mis Cursos</Link>
            <button onClick={handleLogout} className="btn-logout">
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

      <button
        className="btn-darkmode"
        onClick={() => document.body.classList.toggle("dark")}
      >
        🌙
      </button>
    </nav>
  );
}
