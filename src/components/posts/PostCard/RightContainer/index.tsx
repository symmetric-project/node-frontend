import React from "react";
import { Post } from "../../../../types";
import Footer from "./Footer";
import Header from "./Header";

const RightContainer = ({ post }: { post: Post }) => {
  return (
    <div
      style={{
        position: "relative",
        width: 590,

        borderRadius: 4,
      }}
    >
      <Header post={post} />
      <Footer />
    </div>
  );
};

export default RightContainer;
