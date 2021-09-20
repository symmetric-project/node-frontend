import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { CLIENT_URL } from "../const";

const link = createHttpLink({
  uri: CLIENT_URL,
  credentials: 'include',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
