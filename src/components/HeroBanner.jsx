export default function HeroBanner({ onAddFriend }) {
  return (
    <div style={{
      background: "linear-gradient(120deg, #e8f5f0 0%, #d0eaff 100%)",
      border: "2px dashed #a8d5c2",
      borderRadius: "18px",
      textAlign: "center",
      padding: "48px 32px 40px",
      marginBottom: "28px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative stickers in corners */}
      {["🌱", "💌", "🌟", "🤝"].map((s, i) => (
        <span key={i} style={{
          position: "absolute",
          fontSize: "28px",
          opacity: 0.18,
          top: i < 2 ? "16px" : undefined,
          bottom: i >= 2 ? "16px" : undefined,
          left: i % 2 === 0 ? "24px" : undefined,
          right: i % 2 === 1 ? "24px" : undefined,
          transform: `rotate(${[-12, 14, 8, -10][i]}deg)`,
          pointerEvents: "none",
          userSelect: "none",
        }}>
          {s}
        </span>
      ))}

      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 800,
        fontSize: "30px",
        color: "#1a3c4d",
        marginBottom: "12px",
        lineHeight: 1.25,
      }}>
        Friends to keep close in your life
      </h1>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        color: "#4a7a8a",
        fontSize: "15px",
        maxWidth: "400px",
        margin: "0 auto 28px",
        lineHeight: 1.6,
      }}>
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      <button
        onClick={onAddFriend}
        style={{
          background: "#1a3c4d",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          padding: "13px 28px",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: "15px",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          transition: "background 0.18s, transform 0.18s",
          boxShadow: "0 4px 14px rgba(26,60,77,0.2)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "#2a7d5c";
          e.currentTarget.style.transform = "scale(1.04)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "#1a3c4d";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <span style={{ fontSize: "18px" }}>+</span> Add a Friend
      </button>
    </div>
  );
}
