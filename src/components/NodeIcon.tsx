import React from "react";
import Image from "next/image";
import SVG from "react-inlinesvg";
import { Node } from "../types";

const NodeIcon = ({
  node,
  style,
}: {
  node: Node;
  style: React.CSSProperties;
}) => {
  return node.imageId ? (
    <Image src="" />
  ) : (
    <SVG
      src={`https://avatars.dicebear.com/api/jdenticon/${node.name}/.svg`}
      width={50}
      height="100%"
      cursor="pointer"
      title={"My Page"}
      style={{ ...style }}
    />
  );
};

export default NodeIcon;
