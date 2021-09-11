import React, { useState } from "react";
import { COLORS } from "../../const";

const GenericButton = ({
  name,
  style,
  href,
}: {
  name: string;
  style: React.CSSProperties;
  href: string;
}) => {
  const [cursorOnButton, setCursorOnButton] = useState(false);
  return (
    <a
      href={href}
      style={{
        width: "auto",
        height: 32,

        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        fontFamily: "NotoSans",
        color: COLORS.WHITE,
        fontWeight: 700,
        cursor: "pointer",

        backgroundColor: COLORS.BUTTON_BLUE,
        textDecoration: "none",

        ...style,
      }}
    >
      {name}
    </a>
  );
};

export default GenericButton;
