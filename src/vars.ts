import { makeVar } from "@apollo/client";

const vars = {
  auth: {
    isLoggedInVar: process.browser
      ? makeVar<boolean>(!!localStorage.getItem("jwt"))
      : undefined,
  },
  ui: {
    stickyHeaderSubmenu: makeVar<string>(""),
    popup: makeVar<string>(""),
  },
  createNode: {
    name: makeVar<string>(""),
    access: makeVar<string>(""),
    nsfw: makeVar<boolean>(false),
  },
  createPost: {
    title: makeVar<string>("Title"),
    delta: makeVar<string>("{}"),
    link: makeVar<string>(""),
    type: makeVar<string>("text"),
  },
};

export default vars;
