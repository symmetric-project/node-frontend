import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { COLORS, FRONTEND_URL } from "../../const";
import GenericIcon from "../icons/GenericIcon";

const UserOptions = () => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      style={{
        position: "relative",
        height: 37,
        width: 200,
        cursor: "pointer",

        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",

        ...(mouseOver
          ? {
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: COLORS.TRANSPARENT_LIGHTISH_GRAY,
              borderRadius: 5,
            }
          : null),
      }}
    >
      <SVG
        src={`https://avatars.dicebear.com/api/personas/${"user_id"}/.svg`}
        width={50}
        height="auto"
        cursor="pointer"
        title={"Avatar"}
        /* style={{ backgroundColor: props.backgroundColor, ...props.style }} */
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <div>ASdasd</div>
          <div>100 bases</div>
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
  );
};

export default UserOptions;
