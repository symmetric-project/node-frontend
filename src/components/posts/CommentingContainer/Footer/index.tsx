import { ApolloError } from "@apollo/client";
import React from "react";
import "react-placeholder/lib/reactPlaceholder.css";
import client from "../../../../api/client";
import { CREATE_COMMENT } from "../../../../api/mutations";
import { logError } from "../../../../utils/errors";
import vars from "../../../../vars";
import GenericButton from "../../../buttons/GenericButton";

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
            deltaOps: JSON.stringify(vars.createComment.deltaOps()),
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
        height: 75,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",

        paddingRight: 30,
        paddingTop: 30 + 0,
      }}
    >
      <GenericButton
        onClick={() => sendComment()}
        style={{ width: 100 }}
        name="Comment"
      />
    </div>
  );
};

export default Footer;
