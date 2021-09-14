import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { COLORS } from "../../const";
import Checkbox from "../Checkbox";

const TextEditorContainerFooter = ({}: {}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "20%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",

        backgroundColor: COLORS.GRAY_BACKGROUND,

        padding: 10,
        marginTop: 120,

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 500,
        }}
      >
        <Checkbox style={{ width: 15, height: 15, marginLeft: 0 }} />
        <div style={{ marginLeft: 5 }}> Send me post reply notifications</div>
      </div>
      <div
        style={{
          color: COLORS.BLUE,
          fontWeight: 500,
          cursor: "not-allowed",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Connect accounts to share your post
        <IoInformationCircleOutline
          color={COLORS.ICON_GRAY}
          size={25}
          style={{ margin: 3 }}
        />
      </div>
    </div>
  );
};

export default TextEditorContainerFooter;
