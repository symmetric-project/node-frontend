import React from "react";
import Image from "next/image";
import SVG from "react-inlinesvg";

const UserIcon = ({ imageId, username }: { imageId: string; username: string }) => {
    imageId ? (
    <Image src="" />
  ) : (
    <SVG
      src={`https://avatars.dicebear.com/api/personas/${username}/.svg`}
      width={50}
      height="100%"
      cursor="pointer"
      title={"My Page"}
    />
  );
};

export default UserIcon;
