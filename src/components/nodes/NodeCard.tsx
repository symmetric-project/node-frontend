import React from "react";
import { Node } from "../../types";
import NodeIcon from "../NodeIcon";

const NodeCard = ({ node }: { node: Node }) => {
  return (
    <a
      href={`/n/${node.name}`}
      style={{
        height: 50,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",

        marginTop: 10,
      }}
    >
      <NodeIcon node={node} style={{ marginRight: 10 }} />
      <div style={{ width: "50%" }}>{node.name}</div>
      <div style={{ width: "50%" }}>{node.description}</div>
    </a>
  );
};

export default NodeCard;
