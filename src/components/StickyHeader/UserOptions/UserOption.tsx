import React, { useState } from "react";
import { COLORS } from "../../../const";
import GenericIcon from "../../icons/GenericIcon";

const UserOption = (props: {
  href: string;
  name: string;
  iconName: string;
}) => {
  return (
    <a
      href={props.href}
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 10,
        textDecoration: "none",
      }}
    >
      <GenericIcon
        iconName={props.iconName}
        title={props.name}
        size={30}
        color={COLORS.ICON_GRAY}
        style={{ paddingRight: 10 }}
      />
      Profile
    </a>
  );
};

export default UserOption;
