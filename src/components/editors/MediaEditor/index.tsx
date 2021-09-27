import React from "react";
import { COLORS } from "../../../const";
import GenericButton from "../../buttons/GenericButton";
import MediaDropzone from "./MediaDropzone";

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
      <MediaDropzone />
      <GenericButton name="Upload" style={{ marginLeft: 10 }} />
    </div>
  );
};

export default MediaEditor;
