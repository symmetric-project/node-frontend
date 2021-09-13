import React from "react";
import { COLORS } from "../../../../const";

const NotificationsPopupFooter = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "10%",

        color: COLORS.BLUE_LIGHT,
        fontWeight: 700,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,

        backgroundColor: COLORS.GRAY_BACKGROUND,
        textTransform: "uppercase",
      }}
    >
      See all
    </div>
  );
};

export default NotificationsPopupFooter;
