import React from "react";
import { Node } from "../../../types";
import Button from "../../buttons/Button";
import GenericCard from "../Card";
import NodeRow from "./NodeRow";
import NodeRowDivider from "./NodeRowDivider";

const TopNodesCard = ({
  nodes,
  style,
}: {
  nodes: Node[];
  style: React.CSSProperties;
}) => {
  return (
    <GenericCard
      style={{ marginTop: 0, paddingTop: 0, ...style }}
      title="Best Political Nodes"
      headerHeight={80}
      header={false}
    >
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {nodes.map((node, i) => (
          <React.Fragment>
            <NodeRow place={i + 1} diff="up" nodeName={node.name} />
            <NodeRowDivider />
          </React.Fragment>
        ))}
      </div>
      <Button href="/trending-nodes" style={{ marginTop: 7 }}>
        View All
      </Button>
    </GenericCard>
  );
};

export default TopNodesCard;
