import React from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useReactiveVar } from "@apollo/client";
import vars from "../../../../vars";

const DraftEditor = () => {
  let editorState = useReactiveVar(vars.createComment.editorState);
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={(editorState: EditorState) => {
        vars.createComment.editorState(editorState);
      }}
    />
  );
};

export default DraftEditor;
