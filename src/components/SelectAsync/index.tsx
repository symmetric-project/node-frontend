import dynamic from "next/dynamic";
import React from "react";

const DynamicSelectAsync = dynamic(() => import("./StaticSelectAsync"), {
  ssr: false,
});

const SelectAsync = ({
  value,
  loadOptions,
  onChange,
  defaultOptions,
  cacheOptions,
}: {
  value: string;
  loadOptions: any;
  onChange: (value: any, action: any) => void;
  defaultOptions: boolean;
  cacheOptions: boolean;
}) => {
  return (
    <DynamicSelectAsync
      value={value}
      loadOptions={loadOptions}
      onChange={onChange}
      defaultOptions={defaultOptions}
      cacheOptions={cacheOptions}
    />
  );
};

export default SelectAsync;
