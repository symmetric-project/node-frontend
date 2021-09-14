import React from "react";
import { COLORS } from "../../../const";

const TextEditorHeaderButton = ({
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
        width: "25%",
        height: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        fontWeight: 700,
        color: selected ? COLORS.BLUE : COLORS.GRAY,
        backgroundColor: selected ? "rgba(0,121,211,0.1)" : COLORS.WHITE,

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

export default TextEditorHeaderButton;
