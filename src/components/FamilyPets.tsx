import { Children, ReactNode } from "react";
import { Human } from "./Human";

const FamilyPets: React.FC<{
  children: ReactNode[];
  style?: React.CSSProperties;
  filter?: string;
}> = ({ children, style }) => {
  return (
    <div style={style}>
      {Children.map(children, (children: any) => {
        if (children && children.type === Human) {
          console.error("Only Pets Allowed here");
          return (
            <div>
              <span> Only Pets Allowed in this section</span>
              <span>&#128165;</span>
            </div>
          );
        }
        return children;
      })}
    </div>
  );
};

export default FamilyPets;
