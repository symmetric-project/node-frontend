import SVG from "react-inlinesvg";
import React from "react";
import { FRONTEND_URL } from "../../const";

const GenericIcon = (props: {
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
        if (props.onMouseEnter !== undefined) {
          props.onMouseEnter();
        }
      }}
      onMouseLeave={() => {
        if (props.onMouseLeave !== undefined) {
          props.onMouseLeave();
        }
      }}
      onClick={() => {
        if (props.onClick !== undefined) {
          props.onClick();
        }
      }}
      src={`${FRONTEND_URL}/icons/${props.iconName}.svg`}
      width={props.size}
      height="auto"
      cursor="pointer"
      title={props.title}
      color={props.color}
      style={{ backgroundColor: props.backgroundColor, ...props.style }}
    />
  );
};

export default GenericIcon;
