import React from "react";
import { COLORS } from "../const";

const Input = ({
  style,
  placeholder,
  value,
  onChange,
}: {
  style?: React.CSSProperties;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
}) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        backgroundColor: COLORS.WHITE,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: COLORS.TRANSPARENT_LIGHTISH_GRAY,
        margin: 10,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        borderRadius: 4,
        ...style,
      }}
    />
  );
};

export default Input;
