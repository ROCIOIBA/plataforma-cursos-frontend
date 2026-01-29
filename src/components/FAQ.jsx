export default function FAQ() {
  return (
    <section style={{ marginTop: "3rem" }}>
      <h2>Preguntas frecuentes</h2>

      <details>
        <summary>¿Cómo accedo a los cursos?</summary>
        <p>Una vez que iniciás sesión, podés ver tus cursos en esta misma sección.</p>
      </details>

      <details>
        <summary>¿Los cursos tienen certificado?</summary>
        <p>Por ahora no, pero estamos trabajando para agregarlo.</p>
      </details>

      <details>
        <summary>¿Qué hago si olvido mi contraseña?</summary>
        <p>Podés usar la opción “Olvidé mi contraseña” en el login.</p>
      </details>

      <details>
        <summary>¿La plataforma es gratuita?</summary>
        <p>Sí, los cursos actuales son de acceso libre.</p>
      </details>
    </section>
  );
}
