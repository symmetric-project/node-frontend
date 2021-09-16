import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_NODES } from "../src/api/queries";
import GenericButton from "../src/components/buttons/GenericButton";
import GenericCard from "../src/components/cards/GenericCard";
import NodeCard from "../src/components/nodes/NodeCard";
import Select from "../src/components/Select";
import { COLORS } from "../src/const";
import { Node } from "../src/types";
import vars from "../src/vars";

const SearchPage = () => {
  const { loading, error, data } = useQuery(QUERY_NODES);
  if (loading) return null;
  if (error) return null;

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: 145,
          backgroundColor: COLORS.WHITE,

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",

          paddingLeft: 20,
        }}
      >
        <div>query</div>
        <div>Search results</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start ",
        }}
      >
        <div style={{ width: 640, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: "100%",
              height: 45,
              marginTop: 20,

              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center ",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", marginRight: 10 }}
            >
              <div style={{ marginRight: 10}}>Sort by</div>
              <div style={{ width: 150 }}>
                <Select />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: 10}}>From</div>
              <div style={{ width: 150 }}>
                <Select />
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "auto",
              backgroundColor: COLORS.WHITE,
              marginTop: 20,
            }}
          >
            <div>
              {data.nodes.map((node: Node) => (
                <NodeCard name={node.name} description="Description" />
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 65}}>
          <GenericCard title="Title" header={false}>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              Have an idea for a new community?
              <GenericButton
                name={"Create Community"}
                onClick={() => vars.ui.popup("create-node")}
              />
            </div>
          </GenericCard>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
