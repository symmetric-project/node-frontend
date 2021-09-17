import gql from "graphql-tag";

export const CREATE_NODE = gql`
  mutation CreateNode($newNode: NewNode!), {
    createNode(newNode: $newNode) {
      name
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($newPost: NewPost!) {
    createPost(newPost: $newPost) {
      id
      title
      link
      delta
    }
  }
`;
