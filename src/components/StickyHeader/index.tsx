import React from "react";
import { COLORS } from "../../const";
import UserOptions from "./UserOptions";
import SVG from "react-inlinesvg";
import { IoAddOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import NotificationsIcon from "./Notifications";
import Select from "../Select";

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
          height="100%"
          cursor="pointer"
          title={"Avatar"}
          style={{ marginLeft: 20, marginRight: 10 }}
        />
        symmetric
      </a>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        <div style={{ width: "50%" }}>
          <Select />
        </div>
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
        <NotificationsIcon />
        <a
          href="/create-post"
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
        </a>
        <UserOptions />
      </div>
    </div>
  );
};

export default StickyHeader;
