import React from "react";
import dynamic from "next/dynamic";
import ReactPlaceholder from "react-placeholder";

const DynamicDraftEditor = dynamic(() => import("./DraftEditor"), {
  ssr: false,
  loading: () => (
    <ReactPlaceholder
      type="rect"
      ready={false}
      showLoadingAnimation
      children={undefined}
    />
  ),
});

const CommentEditor = () => {
  return (
    <div style={{ height: 100, outlineWidth: 20 }}>
      <DynamicDraftEditor />
    </div>
  );
};

export default CommentEditor;
