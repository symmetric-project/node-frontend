import React from "react";
import SelectAsync from "react-select/async";
import { ActionMeta, OptionTypeBase } from "react-select/src/types";
const StaticSelectAsync = ({
  loadOptions,
  onChange,
  defaultOptions,
  cacheOptions,
}: {
  loadOptions: any;
  onChange:
    | ((
        value: OptionTypeBase | null,
        action: ActionMeta<OptionTypeBase>
      ) => void)
    | undefined;
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
