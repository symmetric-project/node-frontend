import React, { useState } from "react";
import { COLORS } from "../../const";

const Button = ({
  children,
  style,
  href,
  onClick,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  href?: string;
  onClick?: () => void;
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

        backgroundColor: COLORS.BLUE,
        textDecoration: "none",

        ...style,
      }}
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </a>
  );
};

export default Button;
