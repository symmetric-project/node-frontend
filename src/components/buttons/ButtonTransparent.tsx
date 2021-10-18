import React, { useState } from "react";
import { COLORS } from "../../const";

const SortingContainerButton = ({
  style,
  children,
}: {
  style?: React.CSSProperties;
  children: React.ReactNode;
}) => {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 20,
        backgroundColor: mouseOver ? COLORS.TRANSPARENT_LIGHT_GRAY : undefined,
        padding: 7,
        margin: 5,
        cursor: "pointer",
        ...style,
      }}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {children}
    </div>
  );
};

export default SortingContainerButton;
