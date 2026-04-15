export default function Footer() {
  return (
    <footer style={{
      background: "#1a3c4d",
      color: "#fff",
      textAlign: "center",
      padding: "48px 24px 28px",
      fontFamily: "'DM Sans', sans-serif",
      marginTop: "auto"
    }}>
      <div style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 800,
        fontSize: "32px",
        letterSpacing: "-0.5px",
        marginBottom: "10px"
      }}>
        Keen<span style={{ color: "#4ecba0" }}>Keeper</span>
      </div>

      <p style={{ color: "#99bfcc", fontSize: "13px", maxWidth: "420px", margin: "0 auto 24px" }}>
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      <p style={{ color: "#7aa3b2", fontSize: "13px", fontWeight: 600, marginBottom: "12px" }}>
        Social Links
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "14px", marginBottom: "32px" }}>
        {["▶️", "𝔽", "✖️"].map((icon, i) => (
          <button key={i} style={{
            width: "36px", height: "36px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            cursor: "pointer",
            fontSize: "14px",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff"
          }}>
            {icon}
          </button>
        ))}
      </div>

      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
        maxWidth: "800px",
        margin: "0 auto",
        fontSize: "12px",
        color: "#6a92a3"
      }}>
        <span>© 2026 KeenKeeper. All rights reserved.</span>
        <div style={{ display: "flex", gap: "20px" }}>
          {["Privacy Policy", "Terms of Service", "Cookies"].map(link => (
            <a key={link} href="#" style={{ color: "#6a92a3", textDecoration: "none" }}>{link}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
