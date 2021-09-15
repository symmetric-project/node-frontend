import React, { useState } from "react";
import { COLORS } from "../../const";

const TagLabel = ({ children }: { children: React.ReactChild }) => {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      style={{
        width: "auto",
        minHeight: 24,
        lineHeight: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 20,
        backgroundColor: mouseOver
          ? COLORS.TRANSPARENT_LIGHT_GRAY
          : COLORS.TAG_GRAY,
        padding: 6,
        margin: 5,
        cursor: "pointer",

        color: COLORS.BLUE,
        fontSize: 12,
        fontWeight: 700,
        fontFamily: "NotoSans",
      }}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {children}
    </div>
  );
};

export default TagLabel;
