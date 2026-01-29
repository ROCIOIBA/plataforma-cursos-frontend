export default function CourseCard({ curso }) {
  return (
    <div className="course-card">
      <h3>{curso.titulo}</h3>
      <p>{curso.description}</p>
      <p><strong>Categoría:</strong> {curso.categoria}</p>
      <p><strong>Nivel:</strong> {curso.nivel}</p>
      <p><strong>Profesor:</strong> {curso.profesor}</p>
    </div>
  );
}
