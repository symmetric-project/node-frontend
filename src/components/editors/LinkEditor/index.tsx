import React from "react";
import Input from "../../Input";

const LinkEditor = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Input
        onChange={() => {}}
        value={"Link"}
        placeholder="Link"
        style={{ height: 50, marginLeft: 0, marginBottom: 0 }}
      />
    </div>
  );
};

export default LinkEditor;
