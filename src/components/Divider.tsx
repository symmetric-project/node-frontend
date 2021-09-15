import React from "react";
import { COLORS } from "../const";

const Divider = (style: { style?: React.CSSProperties }) => {
  return (
    <div
      style={{
        width: "100%",
        height: 1,
        backgroundColor: COLORS.GRAY_DIVIDER,
        margin: 10,
        marginLeft: 0,
        marginRight: 0,
        ...style,
      }}
    ></div>
  );
};

export default Divider;
