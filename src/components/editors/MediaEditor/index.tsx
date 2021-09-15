import React from "react";
import { COLORS } from "../../../const";
import GenericButton from "../../buttons/GenericButton";

const MediaEditor = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 300,
        padding: 20,
        paddingTop: 0,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: 16, color: COLORS.BLUE }}>
        Drag and drop images or
      </div>
      <GenericButton name="Upload" style={{ marginLeft: 10 }} />
    </div>
  );
};

export default MediaEditor;
