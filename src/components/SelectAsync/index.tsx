import dynamic from "next/dynamic";
import React from "react";
import { ActionMeta } from "react-select";

const DynamicSelectAsync = dynamic(() => import("./StaticSelectAsync"), {
  ssr: false,
});

const SelectAsync = ({
  loadOptions,
  onChange,
  defaultOptions,
  cacheOptions,
}: {
  loadOptions: any;
  onChange: (value: any, action: any) => void;
  defaultOptions: boolean;
  cacheOptions: boolean;
}) => {
  return (
    <DynamicSelectAsync
      loadOptions={loadOptions}
      onChange={onChange}
      defaultOptions={defaultOptions}
      cacheOptions={cacheOptions}
    />
  );
};

export default SelectAsync;
