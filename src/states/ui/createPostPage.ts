import { makeVar } from "@apollo/client";

export const CreatePostPageVars = {
  postType: makeVar<string>("text"),
};
