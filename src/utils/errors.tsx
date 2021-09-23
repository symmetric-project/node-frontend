import { MODE } from "../const";

export const logError = (err: object) => {
  if (MODE === "prod") {
    console.error(err);
  } else {
    console.error(JSON.stringify(err));
  }
};
