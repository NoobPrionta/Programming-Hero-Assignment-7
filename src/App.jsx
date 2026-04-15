// import { useState, useCallback } from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import HeroBanner from "./components/HeroBanner";
// import StatsBar from "./components/StatsBar";
// import FriendGrid from "./components/FriendGrid";
// import FriendDetail from "./components/FriendDetail";
// import Timeline from "./components/Timeline";
// import StatsPage from "./components/StatsPage";
// import Toast from "./components/Toast";
// import { FRIENDS, STATS_DATA } from "./data/mockData";

// export default function App() {
//   const [stats, setStats] = useState([]);
//   const [activePage, setActivePage]         = useState("Home");
//   const [selectedFriend, setSelectedFriend] = useState(null);
//   const [timeline, setTimeline]             = useState([]);   // starts EMPTY
//   const [toasts, setToasts]                 = useState([]);

//   /* ── Toast helpers ─────────────────────────────────────────────────────── */
//   const addToast = useCallback((message, type = "success") => {
//     const id = Date.now();
//     setToasts(prev => [...prev, { id, message, type }]);
//     setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3500);
//   }, []);

//   //added the function for graph 
//   const handleInteraction = (type) => {
//   setStats((prev) => {
//     const existing = prev.find(item => item.label === type);

//     if (existing) {
//       return prev.map(item =>
//         item.label === type
//           ? { ...item, value: item.value + 1 }F
//           : item
//       );
//     }

//     return [...prev, { label: type, value: 1 }];
//   });
// };

//   /* ── Interaction logged from FriendDetail ──────────────────────────────── */
//   const handleInteraction = useCallback((type, friendName) => {
//     const now = new Date();
//     const dateStr = now.toLocaleDateString("en-US", {
//       year: "numeric", month: "long", day: "numeric",
//     });
//     const icons = { Call: "📞", Text: "💬", Video: "🎥" };
//     setTimeline(prev => [{
//       id: Date.now(),
//       type,
//       person: friendName,
//       date: dateStr,
//       timestamp: now.getTime(),
//       icon: icons[type] || "💬",
//     }, ...prev]);
//     addToast(`${type} with ${friendName.split(" ")[0]} logged! 🎉`);
//   }, [addToast]);

//   /* ── Navigation ────────────────────────────────────────────────────────── */
//   const handleNavigate = (page) => {
//     setActivePage(page);
//     setSelectedFriend(null);
//   };
//   const handleSelectFriend = (friend) => {
//     setSelectedFriend(friend);
//     setActivePage("FriendDetail");
//   };
//   const handleBack = () => {
//     setSelectedFriend(null);
//     setActivePage("Home");
//   };

//   /* ── Live summary stats ────────────────────────────────────────────────── */
//   const summaryStats = [
//     { value: FRIENDS.length,                                      label: "Total Friends",       icon: "👥", color: "#1a3c4d" },
//     { value: FRIENDS.filter(f => f.status === "On Track").length, label: "On Track",            icon: "✅", color: "#2a7d5c" },
//     { value: FRIENDS.filter(f => f.status !== "On Track").length, label: "Need Attention",      icon: "⚠️", color: "#c0392b" },
//     { value: timeline.length,                                     label: "Interactions Logged", icon: "💬", color: "#1a6fa3" },
//   ];

//   return (
//     <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f0f5f8" }}>
//       <Navbar activePage={activePage} onNavigate={handleNavigate} />

//       <main style={{ flex: 1 }}>
//         {activePage === "Home" && (
//           <div style={{
//             maxWidth: "960px", margin: "0 auto",
//             padding: "clamp(16px,4vw,40px) clamp(12px,3vw,24px)",
//           }}>
//             <HeroBanner onAddFriend={() => addToast("Add friend form coming soon! 👋", "info")} />
//             <StatsBar data={summaryStats} />
//             <FriendGrid friends={FRIENDS} onSelectFriend={handleSelectFriend} />
//           </div>
//         )}

//         {activePage === "FriendDetail" && selectedFriend && (
//           // <FriendDetail
//           //   friend={selectedFriend}
//           //   onBack={handleBack}
//           //   onInteraction={handleInteraction}
//           // />
//           <FriendDetail
//           friend={selectedFriend}
//           onBack={() => setSelectedFriend(null)}
//           onInteraction={handleInteraction}
//           />
//         )}

//         {activePage === "Timeline" && <Timeline interactions={timeline} />}
//         {activePage === "Stats"    && <StatsPage data={STATS_DATA} timelineCount={timeline.length} />}
//       </main>

//       <Footer />

//       {/* Toast stack */}
//       {/* <div style={{
//         position: "fixed", bottom: "24px", right: "clamp(12px,4vw,24px)",
//         display: "flex", flexDirection: "column", gap: "10px",
//         zIndex: 9999, width: "clamp(260px,90vw,340px)",
//       }}> */}


//       <div style={{
//   position: "fixed",
//   top: "20px",
//   left: "50%",
//   transform: "translateX(-50%)",
//   display: "flex",
//   flexDirection: "column",
//   gap: "10px",
//   zIndex: 9999
// }}>

//         {toasts.map(t => <Toast key={t.id} message={t.message} type={t.type} />)}
//       </div>
//     </div>
//   );
// }





import { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import StatsBar from "./components/StatsBar";
import FriendGrid from "./components/FriendGrid";
import FriendDetail from "./components/FriendDetail";
import Timeline from "./components/Timeline";
import StatsPage from "./components/StatsPage";
import Toast from "./components/Toast";
import { FRIENDS } from "./data/mockData";

export default function App() {
  const [stats, setStats] = useState([]);
  const [activePage, setActivePage] = useState("Home");
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [toasts, setToasts] = useState([]);

  /* ── Toast helpers ───────────────────────────── */
  const addToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  }, []);

  /* ── ✅ STEP 4 FIXED: normalize type ───────────────── */
  const handleInteraction = useCallback((type, friendName) => {

    const normalizedType = type.toLowerCase(); // ✅ FIX

    /* ── UPDATE STATS ── */
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

    /* ── UPDATE TIMELINE ── */
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

    /* ── TOAST ── */
    if (friendName) {
      addToast(`${type} with ${friendName.split(" ")[0]} logged! 🎉`);
    }

  }, [addToast]);

  /* ── Navigation ───────────────────────────── */
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

  /* ── Summary stats ───────────────────────────── */
  const summaryStats = [
    { value: FRIENDS.length, label: "Total Friends", icon: "👥", color: "#1a3c4d" },
    { value: FRIENDS.filter(f => f.status === "On Track").length, label: "On Track", icon: "✅", color: "#2a7d5c" },
    { value: FRIENDS.filter(f => f.status !== "On Track").length, label: "Need Attention", icon: "⚠️", color: "#c0392b" },
    { value: timeline.length, label: "Interactions Logged", icon: "💬", color: "#1a6fa3" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f0f5f8" }}>
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      <main style={{ flex: 1 }}>

        {/* HOME */}
        {activePage === "Home" && (
          <div style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "clamp(16px,4vw,40px) clamp(12px,3vw,24px)",
          }}>
            <HeroBanner onAddFriend={() => addToast("Add friend form coming soon! 👋", "info")} />
            <StatsBar data={summaryStats} />
            <FriendGrid friends={FRIENDS} onSelectFriend={handleSelectFriend} />
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

        {/* STATS (dynamic graph) */}
        {activePage === "Stats" && (
          <StatsPage data={stats} timelineCount={timeline.length} />
        )}

      </main>

      <Footer />

      {/* TOAST TOP CENTER */}
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