// import { useEffect, useState } from "react";

// const TYPE_STYLES = {
//   success: { bg: "#1a3c4d", accent: "#4ecba0", icon: "✅" },
//   info:    { bg: "#1a5fa3", accent: "#90cdf4", icon: "ℹ️"  },
//   error:   { bg: "#8b1a1a", accent: "#fc8181", icon: "❌"  },
// };

// export default function Toast({ message, type = "success" }) {
//   const [visible, setVisible] = useState(false);
//   const ts = TYPE_STYLES[type] || TYPE_STYLES.success;

//   useEffect(() => {
//     requestAnimationFrame(() => setVisible(true));
//   }, []);

//   return (
//     <div style={{
//       display: "flex",
//       alignItems: "center",
//       gap: "12px",
//       background: ts.bg,
//       color: "#fff",
//       borderRadius: "12px",
//       padding: "14px 18px",
//       boxShadow: "0 6px 24px rgba(0,0,0,0.22)",
//       borderLeft: `4px solid ${ts.accent}`,
//       fontFamily: "'DM Sans', sans-serif",
//       fontSize: "14px",
//       fontWeight: 600,
//       transform: visible ? "translateY(0)" : "translateY(20px)",
//       opacity: visible ? 1 : 0,
//       transition: "transform 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s",
//       wordBreak: "break-word",
//     }}>
//       <span style={{ fontSize: "18px", flexShrink: 0 }}>{ts.icon}</span>
//       {message}
//     </div>
//   );
// }

import { useEffect, useState } from "react";

export default function Toast({ message, type = "success" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const styles = {
    success: "#2a7d5c",
    error: "#c0392b",
    info: "#1a6fa3",
  };

  return (
    <div
      style={{
        background: styles[type],
        color: "#fff",
        padding: "12px 18px",
        borderRadius: "10px",
        fontSize: "14px",
        fontWeight: 600,
        minWidth: "220px",
        textAlign: "center",
        transform: visible ? "translateY(0)" : "translateY(-20px)",
        opacity: visible ? 1 : 0,
        transition: "all 0.3s ease",
        boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
      }}
    >
      {message}
    </div>
  );
}