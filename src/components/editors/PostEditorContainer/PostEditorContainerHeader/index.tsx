import React from "react";
import TypeSelectorContainer from "./TypeSelectorContainer";
import SelectAsync from "../../../SelectAsync";
import client from "../../../../api/client";
import { NODES } from "../../../../api/queries";
import { ApolloError, ApolloQueryResult, useReactiveVar } from "@apollo/client";
import { Node } from "../../../../types";
import vars from "../../../../vars";

const PostEditorContainerHeader = ({}: {}) => {
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
            console.log(err);
          }
        );
    });
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ width: 300, marginBottom: 10 }}>
        <SelectAsync
          loadOptions={loadOptions}
          onChange={(value) => {
            if (value !== null) {
              vars.createPost.nodeName(value.label);
            }
          }}
          defaultOptions={true}
          cacheOptions={true}
        />
      </div>
      <TypeSelectorContainer />
    </div>
  );
};

export default PostEditorContainerHeader;
