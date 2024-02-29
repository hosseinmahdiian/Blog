import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import "./index.css";
import "./styles/font-face.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./mui/theme";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/clsopakli051l01w9hxpta0v7/master",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>
);
