import dynamic from "next/dynamic";
import { ActionMeta, OptionTypeBase } from "react-select";

const DynamicSelectAsync = dynamic(() => import("./StaticSelectAsync"), {
  ssr: false,
});

const SelectAsync = ({
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
}) => {
  return <DynamicSelectAsync loadOptions={loadOptions} onChange={onChange} />;
};

export default SelectAsync;
