import gql from "graphql-tag";

export const CREATE_NODE = gql`
  mutation ($newNode: NewNode!) {
    createNode(newNode: $newNode) {
      name
    }
  }
`;

export const CREATE_POST = gql`
  mutation ($newPost: NewPost!) {
    createPost(newPost: $newPost) {
      id
      title
      rawState
      nodeName
      slug
    }
  }
`;

export const CREATE_USER = gql`
  mutation ($newUser: NewUser!) {
    createUser(newUser: $newUser) {
      id
      name
      bases
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation ($newComment: NewComment!) {
    createComment(newComment: $newComment) {
      rawState
    }
  }
`;
