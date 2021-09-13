import React from "react";
import { COLORS, FONTS } from "../../../const";
import NodeNameInput from "./NodeNameInput";
import CommunityTypeSelector from "./CommunityTypeSelector";
import AdultContentSelector from "./AdultContentSelector";

const PopupContainerBody = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",

        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{ fontSize: 16, fontWeight: 500, padding: 5, paddingLeft: 0 }}
        >
          Name
        </div>
        <div
          style={{
            fontSize: 12,
            fontFamily: FONTS.IBMXPLEXSANS,
            color: COLORS.GRAY_TEXT,
          }}
        >
          Node names including capitalization can be changed in the future.
        </div>
        <NodeNameInput />
      </div>
      <CommunityTypeSelector />
      <AdultContentSelector />
    </div>
  );
};

export default PopupContainerBody;
