const FamilyMember = ({ name, race }: { name: string; race: string }) => {
  return (
    <div id={`filter-${name.replace(" ", "")}`}>
      <h2>{name}</h2>
      <p>{race}</p>
    </div>
  );
};

export default FamilyMember;
