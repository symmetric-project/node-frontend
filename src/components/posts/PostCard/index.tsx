import React, { useState } from "react";
import { Post } from "../../../types";
import { useRouter } from "next/router";
import { COLORS } from "../../../const";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const PostCard = ({ post, inList }: { post: Post; inList: boolean }) => {
  const router = useRouter();
  const [mouseOn, setMouseOn] = useState(false);

  return (
    <div
      onClick={() => {
        if (inList) {
          router.push(`/${post.nodeName}/${post.id}/${post.slug}`);
        }
      }}
      onMouseEnter={
        inList
          ? () => {
              setMouseOn(true);
            }
          : undefined
      }
      onMouseLeave={inList ? () => setMouseOn(false) : undefined}
      style={{
        position: "relative",
        height: "auto",
        minHeight: 140,
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

        cursor: inList ? "pointer" : undefined,
      }}
    >
      <LeftContainer />
      <RightContainer post={post} />
    </div>
  );
};

export default PostCard;
