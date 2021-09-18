import React from "react";
import NotificationCard from "../NotificationCard";

const NotificationsPopupBody = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80%",
        overflow: "scroll",
        overflowX: "hidden"
      }}
    >
      <NotificationCard name={"Name"} description={"Description description description description description description description"} />
      <NotificationCard name={"Name"} description={"Description description description description description description description"} />
      <NotificationCard name={"Name"} description={"Description description description description description description description"} />
      <NotificationCard name={"Name"} description={"Description description description description description description description"} />
      <NotificationCard name={"Name"} description={"Description description description description description description description"} />
      <NotificationCard name={"Name"} description={"Description description description description description description description"} />
    </div>
  );
};

export default NotificationsPopupBody;
