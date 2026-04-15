import FriendCard from "./FriendCard";

export default function FriendGrid({ friends = [], onSelectFriend }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 700,
        fontSize: "clamp(18px,3vw,22px)",
        color: "#1a3c4d",
        marginBottom: "18px",
      }}>
        Your Friends
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(clamp(130px,22vw,160px), 1fr))",
        gap: "clamp(10px,2vw,16px)",
      }}>
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} onClick={onSelectFriend} />
        ))}
      </div>
    </div>
  );
}
