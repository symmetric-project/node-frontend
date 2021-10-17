import { ApolloError, ApolloQueryResult, useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import client from "../../api/client";
import { NODES } from "../../api/queries";
import { Node } from "../../types";
import { logError } from "../../utils/errors";
import vars from "../../vars";
import SelectAsync from "../SelectAsync";

const Search = () => {
  const router = useRouter();
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
        width: 250,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SelectAsync
        value={nodeNameSubstring}
        loadOptions={loadOptions}
        onChange={(value) => {
          vars.search.nodeNameSubstring(value.label);
          router.push(`${value.label}`);
        }}
        defaultOptions={true}
        cacheOptions={true}
        placeholder={
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoSearchOutline size={20} style={{ marginRight: 8 }} />
            Search Symmetric
          </div>
        }
      />
    </div>
  );
};

export default Search;
