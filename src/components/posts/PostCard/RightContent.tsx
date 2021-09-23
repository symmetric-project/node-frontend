import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import React from "react";
import { deltaToHTMLConverterConfig } from "../../../configs";
import { COLORS, FONTS } from "../../../const";
import { Post } from "../../../types";

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
        }}
      >
        <div
          style={{
            width: 15,
            height: 15,
            backgroundColor: COLORS.GRAY,
            margin: 5,
          }}
        ></div>
        nodename.com - Posted by u/virtumondeObjective 5 hours ago
      </div>

      <div style={{ padding: 10 }}>
        <div
          style={{
            fontFamily: FONTS.IBMXPLEXSANS,
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          {post.title}
        </div>
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
