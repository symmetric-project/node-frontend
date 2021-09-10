import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { COLORS } from "../../../const";
import GenericIcon from "../../icons/GenericIcon";
import UserOption from "./UserOption";

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
          width: 250,
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
        <SVG
          src={`https://avatars.dicebear.com/api/personas/${"user_id"}/.svg`}
          width={150}
          height="auto"
          cursor="pointer"
          title={"Avatar"}
        />
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
          <UserOption iconName="user-circle" name="Profile" href="/" />
          <UserOption iconName="settings" name="Segsttin" href="/" />
          <UserOption iconName="settings" name="Profile" href="/" />
        </div>
      ) : null}
    </div>
  );
};

export default UserOptions;
