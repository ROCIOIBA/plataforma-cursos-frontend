import "./Profile.css";

export default function Profile() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const inicial = usuario?.nombre?.charAt(0).toUpperCase();

  return (
    <div className="profile-container fade-in">
      <div className="profile-card">
        <div className="profile-avatar">{inicial}</div>

        <h2>{usuario?.nombre}</h2>
        <p className="email">{usuario?.email}</p>

        <div className="profile-info">
          <p><strong>Rol:</strong> {usuario?.rol}</p>
          <p><strong>Miembro desde:</strong> {usuario?.createdAt?.slice(0,10)}</p>
        </div>
      </div>
    </div>
  );
}
