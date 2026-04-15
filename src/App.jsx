import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import StatsBar from "./components/StatsBar";
import FriendGrid from "./components/FriendGrid";
import FriendDetail from "./components/FriendDetail";
import Timeline from "./components/Timeline";
import StatsPage from "./components/StatsPage";
import { FRIENDS, INTERACTIONS, STATS_DATA } from "./data/mockData";

// Google Fonts import — add this to your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

const SUMMARY_STATS = [
  { value: FRIENDS.length,                                        label: "Total Friends",           icon: "👥", color: "#1a3c4d" },
  { value: FRIENDS.filter(f => f.status === "On Track").length,   label: "On Track",                icon: "✅", color: "#2a7d5c" },
  { value: FRIENDS.filter(f => f.status !== "On Track").length,   label: "Need Attention",          icon: "⚠️", color: "#c0392b" },
  { value: INTERACTIONS.length,                                   label: "Interactions This Month", icon: "💬", color: "#1a6fa3" },
];

export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const [selectedFriend, setSelectedFriend] = useState(null);

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

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#f0f5f8",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      <main style={{ flex: 1 }}>
        {activePage === "Home" && (
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px" }}>
            <HeroBanner onAddFriend={() => alert("Add friend form coming soon!")} />
            <StatsBar data={SUMMARY_STATS} />
            <FriendGrid friends={FRIENDS} onSelectFriend={handleSelectFriend} />
          </div>
        )}

        {activePage === "FriendDetail" && selectedFriend && (
          <FriendDetail friend={selectedFriend} onBack={handleBack} />
        )}

        {activePage === "Timeline" && (
          <Timeline interactions={INTERACTIONS} />
        )}

        {activePage === "Stats" && (
          <StatsPage data={STATS_DATA} />
        )}
      </main>

      <Footer />
    </div>
  );
}
