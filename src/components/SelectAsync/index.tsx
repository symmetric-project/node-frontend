import dynamic from "next/dynamic";
import React from "react";
import { ActionMeta, OptionTypeBase } from "react-select";

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
  onChange: (
    value: OptionTypeBase | null,
    action: ActionMeta<OptionTypeBase>
  ) => void;
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
