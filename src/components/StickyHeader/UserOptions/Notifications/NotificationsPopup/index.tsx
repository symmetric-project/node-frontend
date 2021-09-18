import React from "react";
import { COLORS } from "../../../../../const";
import NotificationsPopupBody from "./NotificationsPopupBody";
import NotificationsPopupFooter from "./NotificationsPopupFooter";
import NotificationsPopupHeader from "./NotificationsPopupHeader";

const NotificationsPopup = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 38,
        left: -200,
        height: 420,
        width: 375,
        backgroundColor: COLORS.WHITE,

        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,

        boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px",

        userSelect: "none",
      }}
    >
      <NotificationsPopupHeader />
      <NotificationsPopupBody />
      <NotificationsPopupFooter />
    </div>
  );
};

export default NotificationsPopup;
