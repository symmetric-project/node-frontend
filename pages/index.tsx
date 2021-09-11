import { useQuery } from "@apollo/client";
import React from "react";
import { POSTS } from "../src/api/queries";
import PostCards from "../src/components/PostCards";
import PostingContainer from "../src/components/PostingContainer";
import RightCard from "../src/components/cards/GenericCard";
import SortingContainer from "../src/components/SortingContainer";
import TopNodesCard from "../src/components/cards/TrendingNodesCard";

const IndexPage = () => {
  const { loading, error, data } = useQuery(POSTS);
  if (loading) return null;
  if (error) return null;
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
        <PostCards posts={data.posts} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TopNodesCard />
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
