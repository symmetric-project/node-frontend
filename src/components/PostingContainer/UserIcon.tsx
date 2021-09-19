import React from "react";
import SVG from "react-inlinesvg";
import { User } from "../../types";

const UserIcon = ({ user }: { user: User }) => {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SVG
        src={`https://avatars.dicebear.com/api/personas/${user.name}/.svg`}
        width={50}
        height="100%"
        cursor="pointer"
        title={user.name}
      />
    </div>
  );
};

export default UserIcon;
