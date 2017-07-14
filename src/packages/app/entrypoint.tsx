import * as React from "react";
import * as ReactDOM from "react-dom";
import configureStore from "./store/configureStore";

const store = configureStore();

function renderApp() {
    const App = require("./components/App").default;

    ReactDOM.render(<App store={store} />, document.getElementById("content"));
}

renderApp();

if (module.hot) {
  module.hot.accept("./components/App", () => renderApp());
}