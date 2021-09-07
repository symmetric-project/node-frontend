import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CLIENT_URL } from "../const";

const client = new ApolloClient({
  uri: CLIENT_URL,
  cache: new InMemoryCache(),
});

export default client;
