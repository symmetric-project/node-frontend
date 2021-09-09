import gql from "graphql-tag";

export const POSTS = gql`
  query {
    posts {
      id
      title
      content
      link
    }
  }
`;