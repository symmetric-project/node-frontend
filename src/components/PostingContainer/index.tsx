import React from "react";
import { COLORS } from "../../const";
import GenericIcon from "../icons/GenericIcon";
import SVG from "react-inlinesvg";

const PostingContainer = () => {
  return (
    <div
      style={{
        position: "relative",
        height: 58,
        width: 640,
        backgroundColor: "white",

        marginTop: 20,
        marginBottom: 10,

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SVG
          src={`https://avatars.dicebear.com/api/personas/${"user_id"}/.svg`}
          width={50}
          height="auto"
          cursor="pointer"
          title={"My Page"}
        />
      </div>
      <input
        placeholder="Create Post"
        style={{
          width: 470,
          height: 15,
          backgroundColor: COLORS.TRANSPARENT_LIGHTER_GRAY,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: COLORS.TRANSPARENT_LIGHTISH_GRAY,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 10,
          borderRadius: 4,
        }}
      />
      <div
        style={{
          width: 90,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GenericIcon
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          onClick={() => {}}
          iconName="image"
          title="Link"
          size={30}
          color={COLORS.ICON_GRAY}
          style={{ padding: 10 }}
        />
        <GenericIcon
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          onClick={() => {}}
          iconName="link"
          title="Link"
          size={30}
          color={COLORS.ICON_GRAY}
        />
      </div>
    </div>
  );
};

export default PostingContainer;
