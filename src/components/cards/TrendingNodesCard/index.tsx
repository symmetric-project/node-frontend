import React from "react";
import GenericButton from "../../buttons/GenericButton";
import GenericCard from "../GenericCard";
import NodeRow from "./NodeRow";
import NodeRowDivider from "./NodeRowDivider";

const TrendingNodesCard = () => {
  return (
    <GenericCard title="Best Political Nodes" headerHeight={80} header={false}>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NodeRow place={1} diff="up" nodeName={"LoremIpsum"} />
        <NodeRowDivider />
        <NodeRow place={1} diff="up" nodeName={"IpsumLorem"} />
        <NodeRowDivider />
        <NodeRow place={1} diff="up" nodeName={"SitAmet"} />
        <NodeRowDivider />
        <NodeRow place={1} diff="up" nodeName={"AdispElit "} />
        <NodeRowDivider />
        <NodeRow place={1} diff="up" nodeName={"UtEnim"} />
      </div>

      <GenericButton
        href="/trending-nodes"
        name="View All"
        style={{ marginTop: 7 }}
      />

      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <TagLabel>Tag</TagLabel>
        <TagLabel>Tag</TagLabel>
        <TagLabel>Tag</TagLabel>
        <TagLabel>Tag</TagLabel>
        <TagLabel>Tag</TagLabel>
        <TagLabel>Tag</TagLabel>
        <TagLabel>Tag</TagLabel>
        <TagLabel>Tag</TagLabel>
      </div> */}
    </GenericCard>
  );
};

export default TrendingNodesCard;
