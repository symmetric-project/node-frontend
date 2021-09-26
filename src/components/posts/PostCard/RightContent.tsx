import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import React from "react";
import { deltaToHTMLConverterConfig } from "../../../configs";
import { COLORS, FONTS } from "../../../const";
import { Post } from "../../../types";
import { newTimeAgo } from "../../../utils/time";
import NodeIcon from "../../icons/NodeIcon";

const RightContent = ({ post }: { post: Post }) => {
  const deltaToHTMLConverter = new QuillDeltaToHtmlConverter(
    JSON.parse(post.deltaOps as string),
    deltaToHTMLConverterConfig
  );
  const htmlContent = deltaToHTMLConverter.convert();
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: COLORS.WHITE,
        width: "100%",
        top: 0,

        borderRadius: 4,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: 5,

          fontSize: 12,
        }}
      >
        <a
          href={`/${post.nodeName}`}
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: 5,

            fontSize: 12,
            textDecoration: "none",
          }}
        >
          <NodeIcon nodeName={post.nodeName} style={{ marginRight: 2 }} />
          {post.nodeName}
        </a>
        <a
          href={`/u/${post.author.name}`}
          style={{
            marginLeft: 5,
            color: COLORS.GRAY_TEXT_BACKGROUND,
            textDecoration: "none",
          }}
        >
          {post.author.name}
        </a>
        <div style={{ marginLeft: 5, color: COLORS.GRAY_TEXT_BACKGROUND }}>
          {newTimeAgo(post.creationTimestamp)}
        </div>
      </div>

      <div style={{ padding: 10, paddingTop: 0 }}>
        <a
          href={`/${post.nodeName}/${post.id}/${post.slug}`}
          style={{
            fontFamily: FONTS.IBMXPLEXSANS,
            fontWeight: 500,
            fontSize: 18,

            color: COLORS.BLACK_POST_TITLE,
            textDecoration: "none",
          }}
        >
          {post.title}
        </a>
        <div
          style={{
            paddingTop: 5,
          }}
          dangerouslySetInnerHTML={{
            __html: `${htmlContent}`,
          }}
        />
      </div>
    </div>
  );
};

export default RightContent;
