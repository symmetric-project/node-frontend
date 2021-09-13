import { makeVar } from "@apollo/client";
import React from "react";
import { COLORS } from "../../const";
import Divider from "../Divider";
import PopupContainerBody from "./PopupContainerBody";
import PopupContainerCard from "./PopupContainerCard";
import PopupContainerFooter from "./PopupContainerFooter";
import PopupContainerHeader from "./PopupContainerHeader";

const PopupContainer = () => {
  const accessTypeVar = makeVar("");
  const nsfwVar = makeVar(false);
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.TRANSPARENT_BLACK_POPUP_BACKGROUND,
        zIndex: 10,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PopupContainerCard>
        <React.Fragment>
          <PopupContainerHeader>Create node</PopupContainerHeader>
          <Divider />
          <PopupContainerBody />
          <PopupContainerFooter />
        </React.Fragment>
      </PopupContainerCard>
    </div>
  );
};

export default PopupContainer;
