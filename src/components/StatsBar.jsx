export default function StatsBar({ data = [] }) {
  return (
    <>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "clamp(8px,2vw,16px)",
        marginBottom: "8px",
      }}
        className="kk-stats-grid"
      >
        {data.map(({ value, label, icon, color }) => (
          <div
            key={label}
            style={{
              background: "#fff",
              borderRadius: "14px",
              border: "1.5px solid #e8eff3",
              padding: "clamp(14px,2vw,22px) 12px",
              textAlign: "center",
              boxShadow: "0 1px 6px rgba(26,60,77,0.05)",
              transition: "transform 0.18s",
              cursor: "default",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{ fontSize: "clamp(18px,2.5vw,22px)", marginBottom: "6px" }}>{icon}</div>
            <div style={{
              fontSize: "clamp(24px,4vw,34px)",
              fontWeight: 800,
              color,
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: 1,
            }}>
              {value}
            </div>
            <div style={{
              fontSize: "clamp(10px,1.3vw,12px)",
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

      <style>{`
        @media (max-width: 480px) {
          .kk-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
