import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export const newTimeAgo = (timestamp: number) => {
  return timeAgo.format(timestamp * 1000);
};
