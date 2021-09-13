import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { COLORS } from "../../const";
import { popupVar } from "../../states/popups";

const PopupContainerHeader = ({ children }: { children: React.ReactChild }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 50,

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

        fontSize: 16,
        padding: 20,
        
        cursor: "pointer"
      }}
    >
      <div style={{ width: "90%", fontWeight: 500 }}>{children}</div>
      <IoCloseOutline
        color={COLORS.GRAY}
        size={25}
        style={{ position: "absolute", right: 10, top: 10 }}
        onClick={() => {
          popupVar("");
        }}
      />
    </div>
  );
};

export default PopupContainerHeader;
