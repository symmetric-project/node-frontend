import React, { useState } from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const DraftEditor = () => {
  const [editorState, setEditorState] = useState(null);
  return (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={(editorState: EditorState) => {
        setEditorState(editorState);
      }}
    />
  );
};

export default DraftEditor;
