import { ReactiveVar } from "@apollo/client";
import React from "react";
import { COLORS } from "../../const";
import { popupVar } from "../../states/popups";
import GenericButton from "../buttons/GenericButton";

const PopupContainerFooter = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 64,

        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",

        backgroundColor: COLORS.GRAY_POPUP_FOOTER,
        padding: 10,
      }}
    >
      <GenericButton name="Cancel" style={{ marginRight: 10 }} onClick={() => popupVar("")} />
      <GenericButton name="Create node" />
    </div>
  );
};

export default PopupContainerFooter;
