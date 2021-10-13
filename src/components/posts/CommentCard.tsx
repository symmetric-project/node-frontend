import React from "react";
import { COLORS, FONTS } from "../../const";
import { Comment } from "../../types";
import { newTimeAgo } from "../../utils/time";
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

        padding: 5,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 40,
          display: "flex",
          alignItems: "center",
        }}
      >
        <UserIcon size={40} user={comment.author} style={{}} />
        <div style={{ fontWeight: 500, marginLeft: 5, marginRight: 5, fontSize: 12 }}>
          {comment.author.name}
        </div>
        <div style={{ color: COLORS.GRAY_TEXT, fontSize: 12 }}>
          {newTimeAgo(comment.creationTimestamp)}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          paddingLeft: 45,
          paddingRight: 40,
          fontFamily: FONTS.NOTO_SANS,
        }}
        dangerouslySetInnerHTML={{
          __html: `${null}`,
        }}
      />
    </div>
  );
};

export default CommentCard;
