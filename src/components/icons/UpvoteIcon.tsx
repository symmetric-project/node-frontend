import SVG from "react-inlinesvg";
import React from "react";
import { FRONTEND_URL } from "../../const";

const UpvoteIcon = (props: {
  onMouseOver: () => any;
  onMouseLeave: () => any;
  color: string | undefined;
  backgroundColor: string | undefined;
  onClick: () => any;
}) => {
  return (
    <SVG
      onMouseOver={() => props.onMouseOver()}
      onMouseLeave={() => props.onMouseLeave()}
      onClick={() => props.onClick()}
      src={`${FRONTEND_URL}/icons/chevron-up.svg`}
      width={50}
      height="auto"
      title="Upvote"
      color={props.color}
      cursor="pointer"
      style={{ backgroundColor: props.backgroundColor }}
    />
  );
};

export default UpvoteIcon;
