import { makeVar } from "@apollo/client";

export const nodeNameVar = makeVar<string>("");
export const nodeAccessTypeVar = makeVar<string>("");
export const nsfwVar = makeVar<boolean>(false);