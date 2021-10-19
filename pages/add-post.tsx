import { NextSeo } from "next-seo";
import React from "react";
import GenericCard from "../src/components/cards/Card";
import PostEditorContainer from "../src/components/editors/PostEditorContainer";

const IndexPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start ",
      }}
    >
      <NextSeo title="Add post - Symmetric" />
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
        <GenericCard title="Posting to Symmetric">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </GenericCard>
        <GenericCard title="About Community">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </GenericCard>
      </div>
    </div>
  );
};

export default IndexPage;
