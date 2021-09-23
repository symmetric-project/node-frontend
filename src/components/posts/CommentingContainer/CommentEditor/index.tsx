import React from "react";
import dynamic from "next/dynamic";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

const Editor = dynamic(() => import("./Editor"), {
  ssr: false,
  loading: () => (
    <ReactPlaceholder
      type="media"
      rows={9}
      ready={false}
      showLoadingAnimation
      children={undefined}
    />
  ),
});

const CommentEditor = () => {
  return (
    <div style={{ height: 150, width: "100%" }}>
      <Editor />
    </div>
  );
};

export default CommentEditor;