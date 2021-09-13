import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { COLORS } from "../../const";

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
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <IoChevronUpOutline
        size={30}
        onClick={() => {}}
        style={{
          cursor: "pointer",
          color: upvoted ? COLORS.ORANGE : COLORS.BLACK,
        }}
      />
      <IoChevronDownOutline
        size={30}
        onClick={() => {}}
        style={{
          cursor: "pointer",
          color: downvoted ? COLORS.BLUE : COLORS.BLACK,
        }}
      />
    </div>
  );
};

export default LeftVotingBar;
