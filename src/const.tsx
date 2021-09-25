export const MODE = process.env.NEXT_PUBLIC_MODE as string;
export const NODE_DOMAIN =
  MODE == "prod"
    ? (process.env.NEXT_PUBLIC_NODE_DOMAIN_PROD as string)
    : (process.env.NEXT_PUBLIC_NODE_DOMAIN_DEV as string);
export const FRONTEND_URL =
  MODE == "prod"
    ? (process.env.NEXT_PUBLIC_FRONTEND_BASE_URL_PROD as string)
    : (process.env.NEXT_PUBLIC_FRONTEND_BASE_URL_DEV as string);
export const CLIENT_URL =
  MODE == "prod"
    ? (process.env.NEXT_PUBLIC_BACKEND_BASE_URL_PROD as string)
    : (process.env.NEXT_PUBLIC_BACKEND_BASE_URL_DEV as string);

export const COLORS = {
  BUTTON: "#0079D3",
  METATEXT: "rgb(124, 124, 124)",
  ORANGE: "#ff4500",
  ORBLUE: "#7193ff",
  BLUE: "rgb(0, 121, 211)",
  BLUE_LIGHT: "rgb(36, 160, 237)",
  WHITE: "white",
  LIGHT_GRAY: "#f8f9fa",
  TRANSPARENT_BLACK_POPUP_BACKGROUND: "rgba(28,28,28,.9)",
  TRANSPARENT_LIGHTISH_GRAY: "rgba(0, 0, 0, 0.07)",
  TRANSPARENT_LIGHT_GRAY: "rgba(0, 0, 0, 0.05)",
  TRANSPARENT_LIGHTER_GRAY: "rgba(0, 0, 0, 0.02)",
  TAG_GRAY: "rgb(246, 247, 248)",
  TAG_RED: "rgb(255, 88, 91)",
  ICON_GRAY: "rgb(135, 138, 140)",
  GREEN: "rgb(70, 209, 96)",
  GRAY: "gray",
  GRAY_DIVIDER: "rgb(237, 239, 241)",
  GRAY_TEXT: "rgb(124, 124, 124)",
  GRAY_TEXT_BACKGROUND: "rgb(120, 124, 126)",
  GRAY_BACKGROUND: "rgb(237, 239, 241)",
  BLACK: "black",
  BLACK_POST_TITLE: "rgb(34, 34, 34)",
};

export const FONTS = {
  IBMXPLEXSANS: "IBMPlexSans",
  NOTO_SANS: "NotoSans",
};
