import React from "react";
import SVG from "react-inlinesvg";

const Logo = () => {
  return (
    <a
      href="/"
      style={{
        userSelect: "none",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textDecoration: "none",
      }}
    >
      <SVG
        src={`https://avatars.dicebear.com/api/jdenticon/symmetric/.svg`}
        width={30}
        height="100%"
        cursor="pointer"
        title={"Avatar"}
        style={{ marginLeft: 20, marginRight: 10 }}
      />
      symmetric
    </a>
  );
};

export default Logo;
