import { useQuery } from "@apollo/client";
import React from "react";
import { POSTS } from "../../src/api/queries";
import NodeHeader from "../../src/components/NodeHeader";
import PostCard from "../../src/components/PostCard";
import PostCards from "../../src/components/PostCards";
import PostingContainer from "../../src/components/PostingContainer";
import GenericCard from "../../src/components/cards/GenericCard";
import SortingContainer from "../../src/components/SortingContainer";
import StickyHeader from "../../src/components/StickyHeader";

const NodePage = () => {
  const { loading, error, data } = useQuery(POSTS);
  if (loading) return null;
  if (error) return null;
  return (
    <div>
      <NodeHeader />
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
          <GenericCard
            title="About Community"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <GenericCard
            title="About Community"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <GenericCard
            title="About Community"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
};

export default NodePage;
