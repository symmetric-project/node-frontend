import React from "react";
import { COLORS } from "../../const";
import UserOptions from "./UserOptions";
import SVG from "react-inlinesvg";
import {
  IoAddOutline,
  IoChatbubbleEllipsesOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

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
      <div style={{ width: "100%", display: "flex", justifyContent: "center", backgroundColor: "transparent" }}>
        <input
          placeholder="Search Symmetric"
          style={{
            maxWidth: 850,
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
      </div>
      <div
        style={{
          width: "auto",
          display: "flex",
          justifyContent: "flex-end",
          right: 0,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            margin: 5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <IoChatbubbleEllipsesOutline color={COLORS.GRAY} size={23} />
        </div>
        <div
          style={{
            width: 30,
            height: 30,
            margin: 5,
            marginRight: 5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <IoNotificationsOutline color={COLORS.GRAY} size={25} />
        </div>
        <div
          style={{
            width: 30,
            height: 30,
            margin: 5,
            marginLeft: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <IoAddOutline color={COLORS.GRAY} size={30} />
        </div>
        <UserOptions />
      </div>
    </div>
  );
};

export default StickyHeader;
