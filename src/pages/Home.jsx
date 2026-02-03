export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="home-hero">
        <div className="hero-content">
          <h1>Aprende a Programar</h1>

          <p>
            Cursos modernos, prácticos y pensados para que avances a tu ritmo.
            Inscribite, aprendé y construí tu futuro.
          </p>

          <a href="/cursos" className="btn-hero">
            Ver Cursos
          </a>
        </div>
      </div>

      {/* BENEFICIOS */}
      <section className="beneficios">
        <h2>¿Por qué elegirnos?</h2>

        <div className="beneficios-grid">
          <div className="beneficio-card">
            <h3>📚 Contenido actualizado</h3>
            <p>Cursos creados con las tecnologías más usadas hoy.</p>
          </div>

          <div className="beneficio-card">
            <h3>⚡ Aprendizaje rápido</h3>
            <p>Clases cortas, prácticas y fáciles de seguir.</p>
          </div>

          <div className="beneficio-card">
            <h3>🎯 Enfocado en tu futuro</h3>
            <p>Aprendé habilidades reales para tu carrera.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="testimonios">
        <h2>Testimonios de estudiantes</h2>

        <div className="testimonios-grid">
          <div className="testimonio-card">
            <p>"Aprender acá me cambió la vida. Los cursos son claros y prácticos."</p>
            <h4>— Sofía R.</h4>
          </div>

          <div className="testimonio-card">
            <p>"La plataforma es súper intuitiva. Me inscribí en 3 cursos y voy por más."</p>
            <h4>— Martín G.</h4>
          </div>

          <div className="testimonio-card">
            <p>"El soporte responde rápido y los profesores explican excelente."</p>
            <h4>— Laura P.</h4>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="contacto">
        <h2>Contacto y Soporte</h2>
        <p className="contacto-descripcion">
          ¿Tenés dudas o necesitás ayuda? Estamos para acompañarte.
        </p>

        <div className="contacto-info">
          <p><strong>📞 Teléfono:</strong> +54 11 5555-1234</p>
          <p><strong>📧 Email:</strong> soporte@plataformacursos.com</p>
          <p><strong>💬 WhatsApp:</strong> +54 9 11 2222-9876</p>
        </div>
      </section>
    </>
  );
}
