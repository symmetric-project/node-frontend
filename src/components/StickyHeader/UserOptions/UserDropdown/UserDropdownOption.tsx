import React, { useState } from "react";
import { COLORS } from "../../../../const";

const UserOption = ({
  href,
  name,
  icon,
  onClick,
}: {
  href?: string;
  name: string;
  icon: React.ReactChild;
  onClick?: () => void;
}) => {
  const [mouseOn, setMouseOn] = useState(false);
  return (
    <a
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
      href={href}
      style={{
        width: "100%",
        height: 38,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        textDecoration: "none",
        color: mouseOn ? COLORS.WHITE : COLORS.BLACK,

        backgroundColor: mouseOn ? COLORS.BLUE : undefined,

        cursor: "pointer",
        fontSize: 14,
      }}
      onClick={onClick ? () => onClick() : undefined}
    >
      <div
        style={{
          width: "30%",
          marginRight: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </div>
      <div style={{ width: "70%" }}>{name}</div>
    </a>
  );
};

export default UserOption;
