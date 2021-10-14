import React from "react";
import {
  IoChatboxOutline,
  IoFlagOutline,
  IoRepeatOutline,
} from "react-icons/io5";
import ButtonTransparent from "../../../../buttons/ButtonTransparent";

const Footer = () => {
  return (
    <div
      style={{
        bottom: 0,
        position: "absolute",
        width: "100%",
        height: 35,

        display: "flex",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <ButtonTransparent>
        <IoChatboxOutline size={20} style={{ marginRight: 5 }} />0 comments
      </ButtonTransparent>
      <ButtonTransparent>
        <IoRepeatOutline size={20} style={{ marginRight: 5 }} />
        Repost
      </ButtonTransparent>
      <ButtonTransparent>
        <IoFlagOutline size={20} style={{ marginRight: 5 }} />
        Report
      </ButtonTransparent>
    </div>
  );
};

export default Footer;
