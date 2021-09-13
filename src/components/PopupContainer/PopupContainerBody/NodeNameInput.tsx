import { useReactiveVar } from "@apollo/client";
import React, { useState } from "react";
import { COLORS, NODE_DOMAIN } from "../../../const";
import { nodeNameVar } from "../../../states/popups/createNodePopup";
import Input from "../../Input";

const NodeNameInput = () => {
  const nodeNameReactiveVar = useReactiveVar(nodeNameVar);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Input
        onChange={(value: string) => {
          if (value.length <= 32) {
            nodeNameVar(value);
          }
        }}
        value={nodeNameReactiveVar}
        placeholder="n/"
        style={{ width: "95%" }}
      />
      <div
        style={{
          width: "100%",
          fontSize: 12,
          color: COLORS.GRAY_TEXT,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >{`${32 - nodeNameReactiveVar.length} characters remaining`}</div>
    </div>
  );
};

export default NodeNameInput;
