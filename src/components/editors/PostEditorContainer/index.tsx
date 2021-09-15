import React from "react";
import { COLORS } from "../../../const";
import TextEditorContainerHeader from "./PostEditorContainerHeader/index";
import TextEditorContainerFooter from "./PostEditorContainerFooter";
import PostEditor from "../PostEditor";

const PostEditorContainer = () => {
  return (
    <div
      style={{
        width: 740,
        height: "auto",
        marginTop: 50,

        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      }}
    >
      <TextEditorContainerHeader />
      <PostEditor />
      <TextEditorContainerFooter />
    </div>
  );
};

export default PostEditorContainer;
