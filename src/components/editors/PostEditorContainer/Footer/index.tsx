import { useMutation } from "@apollo/client";
import { convertToRaw } from "draft-js";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { CREATE_POST } from "../../../../api/mutations";
import { COLORS } from "../../../../const";
import { Post } from "../../../../types";
import vars from "../../../../vars";
import GenericButton from "../../../buttons/GenericButton";
import Checkbox from "../../../Checkbox";

const Footer = ({}: {}) => {
  const router = useRouter();
  const [createPost, { data, loading, error }] = useMutation(CREATE_POST, {
    onCompleted: (data: any) => {
      let post: Post = data.createPost;
      router.push(`/${post.nodeName}/${post.id}/${post.slug}`);
    },
  });
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
        <GenericButton
          onClick={() => {
            createPost({
              variables: {
                newPost: {
                  nodeName: vars.createPost.nodeName(),
                  title: vars.createPost.title(),
                  link: vars.createPost.link(),
                  rawState: JSON.stringify(
                    convertToRaw(vars.createPost.editorState() as any)
                  ),
                },
              },
            });
          }}
          name="Post"
        />
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
          <Checkbox
            checked={true}
            name="reply-notifications"
            onChange={(_, checked) => {}}
            style={{ width: 15, height: 15, marginLeft: 0 }}
          />
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

export default Footer;
