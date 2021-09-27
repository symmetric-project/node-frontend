import React from "react";
import vars from "../../../vars";
import Input from "../../Input";

const LinkEditor = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",

        marginBottom: 10,
      }}
    >
      <Input
        onChange={(link) => vars.createPost.link(link)}
        placeholder="Link"
        style={{
          marginLeft: 0,
          marginRight: 0,
          backgroundColor: "transparent",
          padding: 10,

          borderRadius: 0,
          outlineColor: "rgb(204, 204, 204)",
        }}
      />
    </div>
  );
};

export default LinkEditor;
