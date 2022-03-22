const FamilyMember = ({ name, race }: { name: string; race: string }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{race}</p>
    </div>
  );
};

export default FamilyMember;
