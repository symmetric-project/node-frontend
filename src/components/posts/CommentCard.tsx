import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import React from "react";
import { deltaToHTMLConverterConfig } from "../../configs";
import { COLORS, FONTS } from "../../const";
import { Comment } from "../../types";
import { newTimeAgo } from "../../utils/time";
import UserIcon from "../icons/UserIcon";

const CommentCard = ({ comment }: { comment: Comment }) => {
  const deltaToHTMLConverter = new QuillDeltaToHtmlConverter(
    JSON.parse(comment.deltaOps as string),
    deltaToHTMLConverterConfig
  );
  const htmlContent = deltaToHTMLConverter.convert();
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
        <div style={{ fontWeight: 500, marginRight: 5, fontSize: 12 }}>
          {comment.author.name}
        </div>
        <div style={{ color: COLORS.GRAY_TEXT, fontSize: 12 }}>
          {newTimeAgo(comment.creationTimestamp)}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          paddingLeft: 10,
          paddingRight: 10,
          fontFamily: FONTS.NOTO_SANS,
        }}
        dangerouslySetInnerHTML={{
          __html: `${htmlContent}`,
        }}
      />
    </div>
  );
};

export default CommentCard;
