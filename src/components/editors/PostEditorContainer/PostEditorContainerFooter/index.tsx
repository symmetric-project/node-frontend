import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { COLORS } from "../../../../const";
import GenericButton from "../../../buttons/GenericButton";
import Checkbox from "../../../Checkbox";

const PostEditorContainerFooter = ({}: {}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "auto",

        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "auto",

          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",

          padding: 10,
          paddingRight: 20,

          backgroundColor: COLORS.WHITE,
        }}
      >
        <GenericButton name="Post" />
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: COLORS.GRAY_BACKGROUND,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 10,
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
          <Checkbox checked={true} name="reply-notifications" onChange={(_, checked) => {}} style={{ width: 15, height: 15, marginLeft: 0 }} />
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
    </div>
  );
};

export default PostEditorContainerFooter;
