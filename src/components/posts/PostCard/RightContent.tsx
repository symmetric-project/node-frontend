import React from "react";
import { IoLinkOutline } from "react-icons/io5";
import { COLORS, FONTS } from "../../../const";
import { Post } from "../../../types";
import { newTimeAgo } from "../../../utils/time";
import NodeIcon from "../../icons/NodeIcon";

const RightContent = ({ post }: { post: Post }) => {
  const shortifyLink = (link: string) => {
    if (link.includes("http://")) {
      link = link.substring(7);
    }
    if (link.includes("https://")) {
      link = link.substring(8);
    }
    if (link.includes("www.")) {
      link = link.substring(4);
    }
    if (link.length > 20) {
      link = link.slice(0, 20);
      link = link + "...";
    }
    if (link.slice(-1) === "/") {
      link = link.slice(0, -1);
    }
    return link;
  };

  return (
    <div
      style={{
        position: "relative",
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
          paddingTop: 5,

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
          <NodeIcon
            size={20}
            nodeName={post.nodeName}
            style={{ marginRight: 2 }}
          />
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

      <div
        style={{
          padding: 10,
          paddingTop: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
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
        {post.link ? (
          <a
            href={post.link}
            style={{ marginTop: 5, display: "flex", alignItems: "center" }}
          >
            {shortifyLink(post.link)}{" "}
            <IoLinkOutline style={{ marginLeft: 2 }} />
          </a>
        ) : (
          <div
            style={{
              marginTop: 5,
            }}
            dangerouslySetInnerHTML={{
              __html: `${null }`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default RightContent;
