import React from "react";
import { Comment } from "../../types";
import UserIcon from "../icons/UserIcon";

const CommentCard = ({ comment }: { comment: Comment }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 25,
          backgroundColor: "orange",
          display: "flex",
          alignItems: "center",
        }}
      >
        <UserIcon userName="asdas" />
        asdasd
        x days ago
      </div>
      <div style={{ width: "100%", height: 75, backgroundColor: "gray", padding: 10}}>
        asddsasa
      </div>
    </div>
  );
};

export default CommentCard;
