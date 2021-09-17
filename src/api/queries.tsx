import gql from "graphql-tag";

export const QUERY_POST = gql`
  query GetPost($id: String!) {
    post(post: $id) {
      id
      title
      delta
    }
  }
`;

export const QUERY_POSTS = gql`
  query GetPosts($nodeName: String) {
    posts(nodeName: $nodeName) {
      id
      title
      delta
    }
  }
`;

export const QUERY_NODE = gql`
  query GetNode($name: String!) {
    node(name: $name) {
      name
      description
    }
  }
`;

export const QUERY_NODES = gql`
  query {
    nodes {
      name
      description
    }
  }
`;
