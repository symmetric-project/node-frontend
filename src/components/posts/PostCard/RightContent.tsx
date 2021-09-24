import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import React from "react";
import { deltaToHTMLConverterConfig } from "../../../configs";
import { COLORS, FONTS } from "../../../const";
import { Post } from "../../../types";
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
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: 5,

            fontSize: 12,
          }}
        >
          <NodeIcon nodeName={post.nodeName} style={{ marginRight: 2 }} />
          nodename.com
        </div>
        <div style={{ marginLeft: 5, color: COLORS.GRAY_TEXT_BACKGROUND }}>
          u/virtumondeObjective
        </div>
        <div style={{ marginLeft: 5, color: COLORS.GRAY_TEXT_BACKGROUND }}>
          5 hours ago
        </div>
      </div>

      <div style={{ padding: 10 }}>
        <a
          href={`/${post.nodeName}/${post.id}/${post.slug}`}
          style={{
            fontFamily: FONTS.IBMXPLEXSANS,
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          {post.title}
        </a>
        <div
          style={{ padding: 10, paddingLeft: 0, paddingBottom: 0 }}
          dangerouslySetInnerHTML={{
            __html: `${htmlContent}`,
          }}
        />
      </div>
    </div>
  );
};

export default RightContent;
