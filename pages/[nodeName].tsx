import { ApolloError, useQuery } from "@apollo/client";
import React from "react";
import { NODE, NODES, POSTS } from "../src/api/queries";
import GenericCard from "../src/components/cards/GenericCard";
import NodeHeader from "../src/components/NodeHeader";
import PostCards from "../src/components/PostCards";
import PostingContainer from "../src/components/PostingContainer";
import SortingContainer from "../src/components/SortingContainer";
import { Node, Post } from "../src/types";
import client from "../src/api/client";
import { GetStaticPropsContext } from "next";
import { logError } from "../src/utils/errors";

const NodePage = ({
  node,
  posts,
}: {
  node: Node;
  params: { name: string };
  posts: Post[];
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
          <PostingContainer />
          <SortingContainer />
          <PostCards posts={posts} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <GenericCard title="About Community">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </GenericCard>
          <GenericCard title="About Community">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </GenericCard>
          <GenericCard title="About Community">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </GenericCard>
        </div>
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
      variables: { nodeName: context.params!.nodeName },
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
  return staticProps;
}
