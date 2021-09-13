import { makeVar } from "@apollo/client";

export const CreateNodePopupVars = {
  name: makeVar<string>(""),
  access: makeVar<string>(""),
  nsfw: makeVar<boolean>(false),
};