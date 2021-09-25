import React from "react";
import SVG from "react-inlinesvg";
import { User } from "../../types";

const UserIcon = ({
  size,
  user,
  style,
}: {
  size: number;
  user: User;
  style?: React.CSSProperties;
}) => {
  return (
    <SVG
      src={`https://avatars.dicebear.com/api/personas/${user.id}/.svg`}
      width={size}
      height="100%"
      cursor="pointer"
      title={user.name}
      style={{ ...style }}
    />
  );
};

export default UserIcon;
