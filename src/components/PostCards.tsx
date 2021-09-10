import React from "react";
import { Post } from "../types";
import PostCard from "./PostCard";

const PostCards = (props: { posts: Post[] }) => {
  return (
    <div>
      {props.posts.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostCards;
