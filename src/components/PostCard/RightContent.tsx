import React from "react";
import { COLORS, FONTS } from "../../const";
import { Post } from "../../types";

const RightContent = (props: { post: Post }) => {
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
        r/NodeName - Posted by u/DomPachino 5 hours ago
      </div>

      <div style={{ padding: 10 }}>
        <div
          style={{
            fontFamily: FONTS.IBMXPLEXSANS,
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          {props.post.title}
        </div>
        <div style={{ padding: 10, paddingLeft: 0, paddingBottom: 0 }}>
          {props.post.content}
        </div>
      </div>
    </div>
  );
};

export default RightContent;
