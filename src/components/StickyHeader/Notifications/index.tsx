import React from "react";
import { COLORS } from "../../../const";
import { IoNotificationsOutline } from "react-icons/io5";
import { stickyHeaderSubmenuVar } from "../../../states/ui";
import { useReactiveVar } from "@apollo/client";
import NotificationsPopup from "./NotificationsPopup";

const Notifications = () => {
  const stickyHeaderSubmenuReactiveVar = useReactiveVar(stickyHeaderSubmenuVar);
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
        if (stickyHeaderSubmenuReactiveVar == "") {
          stickyHeaderSubmenuVar("notifications");
        } else {
          stickyHeaderSubmenuVar("");
        }
      }}
    >
      <IoNotificationsOutline color={COLORS.GRAY} size={25} />
      {stickyHeaderSubmenuReactiveVar === "notifications" ? (
        <NotificationsPopup />
      ) : null}
    </div>
  );
};

export default Notifications;
