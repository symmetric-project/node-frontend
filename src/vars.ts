import { ApolloError, ApolloQueryResult, makeVar } from "@apollo/client";
import { EditorState } from "draft-js";
import client from "./api/client";
import { CREATE_USER } from "./api/mutations";
import { USER } from "./api/queries";
import { User } from "./types";
import { logError } from "./utils/errors";

class Vars {
  auth;
  ui;
  createNode;
  createPost;
  createComment;
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
      access: makeVar<string>("PUBLIC"),
      nsfw: makeVar<boolean>(false),
    };
    this.createPost = {
      editorState: makeVar<EditorState | null>(null),
      nodeName: makeVar<string | null>("HiddenPolicy"),
      title: makeVar<string>(""),
      link: makeVar<string | null>(null),
      type: makeVar<"TEXT" | "MEDIA" | "LINK">("TEXT"),
    };
    this.createComment = {
      editorState: makeVar<EditorState | null>(null),
    };
    this.search = {
      category: makeVar<string>("best-results"),
      nodeNameSubstring: makeVar<string>(""),
    };
    this.queryUser().then(
      (res: ApolloQueryResult<any>) => {
        let user = res.data.user;
        if (user) {
          this.auth.user(res.data.user);
        }
      },
      (err: ApolloError) => {
        logError(err);
        if (err.message === "no jwt in context") {
          this.createUser();
        }
      }
    );
  }

  queryUser() {
    return client.query({
      query: USER,
    });
  }

  createUser() {
    console.log("createUser");
    client
      .mutate({
        mutation: CREATE_USER,
        variables: {
          newUser: {},
        },
      })
      .then(
        (res) => {
          console.log(res);
          this.auth.user(res.data.createUser);
        },
        (err: ApolloError) => {
          logError(err);
        }
      );
  }
}

export default new Vars();
