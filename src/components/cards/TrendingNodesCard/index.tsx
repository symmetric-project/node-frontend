import React from "react";
import GenericButton from "../../buttons/GenericButton";
import TagLabel from "../../labels/TagLabel";
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
        <NodeRow place={1} diff="up" nodeName={"NoNewNormal"} />
        <NodeRowDivider />
        <NodeRow place={1} diff="up" nodeName={"FreeSpeech"} />
        <NodeRowDivider />
        <NodeRow place={1} diff="up" nodeName={"NoNewNormal"} />
        <NodeRowDivider />
        <NodeRow place={1} diff="up" nodeName={"NoNewNormal"} />
        <NodeRowDivider />
        <NodeRow place={1} diff="up" nodeName={"FreeSpeech"} />
        <NodeRowDivider />
        <NodeRow place={1} diff="up" nodeName={"NoNewNormal"} />
      </div>

      <GenericButton
        href="/trending-nodes"
        name="View All"
        style={{ marginTop: 10 }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <TagLabel>Trump</TagLabel>
        <TagLabel>Trump</TagLabel>
        <TagLabel>Trump</TagLabel>
        <TagLabel>Trump</TagLabel>
        <TagLabel>Trump</TagLabel>
        <TagLabel>Trump</TagLabel>
        <TagLabel>Trump</TagLabel>
        <TagLabel>Trump</TagLabel>
      </div>
    </GenericCard>
  );
};

export default TrendingNodesCard;