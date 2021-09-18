import { useQuery } from "@apollo/client";
import React from "react";
import RightCard from "../src/components/cards/GenericCard";
import { POSTS } from "../src/api/queries";
import PostEditorContainer from "../src/components/editors/PostEditorContainer";

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
        <PostEditorContainer />
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 30 }}>
        <RightCard title="Posting to Symmetric">
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
