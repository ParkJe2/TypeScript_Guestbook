import React from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import GlobalStyle from "./style/GlobalStyle";

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
