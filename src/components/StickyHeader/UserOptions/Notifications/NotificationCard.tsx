import React from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import NodeIcon from "../../../icons/NodeIcon";

const NotificationCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: 106,

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "20%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NodeIcon size={40} nodeName={"node"} />
      </div>
      <div
        style={{
          width: "75%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>{name}</div>
        <div>{description}</div>
      </div>
      <div
        style={{
          width: "15%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IoEllipsisHorizontal />
      </div>
    </div>
  );
};

export default NotificationCard;
