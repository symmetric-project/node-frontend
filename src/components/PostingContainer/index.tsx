import { COLORS } from "../../const";
import GenericIcon from "../icons/GenericIcon";

const PostingContainer = () => {
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
        justifyContent: "center",
        alignItems: "center",

        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
      }}
    >
      <GenericIcon
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        onClick={() => {}}
        iconName="person-circle"
        title="My page"
        size={45}
        color={COLORS.ICON_GRAY}
      />
      <input
        placeholder="Create Post"
        style={{
          width: 440,
          height: 15,
          backgroundColor: COLORS.TRANSPARENT_LIGHTER_GRAY,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: COLORS.TRANSPARENT_LIGHTISH_GRAY,
          margin: 10,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 10,
          borderRadius: 4,
        }}
      />
      <GenericIcon
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        onClick={() => {}}
        iconName="image"
        title="Link"
        size={30}
        color={COLORS.ICON_GRAY}
        style={{ padding: 10 }}
      />
      <GenericIcon
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        onClick={() => {}}
        iconName="link"
        title="Link"
        size={30}
        color={COLORS.ICON_GRAY}
      />
    </div>
  );
};

export default PostingContainer;
