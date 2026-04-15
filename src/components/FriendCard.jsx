const STATUS_STYLES = {
  "Overdue":    { bg: "#fde8e8", color: "#c0392b", dot: "#e74c3c" },
  "Almost Due": { bg: "#fff3e0", color: "#b7770a", dot: "#f39c12" },
  "On Track":   { bg: "#e8f8f0", color: "#1e7e4d", dot: "#27ae60" },
};

const TAG_STYLES = {
  WORK:   { bg: "#dbeafe", color: "#1d4ed8" },
  FAMILY: { bg: "#fce7f3", color: "#9d174d" },
  HOBBY:  { bg: "#ede9fe", color: "#6d28d9" },
  TRAVEL: { bg: "#d1fae5", color: "#065f46" },
};

export default function FriendCard({ friend, onClick }) {
  const { name, lastContact, tags = [], status, avatar } = friend;
  const ss = STATUS_STYLES[status] || STATUS_STYLES["On Track"];
  const initials = name.split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div
      onClick={() => onClick?.(friend)}
      style={{
        background: "#fff",
        borderRadius: "16px",
        border: "1.5px solid #e8eff3",
        padding: "20px 14px 16px",
        cursor: "pointer",
        transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        boxShadow: "0 1px 6px rgba(26,60,77,0.06)",
        userSelect: "none",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform   = "translateY(-4px)";
        e.currentTarget.style.boxShadow   = "0 8px 28px rgba(26,60,77,0.14)";
        e.currentTarget.style.borderColor = "#2a7d5c";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform   = "translateY(0)";
        e.currentTarget.style.boxShadow   = "0 1px 6px rgba(26,60,77,0.06)";
        e.currentTarget.style.borderColor = "#e8eff3";
      }}
    >
      {/* Avatar — photo with initials fallback */}
      <div style={{
        width: "62px", height: "62px",
        borderRadius: "50%",
        border: "2.5px solid #c5dfe8",
        overflow: "hidden",
        background: "linear-gradient(135deg,#e8f4f0,#d0eaff)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        boxShadow: "0 2px 8px rgba(26,60,77,0.10)",
        fontSize: "20px",
        fontWeight: 800,
        color: "#1a3c4d",
        fontFamily: "'Playfair Display', Georgia, serif",
      }}>
        {avatar
          ? <img
              src={avatar}
              alt={name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={e => { e.target.style.display = "none"; }}
            />
          : initials
        }
      </div>

      {/* Name */}
      <div style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 700,
        fontSize: "13.5px",
        color: "#1a3c4d",
        textAlign: "center",
        lineHeight: 1.3,
      }}>
        {name}
      </div>

      {/* Last contact */}
      <div style={{ fontSize: "11px", color: "#7a9aaa", fontFamily: "'DM Sans', sans-serif" }}>
        {lastContact}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "center" }}>
        {tags.map(tag => {
          const ts = TAG_STYLES[tag] || { bg: "#f0f4f7", color: "#4a6070" };
          return (
            <span key={tag} style={{
              background: ts.bg, color: ts.color,
              borderRadius: "6px", padding: "2px 7px",
              fontSize: "10px", fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.4px",
            }}>
              {tag}
            </span>
          );
        })}
      </div>

      {/* Status */}
      <span style={{
        background: ss.bg, color: ss.color,
        borderRadius: "20px", padding: "3px 11px",
        fontSize: "11px", fontWeight: 700,
        fontFamily: "'DM Sans', sans-serif",
        display: "flex", alignItems: "center", gap: "5px",
      }}>
        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: ss.dot, display: "inline-block" }} />
        {status}
      </span>
    </div>
  );
}
