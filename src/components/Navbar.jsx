import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ usuario, cerrarSesion }) {
  return (
    <nav className="nav">

      {/* LOGO */}
      <div className="logo">
        <Link to="/">Aprende a Programar</Link>
      </div>

      {/* LINKS CENTRALES */}
      <div className="navbar-links">
        <Link to="/cursos">Cursos</Link>
      </div>

      {/* DERECHA: LOGIN / REGISTER / AVATAR / LOGOUT */}
      <div className="navbar-auth">

        {!usuario ? (
          <>
            <Link to="/register" className="btn-register">Registrarse</Link>
            <Link to="/login" className="btn-login">Iniciar sesión</Link>
          </>
        ) : (
          <div className="usuario-info">
            <span className="saludo">Hola, {usuario.nombre}</span>
            <div className="avatar">{usuario.nombre[0].toUpperCase()}</div>
            <span className="logout" onClick={cerrarSesion}>Cerrar sesión</span>
          </div>
        )}

      </div>

    </nav>
  );
}