
const STATUS_STYLES = {
  Overdue: { bg: "#fde8e8", color: "#c0392b" },
  "Almost Due": { bg: "#fff3e0", color: "#b7770a" },
  "On Track": { bg: "#e8f8f0", color: "#1e7e4d" },
};

const QUICK_ACTIONS = [
  { label: "call", display: "Call", icon: "📞" },
  { label: "text", display: "Text", icon: "💬" },
  { label: "video", display: "Video", icon: "🎥" },
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

  return (
    <div style={{
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "clamp(16px,4vw,32px)",
      fontFamily: "'DM Sans', sans-serif"
    }}>

      {/* BACK */}
      <button onClick={onBack} style={{
        marginBottom: "clamp(12px,3vw,20px)",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "#4a7a8a",
        fontWeight: 600
      }}>
        ← Back to Friends
      </button>

      {/* MAIN GRID */}
      <div className="fd-grid">

        {/* LEFT */}
        <div className="fd-left">

          {/* PROFILE */}
          <div className="fd-card fd-profile">
            <div className="fd-avatar">
              {avatar
                ? <img src={avatar} alt={name} />
                : name[0]}
            </div>

            <h3>{name}</h3>

            <span className="fd-status" style={ss}>
              {status}
            </span>

            {note && <p className="fd-note">"{note}"</p>}
            {preferred && <p className="fd-pref">Preferred: {preferred}</p>}
          </div>

          {/* ACTIONS */}
          <div className="fd-actions">
            <button className="fd-btn">🔕 Snooze 2 Weeks</button>
            <button className="fd-btn">📁 Archive</button>
            <button className="fd-btn fd-delete">🗑 Delete</button>
          </div>

        </div>

        {/* RIGHT */}
        <div className="fd-right">

          {/* STATS */}
          <div className="fd-stats">
            <StatCard value={daysSinceContact} label="Days Since Contact" />
            <StatCard value={goalDays} label="Goal (Days)" />
            <StatCard value={nextDue || "—"} label="Next Due" />
          </div>

          {/* RELATIONSHIP */}
          <div className="fd-card">
            <div className="fd-row">
              <h4>Relationship Goal</h4>
              <button className="fd-edit">Edit</button>
            </div>
            <p>Connect every <strong>{goalDays} days</strong></p>
          </div>

          {/* QUICK ACTION */}
          <div className="fd-card">
            <h4>Quick Check-In</h4>

            <div className="fd-actions-grid">
              {QUICK_ACTIONS.map(a => (
                <button
                  key={a.label}
                  onClick={() => onInteraction(a.label, name)}
                  className="fd-action-btn"
                >
                  <div>{a.icon}</div>
                  {a.display}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CSS */}
      <style>{`

        .fd-grid {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 20px;
        }

        .fd-card {
          background: #fff;
          border-radius: 14px;
          padding: clamp(14px,2vw,20px);
          border: 1px solid #e8eff3;
        }

        .fd-profile {
          text-align: center;
        }

        .fd-avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin: 0 auto 10px;
          overflow: hidden;
          background: #eee;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .fd-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .fd-status {
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          display: inline-block;
        }

        .fd-note {
          font-style: italic;
          margin-top: 10px;
        }

        .fd-pref {
          font-size: 12px;
          color: #666;
        }

        .fd-actions {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .fd-btn {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ddd;
          background: #f5f9fb;
          cursor: pointer;
        }

        .fd-delete {
          color: red;
        }

        .fd-right {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .fd-stats {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
        }

        .fd-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .fd-edit {
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          cursor: pointer;
        }

        .fd-actions-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 10px;
          margin-top: 10px;
        }

        .fd-action-btn {
          padding: 14px;
          border-radius: 10px;
          border: 1px solid #ddd;
          background: #f5f9fb;
          cursor: pointer;
          text-align: center;
        }

        /* 🔥 RESPONSIVE */

        @media (max-width: 900px) {
          .fd-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .fd-stats {
            grid-template-columns: 1fr 1fr;
          }

          .fd-actions-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 400px) {
          .fd-stats {
            grid-template-columns: 1fr;
          }
        }

      `}</style>
    </div>
  );
}

/* STAT CARD */
function StatCard({ value, label }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "12px",
      padding: "16px",
      textAlign: "center",
      border: "1px solid #e8eff3"
    }}>
      <div style={{
        fontSize: "clamp(20px,4vw,28px)",
        fontWeight: 800
      }}>
        {value}
      </div>
      <div style={{ fontSize: "12px", color: "#7a9aaa" }}>
        {label}
      </div>
    </div>
  );
}