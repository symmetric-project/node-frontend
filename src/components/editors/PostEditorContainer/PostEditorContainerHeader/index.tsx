import React from "react";
import Divider from "../../../Divider";
import TypeSelectorContainer from "./TypeSelectorContainer";
import Select from "react-select";

const PostEditorContainerHeader = ({}: {}) => {
  const styles = {
    control: (styles: any) => ({ ...styles }),
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      return {
        ...styles,
      };
    },
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 5}}>Create a post</div>
      <Divider /> */}
      <div style={{ width: 300, marginBottom: 10}}>
        <Select styles={styles} options={options} />
      </div>
      <TypeSelectorContainer />
    </div>
  );
};

export default PostEditorContainerHeader;
