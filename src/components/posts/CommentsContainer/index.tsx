import React from "react";
import { COLORS } from "../../../const";
import { Comment } from "../../../types";
import CommentCard from "../CommentCard";

const CommentsContainer = ({ comments }: { comments: Comment[] }) => {
  return (
    <div
      style={{
        position: "relative",
        width: 640,
        margin: 10,

        backgroundColor: COLORS.WHITE,

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {comments.map((comment: Comment) => (
        <CommentCard comment={comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;
