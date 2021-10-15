import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { COLORS, FONTS } from "../../../const";
import { Post } from "../../../types";

const LeftContainer = ({ post }: { post: Post }) => {
  const [mouseOverUpvote, setMouseOverUpvote] = useState(false);
  const [mouseOverDownvote, setMouseOverDownvote] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        width: 50,
        backgroundColor: COLORS.LIGHT_GRAY,
        top: 0,

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        onMouseOver={() => setMouseOverUpvote(true)}
        onMouseOut={() => setMouseOverUpvote(false)}
      >
        <IoChevronUpOutline
          size={30}
          onClick={() => {}}
          style={{
            cursor: "pointer",
            color: mouseOverUpvote ? COLORS.ORANGE : COLORS.BLACK,
          }}
        />
      </div>
      <div style={{ fontSize: 12, font: FONTS.IBMXPLEXSANS, fontWeight: 500 }}>
        {post.bases}
      </div>
      <div
        onMouseOver={() => setMouseOverDownvote(true)}
        onMouseOut={() => setMouseOverDownvote(false)}
      >
        <IoChevronDownOutline
          size={30}
          onClick={() => {}}
          style={{
            cursor: "pointer",
            color: mouseOverDownvote ? COLORS.BLUE : COLORS.BLACK,
          }}
        />
      </div>
    </div>
  );
};

export default LeftContainer;
