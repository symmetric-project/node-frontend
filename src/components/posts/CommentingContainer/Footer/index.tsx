import { ApolloError } from "@apollo/client";
import { convertToRaw } from "draft-js";
import React from "react";
import client from "../../../../api/client";
import { CREATE_COMMENT } from "../../../../api/mutations";
import { logError } from "../../../../utils/errors";
import vars from "../../../../vars";
import Button from "../../../buttons/Button";

const Footer = () => {
  const sendComment = () => {
    let postId = window.location.pathname.split("/")[2];
    let postSlug = window.location.pathname.split("/")[3];
    client
      .mutate({
        mutation: CREATE_COMMENT,
        variables: {
          newComment: {
            postId,
            rawState: JSON.stringify(
              convertToRaw(vars.createComment.editorState().getCurrentContent())
            ),
            authorId: vars.auth.user()?.id,
            postSlug,
          },
        },
      })
      .then(
        (res) => {
          window.location.reload();
        },
        (err: ApolloError) => {
          logError(err);
        }
      );
  };
  return (
    <div
      style={{
        marginTop: 50,
        height: 75,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",

        paddingRight: 30,
        paddingTop: 30 + 0,
      }}
    >
      <Button onClick={() => sendComment()} style={{ width: 100 }}>
        Comment
      </Button>
    </div>
  );
};

export default Footer;
