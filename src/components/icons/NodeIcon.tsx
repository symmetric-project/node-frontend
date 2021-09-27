import React from "react";
import SVG from "react-inlinesvg";
import { Node } from "../../types";

const NodeIcon = ({
  name,
  size,
  style,
}: {
  name: string;
  size: number;
  style?: React.CSSProperties;
}) => {
  return (
    <SVG
      src={`https://avatars.dicebear.com/api/jdenticon/${name}/.svg`}
      width={size}
      height="100%"
      cursor="pointer"
      title={name}
      style={{ ...style }}
    />
  );
};

export default NodeIcon;
