import { useState } from "react";

const navItems = [
  { label: "Home", icon: "🏠", href: "#home" },
  { label: "Timeline", icon: "🕐", href: "#timeline" },
  { label: "Stats", icon: "📊", href: "#stats" },
];

export default function Navbar({ activePage = "Home", onNavigate }) {
  return (
    <nav style={{
      background: "#fff",
      borderBottom: "2px solid #1a3c4d",
      padding: "0 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "56px",
      fontFamily: "'Playfair Display', Georgia, serif",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 2px 12px rgba(26,60,77,0.08)"
    }}>
      <span style={{
        fontWeight: 800,
        fontSize: "22px",
        color: "#1a3c4d",
        letterSpacing: "-0.5px",
        cursor: "pointer"
      }}>
        Keen<span style={{ color: "#2a7d5c" }}>Keeper</span>
      </span>

      <div style={{ display: "flex", gap: "6px" }}>
        {navItems.map(({ label, icon, href }) => (
          <button
            key={label}
            onClick={() => onNavigate?.(label)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              transition: "all 0.2s",
              background: activePage === label ? "#1a3c4d" : "transparent",
              color: activePage === label ? "#fff" : "#4a6070",
            }}
          >
            <span>{icon}</span>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
