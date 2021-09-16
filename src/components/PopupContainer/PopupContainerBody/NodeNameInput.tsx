import { useReactiveVar } from "@apollo/client";
import React from "react";
import { COLORS } from "../../../const";
import vars from "../../../vars";
import Input from "../../Input";

const NodeNameInput = () => {
  const name = useReactiveVar(vars.createNode.name);
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
            vars.createNode.name(value);
          }
        }}
        value={name}
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
      >{`${32 - name.length} characters remaining`}</div>
    </div>
  );
};

export default NodeNameInput;
