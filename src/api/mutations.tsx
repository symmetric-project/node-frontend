import gql from "graphql-tag";

export const CREATE_NODE = gql`
  mutation($newNode: NewNode!), {
    createNode(newNode: $newNode) {
      name
    }
  }
`;

export const CREATE_POST = gql`
  mutation($newPost: NewPost!) {
    createPost(newPost: $newPost) {
      id
      title
      deltaOps
      nodeName
      slug
    }
  }
`;

export const CREATE_USER = gql`
  mutation($newUser: NewUser!) {
    createUser(newUser: $newUser) {
      name
      bases
    }
  }
`;
