import { useReactiveVar } from "@apollo/client";
import React from "react";
import {
  IoDocumentTextOutline,
  IoImageOutline,
  IoLinkOutline,
} from "react-icons/io5";
import { COLORS } from "../../../../const";
import vars from "../../../../vars";
import TypeSelectorContainerButton from "./TypeSelectorContainerButton";

const TypeSelectorContainer = () => {
  const postTypeReactiveVar = useReactiveVar(vars.createPost.type);
  return (
    <div
      style={{
        width: "100%",
        height: 50,
        backgroundColor: COLORS.WHITE,
        display: "flex",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      }}
    >
      <TypeSelectorContainerButton
        onClick={() => {
          vars.createPost.type("text");
        }}
        selected={postTypeReactiveVar === "text"}
        text="Post"
        style={{ borderTopLeftRadius: 5 }}
      >
        <IoDocumentTextOutline
          color={
            postTypeReactiveVar === "text" ? COLORS.BLUE : COLORS.ICON_GRAY
          }
          size={20}
          style={{ marginRight: 5 }}
        />
      </TypeSelectorContainerButton>
      <TypeSelectorContainerButton
        onClick={() => {
          vars.createPost.type("media");
        }}
        selected={postTypeReactiveVar === "media"}
        text="Images & Video"
        style={{}}
      >
        <IoImageOutline
          color={
            postTypeReactiveVar === "media" ? COLORS.BLUE : COLORS.ICON_GRAY
          }
          size={20}
          style={{ marginRight: 5 }}
        />
      </TypeSelectorContainerButton>
      <TypeSelectorContainerButton
        onClick={() => {
          vars.createPost.type("link");
        }}
        selected={postTypeReactiveVar === "link"}
        text="Link"
        style={{ borderTopRightRadius: 5, width: "34%" }}
      >
        <IoLinkOutline
          color={
            postTypeReactiveVar === "link" ? COLORS.BLUE : COLORS.ICON_GRAY
          }
          size={20}
          style={{ width: "20%", marginRight: 5 }}
        />
      </TypeSelectorContainerButton>
    </div>
  );
};

export default TypeSelectorContainer;
