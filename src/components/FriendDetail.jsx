const STICKERS = ["🐼", "🦊", "🐸", "🐯", "🦁", "🐻", "🐨", "🐺", "🦝", "🐮", "🐷", "🦄"];

const STATUS_COLORS = {
  "Overdue":    { bg: "#fde8e8", color: "#c0392b" },
  "Almost Due": { bg: "#fff3e0", color: "#b7770a" },
  "On Track":   { bg: "#e8f8f0", color: "#1e7e4d" },
};

export default function FriendDetail({ friend, onBack }) {
  if (!friend) return null;
  const { name, status, note, preferred, goalDays = 30, daysSinceContact = 0, nextDue, stickerIndex = 0 } = friend;
  const sticker = STICKERS[stickerIndex % STICKERS.length];
  const statusStyle = STATUS_COLORS[status] || STATUS_COLORS["On Track"];

  const quickActions = [
    { label: "Call",  icon: "📞" },
    { label: "Text",  icon: "💬" },
    { label: "Video", icon: "🎥" },
  ];

  return (
    <div style={{
      maxWidth: "860px",
      margin: "0 auto",
      padding: "32px 24px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#4a7a8a",
          fontWeight: 600,
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "24px",
          padding: 0,
        }}
      >
        ← Back to Friends
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "20px" }}>
        {/* Left panel */}
        <div style={{
          background: "#fff",
          borderRadius: "16px",
          border: "1.5px solid #e8eff3",
          padding: "32px 24px",
          textAlign: "center",
          boxShadow: "0 2px 12px rgba(26,60,77,0.07)",
        }}>
          {/* Sticker avatar */}
          <div style={{
            width: "80px", height: "80px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #e8f4f0 0%, #d0eaff 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "40px",
            border: "3px solid #c5dfe8",
            margin: "0 auto 16px",
          }}>
            {sticker}
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "20px",
            fontWeight: 800,
            color: "#1a3c4d",
            margin: "0 0 8px"
          }}>
            {name}
          </h2>

          <span style={{
            background: statusStyle.bg,
            color: statusStyle.color,
            borderRadius: "20px",
            padding: "4px 14px",
            fontSize: "12px",
            fontWeight: 700,
          }}>
            {status}
          </span>

          {note && (
            <p style={{
              fontStyle: "italic",
              color: "#7a9aaa",
              fontSize: "13px",
              margin: "14px 0 6px",
            }}>
              "{note}"
            </p>
          )}
          {preferred && (
            <p style={{ fontSize: "12px", color: "#4a7a8a", fontWeight: 500 }}>
              Preferred: {preferred}
            </p>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
            {[
              { icon: "🔕", label: "Snooze 2 Weeks" },
              { icon: "📁", label: "Archive" },
            ].map(({ icon, label }) => (
              <button key={label} style={{
                background: "#f5f9fb",
                border: "1.5px solid #e0ecf2",
                borderRadius: "10px",
                padding: "10px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "13px",
                color: "#1a3c4d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "background 0.15s",
              }}>
                {icon} {label}
              </button>
            ))}
            <button style={{
              background: "#fde8e8",
              border: "1.5px solid #f5c0c0",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "13px",
              color: "#c0392b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}>
              🗑️ Delete
            </button>
          </div>
        </div>

        {/* Right panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Stats row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "14px",
          }}>
            {[
              { label: "Days Since Contact", value: daysSinceContact },
              { label: "Goal (Days)",         value: goalDays },
              { label: "Next Due",            value: nextDue || "—", highlight: true },
            ].map(({ label, value, highlight }) => (
              <div key={label} style={{
                background: "#fff",
                borderRadius: "14px",
                border: "1.5px solid #e8eff3",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 1px 6px rgba(26,60,77,0.05)",
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 800,
                  fontSize: highlight ? "18px" : "32px",
                  color: highlight ? "#1a6fa3" : "#1a3c4d",
                }}>
                  {value}
                </div>
                <div style={{ fontSize: "12px", color: "#7a9aaa", marginTop: "6px", fontWeight: 500 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Relationship goal */}
          <div style={{
            background: "#fff",
            borderRadius: "14px",
            border: "1.5px solid #e8eff3",
            padding: "20px 24px",
            boxShadow: "0 1px 6px rgba(26,60,77,0.05)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "16px", color: "#1a3c4d", margin: 0, fontFamily: "'Playfair Display', Georgia, serif" }}>
                Relationship Goal
              </h3>
              <button style={{
                background: "#f0f7fa",
                border: "1.5px solid #d0e8f0",
                borderRadius: "8px",
                padding: "4px 14px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 600,
                color: "#1a6fa3",
              }}>
                Edit
              </button>
            </div>
            <p style={{ color: "#4a7a8a", fontSize: "14px", margin: 0 }}>
              Connect every <strong>{goalDays} days</strong>
            </p>
          </div>

          {/* Quick check-in */}
          <div style={{
            background: "#fff",
            borderRadius: "14px",
            border: "1.5px solid #e8eff3",
            padding: "20px 24px",
            boxShadow: "0 1px 6px rgba(26,60,77,0.05)",
          }}>
            <h3 style={{ fontWeight: 700, fontSize: "16px", color: "#1a3c4d", marginBottom: "16px", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Quick Check-In
            </h3>
            <div style={{ display: "flex", gap: "14px" }}>
              {quickActions.map(({ label, icon }) => (
                <button key={label} style={{
                  flex: 1,
                  background: "#f5f9fb",
                  border: "1.5px solid #d8eaf2",
                  borderRadius: "12px",
                  padding: "18px 12px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.17s",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#1a3c4d";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "#f5f9fb";
                    e.currentTarget.style.color = "inherit";
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>{icon}</div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "inherit" }}>{label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
