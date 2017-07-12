import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import configureStore from "./store/configureStore";

function renderApp(store: any) {
    const App = require("./components/App").default;

    ReactDOM.render(
        <AppContainer>
            <App store={store} />
        </AppContainer>,
        document.getElementById("content"),
    );
}

const persistentStore = configureStore();

renderApp(persistentStore);

if (module.hot) {
  module.hot.accept("./components/App", () => renderApp(persistentStore));
}