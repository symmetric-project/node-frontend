import { useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import vars from "../../../vars";
import Button from "../../buttons/Button";
import UserDropdown from "./UserDropdown";

const UserOptions = () => {
  const router = useRouter();
  const stickyHeaderSubmenu = useReactiveVar(vars.ui.stickyHeaderSubmenu);
  return (
    <div
      style={{
        width: "auto",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        right: 0,
      }}
    >
      {/* <a
        href="/create-post"
        style={{
          width: 30,
          height: 30,
          margin: 5,
          marginLeft: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <IoAddOutline color={COLORS.GRAY} size={30} />
      </a> */}
      <UserDropdown
      /* onClick={() => {
          if (stickyHeaderSubmenu === "") {
            vars.ui.stickyHeaderSubmenu("user-options");
          } else {
            vars.ui.stickyHeaderSubmenu("");
          }
        }} */
      />
      <Button
        onClick={() => router.push("/add-post")}
        style={{ height: 30 }}
      >
        Add post
      </Button>
    </div>
  );
};

export default UserOptions;
