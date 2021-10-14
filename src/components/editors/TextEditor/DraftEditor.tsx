import { useReactiveVar } from "@apollo/client";
import React from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import vars from "../../../vars";

const DraftEditor = () => {
  let editorState = useReactiveVar(vars.createPost.editorState);
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={(editorState: EditorState) => {
        vars.createPost.editorState(editorState);
      }}
      editorStyle={{ height: 130 }}
    />
  );
};

export default DraftEditor;
