import React from "react";
import { COLORS } from "../../const";
import GenericIcon from "../icons/GenericIcon";
import UserOptions from "./UserOptions";
import SVG from "react-inlinesvg";

const StickyHeader = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        height: 48,
        backgroundColor: "white",

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

        padding: 5,
        paddingLeft: 0,
        paddingRight: 0,

        zIndex: 10,
      }}
    >
      <a
        href="/"
        style={{
          userSelect: "none",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <SVG
          src={`https://avatars.dicebear.com/api/jdenticon/symmetric/.svg`}
          width={30}
          height="auto"
          cursor="pointer"
          title={"Avatar"}
          style={{ marginLeft: 20, marginRight: 10 }}
        />
        symmetric
      </a>
      <input
        placeholder="Create Post"
        style={{
          width: "100%",
          height: 15,
          backgroundColor: COLORS.TRANSPARENT_LIGHTER_GRAY,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: COLORS.TRANSPARENT_LIGHTISH_GRAY,
          margin: 10,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 10,
          borderRadius: 4,
        }}
      />
      <GenericIcon
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        onClick={() => {}}
        iconName="notification-direct"
        title="Link"
        size={30}
        color={COLORS.ICON_GRAY}
      />
      <UserOptions />
    </div>
  );
};

export default StickyHeader;
