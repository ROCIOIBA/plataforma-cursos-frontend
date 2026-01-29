import { Link } from "react-router-dom";
import "./CourseCard.css";

export default function CourseCard({ curso }) {
  return (
    <div className="card">
      <h3>{curso.titulo}</h3>
      <p>{curso.descripcion}</p>
      <span className="categoria">{curso.categoria}</span>

      <Link to={`/curso/${curso._id}`} className="btn">
        Ver más
      </Link>
    </div>
  );
}
