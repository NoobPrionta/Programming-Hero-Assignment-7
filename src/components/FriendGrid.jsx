import FriendCard from "./FriendCard";

export default function FriendGrid({ friends = [], onSelectFriend }) {
  return (
    <div style={{ marginTop: "12px" }}>
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: 700,
        fontSize: "20px",
        color: "#1a3c4d",
        marginBottom: "18px",
      }}>
        Your Friends
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "16px",
      }}>
        {friends.map((friend, i) => (
          <FriendCard
            key={friend.id || i}
            friend={{ ...friend, stickerIndex: i }}
            onClick={onSelectFriend}
          />
        ))}
      </div>
    </div>
  );
}
