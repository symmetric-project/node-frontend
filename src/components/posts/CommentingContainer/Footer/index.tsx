import React from "react";
import "react-placeholder/lib/reactPlaceholder.css";
import GenericButton from "../../../buttons/GenericButton";

const Footer = () => {
  return (
    <div
      style={{
        height: 75,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",

        paddingRight: 30,
        paddingTop: 30 + 0,
      }}
    >
      <GenericButton style={{ width: 100 }} name="Comment" />
    </div>
  );
};

export default Footer;
