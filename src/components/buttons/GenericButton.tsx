import { useState } from "react";
import { COLORS } from "../../const";

const GenericButton = (props: { name: string }) => {
  const [cursorOnButton, setCursorOnButton] = useState(false);
  return (
    <div
      style={{
        width: "auto",
        height: 32,

        paddingLeft: 20,
        paddingRight: 20,

        borderRadius: 20,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        fontFamily: "NotoSans",
        color: COLORS.BLUE,
        fontWeight: 700,

        cursor: "pointer",

        backgroundColor: COLORS.BUTTON_BLUE,
      }}
    >
      {props.name}
    </div>
  );
};

export default GenericButton;
