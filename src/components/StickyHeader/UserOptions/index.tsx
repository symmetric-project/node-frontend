import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { COLORS } from "../../../const";
import {
  IoPersonCircleOutline,
  IoSettingsOutline,
  IoAddSharp,
  IoChevronDown,
} from "react-icons/io5";
import UserOption from "./UserOption";
import { popupVar, stickyHeaderSubmenuVar } from "../../../states/ui";
import { useReactiveVar } from "@apollo/client";

const UserOptions = () => {
  const stickyHeaderSubmenuReactiveVar = useReactiveVar(stickyHeaderSubmenuVar);

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

          /* ...(mouseOver
            ? {
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: COLORS.TRANSPARENT_LIGHTISH_GRAY,
                borderRadius: 5,
              }
            : null), */
        }}
        onClick={() => {
          if (stickyHeaderSubmenuReactiveVar === "") {
            stickyHeaderSubmenuVar("user-options");
          } else {
            stickyHeaderSubmenuVar("");
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
          <SVG
            src={`https://avatars.dicebear.com/api/personas/${"user_id"}/.svg`}
            width={50}
            height="auto"
            cursor="pointer"
            title={"Avatar"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: 500 }}>virtumondeObjective</div>
          <div style={{ color: COLORS.ICON_GRAY, fontSize: 12 }}>100 bases</div>
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
          <IoChevronDown size={25} style={{ color: COLORS.ICON_GRAY, right: 0 }} />
        </div>
      </div>
      {stickyHeaderSubmenuReactiveVar === "user-options" ? (
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
            alignItems: "flex-start",

            userSelect: "none",

            boxShadow: "0 4px 4px rgb(0 0 0 / 25%)",

            padding: 15,
          }}
        >
          <UserOption
            icon={<IoPersonCircleOutline size={30} />}
            name="Profile"
            href="/"
          />
          <UserOption
            icon={<IoSettingsOutline size={30} />}
            name="Settings"
            href="/"
          />
          <UserOption
            icon={<IoAddSharp size={30} />}
            name="Create Node"
            onClick={() => popupVar("create-node")}
          />
        </div>
      ) : null}
    </div>
  );
};

export default UserOptions;
