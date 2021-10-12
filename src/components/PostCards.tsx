import React from "react";
import { Post } from "../types";
import PostCard from "./posts/PostCard";

const PostCards = ({ posts }: { posts: Post[] }) => {
  return posts && posts.length > 0 ? (
    <div>
      {posts.map((post: any) => (
        <PostCard key={post.id} post={post} inList={true} />
      ))}
    </div>
  ) : (
    <div></div>
  );
};

export default PostCards;
