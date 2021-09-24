import React from "react";
import dynamic from "next/dynamic";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

const Editor = dynamic(() => import("./Editor"), {
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

const TextEditor = () => {
  return (
    <div style={{ height: 200, borderWidth: 20 }}>
      <Editor />
    </div>
  );
};

export default TextEditor;
