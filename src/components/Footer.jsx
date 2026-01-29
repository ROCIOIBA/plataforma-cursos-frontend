export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Plataforma Cursos</h3>
          <p>Aprendé a tu ritmo con cursos de calidad.</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/mis-cursos">Mis Cursos</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: soporte@plataformacursos.com</p>
          <p>Tel: +54 11 5555-5555</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Plataforma Cursos — Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
