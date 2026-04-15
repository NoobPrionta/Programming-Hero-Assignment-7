
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function StatsPage({ data = [] }) {

  // ✅ COLORS (your requirement)
  const COLORS = {
    call: "#1a6fa3",   // blue
    text: "#55c1db",   // blue
    video: "#2a7d5c",  // green
    meetup: "#f59e0b", // optional
  };

  // ✅ If no data → show empty state
  if (!data.length) {
    return (
      <div style={{ textAlign: "center", padding: "80px" }}>
        <h2>No data yet</h2>
        <p style={{ color: "#7a9aaa" }}>
          Click Call, Text, or Video to generate stats
        </p>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: "800px",
      margin: "0 auto",
      padding: "40px 20px",
      textAlign: "center"
    }}>
      {/* TITLE */}
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "32px",
        fontWeight: 800,
        marginBottom: "30px"
      }}>
        Friendship Analytics
      </h1>

      {/* CARD */}
      <div style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
        <h3 style={{
          marginBottom: "20px",
          color: "#4a7a8a",
          fontSize: "18px", // ✅ bigger
          textAlign :"center"
        }}>
          By Interaction Type
        </h3>

        {/* CHART */}
        <div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
}}>
        <PieChart width={350} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="45%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[entry.label] || "#ccc"}
              />
            ))}
          </Pie>

          <Tooltip />

          {/* ✅ CUSTOM LEGEND */}
          <Legend
            formatter={(value) => (
              <span style={{
                color: COLORS[value] || "#333",
                fontSize: "16px",   // ✅ bigger text
                fontWeight: 600
              }}>
                {value}
              </span>
            )}
          />
        </PieChart>
        </div>
      </div>
    </div>
  );
}