import { useState } from "react";
import Family from "./Family";
import FamilyMember from "./FamilyMember";
import { Dog } from "./Dog";
import { Human } from "./Human";
import { Cat } from "./Cat";
import FamilyPets from "./FamilyPets";
import PetsOut from "./PetsOut";

const familyMembers = [
  {
    name: "Camilo",
    race: "Human",
  },
  {
    name: "Manuela",
    race: "Human",
  },
  {
    name: "Macarena",
    race: "Dog",
  },
  {
    name: "Ana Lucia",
    race: "Human",
  },
  {
    name: "Lupita",
    race: "Cat",
  },
  {
    name: "Ruben",
    race: "Human",
  },
  {
    name: "Lucia",
    race: "Human",
  },
  {
    name: "Muñeco",
    race: "Dog",
  },
];

export const FamilyGroup = () => {
  const [filter, setFilter] = useState<string>();

  const onFilterClick = (filter: string) => {
    setFilter(filter);
  };

  return (
    <>
      <h1>
        * Find a children based on their props, for filtering, or wrapping
        purposes.
      </h1>
      <Family filter={filter} style={{ display: "flex", flexDirection: "row" }}>
        {familyMembers.map(({ name, race }) => (
          <FamilyMember name={name} race={race} key={name} />
        ))}
      </Family>
      <button onClick={() => onFilterClick("Dog")}>Show only dogs</button>
      <button onClick={() => onFilterClick("Cat")}>Show only cats</button>
      <button onClick={() => onFilterClick("Human")}>Show only humans</button>
      <button onClick={() => onFilterClick("")}>Clear filter</button>
      <hr />
      <h1>* Detect if a children is a valid element.</h1>
      <PetsOut style={{ display: "flex", flexDirection: "row" }}>
        {familyMembers.map((member) => {
          if (member.race !== "Human") return undefined;
          return <Human {...member} key={`${member.name}-human-validation`} />;
        })}
      </PetsOut>
      <hr />
      <h1>* Detect the component type of a child.</h1>
      <FamilyPets style={{ display: "flex", flexDirection: "row" }}>
        {familyMembers.map((member) => {
          if (member.race === "Dog")
            return <Dog {...member} key={`${member.name}-pets`} />;
          if (member.race === "Cat")
            return <Cat {...member} key={`${member.name}-pets`} />;
          return <Human {...member} key={`${member.name}-pets`} />;
        })}
      </FamilyPets>
    </>
  );
};
