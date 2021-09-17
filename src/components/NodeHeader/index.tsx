import React from "react";
import { COLORS, FRONTEND_URL } from "../../const";
import JoinTransparentButton from "../buttons/JoinTransparentButton";
import SVG from "react-inlinesvg";
import { Node } from "../../types";

const NodeHeader = ({ node }: { node: Node }) => {
  return (
    <div
      style={{
        position: "relative",
        height: 158,
        width: "100%",
        backgroundColor: "rgb(51, 168, 255)",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: 78,
          width: "100%",
          backgroundColor: "white",
          bottom: 0,

          color: COLORS.BLACK,

          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            top: -10,

            width: 72,
            height: 72,
            borderRadius: "50%",
            backgroundColor: COLORS.BLUE,

            color: COLORS.WHITE,
            fontSize: 30,

            borderWidth: 5,
            borderStyle: "solid",
            borderColor: COLORS.WHITE,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SVG
            src={`https://avatars.dicebear.com/api/jdenticon/${"nodename"}/.svg`}
            width={50}
            height="100%"
            cursor="pointer"
            title={"Avatar"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700 }}>{node.name}</div>
          <div
            style={{
              color: COLORS.METATEXT,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>{FRONTEND_URL}/n/</div>
            <div style={{ fontWeight: 500 }}>{node.name}</div>
          </div>
        </div>

        <JoinTransparentButton joined={true} />
      </div>
    </div>
  );
};

export default NodeHeader;
