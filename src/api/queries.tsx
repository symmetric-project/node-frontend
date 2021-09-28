import gql from "graphql-tag";

export const POST = gql`
  query ($id: ID!, $slug: String!) {
    post(id: $id, slug: $slug) {
      id
      title
      deltaOps
      link
      nodeName
      slug
      creationTimestamp
      author {
        id
        name
        bases
      }
    }
    comments(postId: $id, postSlug: $slug) {
      author {
        id
        name
      }
      deltaOps
      creationTimestamp
    }
  }
`;

export const POSTS = gql`
  query ($nodeName: String) {
    posts(nodeName: $nodeName) {
      id
      title
      deltaOps
      link
      creationTimestamp
      nodeName
      slug
      author {
        id
        name
        bases
      }
    }
  }
`;

export const NODE = gql`
  query ($name: ID!) {
    node(name: $name) {
      name
      description
    }
  }
`;

export const NODES = gql`
  query ($substring: String) {
    nodes(substring: $substring) {
      name
      description
    }
  }
`;

export const USER = gql`
  query ($id: ID) {
    user(id: $id) {
      id
      name
      bases
    }
  }
`;
