// export default function StatsBar({ data = [] }) {
//   return (
//     <>
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(4, 1fr)",
//         gap: "clamp(8px,2vw,16px)",
//         marginBottom: "8px",
//       }}
//         className="kk-stats-grid"
//       >
//         {data.map(({ value, label, icon, color }) => (
//           <div
//             key={label}
//             style={{
//               background: "#fff",
//               borderRadius: "14px",
//               border: "1.5px solid #e8eff3",
//               padding: "clamp(14px,2vw,22px) 12px",
//               textAlign: "center",
//               boxShadow: "0 1px 6px rgba(26,60,77,0.05)",
//               transition: "transform 0.18s",
//               cursor: "default",
//             }}
//             onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
//             onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
//           >
//             <div style={{ fontSize: "clamp(18px,2.5vw,22px)", marginBottom: "6px" }}>{icon}</div>
//             <div style={{
//               fontSize: "clamp(24px,4vw,34px)",
//               fontWeight: 800,
//               color,
//               fontFamily: "'Playfair Display', Georgia, serif",
//               lineHeight: 1,
//             }}>
//               {value}
//             </div>
//             <div style={{
//               fontSize: "clamp(10px,1.3vw,12px)",
//               color: "#7a9aaa",
//               marginTop: "6px",
//               fontFamily: "'DM Sans', sans-serif",
//               fontWeight: 500,
//             }}>
//               {label}
//             </div>
//           </div>
//         ))}
//       </div>

//       <style>{`
//         @media (max-width: 480px) {
//           .kk-stats-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }


export default function StatsBar({ data = [] }) {

  // ✅ ADD THIS (icons for each type)
  const ICONS = {
    call: "📞",
    sms: "💬",
    video: "🎥",
    meetup: "🤝",
  };

  // ✅ ADD THIS (colors for each type)
  const COLORS = {
    call: "#2a7d5c",
    sms: "#1a6fa3",
    video: "#7c3aed",
    meetup: "#ff9800",
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "clamp(8px,2vw,16px)",
          marginBottom: "8px",
        }}
        className="kk-stats-grid"
      >
        {data.map(({ value, label }) => (
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
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-3px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* ✅ ICON */}
            <div style={{ fontSize: "clamp(18px,2.5vw,22px)", marginBottom: "6px" }}>
              {ICONS[label]}
            </div>

            {/* ✅ VALUE */}
            <div
              style={{
                fontSize: "clamp(24px,4vw,34px)",
                fontWeight: 800,
                color: COLORS[label],
                fontFamily: "'Playfair Display', Georgia, serif",
                lineHeight: 1,
              }}
            >
              {value}
            </div>

            {/* ✅ LABEL */}
            <div
              style={{
                fontSize: "clamp(10px,1.3vw,12px)",
                color: "#7a9aaa",
                marginTop: "6px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                textTransform: "capitalize",
              }}
            >
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