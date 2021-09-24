import { ApolloError } from "@apollo/client";
import React from "react";
import "react-placeholder/lib/reactPlaceholder.css";
import client from "../../../../api/client";
import { CREATE_COMMENT, CREATE_USER } from "../../../../api/mutations";
import { logError } from "../../../../utils/errors";
import vars from "../../../../vars";
import GenericButton from "../../../buttons/GenericButton";

const Footer = () => {
  const sendComment = () => {
    client
      .mutate({
        mutation: CREATE_COMMENT,
        variables: {
          newComment: {
            deltaOps: vars.writeComment.deltaOps(),
          },
        },
      })
      .then(
        (res) => {},
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
