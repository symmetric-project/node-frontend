import React from "react";
import SelectAsync from "../SelectAsync";

const NodeSearch = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const filterColors = (inputValue: string) => {
    return options.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions: any = (inputValue: any) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
      }}
    >
      <div style={{ width: "50%" }}>
        <SelectAsync
          /* placeholder="Search Symmetric"
          cacheOptions
          defaultOptions
          loadOptions={promiseOptions} */
        />
      </div>
    </div>
  );
};

export default NodeSearch;
