import { useState } from "react";

const TYPE_CONFIG = {
  Meetup: { icon: "🤝", color: "#fff3e0", border: "#f5c842" },
  Text:   { icon: "💬", color: "#e8f0ff", border: "#6495ed" },
  Call:   { icon: "📞", color: "#e8f8f0", border: "#2a7d5c" },
  Video:  { icon: "🎥", color: "#f3e8ff", border: "#8b5cf6" },
};

const FILTER_OPTIONS = ["All", "Meetup", "Text", "Call", "Video"];

export default function Timeline({ interactions = [] }) {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? interactions
    : interactions.filter(i => i.type === filter);

  return (
    <div style={{
      maxWidth: "680px",
      margin: "0 auto",
      padding: "32px 24px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 800,
        fontSize: "28px",
        color: "#1a3c4d",
        marginBottom: "20px",
      }}>
        Timeline
      </h1>

      {/* Filter dropdown */}
      <select
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{
          background: "#fff",
          border: "1.5px solid #d0e4ee",
          borderRadius: "8px",
          padding: "9px 16px",
          fontSize: "14px",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          color: "#1a3c4d",
          cursor: "pointer",
          marginBottom: "24px",
          outline: "none",
          minWidth: "180px",
        }}
      >
        {FILTER_OPTIONS.map(opt => (
          <option key={opt} value={opt}>Filter: {opt}</option>
        ))}
      </select>

      {/* Entries */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {filtered.map((item, i) => {
          const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG.Text;
          return (
            <div key={i} style={{
              background: "#fff",
              border: "1.5px dashed #c8dde8",
              borderRadius: "12px",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              transition: "box-shadow 0.17s",
              cursor: "default",
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,60,77,0.09)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <div style={{
                width: "38px", height: "38px",
                borderRadius: "10px",
                background: cfg.color,
                border: `1.5px solid ${cfg.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                flexShrink: 0,
              }}>
                {cfg.icon}
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1a3c4d" }}>
                  {item.type}{" "}
                  <span style={{ fontWeight: 500, color: "#4a7a8a" }}>
                    with {item.person}
                  </span>
                </div>
                <div style={{ fontSize: "12px", color: "#7a9aaa", marginTop: "2px" }}>
                  {item.date}
                </div>
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", color: "#7a9aaa", padding: "40px 0", fontSize: "14px" }}>
            No interactions found for this filter.
          </div>
        )}
      </div>
    </div>
  );
}
