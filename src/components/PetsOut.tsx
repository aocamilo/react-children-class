import { Children, isValidElement, ReactNode } from "react";

const PetsOut: React.FC<{
  children: ReactNode[];
  style?: React.CSSProperties;
  filter?: string;
}> = ({ children, style }) => {
  const childrenArray = Children.map(children, (child: React.ReactNode) => {
    if (!isValidElement(child))
      return <span>Invalid child here! no pets in the table</span>;
    return child;
  });
  console.log(childrenArray);
  return (
    <div style={style}>
      {childrenArray?.map((children: any) => {
        return (
          <div
            key={children.key}
            style={{
              border: "1px solid blue",
              borderRadius: "5px",
              width: "50%",
            }}
          >
            {children}
          </div>
        );
      })}
    </div>
  );
};

export default PetsOut;
