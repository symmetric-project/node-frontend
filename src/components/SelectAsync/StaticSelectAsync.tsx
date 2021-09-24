import React from "react";
import SelectAsync from "react-select/async";

const StaticSelectAsync = ({
  loadOptions,
  onChange,
  defaultOptions,
  cacheOptions,
}: {
  loadOptions: any;
  onChange: ((value: any, action: any) => void) | undefined;
  defaultOptions: boolean;
  cacheOptions: boolean;
}) => {
  return (
    <SelectAsync
      onChange={onChange}
      loadOptions={loadOptions}
      defaultOptions={defaultOptions}
      cacheOptions={cacheOptions}
    />
  );
};

export default StaticSelectAsync;
