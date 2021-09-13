import { useMutation } from "@apollo/client";
import React from "react";
import { CREATE_NODE } from "../../api/mutations";
import { COLORS } from "../../const";
import { popupVar } from "../../states/ui";
import { CreateNodePopupVars } from "../../states/ui/createNodePopup";
import GenericButton from "../buttons/GenericButton";

const PopupContainerFooter = () => {
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
        onClick={() => popupVar("")}
      />
      <GenericButton
        name="Create node"
        onClick={() =>
          createNode({
            variables: {
              name: CreateNodePopupVars.name(),
              access: CreateNodePopupVars.access(),
              nsfw: CreateNodePopupVars.nsfw(),
            },
          })
        }
      />
    </div>
  );
};

export default PopupContainerFooter;
