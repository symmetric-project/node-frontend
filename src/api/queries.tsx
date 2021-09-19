import gql from "graphql-tag";

export const POST = gql`
  query ($id: String!) {
    post(post: $id) {
      id
      title
      delta
    }
  }
`;

export const POSTS = gql`
  query ($nodeName: String) {
    posts(nodeName: $nodeName) {
      id
      title
      delta
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
  query {
    nodes {
      name
      description
    }
  }
`;

export const USER = gql`
  query ($name: ID) {
    user(name: $id) {
      name
      bases
    }
  }
`;