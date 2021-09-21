import React from "react";
import { COLORS } from "../../../const";
import { Post } from "../../../types";
import CommentEditor from "./CommentEditor";
import Footer from "./Footer";

const CommentingContainer = ({ post }: { post: Post }) => {
  return (
    <div
      style={{
        position: "relative",
        height: "auto",
        minHeight: 175,
        width: 640,
        margin: 10,

        backgroundColor: COLORS.WHITE,

        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,

        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <CommentEditor />
      <Footer />
    </div>
  );
};

export default CommentingContainer;
