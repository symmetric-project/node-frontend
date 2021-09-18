import React from "react";
import { COLORS } from "../../../../const";
import { IoNotificationsOutline } from "react-icons/io5";
import { useReactiveVar } from "@apollo/client";
import NotificationsPopup from "./NotificationsPopup";
import vars from "../../../../vars";

const Notifications = () => {
  const stickyHeaderSubmenu = useReactiveVar(vars.ui.stickyHeaderSubmenu);
  return (
    <div
      style={{
        position: "relative",
        width: 30,
        height: 30,

        margin: 5,
        marginRight: 5,

        display: "flex",
        alignItems: "center",

        cursor: "pointer",
      }}
      onClick={() => {
        if (stickyHeaderSubmenu === "") {
          vars.ui.stickyHeaderSubmenu("notifications");
        } else {
          vars.ui.stickyHeaderSubmenu("");
        }
      }}
    >
      <IoNotificationsOutline color={COLORS.GRAY} size={25} />
      {stickyHeaderSubmenu === "notifications" ? <NotificationsPopup /> : null}
    </div>
  );
};

export default Notifications;
