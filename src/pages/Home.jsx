export default function Home() {
  return (
    <>
      {/* HERO */}
      <div
        className="home-hero"
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #4f46e5, #6366f1)",
          color: "white",
        }}
      >
        <div className="hero-content" style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Aprende a Programar
          </h1>

          <p style={{ fontSize: "20px", marginBottom: "30px" }}>
            Cursos modernos, prácticos y pensados para que avances a tu ritmo.
            Inscribite, aprendé y construí tu futuro.
          </p>

          <a
            href="/cursos"
            className="btn-hero"
            style={{
              background: "white",
              color: "#4f46e5",
              padding: "12px 25px",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Ver Cursos
          </a>
        </div>
      </div>

      {/* BENEFICIOS */}
      <section className="beneficios" style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          ¿Por qué elegirnos?
        </h2>

        <div
          className="beneficios-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div style={cardStyle}>
            <h3>📚 Contenido actualizado</h3>
            <p>Cursos creados con las tecnologías más usadas hoy.</p>
          </div>

          <div style={cardStyle}>
            <h3>⚡ Aprendizaje rápido</h3>
            <p>Clases cortas, prácticas y fáciles de seguir.</p>
          </div>

          <div style={cardStyle}>
            <h3>🎯 Enfocado en tu futuro</h3>
            <p>Aprendé habilidades reales para tu carrera.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section
        className="testimonios"
        style={{ padding: "60px 20px", background: "#f9fafb" }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Testimonios de estudiantes
        </h2>

        <div
          className="testimonios-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div style={testimonioCard}>
            <p>"Aprender acá me cambió la vida. Los cursos son claros y prácticos."</p>
            <h4 style={{ marginTop: "15px" }}>— Sofía R.</h4>
          </div>

          <div style={testimonioCard}>
            <p>"La plataforma es súper intuitiva. Me inscribí en 3 cursos y voy por más."</p>
            <h4 style={{ marginTop: "15px" }}>— Martín G.</h4>
          </div>

          <div style={testimonioCard}>
            <p>"El soporte responde rápido y los profesores explican excelente."</p>
            <h4 style={{ marginTop: "15px" }}>— Laura P.</h4>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        className="contacto"
        style={{
          padding: "60px 20px",
          background: "white",
          textAlign: "center",
        }}
      >
        <h2>Contacto y Soporte</h2>
        <p style={{ marginTop: "10px", marginBottom: "30px" }}>
          ¿Tenés dudas o necesitás ayuda? Estamos para acompañarte.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
            fontSize: "18px",
          }}
        >
          <p><strong>📞 Teléfono:</strong> +54 11 5555-1234</p>
          <p><strong>📧 Email:</strong> soporte@plataformacursos.com</p>
          <p><strong>💬 WhatsApp:</strong> +54 9 11 2222-9876</p>
        </div>
      </section>
    </>
  );
}

// ESTILOS REUTILIZABLES
const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const testimonioCard = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};
