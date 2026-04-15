import { useState, useCallback, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import StatsBar from "./components/StatsBar";
import FriendGrid from "./components/FriendGrid";
import FriendDetail from "./components/FriendDetail";
import Timeline from "./components/Timeline";
import StatsPage from "./components/StatsPage";
import Toast from "./components/Toast";
import NotFound from "./components/NotFound";
import { FRIENDS } from "./data/mockData";

export default function App() {
  const [stats, setStats] = useState([]);
  const [activePage, setActivePage] = useState("Home");
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [toasts, setToasts] = useState([]);

  // ✅ LOADING STATE
  const [loading, setLoading] = useState(true);

  /* ── SIMULATE FETCH ───────────────── */
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 sec loading
  }, []);

  /* ── TOAST ───────────────── */
  const addToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  }, []);

  /* ── INTERACTION (stats + timeline) ───────────────── */
  const handleInteraction = useCallback((type, friendName) => {

    const normalizedType = type.toLowerCase();

    // stats
    setStats(prev => {
      const existing = prev.find(item => item.label === normalizedType);

      if (existing) {
        return prev.map(item =>
          item.label === normalizedType
            ? { ...item, value: item.value + 1 }
            : item
        );
      }

      return [...prev, { label: normalizedType, value: 1 }];
    });

    // timeline
    const now = new Date();
    const dateStr = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const icons = {
      call: "📞",
      text: "💬",
      video: "🎥",
      meetup: "🤝",
    };

    setTimeline(prev => [
      {
        id: Date.now(),
        type: normalizedType,
        person: friendName,
        date: dateStr,
        timestamp: now.getTime(),
        icon: icons[normalizedType] || "💬",
      },
      ...prev,
    ]);

    // toast
    if (friendName) {
      addToast(`${type} with ${friendName.split(" ")[0]} logged! 🎉`);
    }

  }, [addToast]);

  /* ── NAVIGATION ───────────────── */
  const handleNavigate = (page) => {
    setActivePage(page);
    setSelectedFriend(null);
  };

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
    setActivePage("FriendDetail");
  };

  const handleBack = () => {
    setSelectedFriend(null);
    setActivePage("Home");
  };

  /* ── SUMMARY STATS ───────────────── */
  const summaryStats = [
    { value: FRIENDS.length, label: "Total Friends", icon: "👥", color: "#1a3c4d" },
    { value: FRIENDS.filter(f => f.status === "On Track").length, label: "On Track", icon: "✅", color: "#2a7d5c" },
    { value: FRIENDS.filter(f => f.status !== "On Track").length, label: "Need Attention", icon: "⚠️", color: "#c0392b" },
    { value: timeline.length, label: "Interactions Logged", icon: "💬", color: "#1a6fa3" },
  ];

  /* ── LOADER COMPONENT ───────────────── */
  const Loader = () => (
    <div style={{
      textAlign: "center",
      padding: "80px"
    }}>
      <div className="spinner"></div>

      <p style={{ marginTop: "12px", color: "#7a9aaa" }}>
        Loading friends...
      </p>

      <style>{`
        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #e0ecf2;
          border-top: 4px solid #1a3c4d;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f0f5f8" }}>
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      <main style={{ flex: 1 }}>

        {/* ✅ HOME WITH LOADING */}
        {activePage === "Home" && (
          <div style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "clamp(16px,4vw,40px) clamp(12px,3vw,24px)",
          }}>
            {loading ? (
              <Loader />
            ) : (
              <>
                <HeroBanner onAddFriend={() => addToast("Add friend form coming soon! 👋", "info")} />
                <StatsBar data={summaryStats} />
                <FriendGrid friends={FRIENDS} onSelectFriend={handleSelectFriend} />
              </>
            )}
          </div>
        )}

        {/* FRIEND DETAIL */}
        {activePage === "FriendDetail" && selectedFriend && (
          <FriendDetail
            friend={selectedFriend}
            onBack={handleBack}
            onInteraction={handleInteraction}
          />
        )}

        {/* TIMELINE */}
        {activePage === "Timeline" && (
          <Timeline interactions={timeline} />
        )}

        {/* STATS */}
        {activePage === "Stats" && (
          <StatsPage data={stats} timelineCount={timeline.length} />
        )}

        {/* 404 */}
        {!["Home", "FriendDetail", "Timeline", "Stats"].includes(activePage) && (
          <NotFound onBack={() => setActivePage("Home")} />
        )}

      </main>

      <Footer />

      {/* TOAST */}
      <div style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 9999
      }}>
        {toasts.map(t => (
          <Toast key={t.id} message={t.message} type={t.type} />
        ))}
      </div>
    </div>
  );
}