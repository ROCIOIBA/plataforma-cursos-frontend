import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Aprendé a programar con cursos claros y prácticos</h1>
        <p>
          Una plataforma creada para ayudarte a crecer desde cero, con contenido
          simple, directo y en español.
        </p>
        <a href="/cursos" className="hero-btn">Ver cursos</a>
      </div>
    </section>
  );
}
