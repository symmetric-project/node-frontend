import { ApolloError, ApolloQueryResult, makeVar } from "@apollo/client";
import client from "./api/client";
import { USER } from "./api/queries";
import { User } from "./types";

const vars = {
  auth: {
    user: makeVar<User | null>(null),
    loggedIn: process.browser
      ? makeVar<boolean>(!!localStorage.getItem("jwt"))
      : null,
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
  search: {
    category: makeVar<string>("best-results"),
  },
};

client
  .query({
    query: USER,
  })
  .then(
    (res: ApolloQueryResult<any>) => {
      vars.auth.user(res.data.user);
    },
    (err: ApolloError) => {
      console.log(err);
    }
  );

export default vars;
