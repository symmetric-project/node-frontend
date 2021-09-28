import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { COLORS } from "../../const";

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

        marginLeft: 20,
      }}
    >
      <Image src={logo} width={32} height={32} layout="fixed" />
      <div style={{ marginLeft: 5, fontSize: 17, color: COLORS.BLACK }}>
        symmetric
      </div>
    </a>
  );
};

export default Logo;
