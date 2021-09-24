import React from "react";
import SVG from "react-inlinesvg";

const NodeIcon = ({
  nodeName,
  style,
}: {
  nodeName: string;
  style: React.CSSProperties;
}) => {
  return (
    <SVG
      src={`https://avatars.dicebear.com/api/jdenticon/${nodeName}/.svg`}
      width={15}
      height="100%"
      cursor="pointer"
      title={"My Page"}
      style={{ ...style }}
    />
  );
};

export default NodeIcon;
