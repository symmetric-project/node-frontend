import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BACKEND_URL } from "../const";

const client = new ApolloClient({
  uri: BACKEND_URL,
  credentials: "include",
  cache: new InMemoryCache(),
});

export default client;