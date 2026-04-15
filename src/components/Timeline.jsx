
import { useState } from "react";

/* ✅ FIX: use lowercase internally */
const TYPE_CONFIG = {
  call:   { icon: "📞", bg: "#e8f8f0", border: "#2a7d5c", label: "Call" },
  text:   { icon: "💬", bg: "#e8f0ff", border: "#6495ed", label: "Text" },
  video:  { icon: "🎥", bg: "#f3e8ff", border: "#8b5cf6", label: "Video" },
  meetup: { icon: "🤝", bg: "#fff3e0", border: "#f5c842", label: "Meetup" },
};

/* ✅ FILTERS (match lowercase logic) */
const FILTERS = ["all", "call", "text", "video"];

export default function Timeline({ interactions = [] }) {
  const [filter, setFilter] = useState("all");

  /* ✅ Normalize + filter */
  const normalizedData = interactions.map(item => ({
    ...item,
    type: item.type.toLowerCase()
  }));

  const filtered =
    filter === "all"
      ? normalizedData
      : normalizedData.filter(i => i.type === filter);

  return (
    <div style={{
      maxWidth: "700px",
      margin: "0 auto",
      padding: "clamp(20px,4vw,40px) clamp(12px,3vw,24px)",
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* Header */}
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 800,
        fontSize: "clamp(22px,4vw,32px)",
        color: "#1a3c4d",
        marginBottom: "8px",
      }}>
        Timeline
      </h1>

      <p style={{ color: "#7a9aaa", fontSize: "14px", marginBottom: "24px" }}>
        Your interaction history — logged from each friend's Quick Check-In.
      </p>

      {/* FILTER BUTTONS */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "7px 18px",
              borderRadius: "20px",
              border: "1.5px solid",
              borderColor: filter === f ? "#1a3c4d" : "#d0e4ee",
              background: filter === f ? "#1a3c4d" : "#fff",
              color: filter === f ? "#fff" : "#4a7a8a",
              fontWeight: 700,
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* ✅ EMPTY (ALL) */}
      {normalizedData.length === 0 && (
        <div style={{
          textAlign: "center",
          padding: "clamp(48px,8vw,80px) 24px",
          background: "#fff",
          borderRadius: "16px",
          border: "2px dashed #d0e4ee",
        }}>
          <div style={{ fontSize: "52px", marginBottom: "16px" }}>📭</div>

          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "20px",
            color: "#1a3c4d",
            marginBottom: "10px",
          }}>
            No interactions yet
          </h3>

          <p style={{
            color: "#7a9aaa",
            fontSize: "14px",
            maxWidth: "320px",
            margin: "0 auto"
          }}>
            Go to a friend's profile and tap <strong>Call</strong>,{" "}
            <strong>Text</strong>, or <strong>Video</strong> to log your first interaction!
          </p>
        </div>
      )}

      {/* ✅ FILTER EMPTY */}
      {normalizedData.length > 0 && filtered.length === 0 && (
        <div style={{
          textAlign: "center",
          color: "#7a9aaa",
          padding: "48px 0",
          fontSize: "14px"
        }}>
          No <strong>{filter}</strong> interactions found.
        </div>
      )}

      {/* ENTRIES */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {filtered.map((item, i) => {
          const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG.text;

          return (
            <div
              key={item.id || i}
              style={{
                background: "#fff",
                border: "1.5px solid #e0ecf2",
                borderLeft: `4px solid ${cfg.border}`,
                borderRadius: "12px",
                padding: "clamp(12px,2vw,16px) clamp(14px,2.5vw,20px)",
                display: "flex",
                alignItems: "center",
                gap: "clamp(10px,2vw,16px)",
                animation: "fadeSlideIn 0.35s ease both",
              }}
            >

              {/* ICON */}
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: cfg.bg,
                border: `1.5px solid ${cfg.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {cfg.icon}
              </div>

              {/* TEXT */}
              <div style={{ flex: 1 }}>
                <div style={{
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#1a3c4d",
                }}>
                  {cfg.label} with{" "}
                  <span style={{ color: "#2a7d5c" }}>{item.person}</span>
                </div>

                <div style={{ fontSize: "12px", color: "#7a9aaa" }}>
                  {item.date}
                </div>
              </div>

              {/* TYPE BADGE */}
              <span style={{
                background: cfg.bg,
                color: cfg.border,
                borderRadius: "20px",
                padding: "3px 12px",
                fontSize: "11px",
                fontWeight: 700,
              }}>
                {cfg.label}
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}