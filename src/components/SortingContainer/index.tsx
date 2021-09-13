import React from "react";
import { IoAlertOutline, IoBulbOutline, IoStar, IoStarOutline, IoTrendingUpOutline } from "react-icons/io5";
import GenericSortingButton from "./SortingContainerButton";

const SortingContainer = () => {
  return (
    <div
      style={{
        position: "relative",
        height: 58,
        width: 640,
        backgroundColor: "white",

        marginTop: 15,
        marginBottom: 10,

        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",

        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
      }}
    >
      <GenericSortingButton name="Best">
        <IoStarOutline size={25} />
      </GenericSortingButton>
      <GenericSortingButton name="Trending">
        <IoTrendingUpOutline size={25} />
      </GenericSortingButton>
      <GenericSortingButton name="New">
        <IoBulbOutline size={25} />
      </GenericSortingButton>
      <GenericSortingButton name="Controversial">
        <IoAlertOutline size={25} />
      </GenericSortingButton>
    </div>
  );
};

export default SortingContainer;
