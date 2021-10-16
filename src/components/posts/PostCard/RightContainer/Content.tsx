import React from "react";
import { Post } from "../../../../types";
import { IoLinkOutline } from "react-icons/io5";
import { convertDraftToHTML } from "../../../../utils/draft-to-html";

const Content = ({ post }: { post: Post }) => {
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

  if (post.link) {
    return (
      <a
        href={post.link}
        style={{ marginTop: 5, display: "flex", alignItems: "center" }}
      >
        {shortifyLink(post.link)} <IoLinkOutline style={{ marginLeft: 2 }} />
      </a>
    );
  } else if (post.rawState) {
    return (
      <div
        style={{
          paddingLeft: 10,
          paddingRight: 10,
        }}
        dangerouslySetInnerHTML={{
          __html: `${convertDraftToHTML(post.rawState!)}`,
        }}
      />
    );
  } else if (post.imageUrl) {
    return (
      <div style={{ position: "relative", width: "100%" }}>
        <img
          width="100%"
          height="100%"
          src={post.imageUrl}
        />
      </div>
    );
  } else return <div></div>;
};

export default Content;
