import React from "react";
import NodeHeader from "../../src/components/NodeHeader";
import PostCard from "../../src/components/PostCard";
import PostingContainer from "../../src/components/PostingContainer";
import RightCard from "../../src/components/RightCard";
import SortingContainer from "../../src/components/SortingContainer";
import StickyHeader from "../../src/components/StickyHeader";

const NodePage = () => {
  return (
    <div>
      <StickyHeader />
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

          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <RightCard />
          <RightCard />
          <RightCard />
        </div>
      </div>
    </div>
  );
};

export default NodePage;
