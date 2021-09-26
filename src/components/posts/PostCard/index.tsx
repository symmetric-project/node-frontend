import React, { useState } from "react";
import { Post } from "../../../types";
import LeftVotingBar from "./LeftVotingBar";
import RightContent from "./RightContent";
import { useRouter } from "next/router";

const PostCard = ({ post }: { post: Post }) => {
  const router = useRouter();
  const [mouseOn, setMouseOn] = useState(false);
  return (
    <div
      onClick={() => router.push(`/${post.nodeName}/${post.id}/${post.slug}`)}
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
      style={{
        position: "relative",
        height: "auto",
        width: 640,
        margin: 10,

        borderRadius: 4,

        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",

        outlineColor: "black",
        outlineWidth: mouseOn ? 1 : 0,
        outlineStyle: "solid",

        cursor: "pointer",
      }}
    >
      {/* <LeftVotingBar /> */}
      <RightContent post={post} />
    </div>
  );
};

export default PostCard;
