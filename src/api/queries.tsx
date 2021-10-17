import gql from "graphql-tag";

export const POST = gql`
  query ($id: ID!, $slug: String!) {
    post(id: $id, slug: $slug) {
      id
      title
      rawState
      link
      nodeName
      slug
      creationTimestamp
      author {
        id
        name
        bases
      }
      thumbnaillUrl
      imageUrl
      bases
    }
    comments(postId: $id, postSlug: $slug) {
      author {
        id
        name
      }
      rawState
      creationTimestamp
    }
  }
`;

export const POSTS = gql`
  query ($nodeName: String, $limit: Int, $offset: Int) {
    posts(nodeName: $nodeName, limit: $limit, offset: $offset) {
      id
      title
      rawState
      link
      creationTimestamp
      nodeName
      slug
      thumbnaillUrl
      imageUrl
      bases
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
  query ($substring: String, $limit: Int, $sortingParams: SortingParams) {
    nodes(substring: $substring, limit: $limit, sortingParams: $sortingParams) {
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

export const USERS = gql`
  query ($userNameSubstring: String) {
    users(userNameSubstring: $userNameSubstring) {
      id
      name
      bases
    }
  }
`;
