import { useReactiveVar } from "@apollo/client";
import React from "react";
import { COLORS } from "../../../const";
import vars from "../../../vars";
import CategoryButton from "./CategoryButton";

const SearchHeader = () => {
  const category = useReactiveVar(vars.search.category);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 145,
        backgroundColor: COLORS.WHITE,

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",

        paddingLeft: 20,
      }}
    >
      <div style={{ fontSize: 22, fontWeight: 700, marginTop: 10 }}>query</div>
      <div
        style={{
          fontSize: 12,
          fontWeight: 400,
          color: COLORS.GRAY_TEXT,
          marginTop: 10,
        }}
      >
        Search results
      </div>

      <div style={{ position: "absolute", bottom: 0, display: "flex" }}>
        <CategoryButton
          onClick={() => vars.search.category("best-results")}
          selected={category === "best-results"}
        >
          Best results
        </CategoryButton>
        <CategoryButton
          onClick={() => vars.search.category("posts")}
          selected={category === "posts"}
        >
          Posts
        </CategoryButton>
        <CategoryButton
          onClick={() => vars.search.category("nodes-and-users")}
          selected={category === "nodes-and-users"}
        >
          Nodes and users
        </CategoryButton>
      </div>
    </div>
  );
};

export default SearchHeader;
