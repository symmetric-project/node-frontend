import React from "react";
import SVG from "react-inlinesvg";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { COLORS, FRONTEND_URL, NODE_DOMAIN } from "../../../const";
import NodeIcon from "../../icons/NodeIcon";

const NodeRow = ({
  place,
  diff,
  nodeName,
}: {
  place: number;
  diff: "up" | "down";
  nodeName: string;
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: 38,
        display: "flex",
        alignItems: "center",
        marginBottom: 5,
      }}
    >
      <div
        style={{
          width: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {place}
      </div>
      <div style={{ width: "10%", display: "flex", alignItems: "center" }}>
        {diff === "up" ? (
          <IoChevronUp size={20} style={{ color: COLORS.GREEN }} />
        ) : (
          <IoChevronDown size={20} style={{ color: COLORS.TAG_RED }} />
        )}
      </div>
      <a
        href={`${FRONTEND_URL}/${nodeName}`}
        style={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          fontWeight: 500,
          fontFamily: "IBMPlexSans",
          textDecoration: "none",
        }}
      >
        <NodeIcon size={40} nodeName={nodeName} style={{ marginRight: 10 }} />
        {nodeName}
      </a>
    </div>
  );
};

export default NodeRow;
