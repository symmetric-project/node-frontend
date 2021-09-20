import React from "react";
import SelectAsync from "react-select/async";
import { ActionMeta, OptionTypeBase } from "react-select/src/types";

const StaticSelectAsync = ({
  loadOptions,
  onChange,
}: {
  loadOptions: any;
  onChange:
    | ((
        value: OptionTypeBase | null,
        action: ActionMeta<OptionTypeBase>
      ) => void)
    | undefined;
}) => (
  <SelectAsync
    onChange={onChange}
    loadOptions={loadOptions}
    defaultOptions
    cacheOptions
  />
);

export default StaticSelectAsync;
