// const STATUS_STYLES = {
//   "Overdue":    { bg: "#fde8e8", color: "#c0392b" },
//   "Almost Due": { bg: "#fff3e0", color: "#b7770a" },
//   "On Track":   { bg: "#e8f8f0", color: "#1e7e4d" },
// };

// const QUICK_ACTIONS = [
//   { label: "Call",  icon: "📞", accent: "#2a7d5c" },
//   { label: "Text",  icon: "💬", accent: "#1a6fa3" },
//   { label: "Video", icon: "🎥", accent: "#7c3aed" },
// ];

// export default function FriendDetail({ friend, onBack, onInteraction }) {
//   if (!friend) return null;
//   const { name, status, note, preferred, goalDays = 30,
//           daysSinceContact = 0, nextDue, avatar } = friend;
//   const ss = STATUS_STYLES[status] || STATUS_STYLES["On Track"];
//   const initials = name.split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase();

//   return (
//     <div style={{
//       maxWidth: "900px",
//       margin: "0 auto",
//       padding: "clamp(16px,4vw,36px) clamp(12px,3vw,24px)",
//       fontFamily: "'DM Sans', sans-serif",
//     }}>
//       {/* Back */}
//       <button
//         onClick={onBack}
//         style={{
//           background: "none", border: "none", cursor: "pointer",
//           color: "#4a7a8a", fontWeight: 600, fontSize: "14px",
//           display: "flex", alignItems: "center", gap: "6px",
//           marginBottom: "24px", padding: 0,
//         }}
//       >
//         ← Back to Friends
//       </button>

//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "clamp(200px,28%,270px) 1fr",
//         gap: "clamp(12px,2vw,20px)",
//       }}
//         className="kk-detail-grid"
//       >
//         {/* ── Left panel ─────────────────────────────────────────────────── */}
//         <div style={{
//           background: "#fff",
//           borderRadius: "16px",
//           border: "1.5px solid #e8eff3",
//           padding: "clamp(20px,3vw,32px) clamp(16px,2.5vw,24px)",
//           textAlign: "center",
//           boxShadow: "0 2px 12px rgba(26,60,77,0.07)",
//           alignSelf: "start",
//         }}>
//           {/* Photo avatar */}
//           <div style={{
//             width: "80px", height: "80px",
//             borderRadius: "50%",
//             border: "3px solid #c5dfe8",
//             margin: "0 auto 16px",
//             overflow: "hidden",
//             background: "linear-gradient(135deg,#e8f4f0,#d0eaff)",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             fontSize: "28px", fontWeight: 800,
//             color: "#1a3c4d",
//             fontFamily: "'Playfair Display', Georgia, serif",
//           }}>
//             {avatar
//               ? <img src={avatar} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { e.target.style.display = "none"; }} />
//               : initials
//             }
//           </div>

//           <h2 style={{
//             fontFamily: "'Playfair Display', Georgia, serif",
//             fontSize: "clamp(16px,2.5vw,20px)",
//             fontWeight: 800, color: "#1a3c4d", marginBottom: "8px",
//           }}>
//             {name}
//           </h2>

//           <span style={{
//             ...ss, borderRadius: "20px",
//             padding: "4px 14px", fontSize: "12px", fontWeight: 700,
//             display: "inline-block",
//           }}>
//             {status}
//           </span>

//           {note && <p style={{ fontStyle: "italic", color: "#7a9aaa", fontSize: "13px", margin: "14px 0 4px" }}>"{note}"</p>}
//           {preferred && <p style={{ fontSize: "12px", color: "#4a7a8a", fontWeight: 500 }}>Preferred: {preferred}</p>}

//           <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
//             {[{ icon: "🔕", label: "Snooze 2 Weeks" }, { icon: "📁", label: "Archive" }].map(({ icon, label }) => (
//               <button key={label} style={{
//                 background: "#f5f9fb", border: "1.5px solid #e0ecf2",
//                 borderRadius: "10px", padding: "10px", cursor: "pointer",
//                 fontWeight: 600, fontSize: "13px", color: "#1a3c4d",
//                 display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
//                 fontFamily: "'DM Sans', sans-serif",
//               }}>
//                 {icon} {label}
//               </button>
//             ))}
//             <button style={{
//               background: "#fde8e8", border: "1.5px solid #f5c0c0",
//               borderRadius: "10px", padding: "10px", cursor: "pointer",
//               fontWeight: 700, fontSize: "13px", color: "#c0392b",
//               display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
//               fontFamily: "'DM Sans', sans-serif",
//             }}>
//               🗑️ Delete
//             </button>
//           </div>
//         </div>

//         {/* ── Right panel ────────────────────────────────────────────────── */}
//         <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px,2vw,16px)" }}>
//           {/* Stats row */}
//           <div style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(3, 1fr)",
//             gap: "clamp(8px,1.5vw,14px)",
//           }}>
//             {[
//               { label: "Days Since Contact", value: daysSinceContact,        big: true  },
//               { label: "Goal (Days)",         value: goalDays,                big: true  },
//               { label: "Next Due",            value: nextDue || "—",          big: false },
//             ].map(({ label, value, big }) => (
//               <div key={label} style={{
//                 background: "#fff", borderRadius: "14px",
//                 border: "1.5px solid #e8eff3", padding: "clamp(14px,2vw,20px)",
//                 textAlign: "center", boxShadow: "0 1px 6px rgba(26,60,77,0.05)",
//               }}>
//                 <div style={{
//                   fontFamily: "'Playfair Display', Georgia, serif",
//                   fontWeight: 800,
//                   fontSize: big ? "clamp(24px,3.5vw,34px)" : "clamp(14px,2vw,18px)",
//                   color: big ? "#1a3c4d" : "#1a6fa3",
//                   lineHeight: 1.1,
//                 }}>
//                   {value}
//                 </div>
//                 <div style={{ fontSize: "11px", color: "#7a9aaa", marginTop: "6px", fontWeight: 500 }}>
//                   {label}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Relationship goal */}
//           <div style={{
//             background: "#fff", borderRadius: "14px",
//             border: "1.5px solid #e8eff3", padding: "clamp(14px,2vw,22px) clamp(14px,2vw,24px)",
//             boxShadow: "0 1px 6px rgba(26,60,77,0.05)",
//           }}>
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
//               <h3 style={{ fontWeight: 700, fontSize: "16px", color: "#1a3c4d", fontFamily: "'Playfair Display', Georgia, serif" }}>
//                 Relationship Goal
//               </h3>
//               <button style={{
//                 background: "#f0f7fa", border: "1.5px solid #d0e8f0",
//                 borderRadius: "8px", padding: "4px 14px",
//                 cursor: "pointer", fontSize: "13px", fontWeight: 600, color: "#1a6fa3",
//                 fontFamily: "'DM Sans', sans-serif",
//               }}>
//                 Edit
//               </button>
//             </div>
//             <p style={{ color: "#4a7a8a", fontSize: "14px" }}>
//               Connect every <strong>{goalDays} days</strong>
//             </p>
//           </div>

//           {/* Quick Check-In */}
//           <div style={{
//             background: "#fff", borderRadius: "14px",
//             border: "1.5px solid #e8eff3", padding: "clamp(14px,2vw,22px) clamp(14px,2vw,24px)",
//             boxShadow: "0 1px 6px rgba(26,60,77,0.05)",
//           }}>
//             <h3 style={{
//               fontWeight: 700, fontSize: "16px", color: "#1a3c4d",
//               marginBottom: "16px",
//               fontFamily: "'Playfair Display', Georgia, serif",
//             }}>
//               Quick Check-In
//             </h3>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(8px,1.5vw,14px)" }}>
//               {QUICK_ACTIONS.map(({ label, icon, accent }) => (
//                 <button
//                   key={label}
//                   onClick={() => onInteraction?.(label, name)}
//                   style={{
//                     background: "#f5f9fb",
//                     border: `1.5px solid ${accent}30`,
//                     borderRadius: "12px",
//                     padding: "clamp(14px,2vw,20px) 12px",
//                     cursor: "pointer",
//                     textAlign: "center",
//                     transition: "all 0.18s cubic-bezier(.4,0,.2,1)",
//                     fontFamily: "'DM Sans', sans-serif",
//                     outline: "none",
//                   }}
//                   onMouseEnter={e => {
//                     e.currentTarget.style.background  = accent;
//                     e.currentTarget.style.color        = "#fff";
//                     e.currentTarget.style.transform    = "translateY(-2px)";
//                     e.currentTarget.style.boxShadow    = `0 6px 18px ${accent}55`;
//                   }}
//                   onMouseLeave={e => {
//                     e.currentTarget.style.background  = "#f5f9fb";
//                     e.currentTarget.style.color        = "inherit";
//                     e.currentTarget.style.transform    = "translateY(0)";
//                     e.currentTarget.style.boxShadow    = "none";
//                   }}
//                   onMouseDown={e => e.currentTarget.style.transform = "scale(0.96)"}
//                   onMouseUp  ={e => e.currentTarget.style.transform = "translateY(-2px)"}
//                 >
//                   <div style={{ fontSize: "clamp(20px,3vw,26px)", marginBottom: "8px" }}>{icon}</div>
//                   <div style={{ fontSize: "clamp(12px,1.5vw,14px)", fontWeight: 700 }}>{label}</div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Responsive stack on mobile */}
//       <style>{`
//         @media (max-width: 640px) {
//           .kk-detail-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



const STATUS_STYLES = {
  "Overdue":    { bg: "#fde8e8", color: "#c0392b" },
  "Almost Due": { bg: "#fff3e0", color: "#b7770a" },
  "On Track":   { bg: "#e8f8f0", color: "#1e7e4d" },
};

// ✅ FIXED ACTIONS (lowercase + display)
const QUICK_ACTIONS = [
  { label: "call",   display: "Call",   icon: "📞", accent: "#2a7d5c" },
  { label: "text",   display: "Text",   icon: "💬", accent: "#1a6fa3" },
  { label: "video",  display: "Video",  icon: "🎥", accent: "#7c3aed" },
  { label: "meetup", display: "Meet",   icon: "🤝", accent: "#d97706" },
];

export default function FriendDetail({ friend, onBack, onInteraction }) {
  if (!friend) return null;

  const {
    name,
    status,
    note,
    preferred,
    goalDays = 30,
    daysSinceContact = 0,
    nextDue,
    avatar,
  } = friend;

  const ss = STATUS_STYLES[status] || STATUS_STYLES["On Track"];

  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div style={{
      maxWidth: "900px",
      margin: "0 auto",
      padding: "clamp(16px,4vw,36px) clamp(12px,3vw,24px)",
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* BACK */}
      <button onClick={onBack} style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "#4a7a8a",
        fontWeight: 600,
        marginBottom: "24px"
      }}>
        ← Back to Friends
      </button>

      <div className="kk-detail-grid" style={{
        display: "grid",
        gridTemplateColumns: "250px 1fr",
        gap: "20px"
      }}>

        {/* LEFT PANEL */}
        <div style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "20px",
          textAlign: "center",
          border: "1px solid #e8eff3"
        }}>
          <div style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            margin: "0 auto 12px",
            background: "#eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800
          }}>
            {avatar
              ? <img src={avatar} alt={name} style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
              : initials}
          </div>

          <h2>{name}</h2>

          <span style={{
            ...ss,
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "12px"
          }}>
            {status}
          </span>

          {note && <p>"{note}"</p>}
          {preferred && <p>Preferred: {preferred}</p>}
        </div>

        {/* RIGHT PANEL */}
        <div>

          {/* QUICK ACTIONS */}
          <div style={{
            background: "#fff",
            borderRadius: "14px",
            padding: "20px",
            border: "1px solid #e8eff3"
          }}>
            <h3 style={{ marginBottom: "16px" }}>Quick Check-In</h3>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "10px"
            }}>
              {QUICK_ACTIONS.map(({ label, display, icon, accent }) => (
                <button
                  key={label}
                  onClick={() => onInteraction(label, name)} // ✅ FIXED HERE
                  style={{
                    background: "#f5f9fb",
                    border: `1px solid ${accent}`,
                    borderRadius: "10px",
                    padding: "14px",
                    cursor: "pointer"
                  }}
                >
                  <div style={{ fontSize: "20px" }}>{icon}</div>
                  <div>{display}</div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .kk-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}