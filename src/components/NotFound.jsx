export default function NotFound({ onBack }) {
  return (
    <div style={{
      textAlign: "center",
      padding: "80px 20px",
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <h1 style={{
        fontSize: "72px",
        fontWeight: 800,
        color: "#1a3c4d"
      }}>
        404
      </h1>

      <h2 style={{ marginBottom: "10px" }}>
        Page Not Found
      </h2>

      <p style={{ color: "#7a9aaa", marginBottom: "20px" }}>
        The page you are looking for doesn't exist.
      </p>

      <button
        onClick={onBack}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "#1a3c4d",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        Go Home
      </button>
    </div>
  );
}