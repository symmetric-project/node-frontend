import gql from "graphql-tag";

export const QUERY_POSTS = gql`
  query {
    posts {
      id
      name
      content
      link
    }
  }
`;

export const QUERY_NODES = gql`
  query {
    nodes {
      id
      name
    }
  }
`;
