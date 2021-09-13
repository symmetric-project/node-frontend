import { useReactiveVar } from "@apollo/client";
import React from "react";
import { IoEye, IoLockClosed, IoPerson } from "react-icons/io5";
import { COLORS } from "../../../const";
import { CreateNodePopupVars } from "../../../states/ui/createNodePopup";
import Checkbox from "../../Checkbox";

const CommunityTypeSelector = () => {
  const nodeAccessTypeReactiveVar = useReactiveVar(CreateNodePopupVars.access)
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 10 }}>
        Community type
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <Checkbox
            name="public"
            checked={nodeAccessTypeReactiveVar === "public"}
            onChange={(name) => CreateNodePopupVars.access(name)}
          />
          <IoPerson size={20} style={{ marginLeft: 5, marginRight: 5 }} />
          <div style={{ fontSize: 14, marginRight: 5 }}>Public</div>
          <div style={{ color: COLORS.GRAY_TEXT }}>
            Anyone can view, post, and comment to this node
          </div>
        </label>
        <label style={{ display: "flex", alignItems: "center", fontSize: 12 }}>
          <Checkbox
            name="restricted"
            checked={nodeAccessTypeReactiveVar === "restricted"}
            onChange={(name) => CreateNodePopupVars.access(name)}
          />
          <IoEye size={20} style={{ marginLeft: 5, marginRight: 5 }} />
          <div style={{ fontSize: 14, marginRight: 5, color: COLORS.BLACK }}>
            Restricted
          </div>
          <div style={{ color: COLORS.GRAY_TEXT }}>
            Anyone can view this node, but only approved users can post
          </div>
        </label>
        <label style={{ display: "flex", alignItems: "center", fontSize: 12 }}>
          <Checkbox
            name="private"
            checked={nodeAccessTypeReactiveVar === "private"}
            onChange={(name) => CreateNodePopupVars.access(name)}
          />
          <IoLockClosed size={20} style={{ marginLeft: 5, marginRight: 5 }} />
          <div style={{ fontSize: 14, marginRight: 5 }}>Private</div>
          <div style={{ color: COLORS.GRAY_TEXT }}>
            Only approved users can view and submit to this node
          </div>
        </label>
      </form>
    </div>
  );
};

export default CommunityTypeSelector;
