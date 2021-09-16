import React from "react";
import { Post } from "../../types";
import LeftVotingBar from "./LeftVotingBar";
import RightContent from "./RightContent";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div
      style={{
        position: "relative",
        height: "auto",
        minHeight: 175,
        width: 640,
        margin: 10,

        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,

        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
      }}
    >
      <LeftVotingBar />
      <RightContent post={post} />
    </div>
  );
};

export default PostCard;
