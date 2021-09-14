import "./index.css";
import type { AppProps } from "next/app";
import React from "react";
import client from "../src/api/client";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import StickyHeader from "../src/components/StickyHeader";
import PopupContainer from "../src/components/PopupContainer";
import { uiVars } from "../src/states/ui";

const App = ({ Component, pageProps }: AppProps) => {
  const popupReactiveVar = useReactiveVar(uiVars.popup);
  return (
    <ApolloProvider client={client}>
      {popupReactiveVar !== "" ? <PopupContainer /> : null}
      <StickyHeader />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
