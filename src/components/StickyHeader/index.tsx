import { useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import vars from "../../vars";
import Logo from "./Logo";
import Search from "./Search";
import UserOptions from "./UserOptions";

const StickyHeader = () => {
  const user = useReactiveVar(vars.auth.user);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        height: 51,
        width: "100%",
        backgroundColor: scrollY < 51 ? "transparent" : "white",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: 5,
        paddingLeft: 0,
        paddingRight: 0,

        zIndex: 10,

        boxShadow: scrollY > 51 ? "0 3px 6px rgb(0 0 0 / 4%)" : undefined,
      }}
    >
      <Logo />
      <Search />
      {user ? <UserOptions /> : null}
    </div>
  );
};

export default StickyHeader;
