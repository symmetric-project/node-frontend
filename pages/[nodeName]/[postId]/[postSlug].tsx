import { ApolloError, ApolloQueryResult } from "@apollo/client";
import React from "react";
import { NODE, NODES, POST, POSTS } from "../../../src/api/queries";
import { Comment, Node, Post } from "../../../src/types";
import client from "../../../src/api/client";
import { GetStaticPropsContext } from "next";
import CommentingContainer from "../../../src/components/posts/CommentingContainer";
import NoCommentsPlaceholder from "../../../src/components/posts/NoCommentsPlaceholder";
import { logError } from "../../../src/utils/errors";
import PostCard from "../../../src/components/posts/PostCard";
import CommentsContainer from "../../../src/components/posts/CommentsContainer";
import CardColumn from "../../../src/components/pages/nodeName/CardColumn";
import { NextSeo } from "next-seo";

const PostPage = ({
  node,
  post,
  comments,
  topNodes,
}: {
  node: Node;
  post: Post;
  comments: Comment[];
  topNodes: Node[];
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start ",
      }}
    >
      {/* <NodeHeader node={node} /> */}
      <NextSeo title={`${post.title}${" - Symmetric"}`} />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <CardColumn topNodes={topNodes} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center ",
            marginTop: 10,
          }}
        >
          <PostCard inList={false} post={post} />
          <CommentingContainer />
          {comments ? (
            <CommentsContainer comments={comments} />
          ) : (
            <NoCommentsPlaceholder />
          )}
        </div>
        <CardColumn topNodes={topNodes} />
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
      topNodes: null,
    },
    revalidate: 10,
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
      },
      (err: ApolloError) => {
        logError(err);
      }
    );

  await client
    .query({
      query: NODES,
      variables: {
        limit: 6,
        sortingParams: {
          param: "members",
          sort: "ASC",
        },
      },
      fetchPolicy: "no-cache",
    })
    .then(
      (res: ApolloQueryResult<any>) => {
        staticProps.props.topNodes = res.data.nodes;
      },
      (err: ApolloError) => {
        logError(err);
      }
    );

  return staticProps;
}
