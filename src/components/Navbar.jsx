import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home",     icon: "🏠" },
  { label: "Timeline", icon: "🕐" },
  { label: "Stats",    icon: "📊" },
];

export default function Navbar({ activePage = "Home", onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (label) => {
    onNavigate?.(label);
    setMenuOpen(false);
  };

  return (
    <nav style={{
      background: "#fff",
      borderBottom: "2px solid #d8eaf2",
      padding: "0 clamp(12px,4vw,32px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "56px",
      position: "sticky",
      top: 0,
      zIndex: 200,
      boxShadow: "0 2px 12px rgba(26,60,77,0.07)",
    }}>
      {/* Logo */}
      <span
        onClick={() => handleNav("Home")}
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 800,
          fontSize: "clamp(18px,3vw,22px)",
          color: "#1a3c4d",
          cursor: "pointer",
          letterSpacing: "-0.5px",
          userSelect: "none",
        }}
      >
        Keen<span style={{ color: "#2a7d5c" }}>Keeper</span>
      </span>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "6px", "@media(maxWidth:600px)": { display: "none" } }}
        className="kk-desktop-nav">
        {NAV_ITEMS.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => handleNav(label)}
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
              transition: "all 0.18s",
              background: activePage === label ? "#1a3c4d" : "transparent",
              color: activePage === label ? "#fff" : "#4a6070",
            }}
          >
            <span>{icon}</span>{label}
          </button>
        ))}
      </div>

      {/* Hamburger (mobile) */}
      <button
        className="kk-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "22px",
          color: "#1a3c4d",
          padding: "4px 8px",
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "absolute",
          top: "56px",
          left: 0,
          right: 0,
          background: "#fff",
          borderBottom: "2px solid #d8eaf2",
          boxShadow: "0 8px 24px rgba(26,60,77,0.10)",
          zIndex: 300,
          padding: "8px 16px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}>
          {NAV_ITEMS.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => handleNav(label)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 14px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                background: activePage === label ? "#1a3c4d" : "#f5f9fb",
                color: activePage === label ? "#fff" : "#1a3c4d",
                textAlign: "left",
              }}
            >
              <span>{icon}</span>{label}
            </button>
          ))}
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 600px) {
          .kk-desktop-nav { display: none !important; }
          .kk-hamburger   { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
