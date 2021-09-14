import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { COLORS } from "../../const";
import GenericButton from "../buttons/GenericButton";
import Input from "../Input";

function TextEditor() {
  const [value, setValue] = useState("");

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "50%",
        padding: 20,
        paddingTop: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Input
          onChange={() => {}}
          placeholder="Title"
          style={{
            marginLeft: 0,
            marginRight: 0,
            backgroundColor: "transparent",
          }}
        />
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ position: "relative", height: "90%", borderRadius: 10 }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: 50,
          marginTop: 45,

          paddingRight: 10,
        }}
      >
        <GenericButton name="Save draft" style={{ marginRight: 10}} />
        <GenericButton name="Post" />
      </div>
    </div>
  );
}

export default TextEditor;
