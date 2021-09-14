import { useReactiveVar } from "@apollo/client";
import React from "react";
import {
  IoDocumentTextOutline,
  IoImageOutline,
  IoLinkOutline,
  IoListOutline,
} from "react-icons/io5";
import { COLORS } from "../../../const";
import { CreatePostPageVars } from "../../../states/ui/createPostPage";
import TextEditorHeaderButton from "./TextEditorHeaderButton";

const TextEditorContainerHeader = ({}: {}) => {
  const postTypeReactiveVar = useReactiveVar(CreatePostPageVars.postType);
  return (
    <div
      style={{
        width: "100%",
        height: "10%",
        backgroundColor: COLORS.WHITE,
        display: "flex",
        borderRadius: 10,
      }}
    >
      <TextEditorHeaderButton
        onClick={() => {
          CreatePostPageVars.postType("text");
        }}
        selected={postTypeReactiveVar === "text"}
        text="Post"
        style={{ borderTopLeftRadius: 10 }}
      >
        <IoDocumentTextOutline
          color={
            postTypeReactiveVar === "text" ? COLORS.BLUE : COLORS.ICON_GRAY
          }
          size={20}
          style={{ marginRight: 5 }}
        />
      </TextEditorHeaderButton>
      <TextEditorHeaderButton
        onClick={() => {
          CreatePostPageVars.postType("media");
        }}
        selected={postTypeReactiveVar === "media"}
        text="Images & Video"
      >
        <IoImageOutline
          color={
            postTypeReactiveVar === "media" ? COLORS.BLUE : COLORS.ICON_GRAY
          }
          size={20}
          style={{ marginRight: 5 }}
        />
      </TextEditorHeaderButton>
      <TextEditorHeaderButton
        onClick={() => {
          CreatePostPageVars.postType("link");
        }}
        selected={postTypeReactiveVar === "link"}
        text="Link"
      >
        <IoLinkOutline
          color={
            postTypeReactiveVar === "link" ? COLORS.BLUE : COLORS.ICON_GRAY
          }
          size={20}
          style={{ marginRight: 5 }}
        />
      </TextEditorHeaderButton>
      <TextEditorHeaderButton
        onClick={() => {
          CreatePostPageVars.postType("poll");
        }}
        selected={postTypeReactiveVar === "poll"}
        text="Poll"
        style={{ borderTopRightRadius: 10 }}
      >
        <IoListOutline
          color={
            postTypeReactiveVar === "poll" ? COLORS.BLUE : COLORS.ICON_GRAY
          }
          size={20}
          style={{ marginRight: 5 }}
        />
      </TextEditorHeaderButton>
    </div>
  );
};

export default TextEditorContainerHeader;
