import "./Dashboard.css";

export default function Dashboard() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  return (
    <div className="dashboard-container fade-in">
      <h1>Bienvenido, {usuario?.nombre}</h1>

      <div className="dashboard-grid">
        <div className="dash-card">
          <h3>Mis Cursos</h3>
          <p>Accedé a los cursos en los que estás inscripto.</p>
        </div>

        <div className="dash-card">
          <h3>Progreso</h3>
          <p>Seguimiento de tus avances en cada curso.</p>
        </div>

        <div className="dash-card">
          <h3>Perfil</h3>
          <p>Actualizá tu información personal.</p>
        </div>
      </div>
    </div>
  );
}
