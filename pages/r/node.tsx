import { useQuery } from "@apollo/client";
import React from "react";
import { POSTS } from "../../src/api/queries";
import NodeHeader from "../../src/components/NodeHeader";
import PostCard from "../../src/components/PostCard";
import PostingContainer from "../../src/components/PostingContainer";
import RightCard from "../../src/components/RightCard";
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

          {console.log(data)}
          {data.posts.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <RightCard
            title="About Community"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <RightCard
            title="About Community"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <RightCard
            title="About Community"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  );
};

export default NodePage;
