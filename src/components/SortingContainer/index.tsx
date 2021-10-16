import React from "react";
import {
  IoAlertOutline,
  IoBulbOutline,
  IoStarOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";
import ButtonTransparent from "../buttons/ButtonTransparent";

const SortingContainer = () => {
  return (
    <div
      style={{
        position: "relative",
        height: 58,
        width: 640,
        backgroundColor: "white",

        marginTop: 15,
        marginBottom: 10,

        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",

        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
      }}
    >
      <ButtonTransparent>
        <IoStarOutline size={25} style={{ marginRight: 5 }} /> Best
      </ButtonTransparent>
      <ButtonTransparent>
        <IoTrendingUpOutline size={25} style={{ marginRight: 5 }} /> Trending
      </ButtonTransparent>
      <ButtonTransparent>
        <IoBulbOutline size={25} style={{ marginRight: 5 }} /> New
      </ButtonTransparent>
      <ButtonTransparent>
        <IoAlertOutline size={25} /> Controversial
      </ButtonTransparent>
    </div>
  );
};

export default SortingContainer;
