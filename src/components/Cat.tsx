import "./styles/family-styles.css";

export const Cat = ({ name, race }: { race: string; name: string }) => {
  return (
    <div className="member-card">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 className="member-title">{name}</h2>
      </div>
      <span className="member-emoji">&#128049;</span>
    </div>
  );
};
