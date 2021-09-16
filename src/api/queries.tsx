import gql from "graphql-tag";

export const QUERY_POSTS = gql`
  query {
    posts {
      id
      title
      link
      delta
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
