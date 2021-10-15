import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { CREATE_NODE } from "../../../api/mutations";
import { COLORS } from "../../../const";
import { Node } from "../../../types";
import vars from "../../../vars";
import GenericButton from "../../buttons/GenericButton";

const Footer = () => {
  const router = useRouter();
  const [createNode, { data, loading, error }] = useMutation(CREATE_NODE);
  return (
    <div
      style={{
        width: "100%",
        height: 64,

        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",

        backgroundColor: COLORS.GRAY_BACKGROUND,
        padding: 10,
      }}
    >
      <GenericButton
        name="Cancel"
        style={{ marginRight: 10 }}
        onClick={() => vars.ui.popup("")}
      />
      <GenericButton
        name="Create node"
        onClick={() =>
          createNode({
            variables: {
              newNode: {
                name: vars.createNode.name(),
                access: vars.createNode.access(),
                nsfw: vars.createNode.nsfw(),
              },
            },
            onCompleted: (data: any) => {
              /* console.log(data); */
              let node: Node = data.createNode;
              router.push(`/${node.name}/`);
            },
          })
        }
      />
    </div>
  );
};

export default Footer;
