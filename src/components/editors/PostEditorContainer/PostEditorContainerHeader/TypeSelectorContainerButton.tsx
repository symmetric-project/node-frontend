import React from "react";
import { COLORS } from "../../../../const";

const TypeSelectorContainerButton = ({
  children,
  text,
  selected,
  onClick,
  style,
}: {
  children: React.ReactChild;
  text: string;
  selected: boolean;
  onClick: () => any;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={{
        width: "33.33%",
        height: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        fontWeight: 700,
        color: selected ? COLORS.BLUE : COLORS.GRAY,
        backgroundColor: selected ? "rgba(0,121,211,0.1)" : COLORS.WHITE,

        outlineWidth: 0,
        borderBottomWidth: selected ? 2 : 0,
        outlineColor: COLORS.BLUE,
        outlineStyle: "solid",

        userSelect: "none",
        cursor: "pointer",

        ...style,
      }}
      onClick={() => onClick()}
    >
      {children}
      {text}
    </div>
  );
};

export default TypeSelectorContainerButton;
