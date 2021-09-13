import React, { useState } from "react";
import { COLORS } from "../../const";

const GenericLabel = ({ children }: { children: React.ReactChild }) => {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      style={{
        width: "auto",
        lineHeight: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 2,
        backgroundColor: COLORS.TAG_RED,
        padding: 2,
        margin: 5,
        cursor: "pointer",

        color: COLORS.WHITE,
        fontSize: 12,
        fontWeight: 500,
      }}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {children}
    </div>
  );
};

export default GenericLabel;
