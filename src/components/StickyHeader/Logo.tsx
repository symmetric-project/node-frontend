import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Logo = () => {
  return (
    <a
      href="/"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textDecoration: "none",
        userSelect: "none",

        marginRight: 10,
      }}
    >
      <Image src={logo} width={35} height={35} layout="fixed" />
      {/* <div style={{ marginLeft: 5, fontSize: 17, color: COLORS.BLACK }}>
        symmetric
      </div> */}
    </a>
  );
};

export default Logo;
