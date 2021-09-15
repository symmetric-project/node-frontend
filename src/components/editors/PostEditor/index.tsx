import React from "react";
import Input from "../../Input";
import { useReactiveVar } from "@apollo/client";
import MediaEditor from "../MediaEditor";
import LinkEditor from "../LinkEditor";
import TextEditor from "../TextEditor";
import vars from "../../../vars";
import { COLORS } from "../../../const";

const PostEditor = () => {
  const type = useReactiveVar(vars.createPost.type);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        paddingLeft: 20,
        paddingRight: 20,

        backgroundColor: COLORS.WHITE,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "auto",

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
            padding: 19,

            borderRadius: 0,
            borderColor: "rgb(204, 204, 204)"
          }}
        />
      </div>
      <div style={{ width: "100%", height: "auto" }}>
        {type === "text" ? <TextEditor /> : null}
        {type === "media" ? <MediaEditor /> : null}
        {type === "link" ? <LinkEditor /> : null}
      </div>
    </div>
  );
};

export default PostEditor;
