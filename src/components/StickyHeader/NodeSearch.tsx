import { ApolloError, ApolloQueryResult, useReactiveVar } from "@apollo/client";
import React from "react";
import client from "../../api/client";
import { NODES } from "../../api/queries";
import { Node } from "../../types";
import { logError } from "../../utils/errors";
import vars from "../../vars";
import SelectAsync from "../SelectAsync";

const NodeSearch = () => {
  const nodeNameSubstring = useReactiveVar(vars.search.nodeNameSubstring);
  const loadOptions = (nodeName: any): any =>
    new Promise((resolve) => {
      client
        .query({
          query: NODES,
          fetchPolicy: "no-cache",
          variables: {
            substring: nodeName,
          },
        })
        .then(
          (res: ApolloQueryResult<any>) => {
            let nodeOptions: {}[] = [];
            res.data.nodes.forEach((node: Node) => {
              nodeOptions.push({
                value: "node",
                label: node.name,
              });
            });
            resolve(nodeOptions);
          },
          (err: ApolloError) => {
            logError(err);
          }
        );
    });

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
      }}
    >
      <div style={{ width: "50%" }}>
        <SelectAsync
          value={nodeNameSubstring}
          loadOptions={loadOptions}
          onChange={(value) => {
            if (value !== null) {
              vars.search.nodeNameSubstring(value.label);
            }
          }}
          defaultOptions={true}
          cacheOptions={true}
        />
      </div>
    </div>
  );
};

export default NodeSearch;
