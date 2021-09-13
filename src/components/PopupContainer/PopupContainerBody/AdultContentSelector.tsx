import { useReactiveVar } from "@apollo/client";
import React, { useState } from "react";
import { FONTS } from "../../../const";
import { CreateNodePopupVars } from "../../../states/ui/createNodePopup";
import Checkbox from "../../Checkbox";
import GenericLabel from "../../labels/GenericLabel";

const AdultContentSelector = () => {
  const nsfwReactiveVar = useReactiveVar(CreateNodePopupVars.nsfw);
  return (
    <div
      style={{
        width: "100%",
        fontWeight: 500,
        fontSize: 16,
        fontFamily: FONTS.IBMXPLEXSANS,

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <div>Adult content</div>
      <label
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Checkbox
          name="nsfw"
          checked={nsfwReactiveVar}
          onChange={(_, checked) => {
            CreateNodePopupVars.nsfw(checked);
          }}
        />
        <GenericLabel>NSFW</GenericLabel>
        <div style={{ fontSize: 14 }}>18+ year old community</div>
      </label>
    </div>
  );
};

export default AdultContentSelector;
