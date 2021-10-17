import React from "react";
import Button from "../../buttons/Button";
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
      <Button style={{ marginLeft: 10 }}>Upload</Button>
    </div>
  );
};

export default MediaEditor;
