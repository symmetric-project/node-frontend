import React, { useState } from "react";
import { COLORS } from "../../const";
import DownvoteIcon from "../icons/DownvoteIcon";
import UpvoteIcon from "../icons/UpvoteIcon";

const LeftVotingBar = () => {
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
      }}
    >
      <UpvoteIcon
        color={upvoted ? COLORS.ORANGE : COLORS.BLACK}
        onMouseOver={() => setMouseOverUpvote(true)}
        onMouseLeave={() => setMouseOverUpvote(false)}
        backgroundColor={
          mouseOverUpvote ? COLORS.TRANSPARENT_LIGHT_GRAY : undefined
        }
        onClick={() => {
          setUpvoted(true);
          setDownvoted(false);
        }}
      />
      <DownvoteIcon
        color={downvoted ? COLORS.BLUE : COLORS.BLACK}
        onMouseOver={() => setMouseOverDownvote(true)}
        onMouseLeave={() => setMouseOverDownvote(false)}
        backgroundColor={
          mouseOverDownvote ? COLORS.TRANSPARENT_LIGHT_GRAY : undefined
        }
        onClick={() => {
          setUpvoted(false);
          setDownvoted(true);
        }}
      />
    </div>
  );
};

export default LeftVotingBar;
