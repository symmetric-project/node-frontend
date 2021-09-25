import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export const newTimeAgo = (timestamp: number): string => {
  return timeAgo.format(Date.now() - timestamp / 1000);
};
