import SVG from "react-inlinesvg";
import React from "react";
import { FRONTEND_URL } from "../../const";

const GenericIcon = ({
  onMouseEnter,
  onMouseLeave,
  onClick,
  color,
  backgroundColor,
  iconName,
  title,
  size,
  style,
}: {
  onMouseEnter?: () => any;
  onMouseLeave?: () => any;
  onClick?: () => any;
  color?: string;
  backgroundColor?: string;
  iconName: string;
  title: string;
  size: number;
  style?: React.CSSProperties;
}) => {
  return (
    <SVG
      onMouseEnter={() => {
        if (onMouseEnter !== undefined) {
          onMouseEnter();
        }
      }}
      onMouseLeave={() => {
        if (onMouseLeave !== undefined) {
          onMouseLeave();
        }
      }}
      src={`${FRONTEND_URL}/icons/${iconName}.svg`}
      width={size}
      height="auto"
      cursor="pointer"
      title={title}
      color={color}
      style={{ backgroundColor: backgroundColor, ...style }}
      onClick={onClick ? () => onClick() : undefined}
    />
  );
};

export default GenericIcon;
