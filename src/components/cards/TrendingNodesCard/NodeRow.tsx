import React from "react";
import SVG from "react-inlinesvg";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { NODE_DOMAIN } from "../../../const";

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
          <IoChevronUp size={17} />
        ) : (
          <IoChevronDown size={17} />
        )}
      </div>
      <a
        href={`http://symmetric.${nodeName}.com`}
        style={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          fontWeight: 500,
          fontFamily: "IBMPlexSans",
          textDecoration: "none",
        }}
      >
        <SVG
          src={`https://avatars.dicebear.com/api/jdenticon/${nodeName}/.svg`}
          width={35}
          height="auto"
          cursor="pointer"
          title={nodeName}
          style={{ marginRight: 10 }}
        />
        {nodeName}
      </a>
    </div>
  );
};

export default NodeRow;
