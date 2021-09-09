import SVG from "react-inlinesvg";
import React from "react";
import { FRONTEND_URL } from "../../const";

const GenericIcon = (props: {
  onMouseOver: () => any;
  onMouseLeave: () => any;
  color: string | undefined;
  backgroundColor: string | undefined;
  onClick: () => any;
  iconName: string;
  title: string;
  size: number;
  style?: React.CSSProperties;
}) => {
  return (
    <SVG
      onMouseOver={() => props.onMouseOver()}
      onMouseLeave={() => props.onMouseLeave()}
      onClick={() => props.onClick()}
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
