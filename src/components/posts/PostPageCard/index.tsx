import React from "react";
import { COLORS, FONTS } from "../../../const";
import { Post } from "../../../types";

const PostCardSingleton = ({ post }: { post: Post }) => {
  return (
    <div
      style={{
        position: "relative",
        height: "auto",
        minHeight: 175,
        width: 640,
        margin: 10,

        backgroundColor: COLORS.WHITE,

        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,

        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
      }}
    >
      <div
        style={{
          position: "relative",
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
          <div style={{ padding: 10, paddingLeft: 0, paddingBottom: 0 }}>
            {post.deltaOps}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCardSingleton;
