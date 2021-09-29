import React from "react";
import SVG from "react-inlinesvg";
import { createAvatar } from "@dicebear/avatars";
import * as jdenticon from "@dicebear/avatars-jdenticon-sprites";

const NodeIcon = ({
  nodeName,
  size,
  style,
}: {
  nodeName: string;
  size: number;
  style?: React.CSSProperties;
}) => {
  let svg = createAvatar(jdenticon, {
    seed: nodeName,
  });
  return (
    <SVG
      src={svg}
      width={size}
      height="100%"
      cursor="pointer"
      title={nodeName}
      style={{ ...style }}
    />
  );
};

export default NodeIcon;
