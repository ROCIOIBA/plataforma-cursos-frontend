export default function Testimonios() {
  const testimonios = [
    {
      nombre: "Ana G.",
      texto: "La plataforma es súper clara y los cursos me ayudaron a entender programación desde cero."
    },
    {
      nombre: "Lucas R.",
      texto: "Me encantó el curso de React, muy bien explicado y fácil de seguir."
    },
    {
      nombre: "María P.",
      texto: "La interfaz es hermosa y simple. Me motivó a seguir aprendiendo."
    }
  ];

  return (
    <section style={{ marginTop: "3rem" }}>
      <h2>Testimonios</h2>

      <div style={{ display: "grid", gap: "1rem" }}>
        {testimonios.map((t, i) => (
          <div
            key={i}
            style={{
              padding: "1rem",
              borderRadius: "8px",
              background: "#f5f5f5"
            }}
          >
            <p style={{ fontStyle: "italic" }}>"{t.texto}"</p>
            <p style={{ fontWeight: "bold", marginTop: "0.5rem" }}>— {t.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
