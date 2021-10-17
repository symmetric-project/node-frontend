import { ApolloError, ApolloQueryResult } from "@apollo/client";
import React from "react";
import { NODE, NODES, POSTS } from "../src/api/queries";
import NodeHeader from "../src/components/pages/nodeName/NodeHeader";
import PostCards from "../src/components/PostCards";
import SortingContainer from "../src/components/SortingContainer";
import { Node, Post } from "../src/types";
import client from "../src/api/client";
import { GetStaticPropsContext } from "next";
import { logError } from "../src/utils/errors";
import RightCards from "../src/components/pages/nodeName/RightCards";

const NodePage = ({
  node,
  posts,
  topNodes,
}: {
  node: Node;
  params: { name: string };
  posts: Post[];
  topNodes: Node[];
}) => {
  /* const { loading, error, data } = useQuery(POSTS); */
  return (
    <div>
      <NodeHeader node={node} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start ",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center ",
          }}
        >
          {/* <PostingContainer /> */}
          <SortingContainer />
          <PostCards posts={posts} />
        </div>
        <RightCards topNodes={topNodes} />
      </div>
    </div>
  );
};

export default NodePage;

export async function getStaticPaths() {
  let paths: any[] = [];
  await client.query({ query: NODES }).then(
    (res) => {
      res.data.nodes.forEach((node: Node) => {
        paths.push({
          params: {
            nodeName: node.name,
          },
        });
      });
    },
    (err) => {
      logError(err);
    }
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  let staticProps: any = {
    props: {
      params: context.params,
      node: null,
      topNodes: null,
    },
    revalidate: 1,
    /* revalidate - An optional amount in seconds after which a page re-generation can occur. Defaults to false.
    When revalidate is false it means that there is no revalidation, so the page will be cached as built until the next build. */
  };

  await client
    .query({
      query: NODE,
      variables: { name: context.params!.nodeName },
    })
    .then(
      (res) => {
        staticProps.props.node = res.data.node;
      },
      (err: ApolloError) => {
        logError(err);
      }
    );
  await client
    .query({
      query: POSTS,
      variables: { nodeName: context.params!.nodeName, limit: 10 },
      fetchPolicy: "no-cache",
    })
    .then(
      (res) => {
        staticProps.props.posts = res.data.posts;
      },
      (err: ApolloError) => {
        logError(err);
      }
    );
  await client
    .query({
      query: NODES,
      variables: {
        limit: 6,
        sortingParams: {
          param: "members",
          sort: "ASC",
        },
      },
      fetchPolicy: "no-cache",
    })
    .then(
      (res: ApolloQueryResult<any>) => {
        staticProps.props.topNodes = res.data.nodes;
      },
      (err: ApolloError) => {
        logError(err);
      }
    );
  return staticProps;
}
