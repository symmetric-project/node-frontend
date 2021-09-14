import React from "react";
import dynamic from "next/dynamic";
import { COLORS } from "../../const";
import TextEditorContainerFooter from "./TextEditorContainerFooter";
import TextEditorContainerHeader from "./TextEditorContainerHeader";

const TextEditor = dynamic(() => import("../TextEditor/index"), {
  ssr: false,
});

const TextEditorContainer = ({}: {}) => {
  return (
    <div
      style={{
        width: 740,
        height: 400,
        backgroundColor: COLORS.WHITE,
        marginTop: 50,

        borderRadius: 10,
      }}
    >
      <TextEditorContainerHeader />
      <TextEditor />
      <TextEditorContainerFooter />
    </div>
  );
};

export default TextEditorContainer;
