import { useReactiveVar } from "@apollo/client";
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import vars from "../../../../vars";

const DraftEditor = () => {
  let editorState = useReactiveVar(vars.createComment.editorState);
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={(editorState) => {
        console.log(JSON.stringify(editorState));
        vars.createComment.editorState(editorState);
      }}
      editorStyle={{ height: 100 }}
    />
  );
};

export default DraftEditor;
