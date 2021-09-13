import React from "react";
import { COLORS } from "../const";

const Divider = (style: { style?: React.CSSProperties }) => {
  return (
    <div
      style={{
        width: "100%",
        height: 1,
        backgroundColor: COLORS.GRAY_DIVIDER,
        marginLeft: 10,
        marginRight: 10,
        ...style,
      }}
    ></div>
  );
};

export default Divider;
