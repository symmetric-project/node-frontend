import { useReactiveVar } from "@apollo/client";
import React from "react";
import vars from "../../vars";
import Logo from "./Logo";
import NodeSearch from "./NodeSearch";
import UserOptions from "./UserOptions";

const StickyHeader = () => {
  const user = useReactiveVar(vars.auth.user);
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        height: 48,
        backgroundColor: "white",

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

        padding: 5,
        paddingLeft: 0,
        paddingRight: 0,

        zIndex: 10,
      }}
    >
      <Logo />
      <NodeSearch />
      {user ? <UserOptions /> : null}
    </div>
  );
};

export default StickyHeader;
