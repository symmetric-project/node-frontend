import { useReactiveVar } from "@apollo/client";
import React from "react";
import { IoAddOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { COLORS } from "../../../const";
import vars from "../../../vars";
import Notifications from "./Notifications";
import UserDropdown from "./UserDropdown";

const UserOptions = () => {
  const stickyHeaderSubmenu = useReactiveVar(vars.ui.stickyHeaderSubmenu);
  return (
    <div
      style={{
        width: "auto",
        display: "flex",
        justifyContent: "flex-end",
        right: 0,
      }}
      onClick={() => {
        if (stickyHeaderSubmenu === "") {
          vars.ui.stickyHeaderSubmenu("user-options");
        } else {
          vars.ui.stickyHeaderSubmenu("");
        }
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
      <Notifications />
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
      <UserDropdown />
    </div>
  );
};

export default UserOptions;
