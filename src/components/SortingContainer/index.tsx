import React from "react";
import GenericSortingButton from "./GenericSortingButton";

const SortingContainer = () => {
  return (
    <div
      style={{
        position: "relative",
        height: 58,
        width: 640,
        backgroundColor: "white",

        marginTop: 15,
        marginBottom: 10,

        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",

        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
      }}
    >
      <GenericSortingButton name="Best" iconName="star-large" />
      <GenericSortingButton name="Trending" iconName="graph-line" />
      <GenericSortingButton name="New" iconName="/editor/hint" />
      <GenericSortingButton name="Worst" iconName="trash" />
    </div>
  );
};

export default SortingContainer;
