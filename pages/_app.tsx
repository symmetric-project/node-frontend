import "./index.css";
import type { AppProps } from "next/app";
import React from "react";
import client from "../src/api/client";
import { ApolloProvider } from "@apollo/client";
import StickyHeader from "../src/components/StickyHeader";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <StickyHeader />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
