import React from "react";
import { COLORS } from "../../const";
import SVG from "react-inlinesvg";
import { IoImage, IoLink } from "react-icons/io5";
import Input from "../Input";

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

      <Input
        onChange={() => {}}
        placeholder="Create Post"
        style={{
          width: 470,
          backgroundColor: COLORS.TRANSPARENT_LIGHTER_GRAY,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: COLORS.TRANSPARENT_LIGHTISH_GRAY,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          borderRadius: 4,
        }}
      />
      <div
        style={{
          width: 90,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <IoImage size={30} style={{ color: COLORS.ICON_GRAY }} />
        <IoLink size={30} style={{ color: COLORS.ICON_GRAY }} />
      </div>
    </div>
  );
};

export default PostingContainer;
