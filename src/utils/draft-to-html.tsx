import draftToHtml from "draftjs-to-html";
import draftJS from "draft-js";
import NoCommentsPlaceholder from "../components/posts/NoCommentsPlaceholder";

const hashtagConfig = {
  trigger: "#",
  separator: " ",
};

export const convertDraftToHTML = (rawState: string) => {
  let jsonRawState = JSON.parse(rawState);
  let html = draftToHtml(jsonRawState, hashtagConfig, false, undefined);
  return html;
};
