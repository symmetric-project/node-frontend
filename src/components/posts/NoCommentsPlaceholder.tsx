import React from "react";
import { COLORS } from "../../const";

const NoCommentsPlaceholder = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "auto",
        minHeight: 175,
        width: 640,
        margin: 10,

        backgroundColor: COLORS.WHITE,

        borderRadius: 3,

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>No Comments Yet</div>
      <div>Be the first to share what you think!</div>
    </div>
  );
};

export default NoCommentsPlaceholder;
