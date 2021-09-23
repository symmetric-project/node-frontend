import React from "react";
import ReactQuill from "react-quill";
import vars from "../../../vars";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  return (
    <ReactQuill
      style={{ height: 150 }}
      theme="snow"
      modules={modules}
      formats={formats}
      /* value={delta} */
      onChange={(content, delta, source, editor) => {
        vars.createPost.deltaOps(editor.getContents().ops);
      }}
    />
  );
};

export default Editor;
