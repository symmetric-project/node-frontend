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
          vars.createPost.type("TEXT");
        }}
        selected={postTypeReactiveVar === "TEXT"}
        text="Post"
        style={{ borderTopLeftRadius: 5 }}
      >
        <IoDocumentTextOutline
          color={
            postTypeReactiveVar === "TEXT" ? COLORS.BLUE : COLORS.ICON_GRAY
          }
          size={20}
          style={{ marginRight: 5 }}
        />
      </TypeSelectorContainerButton>
      <TypeSelectorContainerButton
        onClick={() => {
          vars.createPost.type("MEDIA");
        }}
        selected={postTypeReactiveVar === "MEDIA"}
        text="Images & Video"
        style={{}}
      >
        <IoImageOutline
          color={
            postTypeReactiveVar === "MEDIA" ? COLORS.BLUE : COLORS.ICON_GRAY
          }
          size={20}
          style={{ marginRight: 5 }}
        />
      </TypeSelectorContainerButton>
      <TypeSelectorContainerButton
        onClick={() => {
          vars.createPost.type("LINK");
        }}
        selected={postTypeReactiveVar === "LINK"}
        text="Link"
        style={{ borderTopRightRadius: 5, width: "34%" }}
      >
        <IoLinkOutline
          color={
            postTypeReactiveVar === "LINK" ? COLORS.BLUE : COLORS.ICON_GRAY
          }
          size={20}
          style={{ width: "20%", marginRight: 5 }}
        />
      </TypeSelectorContainerButton>
    </div>
  );
};

export default TypeSelectorContainer;
