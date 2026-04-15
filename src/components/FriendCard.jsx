// Sticker avatars instead of real photos
const STICKERS = ["🐼", "🦊", "🐸", "🐯", "🦁", "🐻", "🐨", "🐺", "🦝", "🐮", "🐷", "🦄"];

const STATUS_COLORS = {
  "Overdue":     { bg: "#fde8e8", color: "#c0392b", dot: "#e74c3c" },
  "Almost Due":  { bg: "#fff3e0", color: "#b7770a", dot: "#f39c12" },
  "On Track":    { bg: "#e8f8f0", color: "#1e7e4d", dot: "#27ae60" },
};

const TAG_COLORS = {
  WORK:   { bg: "#dbeafe", color: "#1d4ed8" },
  FAMILY: { bg: "#fce7f3", color: "#9d174d" },
  HOBBY:  { bg: "#ede9fe", color: "#6d28d9" },
  TRAVEL: { bg: "#d1fae5", color: "#065f46" },
};

export default function FriendCard({ friend, onClick }) {
  const { name, lastContact, tags = [], status, stickerIndex = 0 } = friend;
  const sticker = STICKERS[stickerIndex % STICKERS.length];
  const statusStyle = STATUS_COLORS[status] || STATUS_COLORS["On Track"];

  return (
    <div
      onClick={() => onClick?.(friend)}
      style={{
        background: "#fff",
        borderRadius: "14px",
        border: "1.5px solid #e8eff3",
        padding: "20px 16px 16px",
        cursor: "pointer",
        transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        minWidth: "140px",
        boxShadow: "0 1px 6px rgba(26,60,77,0.06)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(26,60,77,0.13)";
        e.currentTarget.style.borderColor = "#2a7d5c";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 1px 6px rgba(26,60,77,0.06)";
        e.currentTarget.style.borderColor = "#e8eff3";
      }}
    >
      {/* Sticker Avatar */}
      <div style={{
        width: "60px", height: "60px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #e8f4f0 0%, #d0eaff 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "30px",
        border: "2.5px solid #c5dfe8",
        boxShadow: "0 2px 8px rgba(26,60,77,0.10)",
        flexShrink: 0,
      }}>
        {sticker}
      </div>

      {/* Name */}
      <div style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 700,
        fontSize: "14px",
        color: "#1a3c4d",
        textAlign: "center",
        lineHeight: 1.3,
      }}>
        {name}
      </div>

      {/* Last contact */}
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "11px",
        color: "#7a9aaa",
      }}>
        {lastContact}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "center" }}>
        {tags.map(tag => {
          const ts = TAG_COLORS[tag] || { bg: "#f0f4f7", color: "#4a6070" };
          return (
            <span key={tag} style={{
              background: ts.bg,
              color: ts.color,
              borderRadius: "6px",
              padding: "2px 8px",
              fontSize: "10px",
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.5px",
            }}>
              {tag}
            </span>
          );
        })}
      </div>

      {/* Status badge */}
      <span style={{
        background: statusStyle.bg,
        color: statusStyle.color,
        borderRadius: "20px",
        padding: "3px 12px",
        fontSize: "11px",
        fontWeight: 700,
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}>
        <span style={{
          width: "7px", height: "7px",
          borderRadius: "50%",
          background: statusStyle.dot,
          display: "inline-block"
        }} />
        {status}
      </span>
    </div>
  );
}
