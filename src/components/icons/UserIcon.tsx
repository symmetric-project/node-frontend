import React from "react";
import SVG from "react-inlinesvg";

const UserIcon = ({
  userName,
  style,
}: {
  userName: string;
  style: React.CSSProperties;
}) => {
  return (
    <SVG
      src={`https://avatars.dicebear.com/api/personas/${userName}/.svg`}
      width={40}
      height="100%"
      cursor="pointer"
      title={userName}
      style={{ ...style }}
    />
  );
};

export default UserIcon;
