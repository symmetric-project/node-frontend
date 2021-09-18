import gql from "graphql-tag";

export const POST = gql`
  query GetPost($id: String!) {
    post(post: $id) {
      id
      title
      delta
    }
  }
`;

export const POSTS = gql`
  query GetPosts($nodeName: String) {
    posts(nodeName: $nodeName) {
      id
      title
      delta
    }
  }
`;

export const NODE = gql`
  query GetNode($name: ID!) {
    node(name: $name) {
      name
      description
    }
  }
`;

export const NODES = gql`
  query {
    nodes {
      name
      description
    }
  }
`;

export const USER = gql`
  query GetUser($id: ID) {
    user(id: $id) {
      bases
    }
  }
`;