import React from "react";
import { COLORS } from "../../../const";

const PopupContainerCard = ({
  children,
}: {
  children: React.ReactFragment;
}) => {
  return (
    <div
      style={{
        width: 510,
        height: 500,
        backgroundColor: COLORS.WHITE,

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",

        borderRadius: 5,
      }}
    >
      {children}
    </div>
  );
};

export default PopupContainerCard;
