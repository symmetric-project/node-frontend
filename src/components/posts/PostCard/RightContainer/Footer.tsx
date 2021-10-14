import React from "react";
import { IoChatboxOutline, IoFlagOutline, IoLogoReddit, IoRepeatOutline } from "react-icons/io5";

const Option = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
      {children}
    </div>
  );
};

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
      <Option>
        <IoChatboxOutline size={20} style={{ marginRight: 5 }} />0 comments
      </Option>
      <Option>
        <IoRepeatOutline size={20} style={{ marginRight: 5 }} />
        Repost
      </Option>
      <Option>
        <IoFlagOutline size={20} style={{ marginRight: 5 }} />
        Report
      </Option>
    </div>
  );
};

export default Footer;
