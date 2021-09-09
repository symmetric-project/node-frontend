import "./index.css";
import type { AppProps } from "next/app";
import React from "react";
import client from "../src/api/client";
import { ApolloProvider } from "@apollo/client";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
};

export default App;
