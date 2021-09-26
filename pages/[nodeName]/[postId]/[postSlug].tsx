import { ApolloError, useQuery } from "@apollo/client";
import React from "react";
import { NODE, POST, POSTS } from "../../../src/api/queries";
import GenericCard from "../../../src/components/cards/GenericCard";
import { Comment, Node, Post } from "../../../src/types";
import client from "../../../src/api/client";
import { GetStaticPropsContext } from "next";
import CommentingContainer from "../../../src/components/posts/CommentingContainer";
import NoCommentsPlaceholder from "../../../src/components/posts/NoCommentsPlaceholder";
import { logError } from "../../../src/utils/errors";
import PostCard from "../../../src/components/posts/PostCard";
import CommentsContainer from "../../../src/components/posts/CommentsContainer";

const PostPage = ({
  node,
  post,
  comments,
}: {
  node: Node;
  post: Post;
  comments: Comment[];
}) => {
  const { loading, error, data } = useQuery(POSTS);
  if (loading) return null;
  if (error) return null;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start ",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center ",
          marginTop: 10,
        }}
      >
        <PostCard post={post} />
        <CommentingContainer />
        {comments ? (
          <CommentsContainer comments={comments} />
        ) : (
          <NoCommentsPlaceholder />
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <GenericCard title="About Community">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </GenericCard>
      </div>
    </div>
  );
};

export default PostPage;

export async function getStaticPaths() {
  let paths: any[] = [];

  await client.query({ query: POSTS }).then(
    (res) => {
      res.data.posts.forEach((post: Post) => {
        paths.push({
          params: {
            nodeName: post.nodeName,
            postSlug: post.slug,
            postId: post.id,
          },
        });
      });
    },
    (err) => {
      logError(err);
    }
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  let staticProps: any = {
    props: {
      node: null,
      post: null,
    },
    revalidate: 1,
    /* revalidate - An optional amount in seconds after which a page re-generation can occur. Defaults to false.
    When revalidate is false it means that there is no revalidation, so the page will be cached as built until the next build. */
  };

  await client
    .query({
      query: NODE,
      variables: { name: context.params!.nodeName },
    })
    .then(
      (res) => {
        staticProps.props.node = res.data.node;
      },
      (err: ApolloError) => {
        logError(err);
      }
    );

  await client
    .query({
      query: POST,
      variables: {
        id: context.params!.postId,
        slug: context.params!.postSlug,
      },
      fetchPolicy: "no-cache",
    })
    .then(
      (res) => {
        staticProps.props.post = res.data.post;
        staticProps.props.comments = res.data.comments;
        console.log(res.data);
      },
      (err: ApolloError) => {
        logError(err);
      }
    );

  return staticProps;
}
