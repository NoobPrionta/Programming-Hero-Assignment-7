import StatsBar from "./StatsBar";

export default function StatsPage({ data = [], timelineCount = 0 }) {

  // ❌ If no data → show nothing
  if (!data || data.length === 0) {
    return (
      <div style={{
        maxWidth: "900px",
        margin: "40px auto",
        textAlign: "center",
        fontFamily: "'DM Sans', sans-serif",
        color: "#7a9aaa"
      }}>
        <h2 style={{ marginBottom: "10px" }}>Friendship Analytics</h2>
        <p>No interactions yet. Start connecting! 👇</p>
      </div>
    );
  }

  // ✅ Calculate total
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div style={{
      maxWidth: "900px",
      margin: "40px auto",
      padding: "20px",
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "28px",
        marginBottom: "20px"
      }}>
        Friendship Analytics
      </h2>

      {/* ✅ GRAPH (Donut style using simple CSS) */}
      <div style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "30px",
        border: "1px solid #e8eff3",
        textAlign: "center"
      }}>
        <p style={{ marginBottom: "20px", color: "#4a7a8a" }}>
          By Interaction Type
        </p>

        {/* DONUT */}
        <div style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          margin: "0 auto",
          background: `conic-gradient(
            #2a7d5c ${(data.find(d => d.label === "call")?.value || 0) / total * 100}%,
            #1a6fa3 ${(data.find(d => d.label === "sms")?.value || 0) / total * 100}% ${(data.find(d => d.label === "sms")?.value || 0 + (data.find(d => d.label === "call")?.value || 0)) / total * 100}%,
            #7c3aed ${(data.find(d => d.label === "video")?.value || 0) / total * 100}%,
            #ff9800 ${(data.find(d => d.label === "meetup")?.value || 0) / total * 100}%
          )`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "#fff"
          }} />
        </div>

        {/* LEGEND */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginTop: "20px"
        }}>
          {data.map(item => (
            <div key={item.label} style={{ fontSize: "12px" }}>
              ● {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}