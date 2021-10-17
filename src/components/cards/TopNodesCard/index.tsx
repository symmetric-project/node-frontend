import React from "react";
import { Node } from "../../../types";
import GenericButton from "../../buttons/GenericButton";
import GenericCard from "../Card";
import NodeRow from "./NodeRow";
import NodeRowDivider from "./NodeRowDivider";

const TopNodesCard = ({ nodes }: { nodes: Node[] }) => {
  return (
    <GenericCard
      style={{ marginTop: 0, paddingTop: 0 }}
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
      <GenericButton
        href="/trending-nodes"
        name="View All"
        style={{ marginTop: 7 }}
      />
    </GenericCard>
  );
};

export default TopNodesCard;
