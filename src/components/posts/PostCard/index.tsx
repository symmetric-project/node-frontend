import React, { useState } from "react";
import { Post } from "../../../types";
import LeftVotingBar from "./LeftVotingBar";
import RightContent from "./RightContent";
import { useRouter } from "next/router";
import { COLORS } from "../../../const";

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

        backgroundColor: COLORS.WHITE,

        boxShadow: mouseOn
          ? `0px 0px 0px 1px ${COLORS.CARD_BORDER_SELECTED}`
          : undefined,

        cursor: "pointer",
        paddingTop: 5,
      }}
    >
      {/* <LeftVotingBar /> */}
      <RightContent post={post} />
    </div>
  );
};

export default PostCard;
