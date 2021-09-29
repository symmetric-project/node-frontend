import React from "react";
import { COLORS } from "../../const";
import { IoImage, IoLink } from "react-icons/io5";
import Input from "../Input";
import { useReactiveVar } from "@apollo/client";
import vars from "../../vars";
import UserIcon from "../icons/UserIcon";
import { useRouter } from "next/router";

const PostingContainer = () => {
  const router = useRouter();
  const user = useReactiveVar(vars.auth.user);
  return (
    <div
      style={{
        position: "relative",
        height: 58,
        width: 640,
        backgroundColor: "white",

        marginTop: 20,
        marginBottom: 10,

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

        borderRadius: 3,
        padding: 10,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {user ? <UserIcon size={40} user={user} /> : null}
      </div>
      <Input
        onSelect={() => router.push("/create-post")}
        placeholder="Create Post"
        style={{
          width: 470,
          backgroundColor: COLORS.TRANSPARENT_LIGHTER_GRAY,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          borderRadius: 4,
        }}
      />
      <div
        style={{
          width: 90,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <IoImage size={30} style={{ color: COLORS.ICON_GRAY }} />
        <IoLink size={30} style={{ color: COLORS.ICON_GRAY }} />
      </div>
    </div>
  );
};

export default PostingContainer;
