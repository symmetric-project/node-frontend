import React from "react";
import SVG from "react-inlinesvg";
import { COLORS } from "../../../../const";
import {
  IoPersonCircleOutline,
  IoAddSharp,
  IoChevronDown,
} from "react-icons/io5";
import UserOption from "./UserDropdownOption";
import { useReactiveVar } from "@apollo/client";
import vars from "../../../../vars";
import UserIcon from "../../../icons/UserIcon";

const UserOptions = () => {
  const user = useReactiveVar(vars.auth.user);
  const stickyHeaderSubmenu = useReactiveVar(vars.ui.stickyHeaderSubmenu);
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: 37,
          width: "auto",
          cursor: "pointer",

          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",

          userSelect: "none",

          paddingRight: 20,
        }}
        onClick={() => {
          if (stickyHeaderSubmenu === "") {
            vars.ui.stickyHeaderSubmenu("user-options");
          } else {
            vars.ui.stickyHeaderSubmenu("");
          }
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UserIcon size={50} user={user!} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: 500 }}>{user?.name}</div>
          <div style={{ color: COLORS.ICON_GRAY, fontSize: 12 }}>
            {user?.bases} bases
          </div>
        </div>

        <div
          style={{
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IoChevronDown
            size={25}
            style={{ color: COLORS.ICON_GRAY, right: 0 }}
          />
        </div>
      </div>
      {stickyHeaderSubmenu === "user-options" ? (
        <div
          style={{
            position: "absolute",
            width: 200,
            height: "auto",
            backgroundColor: "white",
            top: 48,
            right: 0,
            borderBottomLeftRadius: 5,

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",

            userSelect: "none",

            boxShadow: "0 4px 4px rgb(0 0 0 / 25%)",
          }}
        >
          <UserOption
            icon={<IoPersonCircleOutline size={25} />}
            name="Profile"
            href={`/u/${user?.name}`}
          />
          {/* <UserOption
            icon={<IoSettingsOutline size={25} />}
            name="Settings"
            href="/"
          /> */}
          <UserOption
            icon={<IoAddSharp size={25} />}
            name="Create Node"
            onClick={() => vars.ui.popup("create-node")}
          />
        </div>
      ) : null}
    </div>
  );
};

export default UserOptions;
