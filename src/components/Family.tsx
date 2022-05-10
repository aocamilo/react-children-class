import { Children } from "react";

const Family: React.FC<{
  children: JSX.Element[];
  style?: React.CSSProperties;
  filter?: string;
}> = ({ children, style, filter }) => {
  const childrenArray = Children.toArray(children);
  const filteredChildren = filter
    ? childrenArray.filter((child: any) => child.props.race === filter)
    : childrenArray;
  console.log(childrenArray);
  return (
    <div style={style}>
      {filteredChildren.map((children: any) => {
        const isDog = children.props.race === "Dog";
        const isCat = children.props.race === "Cat";
        return (
          <div
            key={children.key}
            style={{
              border: "1px solid yellow",
              borderRadius: "5px",
              width: "50%",
            }}
          >
            {children}
            {isDog && <span>&#128021;</span>}
            {isCat && <span>&#128049;</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Family;
