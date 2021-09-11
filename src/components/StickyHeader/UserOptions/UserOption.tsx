import React from "react";
import { COLORS } from "../../../const";

const UserOption = ({
  href,
  name,
  icon,
}: {
  href: string;
  name: string;
  icon: React.ReactChild;
}) => {
  return (
    <a
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 10,
        textDecoration: "none",
        color: COLORS.BLACK,
      }}
    >
      <div style={{ width: 30, height: 30, marginRight: 10 }}> {icon}</div>
      {name}
    </a>
  );
};

export default UserOption;
