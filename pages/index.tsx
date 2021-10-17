import { ApolloError, ApolloQueryResult } from "@apollo/client";
import React from "react";
import PostCards from "../src/components/PostCards";
import PostingContainer from "../src/components/PostingContainer";
import RightCard from "../src/components/cards/GenericCard";
import SortingContainer from "../src/components/SortingContainer";
import TopNodesCard from "../src/components/cards/TopNodesCard";
import { NODES, POSTS } from "../src/api/queries";
import { GetStaticPropsContext } from "next";
import client from "../src/api/client";
import { Node, Post } from "../src/types";
import { logError } from "../src/utils/errors";

const IndexPage = ({
  posts,
  topNodes,
}: {
  posts: Post[];
  topNodes: Node[];
}) => {
  return (
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
        <TopNodesCard nodes={topNodes} />
        <RightCard title="About Community">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </RightCard>
        <RightCard title="About Community">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </RightCard>
        <RightCard title="About Community">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </RightCard>
      </div>
    </div>
  );
};

export default IndexPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  let staticProps: any = {
    props: {
      posts: null,
      topNodes: [],
    },
    revalidate: 10,
    /* revalidate - An optional amount in seconds after which a page re-generation can occur. Defaults to false.
    When revalidate is false it means that there is no revalidation, so the page will be cached as built until the next build. */
  };

  await client
    .query({
      query: POSTS,
      variables: { limit: 10 },
      fetchPolicy: "no-cache",
    })
    .then(
      (res: ApolloQueryResult<any>) => {
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
