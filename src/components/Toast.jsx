export default function Toast({ mensaje, tipo }) {
  if (!mensaje) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "12px 20px",
        backgroundColor: tipo === "error" ? "#ff4d4d" : "#4caf50",
        color: "white",
        borderRadius: "6px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        zIndex: 9999,
        fontSize: "15px",
        animation: "fadeIn 0.3s ease"
      }}
    >
      {mensaje}
    </div>
  );
}
