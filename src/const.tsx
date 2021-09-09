export const MODE = process.env.NEXT_PUBLIC_MODE;
export const FRONTEND_URL =
  MODE == "prod"
    ? process.env.NEXT_PUBLIC_FRONTEND_BASE_URL_PROD
    : process.env.NEXT_PUBLIC_FRONTEND_BASE_URL_DEV;
export const CLIENT_URL =
  MODE == "prod"
    ? process.env.NEXT_PUBLIC_BACKEND_BASE_URL_PROD
    : process.env.NEXT_PUBLIC_BACKEND_BASE_URL_DEV;

export const COLORS = {
  BUTTON: "#0079D3",
  METATEXT: "rgb(124, 124, 124)",
  ORANGE: "#ff4500",
  ORBLUE: "#7193ff",
  BLUE: "rgb(0, 121, 211)",
  WHITE: "white",
  LIGHT_GRAY: "#f8f9fa",
  TRANSPARENT_LIGHTISH_GRAY: "rgba(0, 0, 0, 0.07)",
  TRANSPARENT_LIGHT_GRAY: "rgba(0, 0, 0, 0.05)",
  TRANSPARENT_LIGHTER_GRAY: "rgba(0, 0, 0, 0.02)",
  ICON_GRAY: "rgb(135, 138, 140)",
  GRAY: "gray",
  BLACK: "black",
};

export const FONTS = {
  IBMXPLEXSANS: "IBMPlexSans",
};
