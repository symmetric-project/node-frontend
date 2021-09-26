import { useState } from "react";
import { COLORS } from "../../const";

const TransparentButton = (props: { joined: boolean }) => {
  const [cursorOnButton, setCursorOnButton] = useState(false);
  return (
    <div
      style={{
        width: "auto",
        height: 32,

        paddingLeft: 20,
        paddingRight: 20,

        borderRadius: 20,

        outlineColor: COLORS.BLUE,
        outlineStyle: "solid",
        outlineWidth: 1,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        fontFamily: "NotoSans",
        color: COLORS.BLUE,
        fontWeight: 700,

        cursor: "pointer",

        backgroundColor: props.joined ? "transparent" : COLORS.BUTTON,
      }}
    >
      {props.joined ? (cursorOnButton ? "Join" : "Leave") : "Join"}
    </div>
  );
};

export default TransparentButton;
