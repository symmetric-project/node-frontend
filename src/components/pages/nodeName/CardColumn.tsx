import React from "react";
import { Node } from "../../../types";
import Card from "../../cards/Card";

const CardColumn = ({
  topNodes,
  style,
}: {
  topNodes: Node[];
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", width: 200, ...style }}
    >
      <Card title="What is Symmetric">
        Symmetric is a in-development decentralized discussion platform. The
        goal is to bypass censorship and redistribute revenue to subreddit
        creators instead of RedditCorp.
      </Card>
      <Card title="Why?">
        Tens of hundreds subreddits have been unfairly banned by Reddit. There
        shoud be a system where no party can bully another. That is, a
        decentralized system.
      </Card>
      <Card title="How Can I Help?">
        If you would like to help Symmetric by{" "}
        <a href="https://discord.com/invite/wYvDxDUsyA">providing feedback</a>,
        contributing to the{" "}
        <a href="https://github.com/symmetric-project">code base</a> or{" "}
        <a href="https://buy.stripe.com/fZebIRaMSelQ0xy8wB">donating</a>, visit
        our <a href="https://discord.com/invite/wYvDxDUsyA">Discord</a>.
      </Card>
    </div>
  );
};

export default CardColumn;
