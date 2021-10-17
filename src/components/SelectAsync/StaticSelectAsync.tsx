import React from "react";
import SelectAsync from "react-select/async";

const StaticSelectAsync = ({
  value,
  loadOptions,
  onChange,
  defaultOptions,
  cacheOptions,
  placeholder,
}: {
  value: string;
  loadOptions: any;
  onChange: ((value: any, action: any) => void) | undefined;
  defaultOptions: boolean;
  cacheOptions: boolean;
  placeholder: React.ReactNode;
}) => {
  return (
    <SelectAsync
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      loadOptions={loadOptions}
      defaultOptions={defaultOptions}
      cacheOptions={cacheOptions}
    />
  );
};

export default StaticSelectAsync;
