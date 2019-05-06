import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "mobx-react";
import { createBrowserHistory } from "history";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { stores } from "./stores";
import { syncHistoryWithStore } from "mobx-react-router";
import { Router } from "react-router";
import "./index.css";
import "./custom.scss";

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores["router"]);

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
