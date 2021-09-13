import React, { useState } from "react";
import { COLORS } from "../../const";

const SortingContainerButton = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactChild;
}) => {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: mouseOver ? COLORS.TRANSPARENT_LIGHT_GRAY : undefined,
        padding: 7,
        margin: 5,
        cursor: "pointer",
      }}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {children}
      <div style={{ marginLeft: 5 }}>{name}</div>
    </div>
  );
};

export default SortingContainerButton;
