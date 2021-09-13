import gql from "graphql-tag";

export const POSTS = gql`
  query {
    posts {
      id
      name
      content
      link
    }
  }
`;

export const NODES = gql`
  query {
    nodes {
      id
      name
    }
  }
`;