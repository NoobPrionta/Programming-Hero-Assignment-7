// Simple donut chart drawn with SVG — no external charting library needed
function DonutChart({ data }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const cx = 100, cy = 100, r = 70, strokeW = 28;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  const segments = data.map(d => {
    const pct = d.value / total;
    const dash = pct * circumference;
    const gap = circumference - dash;
    const seg = { ...d, dash, gap, offset };
    offset += dash;
    return seg;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Background ring */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e8eff3" strokeWidth={strokeW} />
        {segments.map((seg, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={strokeW}
            strokeDasharray={`${seg.dash} ${seg.gap}`}
            strokeDashoffset={-seg.offset + circumference / 4}
            style={{ transition: "stroke-dasharray 0.5s ease" }}
          />
        ))}
        {/* Center label */}
        <text x={cx} y={cy - 6} textAnchor="middle" fontSize="13" fill="#7a9aaa" fontFamily="'DM Sans', sans-serif">Total</text>
        <text x={cx} y={cy + 14} textAnchor="middle" fontSize="22" fontWeight="800" fill="#1a3c4d" fontFamily="'Playfair Display', Georgia, serif">{total}</text>
      </svg>

      {/* Legend */}
      <div style={{ display: "flex", gap: "18px", marginTop: "8px" }}>
        {data.map(d => (
          <div key={d.label} style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#4a7a8a" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: d.color, display: "inline-block" }} />
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}

const DEFAULT_DATA = [
  { label: "Text",   value: 14, color: "#6495ed" },
  { label: "Call",   value: 9,  color: "#2a7d5c" },
  { label: "Video",  value: 11, color: "#8b5cf6" },
  { label: "Meetup", value: 6,  color: "#f39c12" },
];

export default function StatsPage({ data = DEFAULT_DATA }) {
  return (
    <div style={{
      maxWidth: "720px",
      margin: "0 auto",
      padding: "32px 24px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 800,
        fontSize: "28px",
        color: "#1a3c4d",
        marginBottom: "24px",
      }}>
        Friendship Analytics
      </h1>

      <div style={{
        background: "#fff",
        borderRadius: "16px",
        border: "1.5px solid #e8eff3",
        padding: "32px 28px",
        boxShadow: "0 2px 14px rgba(26,60,77,0.06)",
      }}>
        <h3 style={{ color: "#4a7a8a", fontSize: "14px", fontWeight: 600, marginBottom: "24px" }}>
          By Interaction Type
        </h3>
        <DonutChart data={data} />

        {/* Breakdown table */}
        <div style={{
          marginTop: "32px",
          borderTop: "1.5px solid #e8eff3",
          paddingTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px",
        }}>
          {data.map(d => {
            const total = data.reduce((s, x) => s + x.value, 0);
            const pct = Math.round((d.value / total) * 100);
            return (
              <div key={d.label} style={{
                background: "#f7fafc",
                borderRadius: "10px",
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{
                    width: "12px", height: "12px",
                    borderRadius: "3px",
                    background: d.color,
                    display: "inline-block",
                  }} />
                  <span style={{ fontWeight: 600, fontSize: "14px", color: "#1a3c4d" }}>{d.label}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontWeight: 800, fontSize: "18px", color: "#1a3c4d", fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {d.value}
                  </span>
                  <span style={{ fontSize: "12px", color: "#7a9aaa", marginLeft: "6px" }}>{pct}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
