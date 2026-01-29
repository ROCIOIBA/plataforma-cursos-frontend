export default function CursosDestacados() {
  const cursos = [
    {
      titulo: "React desde cero",
      descripcion: "Aprendé a crear interfaces modernas y dinámicas.",
      link: "/cursos"
    },
    {
      titulo: "Node.js y Express",
      descripcion: "Construí APIs profesionales y escalables.",
      link: "/cursos"
    },
    {
      titulo: "MongoDB básico",
      descripcion: "Guardá y consultá datos como un pro.",
      link: "/cursos"
    }
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "#f9fafb",              // ⭐ FONDO SUAVE
        borderTop: "1px solid #e5e7eb"      // ⭐ SEPARACIÓN DEL HERO
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "30px",
          color: "#333",
          fontWeight: "700"
        }}
      >
        Cursos destacados
      </h2>

      <div
        style={{
          display: "grid",
          gap: "25px",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >
        {cursos.map((curso, i) => (
          <div
            key={i}
            style={{
              padding: "25px",
              borderRadius: "14px",
              background: "white",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
              transition: "transform .25s, box-shadow .25s",
              cursor: "pointer"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.08)";
            }}
          >
            <h3 style={{ marginBottom: "10px", color: "#111", fontWeight: "600" }}>
              {curso.titulo}
            </h3>

            <p style={{ marginBottom: "20px", color: "#555" }}>
              {curso.descripcion}
            </p>

            <a
              href={curso.link}
              style={{
                display: "inline-block",
                padding: "10px 20px",
                background: "#4f46e5",
                color: "white",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "background .2s"
              }}
              onMouseOver={(e) => (e.target.style.background = "#4338ca")}
              onMouseOut={(e) => (e.target.style.background = "#4f46e5")}
            >
              Ver curso
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
