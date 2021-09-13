import React from "react";

const Checkbox = ({
  style,
  name,
  checked,
  onChange,
}: {
  style?: React.CSSProperties;
  name: string;
  checked: boolean;
  onChange?: (name: string, checked: boolean) => void;
}) => {
  return (
    <input
      style={{ width: 20, height: 20, ...style }}
      type="checkbox"
      checked={checked}
      name={name}
      onChange={(e) => {
        if (onChange) {
          onChange(e.target.name, e.target.checked);
        }
      }}
    />
  );
};

export default Checkbox;
