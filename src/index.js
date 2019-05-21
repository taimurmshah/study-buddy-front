import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import "semantic-ui-css/semantic.min.css";

import { createStore, applyMiddleware, compose } from "redux"; // lines 17-18; allows for redux devtools
import reducer from "./redux/reducer";
import thunk from "redux-thunk";

import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
