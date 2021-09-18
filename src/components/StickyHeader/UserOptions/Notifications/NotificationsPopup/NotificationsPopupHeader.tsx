import React from "react";
import { IoSettingsOutline } from "react-icons/io5";

const NotificationsPopupHeader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "15%",

        display: "flex",
        alignItems: "center",
        padding: 10,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          fontWeight: 500,
        }}
      >
        Notifications
      </div>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <IoSettingsOutline size={22} />
      </div>
    </div>
  );
};

export default NotificationsPopupHeader;
