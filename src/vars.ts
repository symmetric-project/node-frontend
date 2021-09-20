import { ApolloError, ApolloQueryResult, makeVar } from "@apollo/client";
import client from "./api/client";
import { CREATE_USER } from "./api/mutations";
import { USER } from "./api/queries";
import { User } from "./types";

class Vars {
  auth;
  ui;
  createNode;
  createPost;
  search;

  constructor() {
    this.auth = {
      user: makeVar<User | null>(null),
      loggedIn: process.browser
        ? makeVar<boolean>(!!localStorage.getItem("jwt"))
        : null,
    };
    this.ui = {
      stickyHeaderSubmenu: makeVar<string>(""),
      popup: makeVar<string>(""),
    };
    this.createNode = {
      name: makeVar<string>(""),
      access: makeVar<string>(""),
      nsfw: makeVar<boolean>(false),
    };
    this.createPost = {
      nodeName: makeVar<string>(""),
      title: makeVar<string>("Title"),
      delta: makeVar<string>(""),
      link: makeVar<string>(""),
      type: makeVar<string>("text"),
    };
    this.search = {
      category: makeVar<string>("best-results"),
      nodeNameSubstring: makeVar<string>(""),
    };
    this.queryUser();
  }

  queryUser() {
    client
      .query({
        query: USER,
      })
      .then(
        (res: ApolloQueryResult<any>) => {
          this.auth.user(res.data.user);
        },
        (err: ApolloError) => {
          console.log(JSON.stringify(err));
        }
      );
  }

  createUser() {
    client
      .mutate({
        mutation: CREATE_USER,
        variables: {
          newUser: {},
        },
      })
      .then(
        (res) => {
          this.auth.user(res.data.createUser);
        },
        (err: ApolloError) => {
          console.log(err);
        }
      );
  }
}

export default new Vars();
