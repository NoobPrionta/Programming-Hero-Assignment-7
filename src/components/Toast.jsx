

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