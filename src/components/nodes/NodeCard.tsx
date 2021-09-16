import React from "react";

const NodeCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div
      style={{
        height: 50,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};

export default NodeCard;
