import { makeVar } from "@apollo/client";

export const uiVars = {
  stickyHeaderSubmenu: makeVar<string>(""),
  popup: makeVar<string>(""),
};