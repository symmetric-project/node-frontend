import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { COLORS } from "../../../const";
import GenericIcon from "../../icons/GenericIcon";
import {
  IoPersonCircleOutline,
  IoSettingsOutline,
  IoAddSharp,
} from "react-icons/io5";
import UserOption from "./UserOption";
import { popupVar } from "../../../states/popups";

const UserOptions = () => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        style={{
          position: "relative",
          height: 37,
          width: "auto",
          cursor: "pointer",

          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",

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
          <GenericIcon
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            onClick={() => {}}
            iconName="chevron-down"
            title="My page"
            size={45}
            color={COLORS.ICON_GRAY}
            style={{ right: 0 }}
          />
        </div>
      </div>
      {mouseOver ? (
        <div
          onMouseEnter={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
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
