import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
export const timeAgo = new TimeAgo("en-US");

timeAgo.format(new Date());
// "just now"

timeAgo.format((Date.now() - 60) * 1000);
// "1 minute ago"