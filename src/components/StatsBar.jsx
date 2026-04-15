const stats = [
  { value: 10, label: "Total Friends",          icon: "👥", color: "#1a3c4d" },
  { value: 3,  label: "On Track",               icon: "✅", color: "#2a7d5c" },
  { value: 6,  label: "Need Attention",         icon: "⚠️", color: "#c0392b" },
  { value: 12, label: "Interactions This Month",icon: "💬", color: "#1a6fa3" },
];

export default function StatsBar({ data = stats }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "16px",
      padding: "0",
      marginBottom: "8px",
    }}>
      {data.map(({ value, label, icon, color }) => (
        <div key={label} style={{
          background: "#fff",
          borderRadius: "14px",
          border: "1.5px solid #e8eff3",
          padding: "22px 16px 18px",
          textAlign: "center",
          boxShadow: "0 1px 6px rgba(26,60,77,0.05)",
          transition: "transform 0.18s",
          cursor: "default",
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
        >
          <div style={{ fontSize: "22px", marginBottom: "6px" }}>{icon}</div>
          <div style={{
            fontSize: "34px",
            fontWeight: 800,
            color,
            fontFamily: "'Playfair Display', Georgia, serif",
            lineHeight: 1,
          }}>
            {value}
          </div>
          <div style={{
            fontSize: "12px",
            color: "#7a9aaa",
            marginTop: "6px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
          }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
