import gql from "graphql-tag";

export const CREATE_NODE = gql`
  mutation CreateNode(
    $name: String!
    $tags: [String!]!
    $access: String!
    $nsfw: Boolean!
  ) {
    createNode(name: $name, tags: $tags, access: $access, nsfw: $nsfw) {
      id
      name
    }
  }
`;
