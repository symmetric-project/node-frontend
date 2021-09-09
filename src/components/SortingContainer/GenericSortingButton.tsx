import React, { useState } from "react";
import { COLORS } from "../../const";
import GenericIcon from "../icons/GenericIcon";

const GenericSortingButton = (props: { iconName: string, name: string }) => {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: mouseOver ? COLORS.TRANSPARENT_LIGHT_GRAY : undefined,
        padding: 7,
        margin: 5,
        cursor: "pointer",
      }}
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <GenericIcon
        onMouseOver={() => {}}
        onMouseLeave={() => {}}
        onClick={() => {}}
        iconName={props.iconName}
        title="My page"
        size={30}
        color={COLORS.ICON_GRAY}
      />
      <div style={{ marginLeft: 5 }}>{props.name}</div>
    </div>
  );
};

export default GenericSortingButton;
