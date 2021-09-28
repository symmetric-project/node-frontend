import React from "react";
import { COLORS } from "../../../const";
import Divider from "../../Divider";
import Body from "./Body";
import PopupContainerCard from "./PopupContainerCard";
import Footer from "./Footer";
import Header from "./Header";

const PopupContainer = () => {
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
        <Header>Create node</Header>
        <Divider />
        <Body />
        <Footer />
      </PopupContainerCard>
    </div>
  );
};

export default PopupContainer;
