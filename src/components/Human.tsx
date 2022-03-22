import "./styles/family-styles.css";

export const Human = ({ name, race }: { race: string; name: string }) => {
  return (
    <div className="member-card">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 className="member-title">{name}</h2>
        <p className="member-race">{race}</p>
      </div>
    </div>
  );
};
