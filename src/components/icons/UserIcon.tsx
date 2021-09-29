import React from "react";
import SVG from "react-inlinesvg";
import { User } from "../../types";
import { createAvatar } from "@dicebear/avatars";
import * as personas from "@dicebear/personas";
import randomColor from "randomcolor";

const UserIcon = ({
  size,
  user,
  style,
}: {
  size: number;
  user: User;
  style?: React.CSSProperties;
}) => {
  var backgroundColor = randomColor({ seed: user.id });
  let svg = createAvatar(personas, {
    seed: user.id,
  });
  return (
    <a
      href={`/u/${user.name}`}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <SVG
        src={svg}
        width={size}
        height="100%"
        cursor="pointer"
        title={user.name}
        style={{ ...style }}
      />
    </a>
  );
};

export default UserIcon;
