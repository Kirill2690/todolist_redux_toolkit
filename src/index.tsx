import React from "react";
import createRoot from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { HashRouter } from "react-router-dom";
import App from "./app/App";

createRoot.render(
  <HashRouter>
    <Provider store={store}></Provider>
  </HashRouter>,
  document.getElementById("root")
);

// в gh-pages лучше работает HashRouter

serviceWorker.unregister();
