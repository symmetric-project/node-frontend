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
          onChange={(title) => vars.createPost.title(title)}
          placeholder="Title"
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
      <div style={{ width: "100%", height: "auto" }}>
        {type === "TEXT" ? <TextEditor /> : null}
        {type === "MEDIA" ? <MediaEditor /> : null}
        {type === "LINK" ? <LinkEditor /> : null}
      </div>
    </div>
  );
};

export default PostEditor;
