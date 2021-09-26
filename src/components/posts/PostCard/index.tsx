import React, { useState } from "react";
import { Post } from "../../../types";
import LeftVotingBar from "./LeftVotingBar";
import RightContent from "./RightContent";

const PostCard = ({ post }: { post: Post }) => {
  const [mouseOn, setMouseOn] = useState(false);
  return (
    <a
      href={`/${post.nodeName}/${post.id}/${post.slug}`}
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
      style={{
        position: "relative",
        height: "auto",
        width: 640,
        margin: 10,

        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,

        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",

        outlineColor: "black",
        outlineWidth: mouseOn ? 1 : 0,
        outlineStyle: "solid",
      }}
    >
      {/* <LeftVotingBar /> */}
      <RightContent post={post} />
    </a>
  );
};

export default PostCard;
