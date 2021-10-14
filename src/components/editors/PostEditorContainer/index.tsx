import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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
      <Header />
      <PostEditor />
      <Footer />
    </div>
  );
};

export default PostEditorContainer;
