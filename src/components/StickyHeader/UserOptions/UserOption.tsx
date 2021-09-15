import React from "react";
import { COLORS } from "../../../const";

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
  return (
    <a
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: 10,
        textDecoration: "none",
        color: COLORS.BLACK,
        cursor: "pointer",
      }}
      onClick={onClick ? () => onClick() : undefined}
    >
      <div style={{ width: 30, height: 30, marginRight: 10 }}> {icon}</div>
      {name}
    </a>
  );
};

export default UserOption;
